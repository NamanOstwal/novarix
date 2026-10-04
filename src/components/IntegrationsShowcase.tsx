import { useState, type FC, type ReactNode } from 'react'

interface Integration {
  name: string
  category: 'database' | 'crm' | 'ai' | 'dev' | 'storage'
  badge: string
  color: string
  iconSvg: ReactNode
}

const INTEGRATIONS_ROW_1: Integration[] = [
  {
    name: 'PostgreSQL',
    category: 'database',
    badge: 'Database',
    color: '#336791',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#336791"/>
      </svg>
    ),
  },
  {
    name: 'Snowflake',
    category: 'database',
    badge: 'Data Warehouse',
    color: '#29B5E8',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22"/>
        <line x1="20" y1="7" x2="4" y2="17"/>
        <line x1="20" y1="17" x2="4" y2="7"/>
        <polyline points="10 4 12 2 14 4"/>
        <polyline points="10 20 12 22 14 20"/>
        <polyline points="19 10 20 7 17 8"/>
        <polyline points="5 14 4 17 7 16"/>
        <polyline points="17 16 20 17 19 14"/>
        <polyline points="7 8 4 7 5 10"/>
      </svg>
    ),
  },
  {
    name: 'Pinecone',
    category: 'ai',
    badge: 'Vector DB',
    color: '#00F0FF',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2L18.8 8 12 11.8 5.2 8 12 4.2zM4.8 9.5l6.4 3.6v7.3l-6.4-3.6V9.5zm8 10.9v-7.3l6.4-3.6v7.3l-6.4-3.6z" fill="#00F0FF"/>
      </svg>
    ),
  },
  {
    name: 'Salesforce',
    category: 'crm',
    badge: 'CRM',
    color: '#00A1E0',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#00A1E0">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
      </svg>
    ),
  },
  {
    name: 'Slack',
    category: 'dev',
    badge: 'Messaging',
    color: '#ECB22E',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
        <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
        <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
        <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.528 2.528 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    category: 'dev',
    badge: 'Code & CI',
    color: '#FFFFFF',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    category: 'database',
    badge: 'NoSQL DB',
    color: '#00ED64',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 1.5s-6 7.5-6 12.5c0 4.5 3.5 8.5 6 9.5 2.5-1 6-5 6-9.5 0-5-6-12.5-6-12.5z" fill="#00ED64" opacity="0.3"/>
        <path d="M12 1.5v22c2.5-1 6-5 6-9.5 0-5-6-12.5-6-12.5z" fill="#00ED64"/>
      </svg>
    ),
  },
  {
    name: 'AWS S3',
    category: 'storage',
    badge: 'Object Store',
    color: '#FF9900',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF9900">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
]

const INTEGRATIONS_ROW_2: Integration[] = [
  {
    name: 'Supabase',
    category: 'database',
    badge: 'Postgres & Auth',
    color: '#3ECF8E',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13.5 2L3 14.5h8L9.5 22 21 9.5h-7.5L13.5 2z" fill="#3ECF8E"/>
      </svg>
    ),
  },
  {
    name: 'Notion',
    category: 'crm',
    badge: 'Knowledge Base',
    color: '#FFFFFF',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.047-.327L17.876 2.06c-.42-.327-1.073-.653-2.193-.56L2.64 2.573c-.373.047-.466.327-.327.56l2.146 1.075zm1.12 3.687v12.41c0 .793.42 1.073 1.353 1.026l14.475-.84c.933-.046.98-.606.98-1.213V6.962c0-.653-.373-.933-1.026-.886L5.58 6.962zm11.385 1.587c.093.42.046.886-.327.933l-.84.14v8.445c-.467.28-.98.42-1.493.42-1.026 0-1.493-.42-2.38-1.54l-4.433-6.577v6.623l1.493.28c.047.42-.14.793-.513.793l-3.36.187c-.093-.42-.047-.84.28-.933l.886-.187V9.762l-1.12-.093c-.093-.42.093-.84.466-.887l3.593-.233 4.806 7.043V9.575l-1.306-.187c-.093-.42.14-.84.513-.886l3.407-.233.327.186z"/>
      </svg>
    ),
  },
  {
    name: 'OpenAI',
    category: 'ai',
    badge: 'LLM Gateway',
    color: '#10A37F',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="2">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 3a9 9 0 0 1 9 9M12 21a9 9 0 0 1-9-9"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    name: 'Stripe',
    category: 'crm',
    badge: 'Payments & Billing',
    color: '#635BFF',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#635BFF">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.697.5 6.873.5 2.871 3.55 2.871 8.441c0 5.434 4.502 6.558 7.625 7.64 2.457.852 3.3 1.545 3.3 2.54 0 .973-.895 1.523-2.38 1.523-2.378 0-5.187-1.127-7.227-2.298l-.949 5.568c2.148 1.099 5.344 1.586 8.356 1.586 6.136 0 10.384-3.003 10.384-8.082 0-5.323-4.148-6.628-8.004-7.668z"/>
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    category: 'crm',
    badge: 'Marketing & Sales',
    color: '#FF7A59',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="18" cy="8" r="3" fill="#FF7A59"/>
        <circle cx="12" cy="12" r="4" stroke="#FF7A59" strokeWidth="2.5"/>
        <circle cx="6" cy="17" r="2.5" fill="#FF7A59"/>
        <path d="M15.5 9.5L12 12M12 12l-3.5 3" stroke="#FF7A59" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: 'Jira',
    category: 'dev',
    badge: 'Issue Tracking',
    color: '#0052CC',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#0052CC">
        <path d="M11.53 2c0 2.4 1.97 4.35 4.4 4.35h3.64V2h-8.04zm-4.4 4.8c0 2.4 1.97 4.35 4.4 4.35h3.64V6.8H7.13zM2.73 11.6c0 2.4 1.97 4.35 4.4 4.35h3.64V11.6H2.73z"/>
      </svg>
    ),
  },
  {
    name: 'Redis',
    category: 'database',
    badge: 'Cache & Memory',
    color: '#DC382D',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#DC382D">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L18.4 8 12 11.2 5.6 8 12 4.8zm-8 4.7l7 3.5v6.2l-7-3.5V9.5zm9 9.7v-6.2l7-3.5v6.2l-7 3.5z"/>
      </svg>
    ),
  },
  {
    name: 'Linear',
    category: 'dev',
    badge: 'Workflow Tracking',
    color: '#5E6AD2',
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 17.5L17.5 3M6.5 21L21 6.5" stroke="#5E6AD2" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export const IntegrationsShowcase: FC = () => {
  const [filter, setFilter] = useState<'all' | 'database' | 'crm' | 'ai' | 'dev'>('all')

  const filterItem = (item: Integration) => {
    if (filter === 'all') return true
    return item.category === filter
  }

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1240px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        padding: '20px 0',
      }}
    >
      {/* Rewrite Header: n8n-style "Plug AI into your own data & over 500 integrations" */}
      <div style={{ textAlign: 'center', maxWidth: '840px', padding: '0 20px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 16px',
            borderRadius: '9999px',
            background: 'rgba(0, 240, 255, 0.08)',
            border: '1px solid rgba(0, 240, 255, 0.28)',
            marginBottom: '16px',
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00F0FF', boxShadow: '0 0 10px #00F0FF' }} />
          <span
            style={{
              fontFamily: 'var(--font-matter)',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: '#00F0FF',
            }}
          >
            Universal Connectivity
          </span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-season-mix)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
            marginBottom: '14px',
            textShadow: '0 0 30px rgba(0, 112, 243, 0.3)',
          }}
        >
          Plug AI into your own data & over 500 integrations
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto 20px',
          }}
        >
          Deploy autonomous agents directly into your existing data lake, ERP, CRM, and cloud VPC. Zero custom pipeline overhead.
        </p>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '12px',
          }}
        >
          {[
            { id: 'all', label: 'All 500+ Connectors' },
            { id: 'database', label: 'Databases & Warehouses' },
            { id: 'crm', label: 'CRMs & Productivity' },
            { id: 'ai', label: 'Vector & AI' },
            { id: 'dev', label: 'DevOps & Toolchain' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as typeof filter)}
              style={{
                fontFamily: 'var(--font-matter)',
                fontSize: '12.5px',
                fontWeight: 500,
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: filter === tab.id ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                color: filter === tab.id ? '#00F0FF' : 'rgba(255, 255, 255, 0.65)',
                border: filter === tab.id ? '1px solid rgba(0, 240, 255, 0.45)' : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: filter === tab.id ? '0 0 15px rgba(0, 240, 255, 0.25)' : 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* n8n-style Integration Nodes River (Two Flowing Rows with Glowing Badges) */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          padding: '10px 0',
        }}
      >
        {/* Left & Right Edge Vignette Gradients */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '120px',
            background: 'linear-gradient(90deg, #0C0B0C 20%, transparent 100%)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: '120px',
            background: 'linear-gradient(270deg, #0C0B0C 20%, transparent 100%)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />

        {/* Integration Row 1 */}
        <div
          style={{
            display: 'flex',
            gap: '14px',
            marginBottom: '14px',
            overflowX: 'hidden',
            width: '100%',
          }}
        >
          <div
            className="logo-carousel-inner"
            style={{
              display: 'flex',
              gap: '14px',
              animation: 'marqueeLeft 35s linear infinite',
            }}
          >
            {INTEGRATIONS_ROW_1.concat(INTEGRATIONS_ROW_1).concat(INTEGRATIONS_ROW_1).map((item, idx) => {
              const active = filterItem(item)
              return (
                <div
                  key={`row1-${item.name}-${idx}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 18px',
                    borderRadius: '16px',
                    backgroundColor: active ? 'rgba(21, 20, 25, 0.85)' : 'rgba(21, 20, 25, 0.35)',
                    backdropFilter: 'blur(12px)',
                    border: active ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.04)',
                    boxShadow: active ? '0 10px 25px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)' : 'none',
                    opacity: active ? 1 : 0.3,
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.4)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 240, 255, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = active ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.04)'
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = active ? '0 10px 25px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)' : 'none'
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.iconSvg}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                      {item.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-matter)', fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)' }}>
                      {item.badge}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Integration Row 2 (Reverse flowing) */}
        <div
          style={{
            display: 'flex',
            gap: '14px',
            overflowX: 'hidden',
            width: '100%',
          }}
        >
          <div
            className="logo-carousel-inner"
            style={{
              display: 'flex',
              gap: '14px',
              animation: 'marqueeRight 38s linear infinite',
            }}
          >
            {INTEGRATIONS_ROW_2.concat(INTEGRATIONS_ROW_2).concat(INTEGRATIONS_ROW_2).map((item, idx) => {
              const active = filterItem(item)
              return (
                <div
                  key={`row2-${item.name}-${idx}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 18px',
                    borderRadius: '16px',
                    backgroundColor: active ? 'rgba(21, 20, 25, 0.85)' : 'rgba(21, 20, 25, 0.35)',
                    backdropFilter: 'blur(12px)',
                    border: active ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.04)',
                    boxShadow: active ? '0 10px 25px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)' : 'none',
                    opacity: active ? 1 : 0.3,
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.4)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 240, 255, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = active ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.04)'
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = active ? '0 10px 25px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)' : 'none'
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.iconSvg}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                      {item.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-matter)', fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)' }}>
                      {item.badge}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Enterprise Protocol & Architecture Telemetry Badges */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '6px',
          padding: '14px 28px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px 14px',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.65)',
            textAlign: 'center',
          }}
        >
          <span style={{ color: '#00F0FF', fontWeight: 600 }}>● Instant Zero-ETL Connectors</span>
          <span className="hidden sm:inline" style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span>REST & GraphQL APIs</span>
          <span className="hidden sm:inline" style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span>Real-time CDC Vector Streams</span>
          <span className="hidden sm:inline" style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span>Air-Gapped VPC Peering</span>
        </div>
      </div>
    </div>
  )
}
