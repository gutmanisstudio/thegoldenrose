"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Sveika! Esmu The Golden Rose studijas asistents. Pajautā par pušķiem, piegādi vai kāzu projektiem.",
};

// Render assistant text with [label](/path) markdown-style links as Next.js Links.
function renderContent(text: string) {
  const parts: (string | { label: string; href: string })[] = [];
  const re = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push({ label: m[1], href: m[2] });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.map((p, i) =>
    typeof p === "string" ? (
      <span key={i}>{p}</span>
    ) : (
      <Link key={i} href={p.href} className="chat-link">
        {p.label}
      </Link>
    ),
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.filter((m) => m !== GREETING).map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: data.error ?? "Kļūda. Pamēģini vēlreiz." },
        ]);
      } else {
        setMessages((m) => [...m, { role: "assistant", content: data.reply ?? "" }]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Savienojuma kļūda. Pamēģini vēlreiz." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <button
        type="button"
        className={`chat-fab ${open ? "open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Aizvērt asistentu" : "Atvērt asistentu"}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.4-5.6A8.5 8.5 0 1 1 21 12z" />
          </svg>
        )}
      </button>

      <div className={`chat-panel ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="chat-panel__top">
          <div>
            <p className="chat-panel__eye">Studijas asistents</p>
            <p className="chat-panel__name">The Golden Rose</p>
          </div>
          <button
            type="button"
            className="chat-panel__close"
            onClick={() => setOpen(false)}
            aria-label="Aizvērt"
          >
            ×
          </button>
        </div>

        <div className="chat-msgs" ref={scrollerRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg chat-msg--${m.role}`}>
              <div className="chat-msg__bubble">{renderContent(m.content)}</div>
            </div>
          ))}
          {loading && (
            <div className="chat-msg chat-msg--assistant">
              <div className="chat-msg__bubble chat-msg__bubble--typing">
                <span /><span /><span />
              </div>
            </div>
          )}
        </div>

        <form
          className="chat-input"
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Uzraksti jautājumu…"
            rows={1}
            disabled={loading}
          />
          <button type="submit" disabled={loading || !input.trim()} aria-label="Sūtīt">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
