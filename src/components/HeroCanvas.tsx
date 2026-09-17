const EDGES = [
  'Email',
  'Documents',
  'CRM',
  'Payments',
  'Support',
  'Internal Tools',
  'APIs',
  'Databases',
]

export function HeroCanvas() {
  return (
    <div className="hero-viz" aria-hidden="true">
      <div className="hero-viz-frame">
        <svg viewBox="0 0 640 540" className="hero-svg" role="presentation">
          <defs>
            <linearGradient id="flow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6A27FF" />
              <stop offset="55%" stopColor="#3AD7E0" />
              <stop offset="100%" stopColor="#C8F04D" />
            </linearGradient>
            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className="grid-dots" opacity="0.35">
            {Array.from({ length: 12 }).map((_, r) =>
              Array.from({ length: 14 }).map((_, c) => (
                <circle
                  key={`${r}-${c}`}
                  cx={40 + c * 44}
                  cy={28 + r * 44}
                  r="0.8"
                  fill="#1a1a1a"
                />
              )),
            )}
          </g>

          <g className="pipes" fill="none" stroke="url(#flow)" strokeWidth="1.4">
            <path className="pipe" d="M120 270 C 200 270, 220 270, 320 270" />
            <path className="pipe" d="M320 270 C 420 270, 440 270, 520 270" />
            <path className="pipe" d="M320 168 C 320 210, 320 230, 320 248" />
            <path className="pipe" d="M320 292 C 320 330, 320 360, 320 400" />
            <path className="pipe" d="M180 140 C 230 180, 270 230, 300 250" />
            <path className="pipe" d="M460 140 C 410 180, 370 230, 340 250" />
            <path className="pipe" d="M160 400 C 220 360, 270 320, 300 292" />
            <path className="pipe" d="M480 400 C 420 360, 370 320, 340 292" />
          </g>

          <g filter="url(#glow)">
            <circle r="4" fill="#C8F04D">
              <animateMotion dur="3.4s" repeatCount="indefinite" path="M120 270 C 200 270, 220 270, 320 270" />
            </circle>
            <circle r="3.5" fill="#6A27FF">
              <animateMotion dur="2.8s" begin="0.4s" repeatCount="indefinite" path="M320 270 C 420 270, 440 270, 520 270" />
            </circle>
            <circle r="3.2" fill="#3AD7E0">
              <animateMotion dur="3.1s" begin="0.8s" repeatCount="indefinite" path="M180 140 C 230 180, 270 230, 300 250" />
            </circle>
            <circle r="3.2" fill="#C8F04D">
              <animateMotion dur="3.6s" begin="1.1s" repeatCount="indefinite" path="M460 140 C 410 180, 370 230, 340 250" />
            </circle>
            <circle r="3" fill="#6A27FF">
              <animateMotion dur="3.2s" begin="0.6s" repeatCount="indefinite" path="M160 400 C 220 360, 270 320, 300 292" />
            </circle>
            <circle r="3" fill="#3AD7E0">
              <animateMotion dur="3.5s" begin="1.4s" repeatCount="indefinite" path="M480 400 C 420 360, 370 320, 340 292" />
            </circle>
            <circle r="3.4" fill="#C8F04D">
              <animateMotion dur="2.6s" begin="0.2s" repeatCount="indefinite" path="M320 168 C 320 210, 320 230, 320 248" />
            </circle>
          </g>

          <g className="engine">
            <rect x="236" y="214" width="168" height="112" rx="22" fill="#121317" />
            <rect x="240" y="218" width="160" height="104" rx="20" fill="none" stroke="#6A27FF" strokeOpacity="0.55" />
            <circle cx="320" cy="258" r="16" fill="#1b1528" stroke="#C8F04D" strokeWidth="1.4" />
            <circle cx="320" cy="258" r="6" fill="#6A27FF" className="pulse-core" />
            <text x="320" y="298" textAnchor="middle" fill="#EDEAE3" fontSize="10" fontFamily="IBM Plex Mono, monospace" letterSpacing="0.8">
              AI AUTOMATION ENGINE
            </text>
          </g>

          <Node x={78} y={248} label="Human Input" />
          <Node x={488} y={248} label="Automated Action" />
          <Node x={268} y={118} w={104} label="AI Processing" />
          <Node x={430} y={368} w={110} label="Decision Engine" />
          <Node x={100} y={368} w={110} label="API / Database" />
          <Node x={268} y={430} w={104} label="Monitoring" />
        </svg>

        <ul className="edge-chips">
          {EDGES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Node({
  x,
  y,
  label,
  w = 124,
}: {
  x: number
  y: number
  label: string
  w?: number
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height="44" rx="12" fill="#fff" stroke="rgba(18,19,23,0.12)" />
      <circle cx="18" cy="22" r="4.5" fill="#6A27FF" />
      <text x="32" y="26" fill="#141414" fontSize="11.5" fontFamily="IBM Plex Sans, sans-serif">
        {label}
      </text>
    </g>
  )
}
