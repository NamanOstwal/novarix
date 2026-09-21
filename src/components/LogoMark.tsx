export function LogoMark({ size = 26, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`logo-mark-svg ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="axiom-accent" x1="6" y1="24" x2="26" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6A27FF" />
          <stop offset="50%" stopColor="#3AD7E0" />
          <stop offset="100%" stopColor="#C8F04D" />
        </linearGradient>
        <linearGradient id="axiom-bridge" x1="10" y1="18" x2="22" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6A27FF" />
          <stop offset="100%" stopColor="#C8F04D" />
        </linearGradient>
      </defs>

      {/* Dark modern container */}
      <rect width="32" height="32" rx="8" fill="#121317" />
      <rect width="32" height="32" rx="8" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />

      {/* Axiom Chevron 'A' & Engineered 'W' Prism */}
      <path
        d="M8 24 L16 8 L24 24"
        stroke="#EDEAE3"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 18 H21"
        stroke="url(#axiom-bridge)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      
      {/* Precision Node Accents */}
      <circle cx="16" cy="8" r="2.2" fill="#6A27FF" stroke="#EDEAE3" strokeWidth="0.8" />
      <circle cx="8" cy="24" r="1.8" fill="#C8F04D" />
      <circle cx="24" cy="24" r="1.8" fill="#3AD7E0" />
      <circle cx="16" cy="18" r="1.6" fill="url(#axiom-accent)" />
    </svg>
  )
}
