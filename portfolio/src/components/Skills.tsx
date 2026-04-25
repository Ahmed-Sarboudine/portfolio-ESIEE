import { FadeUp } from "./FadeUp";
import { getAggregatedSkills } from "@/lib/github";

const MANUAL_GROUPS = [
  { title: "Langages",   items: ["Python", "JavaScript", "JAVA", "TypeScript", "C", "C#", "SQL", "NoSQL", "Assembly","PHP"] },
  { title: "Data",       items: ["Pandas", "Plotly", "Dash", "SQL", "JENKINS"] },
  { title: "Web",        items: ["React", "Next.js", "Node.js","Django"] },
  { title: "Librairies", items: ["React", "Next.js", "Node.js", "Bootsrap", "Rest"] },
  { title: "Outils",     items: ["Git", "Github","Linux", "MATLAB", "JIRA", "VScode", "Jetbrains",] },
];

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "clamp(64px,10vw,100px) clamp(20px,5vw,80px)",
        maxWidth: 900, margin: "0 auto",
      }}
    >
      <FadeUp>
        <div className="font-mono text-accent" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>
          [ 04 ]
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 style={{ fontSize: "clamp(26px,4vw,34px)", fontWeight: 700, color: "var(--text)", marginBottom: 40, letterSpacing: "-0.5px" }}>
          Compétences
        </h2>
      </FadeUp>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 24 }}>
        {MANUAL_GROUPS.map((group, i) => (
          <FadeUp key={group.title} delay={0.1 * (i + 1)}>
            <div>
              <div className="font-mono text-accent" style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                {group.title}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
