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
      {/* "Sure" text */}
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

      {/* Tall V */}
      <path
        d="M 82 8 L 100 42 L 118 8"
        stroke="#2563EB"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Custom 8: Human Head (replaces upper oval) + O (lower oval) */}
      <g>
        {/* Human Head - circle */}
        <circle cx="150" cy="14" r="5" fill="#2563EB" />

        {/* Head - simple eyes */}
        <circle cx="148" cy="13" r="0.8" fill="white" />
        <circle cx="152" cy="13" r="0.8" fill="white" />

        {/* Lower oval of 8 - the O */}
        <ellipse
          cx="150"
          cy="33"
          rx="6.5"
          ry="8"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.5"
        />

        {/* Thin line connecting head to O */}
        <line x1="150" y1="19" x2="150" y2="25" stroke="#2563EB" strokeWidth="1.5" />
      </g>
    </svg>
  )
}
