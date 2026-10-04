import { useState, type FC } from 'react'
import { NovarixLogo } from './NovarixLogo'
import { useConsult } from '../context/ConsultContext'

export const Footer: FC = () => {
  const { openConsult } = useConsult()
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        backgroundColor: '#07060A',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '90px 0 30px',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Celestial Purple & Cyan Glows */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px',
          height: '350px',
          background: 'radial-gradient(ellipse at bottom, rgba(115, 34, 242, 0.18) 0%, rgba(0, 240, 255, 0.08) 45%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-sarvam" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '60px' }}>
        {/* Top Grid: Brand & 5 Link Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '44px',
          }}
        >
          {/* Brand Info & Mission (Address removed as requested, impressive badges added) */}
          <div className="col-span-1 md:col-span-2" style={{ maxWidth: '380px' }}>
            <NovarixLogo height={34} withGlow />

            <p
              style={{
                fontFamily: 'var(--font-season-mix)',
                fontSize: '19px',
                fontWeight: 500,
                color: '#FFFFFF',
                margin: '20px 0 16px',
                lineHeight: 1.35,
              }}
            >
              The Sovereign AI Operating System for Enterprise Automation
            </p>

            <p style={{ fontFamily: 'var(--font-matter)', fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6, marginBottom: '20px' }}>
              Pioneering frontier intelligence, real-time voice agents, and sovereign document synthesis for Fortune 500 enterprises.
            </p>

            {/* Impressive Compliance & Telemetry Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  color: '#00F0FF',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(0, 240, 255, 0.08)',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                  width: 'fit-content',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                <span>All Sovereign Nodes Operational (99.99%)</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>
                <span>• SOC2 Type II Certified</span>
                <span>• ISO 27001</span>
                <span>• Zero Data Retention</span>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00F0FF'
                  e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.5)'
                  e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                }}
                aria-label="Novarix on X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00F0FF'
                  e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.5)'
                  e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                }}
                aria-label="Novarix on LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00F0FF'
                  e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.5)'
                  e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                }}
                aria-label="Novarix on GitHub"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Products */}
          <div>
            <div style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>
              Products
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.55)' }}>
              <li><a href="#playground" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Voice Agents</a></li>
              <li><a href="#playground" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Content Studio</a></li>
              <li><a href="#playground" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Doc Agents</a></li>
              <li><a href="#playground" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Work Agents</a></li>
              <li><a href="#playground" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Coding Agents</a></li>
              <li><a href="#platform" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Novarix Edge</a></li>
              <li><a href="#platform" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Model Training</a></li>
            </ul>
          </div>

          {/* Column 2: APIs */}
          <div>
            <div style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>
              APIs & Models
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.55)' }}>
              <li><a href="#developers" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Text to Speech</a></li>
              <li><a href="#developers" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Speech to Text</a></li>
              <li><a href="#developers" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Doc Digitisation</a></li>
              <li><a href="#developers" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Translation</a></li>
              <li><a href="#developers" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Reasoner Models</a></li>
              <li><a href="#developers" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>REST Documentation</a></li>
            </ul>
          </div>

          {/* Column 3: 500+ Integrations */}
          <div>
            <div style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>
              Integrations
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.55)' }}>
              <li><a href="#hero" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>PostgreSQL & Snowflake</a></li>
              <li><a href="#hero" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Salesforce & HubSpot</a></li>
              <li><a href="#hero" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Pinecone & Vector DBs</a></li>
              <li><a href="#hero" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Slack & GitHub CI</a></li>
              <li><a href="#hero" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>AWS S3 & Cloud VPC</a></li>
              <li><a href="#hero" style={{ color: '#00F0FF', fontWeight: 600 }}>Explore All 500+ →</a></li>
            </ul>
          </div>

          {/* Column 4: Company & Strategy */}
          <div>
            <div style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>
              Company
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.55)' }}>
              <li><a href="#why-novarix" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>About Novarix</a></li>
              <li><a href="#enterprise" onClick={openConsult} style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Careers (Hiring AI Architects)</a></li>
              <li><a href="#enterprise" onClick={openConsult} style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Forward Deployed Team</a></li>
              <li><a href="#research" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Research & Benchmark</a></li>
              <li><a href="#enterprise" onClick={openConsult} style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)')}>Security & Trust Center</a></li>
            </ul>
          </div>
        </div>

        {/* Impressive Interactive Intelligence Newsletter / Enterprise Updates Card */}
        <div
          style={{
            backgroundColor: 'rgba(21, 20, 25, 0.65)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '28px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
          }}
          className="md:flex-row"
        >
          <div>
            <div style={{ fontFamily: 'var(--font-season-mix)', fontSize: '20px', fontWeight: 500, color: '#FFFFFF', marginBottom: '4px' }}>
              Subscribe to Frontier AI Architecture Reports
            </div>
            <div style={{ fontFamily: 'var(--font-matter)', fontSize: '13px', color: 'rgba(255, 255, 255, 0.55)' }}>
              Monthly executive briefings on agentic reasoning benchmarks and sovereign enterprise deployments.
            </div>
          </div>

          {subscribed ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: 600, fontSize: '14px' }}>
              <span>✓ You are on the priority briefing dispatch list</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '380px' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="architect@enterprise.com"
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  color: '#FFFFFF',
                  fontSize: '13.5px',
                  outline: 'none',
                  fontFamily: 'var(--font-matter)',
                }}
              />
              <button
                type="submit"
                className="btn-superconscious-primary"
                style={{ padding: '10px 20px', fontSize: '13.5px', whiteSpace: 'nowrap' }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* GIANT FONTED "NOVARIX" AT THE END AS EXPLICITLY REQUESTED */}
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '20px',
            position: 'relative',
            userSelect: 'none',
          }}
        >
          {/* Subtle Ambient Backlight Glow behind giant wordmark */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '70%',
              height: '100px',
              background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.28) 0%, rgba(115, 34, 242, 0.2) 45%, transparent 75%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
            }}
          />

          <h1
            style={{
              fontFamily: 'var(--font-season-mix)',
              fontSize: 'clamp(76px, 17.5vw, 240px)',
              fontWeight: 600,
              lineHeight: 0.88,
              letterSpacing: '-0.04em',
              textAlign: 'center',
              display: 'block',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.42) 0%, rgba(0, 240, 255, 0.25) 45%, rgba(115, 34, 242, 0.05) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 80px rgba(0, 240, 255, 0.18)',
              margin: 0,
              padding: 0,
              width: '100%',
            }}
          >
            Novarix
          </h1>
        </div>

        {/* Bottom Bar: Copyright, Sovereign Note & Back to Top */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.45)',
          }}
          className="md:flex-row md:items-center md:justify-between"
        >
          <div>
            © 2026 Novarix Technologies Inc. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: '#00F0FF' }}>● Sovereign AI for Modern Enterprise Operations</span>
            <button
              type="button"
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'rgba(255, 255, 255, 0.65)',
                transition: 'color 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
            >
              <span>Back to Top</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
