import { FormEvent, KeyboardEvent, ReactNode, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Bot, X, Sparkles, Send } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

const AI_API_URL = import.meta.env.VITE_AI_API_URL ?? "http://127.0.0.1:8008";

async function getAssistantReply(message: string) {
  const response = await fetch(`${AI_API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error("Assistant service unavailable");
  }

  const data = (await response.json()) as { reply?: string };
  return data.reply ?? "The assistant did not return a response.";
}

export function Layout({ children }: LayoutProps) {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isThinking, setIsThinking] = useState(false);

  function handleAssistantSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = chatInput.trim();
    if (!message || isThinking) {
      return;
    }

    const timestamp = Date.now();
    const userMessage: ChatMessage = {
      id: `${timestamp}-user`,
      role: "user",
      text: message,
    };

    setMessages((current) => [...current, userMessage]);
    setChatInput("");
    setIsThinking(true);

    window.setTimeout(async () => {
      try {
        const reply = await getAssistantReply(message);
        const assistantMessage: ChatMessage = {
          id: `${timestamp}-assistant`,
          role: "assistant",
          text: reply,
        };

        setMessages((current) => [...current, assistantMessage]);
      } catch {
        const assistantMessage: ChatMessage = {
          id: `${timestamp}-assistant-fallback`,
          role: "assistant",
          text: "The Python assistant is not running right now. Start the local AI service and I will answer from the trained website model.",
        };

        setMessages((current) => [...current, assistantMessage]);
      } finally {
        setIsThinking(false);
      }
    }, 650);
  }

  function handleAssistantKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const form = event.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background relative selection:bg-primary/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/8 rounded-full blur-[120px] opacity-70 animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/8 rounded-full blur-[120px] opacity-60 animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-[0.03]" />

      <Navbar />
      
      <main className="flex-grow relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
        {isAssistantOpen ? (
          <div className="ai-assistant-scroll max-h-[calc(100vh-11rem)] w-[min(18rem,calc(100vw-1rem))] overflow-y-auto rounded-lg border border-border bg-card/95 p-3 shadow-[0_22px_60px_rgba(15,23,42,0.22)] backdrop-blur-md">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-2 py-1 text-xs font-semibold text-primary mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI Assistant
                </div>
                <h3 className="text-sm font-bold">Talk to TheCOdex AI</h3>
                <p className="text-xs text-muted-foreground">
                  I can guide visitors toward the right service, project flow, or direct contact.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close AI assistant"
                onClick={() => setIsAssistantOpen(false)}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {messages.length === 0 ? (
                <div className="rounded-lg border border-dashed border-border bg-background/60 p-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Start the conversation naturally. Ask about a website, app, AI workflow, pricing, or how to begin.
                  </p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={
                      message.role === "assistant"
                        ? "rounded-lg border border-primary/15 bg-primary/8 p-2.5"
                        : "rounded-lg border border-border bg-background/70 p-2.5"
                    }
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-2">
                      {message.role === "assistant" ? "AI Reply" : "Visitor"}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">{message.text}</p>
                  </div>
                ))
              )}

              {isThinking ? (
                <div className="rounded-lg border border-primary/15 bg-primary/8 p-2.5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-2">AI Reply</p>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary/70 animate-pulse" />
                    <span className="h-2 w-2 rounded-full bg-primary/70 animate-pulse [animation-delay:150ms]" />
                    <span className="h-2 w-2 rounded-full bg-primary/70 animate-pulse [animation-delay:300ms]" />
                  </div>
                </div>
              ) : null}
            </div>

            <form onSubmit={handleAssistantSubmit} className="mt-2.5">
              <div className="flex items-center gap-2">
                <textarea
                  value={chatInput}
                  onChange={(event) => setChatInput(event.target.value)}
                  onKeyDown={handleAssistantKeyDown}
                  placeholder="Type your message..."
                  rows={2}
                  className="min-h-[4.25rem] flex-1 resize-none rounded-lg border border-border bg-background/80 px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/35"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  disabled={isThinking}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_28px_rgba(59,130,246,0.32)] transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setIsAssistantOpen((open) => !open)}
          aria-label="Open TheCOdex AI assistant"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_40px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_22px_46px_rgba(59,130,246,0.45)]"
        >
          <Bot className="w-7 h-7" />
        </button>
      </div>

      <a
        href="https://wa.me/918305223353"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] hover:scale-105 hover:shadow-[0_22px_46px_rgba(37,211,102,0.45)] transition-all duration-300"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
      
      <Footer />
    </div>
  );
}
