"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const dark = saved !== "light";
    setIsDark(dark);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    const theme = next ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Changer le thème"
      style={{
        width: 36, height: 36,
        borderRadius: 8,
        border: "1px solid var(--border-2)",
        background: "var(--bg-3)",
        cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "var(--text-2)",
        fontSize: 15,
        transition: "all 0.2s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#6366f1";
        (e.currentTarget as HTMLButtonElement).style.color = "#6366f1";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-2)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--text-2)";
      }}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
