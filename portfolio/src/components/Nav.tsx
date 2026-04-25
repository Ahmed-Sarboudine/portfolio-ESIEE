import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about",    label: "À propos" },
  { href: "#timeline", label: "Parcours" },
  { href: "#projects", label: "Projets" },
  { href: "#skills",   label: "Skills" },
  { href: "#contact",  label: "Contact" },
];

export function Nav() {
  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(20px, 5vw, 80px)",
        height: 60,
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div className="font-mono font-bold text-accent" style={{ fontSize: 14, letterSpacing: "-0.5px" }}>
        TAS<span style={{ color: "var(--text-3)", fontWeight: 400 }}>.dev</span>
      </div>

      <ul className="hidden md:flex items-center gap-7 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="nav-link font-medium" style={{ fontSize: 13, letterSpacing: "0.2px" }}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <ThemeToggle />
    </nav>
  );
}
