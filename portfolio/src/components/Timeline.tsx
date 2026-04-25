import { FadeUp } from "./FadeUp";

const items = [
  {
    years: "2025\n→ présent",
    org: "ESIEE Paris",
    role: "Cycle ingénieur · Informatique & Applications",
    desc: "Formation d'ingénieur généraliste en informatique, spécialisation progressive sur le développement d'applications,l'ingénierie des données et la 3D.",
    badge: "En cours · Diplôme ingénieur",
    future: false,
  },
  {
    years: "2023\n→ présent",
    org: "Caseware",
    role: "Développeur JavaScript · Alternance",
    desc: "Développement de systèmes de calcul fiscal en JavaScript. Conception et maintenance de modules métier complexes, travail en équipe agile, revues de code et tests.",
    badge: "Alternance",
    future: false,
  },
  {
    years: "2022\n→ 2025",
    org: "IUT Marne-la-Vallée",
    role: "BUT INFO · Réalisations d'applications",
    desc: "BUT Informatique réalisé en alternance, axé sur le développement d'applications web et la gestion de données. ",
    badge: "Terminé - Mention Bien",
    future: true,
  },
  {
    years: "2019\n→ 2021",
    org: "Lycée Marx Dormoy",
    role: "Baccalauréat général,",
    desc: "Spécialités Mathématiques et Physique-Chimie, option Maths Expertes, obtenu avec mention Bien. ",
    badge: "Terminé - Mention Bien",
    future: true,
  },
];

export function Timeline() {
  return (
    <section
      id="timeline"
      style={{
        padding: "clamp(64px,10vw,100px) clamp(20px,5vw,80px)",
        maxWidth: 900, margin: "0 auto",
      }}
    >
      <FadeUp>
        <div className="font-mono text-accent" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>
          [ 02 ]
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 style={{ fontSize: "clamp(26px,4vw,34px)", fontWeight: 700, color: "var(--text)", marginBottom: 40, letterSpacing: "-0.5px" }}>
          Parcours
        </h2>
      </FadeUp>

      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute", left: 116, top: 8, bottom: 8,
          width: 1, background: "var(--border-2)",
        }} />

        {items.map((item, i) => (
          <FadeUp key={item.org} delay={0.1 * (i + 2)}>
            <div
              style={{
                display: "grid", gridTemplateColumns: "100px 1fr",
                gap: 32, paddingBottom: i < items.length - 1 ? 36 : 0,
                position: "relative",
              }}
              className="group"
            >
              {/* Year */}
              <div
                className="font-mono"
                style={{
                  fontSize: 11, color: "var(--text-3)",
                  textAlign: "right", paddingTop: 4, lineHeight: 1.4,
                  whiteSpace: "pre-line",
                }}
              >
                {item.years}
              </div>

              {/* Dot */}
              <div style={{
                position: "absolute", left: 110, top: 6,
                width: 13, height: 13, borderRadius: "50%",
                border: `2px solid ${item.future ? "var(--text-3)" : "#6366f1"}`,
                borderStyle: item.future ? "dashed" : "solid",
                background: "var(--bg)", zIndex: 1,
              }} />

              {/* Content */}
              <div style={{ paddingLeft: 20 }}>
                <div style={{
                  fontSize: 17, fontWeight: 700,
                  color: item.future ? "var(--text-2)" : "var(--text)",
                  marginBottom: 2,
                }}>
                  {item.org}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: 13,
                    color: item.future ? "var(--text-3)" : "#6366f1",
                    marginBottom: 8,
                  }}
                >
                  {item.role}
                </div>
                <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
                {item.badge && (
                  <span
                    className="font-mono"
                    style={{
                      display: "inline-block", fontSize: 10,
                      color: "#6366f1", border: "1px solid #6366f133",
                      background: "#6366f133", padding: "2px 8px",
                      borderRadius: 4, marginTop: 8,
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
