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
  const color = useTransform(scrollYProgress, [0.15, 0.4, 0.6], ["#F4EFE6", "#F4EFE6", "#160F0A"]);
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

          <div className="relative mt-40">
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

          {/* Right Column: Zoho Form with ROOKS UP luxury aesthetics */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <div className="relative border border-paper/15 bg-[#160F0A]/95 p-8 backdrop-blur-md md:p-12">
                {/* Hidden iframe for seamless Zoho form submission */}
                <iframe
                  name="zoho_submit_iframe"
                  id="zoho_submit_iframe"
                  title="zoho_submission_target"
                  className="hidden"
                  style={{ display: "none", width: 0, height: 0, border: 0 }}
                />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-12 text-center"
                    >
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-paper/10 text-paper">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="display-xl mt-6 text-3xl md:text-4xl text-paper">
                        Enquiry Received
                      </h3>
                      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-paper/75">
                        Thank you for reaching out. A ROOKS UP coach will review{" "}
                        <strong className="text-white">{formData.student_name}</strong>&apos;s
                        details and contact you via phone at{" "}
                        <strong className="text-white">{formData.parent_phone}</strong> within 24
                        hours.
                      </p>
                      <div className="mt-10">
                        <button
                          type="button"
                          onClick={() => {
                            setFormData({
                              student_name: "",
                              parent_phone: "",
                              parent_email: "",
                              attended_before: "no",
                            });
                            setDobDay("");
                            setDobMonth("");
                            setDobYear("");
                            setRatingType("unrated");
                            setFideRatingInput("");
                            setParentalConsent(false);
                            setPrivacyAccepted(false);
                            setSubmitted(false);
                          }}
                          className="border border-paper/30 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-paper transition-colors hover:bg-paper hover:text-ink"
                        >
                          Submit Another Enquiry
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      ref={formRef}
                      action="https://forms.zohopublic.in/rooksupchessgm1/form/rooksupchesswebsiteform/formperma/GcBsYm3VM9KmryE9RfBpmVjo6BtVD3eDBZ15CoMhwYI/htmlRecords/submit"
                      name="form"
                      id="form"
                      method="POST"
                      acceptCharset="UTF-8"
                      encType="multipart/form-data"
                      target="zoho_submit_iframe"
                      noValidate
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Zoho Hidden Tracking Fields */}
                      <input type="hidden" name="zf_referrer_name" value="" />
                      <input type="hidden" name="zf_redirect_url" value="" />
                      <input type="hidden" name="zc_gad" value="" />

                      {/* Zoho Automated / Computed Hidden Fields */}
                      <input type="hidden" name="SingleLine1" value={formattedDob} />
                      <input
                        type="hidden"
                        name="SingleLine10"
                        value={calculatedAge !== null ? String(calculatedAge) : ""}
                      />
                      <input type="hidden" name="SingleLine2" value={fideRatingValue} />
                      <input type="hidden" name="SingleLine6" value={parentalConsentValue} />
                      <input type="hidden" name="SingleLine7" value={privacyPolicyAcceptedValue} />
                      <input type="hidden" name="SingleLine8" value={privacyPolicyVersionValue} />
                      <input
                        type="hidden"
                        name="SingleLine9"
                        value={consentTimestamp || new Date().toISOString()}
                      />

                      <div className="border-b border-paper/15 pb-4">
                        <span className="eyebrow text-steel">Student Registration Form</span>
                      </div>

                      {errorMessage && (
                        <div className="border border-red-500/40 bg-red-950/40 px-4 py-3 text-xs text-red-200 leading-relaxed">
                          {errorMessage}
                        </div>
                      )}

                      {/* Student Name -> SingleLine */}
                      <div>
                        <label className="eyebrow block text-paper/80 mb-2">
                          Student Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="SingleLine"
                          maxLength={255}
                          placeholder="Full name"
                          value={formData.student_name}
                          onChange={(e) =>
                            setFormData({ ...formData, student_name: e.target.value })
                          }
                          className="w-full border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder-paper/30 focus:border-paper focus:outline-none"
                        />
                      </div>

                      {/* Student Date of Birth with Custom Styled Scrollables & Age Auto-calc */}
                      <div>
                        <div className="flex items-baseline justify-between mb-2">
                          <label className="eyebrow block text-paper/80">
                            Student Date of Birth <span className="text-red-400">*</span>
                          </label>
                          {calculatedAge !== null && (
                            <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-paper bg-paper/10 border border-paper/20 px-2.5 py-0.5">
                              Calculated Age: {calculatedAge} {calculatedAge === 1 ? "yr" : "yrs"}
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          {/* Day */}
                          <div className="relative">
                            <select
                              value={dobDay}
                              onChange={(e) => setDobDay(e.target.value)}
                              className="w-full appearance-none border border-paper/20 bg-[#160F0A] px-3.5 py-3 pr-8 text-xs uppercase tracking-wider text-paper focus:border-paper focus:outline-none cursor-pointer"
                            >
                              <option value="" disabled className="bg-[#160F0A] text-paper/40">
                                Day
                              </option>
                              {daysList.map((d) => (
                                <option key={d} value={d} className="bg-[#160F0A] text-paper">
                                  {d}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-paper/40" />
                          </div>

                          {/* Month */}
                          <div className="relative">
                            <select
                              value={dobMonth}
                              onChange={(e) => setDobMonth(e.target.value)}
                              className="w-full appearance-none border border-paper/20 bg-[#160F0A] px-3.5 py-3 pr-8 text-xs uppercase tracking-wider text-paper focus:border-paper focus:outline-none cursor-pointer"
                            >
                              <option value="" disabled className="bg-[#160F0A] text-paper/40">
                                Month
                              </option>
                              {monthsList.map((m) => (
                                <option
                                  key={m.val}
                                  value={m.val}
                                  className="bg-[#160F0A] text-paper"
                                >
                                  {m.val} - {m.label}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-paper/40" />
                          </div>

                          {/* Year */}
                          <div className="relative">
                            <select
                              value={dobYear}
                              onChange={(e) => setDobYear(e.target.value)}
                              className="w-full appearance-none border border-paper/20 bg-[#160F0A] px-3.5 py-3 pr-8 text-xs uppercase tracking-wider text-paper focus:border-paper focus:outline-none cursor-pointer"
                            >
                              <option value="" disabled className="bg-[#160F0A] text-paper/40">
                                Year
                              </option>
                              {yearsList.map((y) => (
                                <option key={y} value={y} className="bg-[#160F0A] text-paper">
                                  {y}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-paper/40" />
                          </div>
                        </div>
                      </div>

                      {/* Split Rated / Unrated Buttons & Rating Input */}
                      <div>
                        <label className="eyebrow block text-paper/80 mb-2.5">
                          FIDE Rating <span className="text-steel normal-case">(optional)</span>
                        </label>
                        <div className="flex gap-4">
                          <button
                            type="button"
                            onClick={() => {
                              setRatingType("unrated");
                              setFideRatingInput("");
                            }}
                            className={`flex-1 border py-3 text-xs uppercase tracking-[0.24em] transition-all ${
                              ratingType === "unrated"
                                ? "border-paper bg-paper text-ink font-semibold"
                                : "border-paper/20 bg-transparent text-paper/70 hover:border-paper/40 hover:text-paper"
                            }`}
                          >
                            Unrated
                          </button>
                          <button
                            type="button"
                            onClick={() => setRatingType("rated")}
                            className={`flex-1 border py-3 text-xs uppercase tracking-[0.24em] transition-all ${
                              ratingType === "rated"
                                ? "border-paper bg-paper text-ink font-semibold"
                                : "border-paper/20 bg-transparent text-paper/70 hover:border-paper/40 hover:text-paper"
                            }`}
                          >
                            Rated
                          </button>
                        </div>

                        {/* Animated Rating Input if Rated is clicked */}
                        <AnimatePresence>
                          {ratingType === "rated" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 14 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <label className="eyebrow block text-paper/70 mb-1.5">
                                FIDE Rating <span className="text-red-400">*</span>
                              </label>
                              <input
                                type="text"
                                maxLength={10}
                                placeholder="e.g. 1450"
                                value={fideRatingInput}
                                onChange={(e) => setFideRatingInput(e.target.value)}
                                className="w-full border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder-paper/30 focus:border-paper focus:outline-none"
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {/* Parent/Guardian Phone -> SingleLine3 */}
                        <div>
                          <label className="eyebrow block text-paper/80 mb-2">
                            Parent / Guardian Phone <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="SingleLine3"
                            maxLength={255}
                            placeholder="+91 98765 43210"
                            value={formData.parent_phone}
                            onChange={(e) =>
                              setFormData({ ...formData, parent_phone: e.target.value })
                            }
                            className="w-full border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder-paper/30 focus:border-paper focus:outline-none"
                          />
                        </div>

                        {/* Parent/Guardian Email -> SingleLine4 */}
                        <div>
                          <label className="eyebrow block text-paper/80 mb-2">
                            Parent / Guardian Email{" "}
                            <span className="text-steel normal-case">(optional)</span>
                          </label>
                          <input
                            type="text"
                            name="SingleLine4"
                            maxLength={255}
                            placeholder="parent@example.com"
                            value={formData.parent_email}
                            onChange={(e) =>
                              setFormData({ ...formData, parent_email: e.target.value })
                            }
                            className="w-full border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder-paper/30 focus:border-paper focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Attended Chess Classes Before -> SingleLine5 */}
                      <div>
                        <input
                          type="hidden"
                          name="SingleLine5"
                          value={formData.attended_before === "yes" ? "Yes" : "No"}
                        />
                        <label className="eyebrow block text-paper/80 mb-3">
                          Has the student attended chess classes before?{" "}
                          <span className="text-red-400">*</span>
                        </label>
                        <div className="flex gap-4">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, attended_before: "yes" })}
                            className={`flex-1 border py-3 text-xs uppercase tracking-[0.24em] transition-all ${
                              formData.attended_before === "yes"
                                ? "border-paper bg-paper text-ink font-semibold"
                                : "border-paper/20 bg-transparent text-paper/70 hover:border-paper/40 hover:text-paper"
                            }`}
                          >
                            Yes
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, attended_before: "no" })}
                            className={`flex-1 border py-3 text-xs uppercase tracking-[0.24em] transition-all ${
                              formData.attended_before === "no"
                                ? "border-paper bg-paper text-ink font-semibold"
                                : "border-paper/20 bg-transparent text-paper/70 hover:border-paper/40 hover:text-paper"
                            }`}
                          >
                            No
                          </button>
                        </div>
                      </div>

                      {/* Dynamic Under-18 Parental Consent Checkbox */}
                      <AnimatePresence>
                        {isUnder18 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden border border-paper/20 bg-paper/5 p-4"
                          >
                            <label className="flex cursor-pointer items-start gap-3.5 text-xs leading-relaxed text-paper/90">
                              <input
                                type="checkbox"
                                checked={parentalConsent}
                                onChange={(e) => setParentalConsent(e.target.checked)}
                                className="mt-1 h-4 w-4 cursor-pointer accent-white"
                              />
                              <span>
                                I confirm that I am the parent or lawful guardian of the student and
                                consent to ROOKS UP collecting and using the student&apos;s personal
                                data for chess class enquiries and coaching.{" "}
                                <span className="text-red-400">*</span>
                              </span>
                            </label>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Privacy Policy Acknowledgement */}
                      <div className="pt-2">
                        <label className="flex cursor-pointer items-start gap-3.5 text-xs leading-relaxed text-paper/85">
                          <input
                            type="checkbox"
                            checked={privacyAccepted}
                            onChange={(e) => setPrivacyAccepted(e.target.checked)}
                            className="mt-1 h-4 w-4 cursor-pointer accent-white"
                          />
                          <span>
                            I have read and understood the ROOKS UP{" "}
                            <Link
                              to="/privacy-policy"
                              target="_blank"
                              className="text-paper underline underline-offset-4 hover:text-white"
                            >
                              Privacy Policy
                            </Link>
                            . <span className="text-red-400">*</span>
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group inline-flex w-full items-center justify-center gap-3 bg-paper px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              <span>Submitting Enquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Enquiry</span>
                              <span
                                aria-hidden="true"
                                className="transition-transform group-hover:translate-x-1"
                              >
                                →
                              </span>
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-center text-[10px] uppercase tracking-[0.2em] text-steel">
                        Personal data is encrypted and accessible only to authorised coaches.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
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
