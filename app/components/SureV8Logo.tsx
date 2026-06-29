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

      {/* Custom 8: Human Head (top) + 8 (bottom) */}
      <g>
        {/* Human Head Silhouette - top part */}
        <circle cx="150" cy="16" r="5.5" fill="#2563EB" />
        {/* Head shoulders/neck area */}
        <path
          d="M 145 21 Q 150 23 155 21"
          stroke="#2563EB"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* 8 shape - lower oval (bottom of 8) */}
        <ellipse
          cx="150"
          cy="33"
          rx="6.5"
          ry="8"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.5"
        />

        {/* Connect head to 8 */}
        <line x1="150" y1="21.5" x2="150" y2="25" stroke="#2563EB" strokeWidth="2.5" />
      </g>
    </svg>
  )
}
