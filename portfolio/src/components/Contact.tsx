import { FadeUp } from "./FadeUp";

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function CVIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "clamp(64px,10vw,100px) clamp(20px,5vw,80px)",
        maxWidth: 900, margin: "0 auto", textAlign: "center",
      }}
    >
      <FadeUp>
        <div className="font-mono text-accent" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10, display: "flex", justifyContent: "center" }}>
          [ 05 ]
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 style={{ fontSize: "clamp(26px,4vw,34px)", fontWeight: 700, color: "var(--text)", marginBottom: 12, letterSpacing: "-0.5px" }}>
          Travaillons ensemble
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p style={{ fontSize: 16, color: "var(--text-2)", marginBottom: 36, maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
          Ouvert aux opportunités en Data Engineering, stages, alternances et collaborations. N&apos;hésitez pas à me contacter.
        </p>
      </FadeUp>
      <FadeUp delay={0.3}>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <a href="https://github.com/Ahmed-Sarboudine" target="_blank" rel="noopener noreferrer" className="ghost-btn font-semibold">
            <GitHubIcon /> GitHub
          </a>
          <a href="https://linkedin.com/in/thamiz-ahmed-sarboudine" target="_blank" rel="noopener noreferrer" className="ghost-btn font-semibold">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="/cv.pdf" className="primary-btn font-semibold">
            <CVIcon /> Télécharger CV
          </a>
        </div>
      </FadeUp>
    </section>
  );
}
