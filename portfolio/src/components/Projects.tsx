import { FadeUp } from "./FadeUp";
import { ProjectCards } from "./ProjectCards";
import { getPinnedRepos } from "@/lib/github";

async function RepoCards() {
  const repos = await getPinnedRepos().catch(() => []);
  if (repos.length === 0) {
    return (
      <p className="font-mono" style={{ fontSize: 12, color: "var(--text-3)" }}>
        Épinglez des dépôts sur GitHub pour les afficher ici.
      </p>
    );
  }
  return <ProjectCards repos={repos} />;
}

export function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "clamp(64px,10vw,100px) clamp(20px,5vw,80px)",
        maxWidth: 900, margin: "0 auto",
      }}
    >
      <FadeUp>
        <div className="font-mono text-accent" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>
          [ 03 ]
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 style={{ fontSize: "clamp(26px,4vw,34px)", fontWeight: 700, color: "var(--text)", marginBottom: 40, letterSpacing: "-0.5px" }}>
          Projets
        </h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <RepoCards />
      </FadeUp>
    </section>
  );
}
