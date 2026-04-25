"use client";

import { useEffect, useRef, useState } from "react";

const PHRASES = [
  "Ingénieur Fullstack",
  "Data engineer",
  "JavaScript @ Caseware",
  "ESIEE Paris · Promo 2028",
];

function Typewriter() {
  const [text, setText] = useState("");
  const state = useRef({ phraseIdx: 0, charIdx: 0, deleting: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function step() {
      const { phraseIdx, charIdx, deleting } = state.current;
      const phrase = PHRASES[phraseIdx];

      if (!deleting) {
        setText(phrase.slice(0, charIdx + 1));
        if (charIdx + 1 === phrase.length) {
          state.current.deleting = true;
          timer = setTimeout(step, 1800);
        } else {
          state.current.charIdx++;
          timer = setTimeout(step, 55 + Math.random() * 30);
        }
      } else {
        setText(phrase.slice(0, charIdx - 1));
        if (charIdx - 1 <= 0) {
          state.current.deleting = false;
          state.current.charIdx = 0;
          state.current.phraseIdx = (phraseIdx + 1) % PHRASES.length;
          timer = setTimeout(step, 300);
        } else {
          state.current.charIdx--;
          timer = setTimeout(step, 28);
        }
      }
    }

    timer = setTimeout(step, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span>
      {text}
      <span
        style={{
          display: "inline-block", width: 7, height: 14,
          background: "#6366f1", verticalAlign: "middle",
          marginLeft: 1,
          animation: "blink 1s step-end infinite",
        }}
      />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "calc(100vh - 60px)",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "clamp(40px,8vw,80px) clamp(20px,5vw,80px)",
        maxWidth: 900, margin: "0 auto",
      }}
    >
      <div
        className="font-mono"
        style={{
          fontSize: 13, color: "var(--text-3)", marginBottom: 20,
          display: "flex", alignItems: "center", gap: 8,
        }}
      >
        <span style={{ display: "inline-block", width: 24, height: 1, background: "#6366f1" }} />
        Ingénieur Informatique · ESIEE Paris
      </div>

      <h1 style={{
        fontSize: "clamp(36px,7vw,72px)", fontWeight: 700,
        lineHeight: 1.05, letterSpacing: "-2px",
        color: "var(--text)", marginBottom: 8,
      }}>
        Thamiz Ahmed<br />
        <span className="text-accent">Sarboudine</span>
      </h1>

      <p style={{ fontSize: "clamp(14px,2vw,16px)", color: "var(--text-2)", marginBottom: 28 }}>
        Ingénieur Informatique · Alternance Caseware 
      </p>

      {/* Terminal */}
      <div
        className="font-mono"
        style={{
          background: "var(--bg-2)", border: "1px solid var(--border-2)",
          borderRadius: 10, padding: "16px 20px",
          maxWidth: 460, marginBottom: 36, fontSize: 13,
        }}
      >
        <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
          {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{ color: "var(--text-3)" }}>
          <span style={{ color: "#34d399" }}>~/portfolio</span>
          <span style={{ color: "var(--text-2)" }}> $ echo $CURIOUS ABOUT</span>
        </div>
        <div className="text-accent" style={{ marginTop: 6, minHeight: 20 }}>
          <Typewriter />
        </div>
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a
          href="/cv.pdf"
          style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            padding: "11px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600,
            textDecoration: "none", background: "#6366f1", color: "#fff",
            boxShadow: "0 0 20px #6366f133", transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "#4f46e5";
            el.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "#6366f1";
            el.style.transform = "translateY(0)";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          Télécharger CV
        </a>
        <a
          href="#contact"
          style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            padding: "11px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600,
            textDecoration: "none", background: "transparent", color: "var(--text-2)",
            border: "1px solid var(--border-2)", transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "#6366f1";
            el.style.color = "#6366f1";
            el.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "var(--border-2)";
            el.style.color = "var(--text-2)";
            el.style.transform = "translateY(0)";
          }}
        >
          Me contacter →
        </a>
      </div>

      <div
        className="font-mono"
        style={{
          marginTop: 48, fontSize: 11, color: "var(--text-3)",
          display: "flex", alignItems: "center", gap: 8,
        }}
      >
        <div style={{
          width: 40, height: 1, background: "var(--border-2)",
          animation: "scrollPulse 2s ease-in-out infinite",
        }} />
        scroll to explore
        <style>{`@keyframes scrollPulse{0%,100%{opacity:.3}50%{opacity:1}}`}</style>
      </div>
    </section>
  );
}
