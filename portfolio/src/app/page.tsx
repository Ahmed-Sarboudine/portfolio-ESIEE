import { Suspense } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function Divider() {
  return <div style={{ height: 1, background: "var(--border)", maxWidth: 900, margin: "0 auto" }} />;
}

function SectionSkeleton() {
  return (
    <div style={{ padding: "clamp(64px,10vw,100px) clamp(20px,5vw,80px)", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ height: 12, width: 40, background: "var(--bg-3)", borderRadius: 4, marginBottom: 12 }} />
      <div style={{ height: 32, width: 200, background: "var(--bg-3)", borderRadius: 4, marginBottom: 40 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ height: 16, background: "var(--bg-3)", borderRadius: 4, width: `${80 - i * 10}%` }} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 60, flex: 1 }}>
        <Hero />
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Divider />
        <Timeline />
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
