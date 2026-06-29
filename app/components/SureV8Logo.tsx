export default function SureV8Logo() {
  return (
    <svg
      width="140"
      height="50"
      viewBox="0 0 140 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:opacity-80 transition"
    >
      {/* Tall V for Vetting */}
      <path
        d="M 10 8 L 25 45 L 35 8 M 10 8 L 35 8 M 10 8 L 25 45"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Text "Sure" */}
      <text
        x="45"
        y="38"
        fontSize="20"
        fontWeight="700"
        fill="#111827"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Sure
      </text>

      {/* Custom 8: Human Head (top) + 8 shape (bottom) */}
      <g>
        {/* Human Head - top circle/oval */}
        <circle cx="115" cy="15" r="6.5" fill="#2563EB" />

        {/* Head details - eyes */}
        <circle cx="112" cy="14" r="1.2" fill="white" />
        <circle cx="118" cy="14" r="1.2" fill="white" />

        {/* 8 shape - lower oval */}
        <ellipse cx="115" cy="33" rx="7" ry="9" fill="none" stroke="#2563EB" strokeWidth="2.5" />

        {/* 8 shape - upper oval (connected) */}
        <ellipse cx="115" cy="22" rx="7" ry="8" fill="none" stroke="#2563EB" strokeWidth="2.5" />

        {/* Connecting line between head and 8 */}
        <line x1="115" y1="21.5" x2="115" y2="22" stroke="#2563EB" strokeWidth="2.5" />
      </g>
    </svg>
  )
}
