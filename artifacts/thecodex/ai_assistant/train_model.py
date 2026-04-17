from __future__ import annotations

from pathlib import Path

import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

from training_data import INTENT_EXAMPLES


MODEL_DIR = Path(__file__).resolve().parent / "model"
MODEL_PATH = MODEL_DIR / "thecodex_ai.joblib"


def main() -> None:
    MODEL_DIR.mkdir(parents=True, exist_ok=True)

    texts = [example.text for example in INTENT_EXAMPLES]
    labels = [example.intent for example in INTENT_EXAMPLES]

    vectorizer = TfidfVectorizer(ngram_range=(1, 2), lowercase=True)
    features = vectorizer.fit_transform(texts)

    classifier = LogisticRegression(max_iter=2000)
    classifier.fit(features, labels)

    joblib.dump(
        {
            "vectorizer": vectorizer,
            "classifier": classifier,
        },
        MODEL_PATH,
    )

    print(f"Saved trained model to {MODEL_PATH}")


if __name__ == "__main__":
    main()
