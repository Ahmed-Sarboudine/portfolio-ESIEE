import Image from "next/image";
import { FadeUp } from "./FadeUp";
import { getProfile } from "@/lib/github";

const badges = [
  "🎓 ESIEE Paris 2025–2028",
  "💼 Caseware · Alt.",
  "📍 Paris, France",
];

export async function About() {
  const profile = await getProfile();

  return (
    <section
      id="about"
      style={{
        padding: "clamp(64px,10vw,100px) clamp(20px,5vw,80px)",
        maxWidth: 900, margin: "0 auto",
      }}
    >
      <FadeUp>
        <div className="font-mono text-accent" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>
          [ 01 ]
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h2 style={{ fontSize: "clamp(26px,4vw,34px)", fontWeight: 700, color: "var(--text)", marginBottom: 40, letterSpacing: "-0.5px" }}>
          À propos
        </h2>
      </FadeUp>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 160px", gap: 40, alignItems: "start" }}>
        <FadeUp delay={0.2}>
          <div>
            <p style={{ color: "var(--text-2)", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              Étudiant ingénieur en informatique à <strong style={{ color: "var(--text)", fontWeight: 600 }}>ESIEE Paris</strong>, je suis aussi alternant chez <strong style={{ color: "var(--text)", fontWeight: 600 }}>Caseware</strong> en tant que Développeur FullStack.
            </p>
            <p style={{ color: "var(--text-2)", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              Mon quotidien mêle développement d'applications, manipulation de données. J'aime les systèmes bien architecturés, le code propre, et les visualisations qui racontent quelque chose.
            </p>
            <p style={{ color: "var(--text-2)", fontSize: 16, lineHeight: 1.8 }}>
              Polyvalent sur la stack (Python, JS/TS, C/C#), je m'intéresse à plusieurs domaine comme le back-end et la data.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
              {badges.map((b) => (
                <span
                  key={b}
                  className="font-mono"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    fontSize: 11, padding: "4px 10px", borderRadius: 5,
                    border: "1px solid var(--border-2)", color: "var(--text-2)",
                    background: "var(--bg-2)",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div
            style={{
              width: 160, height: 180,
              background: "var(--bg-3)", border: "1px solid var(--border)",
              borderRadius: 12, overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, position: "relative",
            }}
          >
            {profile?.avatar_url ? (
              <Image
                src={profile.avatar_url}
                alt={profile.name ?? profile.login}
                fill
                style={{ objectFit: "cover" }}
              />
            ) : (
              <span className="font-mono" style={{ fontSize: 9, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: 2 }}>
                photo
              </span>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
