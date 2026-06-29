export default function SureV8Logo() {
  return (
    <svg
      width="150"
      height="45"
      viewBox="0 0 150 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:opacity-80 transition"
    >
      {/* Bold Letter S - filled, modern design */}
      <path
        d="M 6 9 Q 3 9 3 12 Q 3 14 5 15 Q 7 15 7 17 Q 7 19 5 20 Q 3 20 3 23 Q 3 26 6 26 L 10 26 Q 10 24 8 24 Q 6 24 6 22 Q 6 20 8 20 Q 10 20 10 18 Q 10 16 8 15 Q 6 15 6 13 Q 6 11 8 11 L 12 11 Q 12 9 10 9 Z"
        fill="#111827"
      />

      {/* Bold Letter U - filled */}
      <path
        d="M 14 10 L 14 20 Q 14 25 19 25 Q 24 25 24 20 L 24 10 L 21 10 L 21 20 Q 21 22 19 22 Q 17 22 17 20 L 17 10 Z"
        fill="#111827"
      />

      {/* Bold Letter R - filled */}
      <path
        d="M 26 10 L 26 26 L 29 26 L 29 18 L 34 18 Q 37 18 37 15 Q 37 12 34 12 L 29 12 L 29 10 Z M 29 15 L 34 15 Q 35 15 35 16 Q 35 17 34 17 L 29 17 Z"
        fill="#111827"
      />

      {/* Bold Letter E - filled */}
      <path
        d="M 39 10 L 39 26 L 50 26 L 50 24 L 42 24 L 42 19 L 49 19 L 49 17 L 42 17 L 42 12 L 50 12 L 50 10 Z"
        fill="#111827"
      />

      {/* Tall V - positioned tight, no gap */}
      <path
        d="M 53 5 L 61 38 L 69 5"
        stroke="#2563EB"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Custom 8: Human Head + O */}
      <g>
        {/* Human Head - bigger filled circle */}
        <circle cx="86" cy="11" r="7.5" fill="#2563EB" />

        {/* Head - eyes */}
        <circle cx="81.5" cy="10" r="1.1" fill="white" />
        <circle cx="90.5" cy="10" r="1.1" fill="white" />

        {/* Lower oval of 8 - the O */}
        <ellipse
          cx="86"
          cy="30"
          rx="7.5"
          ry="8.5"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.4"
        />

        {/* Minimal neck */}
        <line x1="86" y1="18.5" x2="86" y2="21.5" stroke="#2563EB" strokeWidth="1.3" />
      </g>
    </svg>
  )
}
