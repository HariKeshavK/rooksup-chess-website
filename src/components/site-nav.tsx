import { motion, useScroll, useSpring, useTransform } from "motion/react";

const links = [
  { label: "Academy", href: "#academy" },
  { label: "Coaches", href: "#coaches" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 30, mass: 0.4 });

  const color = useTransform(
    p,
    [0, 0.2, 0.3, 0.86, 0.92, 1],
    ["#F4EFE6", "#F4EFE6", "#160F0A", "#160F0A", "#F4EFE6", "#F4EFE6"],
  );
  const border = useTransform(
    p,
    [0, 0.2, 0.3, 0.86, 0.92, 1],
    [
      "rgba(244,239,230,0.14)",
      "rgba(244,239,230,0.14)",
      "rgba(22,15,10,0.14)",
      "rgba(22,15,10,0.14)",
      "rgba(244,239,230,0.14)",
      "rgba(244,239,230,0.14)",
    ],
  );

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-[2px]"
      style={{ color, borderColor: border }}
    >
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="font-display text-lg font-black uppercase tracking-[0.42em]">
          Rooks Up
        </a>
        <ul className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.28em] md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="opacity-70 transition-opacity duration-300 hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.a
          href="#contact"
          className="border px-5 py-2.5 text-[11px] uppercase tracking-[0.28em]"
          style={{ borderColor: "currentColor" }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Start Learning
        </motion.a>
      </nav>
    </motion.header>
  );
}
