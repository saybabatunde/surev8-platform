export default function SureV8Logo() {
  return (
    <svg
      width="140"
      height="40"
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:opacity-80 transition"
    >
      {/* Lowercase s - small, proper S curve */}
      <path
        d="M 8 10 Q 5 10 5 12 Q 5 14 7 15 Q 9 15 9 17 Q 9 19 7 19 Q 5 19 5 21"
        stroke="#111827"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Lowercase u */}
      <path
        d="M 12 10 L 12 17 Q 12 20 15 20 Q 18 20 18 17 L 18 10"
        stroke="#111827"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Lowercase r */}
      <path
        d="M 21 10 L 21 20 M 21 14 Q 21 10 25 10 Q 27 10 27 12"
        stroke="#111827"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Lowercase e */}
      <path
        d="M 30 15 L 39 15 Q 40 15 40 14 Q 40 10 35 10 Q 31 10 31 14 Q 31 20 35 20 Q 40 20 40 18"
        stroke="#111827"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tall V - positioned very close */}
      <path
        d="M 44 4 L 52 32 L 60 4"
        stroke="#2563EB"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Custom 8: Human Head (replaces upper oval) + O (lower oval) */}
      <g>
        {/* Human Head - bigger circle */}
        <circle cx="77" cy="10" r="6.5" fill="#2563EB" />

        {/* Head - eyes */}
        <circle cx="73.5" cy="9" r="0.8" fill="white" />
        <circle cx="80.5" cy="9" r="0.8" fill="white" />

        {/* Lower oval of 8 - the O */}
        <ellipse
          cx="77"
          cy="27"
          rx="6.5"
          ry="7.5"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.1"
        />

        {/* Very minimal neck - head almost touches O */}
        <line x1="77" y1="16.5" x2="77" y2="19.5" stroke="#2563EB" strokeWidth="1.2" />
      </g>
    </svg>
  )
}
