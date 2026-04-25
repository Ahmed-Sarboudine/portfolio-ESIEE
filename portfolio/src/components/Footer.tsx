export function Footer() {
  return (
    <footer
      className="font-mono"
      style={{
        textAlign: "center",
        padding: "28px 20px",
        borderTop: "1px solid var(--border)",
        fontSize: 11,
        color: "var(--text-3)",
      }}
    >
      <span>Thamiz Ahmed Sarboudine</span>
      {" · "}
      <span className="text-accent">Ingénieur Informatique.</span>
      {" · "}
      <span>2026</span>
    </footer>
  );
}
