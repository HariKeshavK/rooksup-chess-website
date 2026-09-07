import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useRef, type ReactNode } from "react";

import { BoardLayer, MorphBackground } from "@/components/board-layer";
import { SiteNav } from "@/components/site-nav";
import { RookPiece } from "@/components/chess-pieces";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ROOKS UP — Play Above Your Level" },
      {
        name: "description",
        content:
          "ROOKS UP is an online chess academy. Expert coaching, structured training and a competitive mindset for players at every level.",
      },
      { property: "og:title", content: "ROOKS UP — Play Above Your Level" },
      {
        property: "og:description",
        content: "Online chess coaching. Serious training. Better players.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({ children, href, tone = "ink" }: { children: ReactNode; href: string; tone?: "ink" | "paper" }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={
        tone === "paper"
          ? "inline-flex items-center gap-4 bg-paper px-9 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-ink"
          : "inline-flex items-center gap-4 bg-ink px-9 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-paper"
      }
    >
      {children}
      <span aria-hidden="true">→</span>
    </motion.a>
  );
}

function Index() {
  return (
    <div id="top" className="relative">
      <MorphBackground />
      <BoardLayer />
      <SiteNav />

      <main className="relative z-20">
        <Hero />
        <Philosophy />
        <WhyRooksUp />
        <Coaches />
        <Programs />
        <Method />
        <FinalCta />
        <Footer />
      </main>
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-end pb-20">
      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-[1500px] px-6 text-paper md:px-12">
        <motion.p
          className="eyebrow mb-8 text-steel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          Online Chess Academy
        </motion.p>
        <motion.h1
          className="display-xl text-[17vw] leading-[0.82] md:text-[11vw]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Rooks Up
        </motion.h1>
        <motion.h2
          className="display-xl mt-4 max-w-4xl text-[7vw] leading-[0.9] text-steel md:text-[3.4vw]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Play above your level.
        </motion.h2>
        <motion.div
          className="mt-12 flex flex-col items-start gap-8 border-t border-paper/15 pt-8 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <p className="max-w-sm text-sm leading-relaxed text-paper/70">
            Online chess coaching. Serious training. Better players.
          </p>
          <MagneticButton href="#contact" tone="paper">
            Start Learning
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const color = useTransform(scrollYProgress, [0.15, 0.4, 0.6], ["#F4F3F1", "#F4F3F1", "#111111"]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["-8%", "6%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-8%"]);

  return (
    <section ref={ref} id="academy" className="relative py-[28vh]">
      <motion.div style={{ color }} className="mx-auto w-full max-w-[1500px] px-6 md:px-12">
        <motion.h2 style={{ x: x1 }} className="display-xl text-[12vw] leading-[0.85] md:text-[8vw]">
          Chess isn't
          <br />
          just a game.
        </motion.h2>
        <motion.p
          style={{ x: x2 }}
          className="display-xl mt-[18vh] text-right text-[16vw] leading-[0.85] md:text-[10vw]"
        >
          It's a<br />
          mindset.
        </motion.p>
      </motion.div>
    </section>
  );
}

const features = [
  { n: "01", t: "Expert Coaching", d: "Trained by rated players who teach the why behind every move, not just the move." },
  { n: "02", t: "Structured Training", d: "A curriculum that builds openings, tactics, endgames and calculation in the right order." },
  { n: "03", t: "Personal Attention", d: "Small groups and one-to-one sessions. Every student's game is reviewed personally." },
  { n: "04", t: "Competitive Mindset", d: "Tournament preparation, clock discipline and the resilience to play under pressure." },
];

function WhyRooksUp() {
  return (
    <section className="relative py-[18vh] text-ink">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-12">
        <Reveal>
          <p className="eyebrow text-ink/50">Why Rooks Up</p>
        </Reveal>
        <div className="mt-16 border-t border-ink/15">
          {features.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.06}>
              <motion.div
                whileHover={{ x: 18 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="grid grid-cols-1 gap-6 border-b border-ink/15 py-12 md:grid-cols-12 md:items-baseline"
              >
                <span className="eyebrow col-span-2 text-ink/40">{f.n}</span>
                <h3 className="display-xl col-span-6 text-[8vw] leading-[0.9] md:text-[3.4vw]">{f.t}</h3>
                <p className="col-span-4 text-sm leading-relaxed text-ink/60">{f.d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const coaches = [
  { name: "PD Sanjay", img: coach1 },
  { name: "Hari Keshav", img: coach2 },
  { name: "Pranava Selvan", img: coach3 },
];

function CoachCard({ name, img, index }: { name: string; img: string; index: number }) {
  return (
    <Reveal delay={index * 0.1}>
      <motion.article
        className="group relative"
        whileHover={{ rotateX: -4, rotateY: 4, y: -10 }}
        style={{ transformPerspective: 900 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      >
        <div className="relative overflow-hidden bg-ink/5">
          <motion.img
            src={img}
            alt={`${name}, chess coach at ROOKS UP`}
            width={800}
            height={1000}
            loading="lazy"
            className="h-[58vh] w-full object-cover grayscale"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <div className="flex items-baseline justify-between border-t border-ink/20 pt-4">
          <h3 className="display-xl mt-4 text-[6vw] leading-none md:text-[2vw]">{name}</h3>
          <span className="eyebrow text-ink/40">Coach</span>
        </div>
      </motion.article>
    </Reveal>
  );
}

function Coaches() {
  return (
    <section id="coaches" className="relative py-[16vh] text-ink">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-12">
        <Reveal>
          <h2 className="display-xl text-[12vw] leading-[0.85] md:text-[6.5vw]">Meet your coaches</h2>
        </Reveal>
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
          {coaches.map((c, i) => (
            <CoachCard key={c.name} name={c.name} img={c.img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const programs = [
  { t: "Beginner", d: "Build the fundamentals.", p: ["Piece coordination", "Opening principles", "Basic checkmates"] },
  { t: "Intermediate", d: "Sharpen your calculation and strategy.", p: ["Tactical patterns", "Positional play", "Endgame technique"] },
  { t: "Advanced", d: "Train for serious competitive chess.", p: ["Opening repertoire", "Deep calculation", "Tournament prep"] },
];

function Programs() {
  return (
    <section id="programs" className="relative py-[16vh] text-ink">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-12">
        <Reveal>
          <p className="eyebrow text-ink/50">Programs</p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-px bg-ink/15 md:grid-cols-3">
          {programs.map((pr, i) => (
            <Reveal key={pr.t} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -14 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex h-full flex-col justify-between bg-paper p-10 md:min-h-[54vh]"
              >
                <div>
                  <span className="eyebrow text-ink/40">0{i + 1}</span>
                  <h3 className="display-xl mt-8 text-[9vw] leading-[0.88] md:text-[3vw]">{pr.t}</h3>
                  <p className="mt-4 text-sm text-ink/60">{pr.d}</p>
                </div>
                <ul className="mt-12 space-y-3 border-t border-ink/15 pt-6 text-[11px] uppercase tracking-[0.22em] text-ink/55">
                  {pr.p.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const stages = ["Learn", "Train", "Play", "Improve"];

function StageLabel({ label, index, progress }: { label: string; index: number; progress: MotionValue<number> }) {
  const start = index * 0.22 + 0.05;
  const opacity = useTransform(progress, [start - 0.12, start], [0.28, 1]);
  const y = useTransform(progress, [start - 0.12, start], [16, 0]);
  return (
    <motion.div style={{ opacity, y }} className="flex-1 text-center">
      <span className="eyebrow block text-ink/40">0{index + 1}</span>
      <h3 className="display-xl mt-3 text-[7vw] leading-none md:text-[3.2vw]">{label}</h3>
    </motion.div>
  );
}

function Method() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 100, damping: 28, mass: 0.35 });
  const rookX = useTransform(p, [0.04, 0.95], ["4%", "88%"]);
  const rookHop = useTransform(p, [0, 0.25, 0.5, 0.75, 1], [0, -22, 0, -22, 0]);

  return (
    <section ref={ref} id="about" className="relative h-[320vh] text-ink">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-12">
          <p className="eyebrow text-ink/50">The Rooks Up Method</p>

          <div className="relative mt-24">
            <motion.div style={{ x: rookX, y: rookHop }} className="absolute -top-28 left-0 text-ink">
              <RookPiece size={92} />
            </motion.div>

            <svg viewBox="0 0 1000 20" className="w-full" aria-hidden="true">
              <line x1="0" y1="10" x2="1000" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.18" />
              <motion.line
                x1="0"
                y1="10"
                x2="1000"
                y2="10"
                stroke="currentColor"
                strokeWidth="3"
                style={{ pathLength: p }}
              />
            </svg>

            <div className="mt-14 flex items-start justify-between gap-4">
              {stages.map((s, i) => (
                <StageLabel key={s} label={s} index={i} progress={p} />
              ))}
            </div>
          </div>

          <p className="mx-auto mt-24 max-w-xl text-center text-sm leading-relaxed text-ink/60">
            One continuous journey. Every session moves the same piece further across the board — from first principles
            to competitive play.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="relative flex min-h-screen items-center text-paper">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-12">
        <Reveal>
          <h2 className="display-xl text-[13vw] leading-[0.84] md:text-[8vw]">
            Your next move
            <br />
            starts here.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-16">
            <MagneticButton href="mailto:hello@rooksup.com" tone="paper">
              Start your chess journey
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-paper/12 py-12 text-paper/60">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 px-6 text-[11px] uppercase tracking-[0.28em] md:flex-row md:items-center md:justify-between md:px-12">
        <span className="font-display font-black tracking-[0.42em] text-paper">Rooks Up</span>
        <span>Online chess academy</span>
        <a href="mailto:hello@rooksup.com" className="transition-opacity hover:opacity-100">
          hello@rooksup.com
        </a>
      </div>
    </footer>
  );
}
