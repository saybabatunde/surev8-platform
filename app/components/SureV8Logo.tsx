export default function SureV8Logo() {
  return (
    <svg
      width="150"
      height="48"
      viewBox="0 0 150 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:opacity-80 transition"
    >
      {/* Letter S */}
      <path
        d="M 12 10 Q 6 10 6 16 Q 6 22 12 22 Q 18 22 18 28 Q 18 34 12 34 Q 6 34 6 30"
        stroke="#111827"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter U */}
      <path
        d="M 22 10 L 22 28 Q 22 34 28 34 Q 34 34 34 28 L 34 10"
        stroke="#111827"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter R */}
      <path
        d="M 38 10 L 38 34 M 38 10 L 50 10 Q 54 10 54 14 Q 54 18 50 18 L 38 18 M 50 18 L 56 34"
        stroke="#111827"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter E */}
      <path
        d="M 62 10 L 62 34 M 62 10 L 72 10 M 62 22 L 70 22 M 62 34 L 72 34"
        stroke="#111827"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tall V - positioned very close */}
      <path
        d="M 77 6 L 85 38 L 93 6"
        stroke="#2563EB"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Custom 8: Human Head (replaces upper oval) + O (lower oval) */}
      <g>
        {/* Human Head - circle */}
        <circle cx="105" cy="12" r="5.5" fill="#2563EB" />

        {/* Head - eyes */}
        <circle cx="102" cy="11" r="0.8" fill="white" />
        <circle cx="108" cy="11" r="0.8" fill="white" />

        {/* Lower oval of 8 - the O */}
        <ellipse
          cx="105"
          cy="31"
          rx="5.5"
          ry="7"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.2"
        />

        {/* Connecting line */}
        <line x1="105" y1="17.5" x2="105" y2="24" stroke="#2563EB" strokeWidth="1.3" />
      </g>
    </svg>
  )
}
