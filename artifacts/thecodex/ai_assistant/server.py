from __future__ import annotations

from pathlib import Path

import joblib
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from train_model import MODEL_PATH, main as train_model
from training_data import build_response


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str
    intent: str
    confidence: float


def keyword_intent(message: str) -> str:
    normalized = message.lower()

    if any(word in normalized for word in ["hi", "hello", "hey", "hay", "hii", "helo"]):
        return "greeting"
    if any(word in normalized for word in ["price", "pricing", "cost", "costing", "costings", "budget", "charge"]):
        return "pricing"
    if any(word in normalized for word in ["contact", "email", "phone", "whatsapp", "call", "location"]):
        return "contact"
    if any(word in normalized for word in ["founder", "company", "about", "team", "who are you", "where are you based"]):
        return "about_company"
    if any(word in normalized for word in ["project", "portfolio", "live preview", "example", "sample work"]):
        return "projects"
    if any(word in normalized for word in ["privacy", "terms", "policy", "legal", "condition"]):
        return "legal"
    if any(word in normalized for word in ["buy a service", "custom request", "start project", "maintenance", "support"]):
        return "inquiry_flows"
    if any(word in normalized for word in ["ai", "automation", "ai tool"]):
        return "service_ai"
    if any(word in normalized for word in ["network", "server", "infrastructure", "nas", "lab setup"]):
        return "service_infra"
    if any(word in normalized for word in ["marketing", "growth", "social media", "ad management"]):
        return "service_growth"
    if any(word in normalized for word in ["website", "web app", "app development", "development"]):
        return "service_development"
    if "service" in normalized:
        return "services_overview"

    return "fallback"


def load_pipeline():
    if not MODEL_PATH.exists():
        train_model()
    return joblib.load(MODEL_PATH)


pipeline = load_pipeline()
vectorizer = pipeline["vectorizer"]
classifier = pipeline["classifier"]

app = FastAPI(title="TheCodex AI Assistant")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
def chat(payload: ChatRequest):
    message = payload.message.strip()

    if not message:
        return ChatResponse(
            reply="Please type your question and I will help.",
            intent="empty",
            confidence=1.0,
        )

    features = vectorizer.transform([message])
    probabilities = classifier.predict_proba(features)[0]
    classes = classifier.classes_
    best_index = int(probabilities.argmax())
    intent = str(classes[best_index])
    confidence = float(probabilities[best_index])

    if confidence < 0.34:
        intent = keyword_intent(message)

    reply = build_response(intent, message)
    return ChatResponse(reply=reply, intent=intent, confidence=confidence)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("server:app", host="127.0.0.1", port=8008, reload=False)
