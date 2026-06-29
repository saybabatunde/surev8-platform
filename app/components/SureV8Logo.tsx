export default function SureV8Logo() {
  return (
    <svg
      width="160"
      height="50"
      viewBox="0 0 160 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:opacity-80 transition"
    >
      {/* "Sure" text - smaller to fit tight */}
      <text
        x="0"
        y="38"
        fontSize="28"
        fontWeight="bold"
        fill="#111827"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Sure
      </text>

      {/* Tall V - positioned very close to Sure */}
      <path
        d="M 78 6 L 88 40 L 98 6"
        stroke="#2563EB"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Custom 8: Human Head (replaces upper oval) + O (lower oval) */}
      <g>
        {/* Human Head - bigger circle to match O */}
        <circle cx="110" cy="13" r="6" fill="#2563EB" />

        {/* Head - simple eyes */}
        <circle cx="107" cy="12" r="0.9" fill="white" />
        <circle cx="113" cy="12" r="0.9" fill="white" />

        {/* Lower oval of 8 - the O */}
        <ellipse
          cx="110"
          cy="32"
          rx="6"
          ry="7.5"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.3"
        />

        {/* Thin line connecting head to O */}
        <line x1="110" y1="19" x2="110" y2="24.5" stroke="#2563EB" strokeWidth="1.5" />
      </g>
    </svg>
  )
}
