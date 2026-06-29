export default function SureV8Logo() {
  return (
    <svg
      width="180"
      height="50"
      viewBox="0 0 180 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:opacity-80 transition"
    >
      {/* "Sure" + "V" as one text unit */}
      <text
        x="0"
        y="40"
        fontSize="32"
        fontWeight="bold"
        fill="#111827"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Sure
      </text>

      {/* Tall V - positioned right next to Sure */}
      <path
        d="M 95 8 L 105 42 L 115 8"
        stroke="#2563EB"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Custom 8: Human Head (replaces upper oval) + O (lower oval) */}
      <g>
        {/* Human Head - bigger circle to match O */}
        <circle cx="128" cy="14" r="6.5" fill="#2563EB" />

        {/* Head - simple eyes */}
        <circle cx="125" cy="13" r="1" fill="white" />
        <circle cx="131" cy="13" r="1" fill="white" />

        {/* Lower oval of 8 - the O */}
        <ellipse
          cx="128"
          cy="33"
          rx="6.5"
          ry="8"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.5"
        />

        {/* Thin line connecting head to O */}
        <line x1="128" y1="20.5" x2="128" y2="25" stroke="#2563EB" strokeWidth="1.5" />
      </g>
    </svg>
  )
}
