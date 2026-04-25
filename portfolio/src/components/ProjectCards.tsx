"use client";

import { useState } from "react";
import type { PinnedRepo } from "@/types/github";

const FILTERS = ["all", "data", "web", "algo"] as const;
const FILTER_LABELS: Record<string, string> = { all: "Tout", data: "Data", web: "Web", algo: "Algo" };

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  );
}

function CommitIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <line x1="1.05" y1="12" x2="7" y2="12" />
      <line x1="17.01" y1="12" x2="22.96" y2="12" />
    </svg>
  );
}

export function ProjectCards({ repos }: { repos: PinnedRepo[] }) {
  const [active, setActive] = useState<string>("all");

  const visible = repos.filter((r) => active === "all" || r.category === active);

  return (
    <div>
      {/* Filter bar */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="font-mono"
            style={{
              padding: "6px 14px", borderRadius: 6, fontSize: 12, fontWeight: 600,
              cursor: "pointer", letterSpacing: "0.5px",
              border: `1px solid ${active === f ? "#6366f1" : "var(--border-2)"}`,
              background: active === f ? "#6366f1" : "transparent",
              color: active === f ? "#fff" : "var(--text-3)",
              transition: "all 0.2s",
            }}
          >
            {FILTER_LABELS[f]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {visible.length === 0 && (
          <p className="font-mono" style={{ fontSize: 12, color: "var(--text-3)", gridColumn: "1/-1" }}>
            Aucun projet dans cette catégorie.
          </p>
        )}
        {visible.map((repo) => (
          <ProjectCard key={repo.name} repo={repo} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ repo }: { repo: PinnedRepo }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg-card)", border: "1px solid var(--border)",
        borderRadius: 12, padding: 24,
        display: "flex", flexDirection: "column", gap: 12,
        transition: "all 0.25s", position: "relative", overflow: "hidden",
        transform: hovered ? "translateY(-3px)" : "none",
        borderColor: hovered ? "var(--border-2)" : "var(--border)",
        boxShadow: hovered ? "0 12px 40px #00000030" : "none",
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: "#6366f1",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.3s",
      }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
        <span
          className="font-mono"
          style={{ fontSize: 10, color: "var(--text-3)", letterSpacing: 2, textTransform: "uppercase" }}
        >
          {repo.category}
        </span>
        <div style={{ display: "flex", gap: 10 }}>
          {repo.stargazerCount > 0 && (
            <span style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: "var(--text-3)" }}>
              <StarIcon /> {repo.stargazerCount}
            </span>
          )}
          {repo.commitCount > 0 && (
            <span style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: "var(--text-3)" }}>
              <CommitIcon /> {repo.commitCount}
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", lineHeight: 1.3 }}>
        {repo.name}
      </div>

      {/* Description */}
      {repo.description && (
        <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.65, flex: 1 }}>
          {repo.description}
        </p>
      )}

      {/* Languages */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {repo.languages.slice(0, 4).map((lang) => (
          <span
            key={lang.name}
            className="font-mono"
            style={{
              fontSize: 10, padding: "3px 8px", borderRadius: 4,
              border: "1px solid var(--border-2)", color: "var(--text-3)",
              background: "var(--bg-2)",
            }}
          >
            {lang.name}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono"
        style={{
          display: "inline-flex", alignItems: "center", gap: 5,
          fontSize: 12, color: "#6366f1", textDecoration: "none",
          fontWeight: 500, transition: "gap 0.2s",
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.gap = "8px")}
        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.gap = "5px")}
      >
        ↗ Voir sur GitHub
      </a>
    </div>
  );
}
