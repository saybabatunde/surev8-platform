export default function SureV8Logo() {
  return (
    <svg
      width="145"
      height="44"
      viewBox="0 0 145 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:opacity-80 transition"
    >
      {/* Letter S - proper S shape */}
      <path
        d="M 10 8 Q 5 8 5 12 Q 5 16 10 16 Q 14 16 14 20 Q 14 24 10 24 Q 5 24 5 28"
        stroke="#111827"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter U */}
      <path
        d="M 18 8 L 18 24 Q 18 30 23 30 Q 28 30 28 24 L 28 8"
        stroke="#111827"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter R */}
      <path
        d="M 32 8 L 32 30 M 32 8 L 42 8 Q 45 8 45 11 Q 45 14 42 14 L 32 14 M 42 14 L 50 30"
        stroke="#111827"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter E */}
      <path
        d="M 54 8 L 54 30 M 54 8 L 63 8 M 54 19 L 62 19 M 54 30 L 63 30"
        stroke="#111827"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tall V - positioned very close */}
      <path
        d="M 67 5 L 74 35 L 81 5"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Custom 8: Human Head (replaces upper oval) + O (lower oval) */}
      <g>
        {/* Human Head - circle */}
        <circle cx="95" cy="10" r="5" fill="#2563EB" />

        {/* Head - eyes */}
        <circle cx="92" cy="9" r="0.7" fill="white" />
        <circle cx="98" cy="9" r="0.7" fill="white" />

        {/* Lower oval of 8 - the O */}
        <ellipse
          cx="95"
          cy="28"
          rx="5"
          ry="6.5"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2"
        />

        {/* Very short neck - head almost sits on O */}
        <line x1="95" y1="15" x2="95" y2="21.5" stroke="#2563EB" strokeWidth="1" />
      </g>
    </svg>
  )
}
