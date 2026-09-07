type PieceProps = {
  className?: string;
  size?: number;
};

const shadow = "drop-shadow(0 18px 22px rgba(0,0,0,0.35))";

export function RookPiece({ className, size = 120 }: PieceProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ filter: shadow }}
    >
      <path
        d="M20 14h13v9h10v-9h14v9h10v-9h13v20l-9 8v20l9 15v8H20v-8l9-15V42l-9-8V14Z"
        fill="currentColor"
      />
      <path d="M14 85h72v9H14z" fill="currentColor" />
    </svg>
  );
}

export function PawnPiece({ className, size = 90 }: PieceProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ filter: shadow }}
    >
      <circle cx="50" cy="26" r="15" fill="currentColor" />
      <path d="M34 44h32l-6 10 8 28H32l8-28-6-10Z" fill="currentColor" />
      <path d="M20 85h60v9H20z" fill="currentColor" />
    </svg>
  );
}

export function KnightPiece({ className, size = 100 }: PieceProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ filter: shadow }}
    >
      <path
        d="M38 10c14 2 30 12 34 30 3 14 0 24-6 42H32c4-14 8-20 4-26-4 6-12 8-18 4l10-16-10 2 6-14 14-8-2-14h2Z"
        fill="currentColor"
      />
      <path d="M20 85h60v9H20z" fill="currentColor" />
    </svg>
  );
}

export function BishopPiece({ className, size = 90 }: PieceProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ filter: shadow }}
    >
      <path
        d="M50 8c10 12 20 22 20 34 0 12-9 20-20 20s-20-8-20-20C30 30 40 20 50 8Z"
        fill="currentColor"
      />
      <path d="M36 66h28l6 16H30l6-16Z" fill="currentColor" />
      <path d="M22 85h56v9H22z" fill="currentColor" />
    </svg>
  );
}
