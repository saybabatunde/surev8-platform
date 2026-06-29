export default function SureV8Logo() {
  return (
    <svg
      width="170"
      height="50"
      viewBox="0 0 170 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:opacity-80 transition"
    >
      {/* "sure" text in clear Calibri font */}
      <text
        x="0"
        y="32"
        fontSize="24"
        fontWeight="600"
        fill="#111827"
        fontFamily="Calibri, Arial, sans-serif"
        letterSpacing="0"
      >
        sure
      </text>

      {/* Tall V - positioned close */}
      <path
        d="M 72 6 L 82 40 L 92 6"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Custom 8: Human Head (replaces upper oval) + O (lower oval) */}
      <g>
        {/* Human Head - bigger circle */}
        <circle cx="110" cy="12" r="7" fill="#2563EB" />

        {/* Head - eyes */}
        <circle cx="106" cy="11" r="1" fill="white" />
        <circle cx="114" cy="11" r="1" fill="white" />

        {/* Lower oval of 8 - the O */}
        <ellipse
          cx="110"
          cy="30"
          rx="7"
          ry="8"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.3"
        />

        {/* Very minimal neck - head almost touches O */}
        <line x1="110" y1="19" x2="110" y2="22" stroke="#2563EB" strokeWidth="1.3" />
      </g>
    </svg>
  )
}
