import { Reveal } from './Reveal'
import { SectionHead } from './Button'

const INDUSTRIES = [
  {
    title: 'Finance & Accounting',
    copy: 'Invoice processing, reconciliation, data validation, reporting, and recurring finance workflows.',
    icon: 'ledger',
  },
  {
    title: 'SaaS',
    copy: 'Provisioning steps, usage-to-billing handoffs, and lifecycle operations across product and GTM systems.',
    icon: 'cloud',
  },
  {
    title: 'Customer Support',
    copy: 'Classification, retrieval, response drafting, system updates, and escalation of edge cases.',
    icon: 'chat',
  },
  {
    title: 'Internal IT',
    copy: 'Access requests, ticket enrichment, and repetitive admin work across identity and service tools.',
    icon: 'key',
  },
] as const

type IconName =
  | 'ledger'
  | 'bag'
  | 'cross'
  | 'route'
  | 'cloud'
  | 'chat'
  | 'funnel'
  | 'people'
  | 'megaphone'
  | 'key'
  | 'home'
  | 'brief'

function IndustryIcon({ name }: { name: IconName }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  switch (name) {
    case 'ledger':
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      )
    case 'bag':
      return (
        <svg {...common}>
          <path d="M6 8h12l-1 12H7L6 8z" />
          <path d="M9 8V7a3 3 0 0 1 6 0v1" />
        </svg>
      )
    case 'cross':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    case 'route':
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M8 7c6 0 2 10 8 10" />
        </svg>
      )
    case 'cloud':
      return (
        <svg {...common}>
          <path d="M7 17h10a4 4 0 0 0 0-8 6 6 0 0 0-11 2" />
        </svg>
      )
    case 'chat':
      return (
        <svg {...common}>
          <path d="M5 6h14v10H8l-3 3V6z" />
        </svg>
      )
    case 'funnel':
      return (
        <svg {...common}>
          <path d="M4 5h16l-6 8v5l-4 2v-7L4 5z" />
        </svg>
      )
    case 'people':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 19c.6-3 2.8-5 6-5s5.4 2 6 5" />
          <circle cx="17" cy="9" r="2" />
        </svg>
      )
    case 'megaphone':
      return (
        <svg {...common}>
          <path d="M4 10v4l12 4V6L4 10zM16 9v6M8 14l-2 4" />
        </svg>
      )
    case 'key':
      return (
        <svg {...common}>
          <circle cx="8" cy="12" r="3" />
          <path d="M11 12h9l-2 2 2 2" />
        </svg>
      )
    case 'home':
      return (
        <svg {...common}>
          <path d="M4 11l8-7 8 7v9H4v-9z" />
          <path d="M10 20v-6h4v6" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <rect x="5" y="7" width="14" height="12" rx="2" />
          <path d="M9 7V5h6v2" />
        </svg>
      )
  }
}

export function Industries() {
  return (
    <section className="industries" id="industries" aria-labelledby="ind-title">
      <div className="wrap">
        <Reveal>
          <SectionHead id="ind-title" eyebrow="Who we help" title="Focused on operations-heavy teams." copy="We go deep on repeatable software work before expanding into new processes." />
        </Reveal>
        <div className="ind-grid">
          {INDUSTRIES.map((item, i) => (
            <Reveal as="article" key={item.title} delay={(i % 3) * 60} className="ind-card">
              <span className="ind-icon" aria-hidden="true">
                <IndustryIcon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
