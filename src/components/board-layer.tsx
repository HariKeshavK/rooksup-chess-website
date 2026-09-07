import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { BishopPiece, KnightPiece, PawnPiece, RookPiece } from "./chess-pieces";

/**
 * 2D Scroll-linked chessboard + piece system with luxury Dark Brown & Crème aesthetic.
 * Every piece position is derived from a single spring-smoothed scroll value,
 * giving a fluid, cinematic journey.
 */
export function BoardLayer() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  // Board grid: appears in the hero, breathes, fades out, returns for the finale.
  const gridOpacity = useTransform(
    p,
    [0, 0.06, 0.2, 0.45, 0.75, 0.92, 1],
    [0.24, 0.55, 0.28, 0.14, 0.18, 0.45, 0.1],
  );
  const gridScale = useTransform(p, [0, 0.5, 1], [1.25, 1, 1.6]);
  const gridRotate = useTransform(p, [0, 1], [14, -6]);
  const gridY = useTransform(p, [0, 1], ["6%", "-10%"]);

  // Hero rook — the protagonist. Travels the full page.
  const rookX = useTransform(
    p,
    [0, 0.14, 0.3, 0.46, 0.62, 0.8, 1],
    ["6vw", "24vw", "62vw", "18vw", "70vw", "34vw", "44vw"],
  );
  const rookY = useTransform(
    p,
    [0, 0.14, 0.3, 0.46, 0.62, 0.8, 1],
    ["52vh", "26vh", "62vh", "18vh", "48vh", "72vh", "30vh"],
  );
  const rookScale = useTransform(p, [0, 0.3, 0.62, 1], [1.35, 0.85, 1.1, 1.7]);
  const rookOpacity = useTransform(
    p,
    [0, 0.05, 0.34, 0.4, 0.55, 0.86, 1],
    [0.5, 1, 1, 0.16, 1, 1, 0.9],
  );

  const pawnX = useTransform(p, [0, 0.35, 0.7, 1], ["82vw", "48vw", "12vw", "68vw"]);
  const pawnY = useTransform(p, [0, 0.35, 0.7, 1], ["78vh", "22vh", "66vh", "16vh"]);
  const pawnOpacity = useTransform(p, [0, 0.1, 0.3, 0.5, 0.7, 1], [0, 0.55, 0.2, 0.5, 0.35, 0]);

  const knightX = useTransform(p, [0, 0.4, 0.75, 1], ["-10vw", "30vw", "84vw", "20vw"]);
  const knightY = useTransform(p, [0, 0.4, 0.75, 1], ["18vh", "74vh", "30vh", "80vh"]);
  const knightOpacity = useTransform(p, [0, 0.18, 0.42, 0.68, 0.95], [0, 0.35, 0.5, 0.3, 0]);

  const bishopX = useTransform(p, [0, 0.5, 1], ["58vw", "88vw", "6vw"]);
  const bishopY = useTransform(p, [0, 0.5, 1], ["86vh", "40vh", "62vh"]);
  const bishopOpacity = useTransform(p, [0, 0.25, 0.55, 0.85], [0, 0.3, 0.4, 0]);

  // Pieces & Grid color flip between Crème (#F4EFE6) and Deep Dark Brown (#160F0A)
  const pieceColor = useTransform(
    p,
    [0, 0.16, 0.28, 0.86, 0.92, 1],
    ["#F4EFE6", "#F4EFE6", "#160F0A", "#160F0A", "#F4EFE6", "#F4EFE6"],
  );
  const lineColor = useTransform(
    p,
    [0, 0.16, 0.28, 0.86, 0.92, 1],
    ["#F4EFE6", "#F4EFE6", "#160F0A", "#160F0A", "#F4EFE6", "#F4EFE6"],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      <motion.svg
        className="absolute left-1/2 top-1/2 h-[150vh] w-[150vw] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
        style={{
          opacity: gridOpacity,
          scale: gridScale,
          rotate: gridRotate,
          y: gridY,
          color: lineColor,
        }}
        aria-hidden="true"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * 100}
            x2="800"
            y2={i * 100}
            stroke="currentColor"
            strokeWidth="0.8"
          />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 100}
            y1="0"
            x2={i * 100}
            y2="800"
            stroke="currentColor"
            strokeWidth="0.8"
          />
        ))}
        {Array.from({ length: 8 }).map((_, r) =>
          Array.from({ length: 8 }).map((__, c) =>
            (r + c) % 2 === 0 ? (
              <rect
                key={`s${r}-${c}`}
                x={c * 100}
                y={r * 100}
                width="100"
                height="100"
                fill="currentColor"
                opacity="0.07"
              />
            ) : null,
          ),
        )}
      </motion.svg>

      <motion.div
        className="absolute"
        style={{
          x: rookX,
          y: rookY,
          scale: rookScale,
          opacity: rookOpacity,
          color: pieceColor,
        }}
      >
        <RookPiece size={130} />
      </motion.div>
      <motion.div
        className="absolute"
        style={{ x: pawnX, y: pawnY, opacity: pawnOpacity, color: pieceColor }}
      >
        <PawnPiece size={64} />
      </motion.div>
      <motion.div
        className="absolute"
        style={{ x: knightX, y: knightY, opacity: knightOpacity, color: pieceColor }}
      >
        <KnightPiece size={78} />
      </motion.div>
      <motion.div
        className="absolute"
        style={{ x: bishopX, y: bishopY, opacity: bishopOpacity, color: pieceColor }}
      >
        <BishopPiece size={70} />
      </motion.div>
    </div>
  );
}

/**
 * Full-page morphing background: Deep Dark Espresso Brown -> Rich Dark Chocolate -> Crème -> Deep Dark Espresso Brown.
 * Avoids light brown completely.
 */
export function MorphBackground() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 30, mass: 0.4 });
  const background = useTransform(
    p,
    [0, 0.12, 0.22, 0.32, 0.84, 0.9, 1],
    ["#0C0806", "#160F0A", "#261911", "#F4EFE6", "#F4EFE6", "#1A110B", "#0C0806"],
  );
  return <motion.div className="fixed inset-0 -z-10" style={{ background }} aria-hidden="true" />;
}
