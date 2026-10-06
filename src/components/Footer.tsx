import { useState, type FC, type FormEvent } from 'react'
import { NovarixLogo } from './NovarixLogo'
import { useConsult } from '../context/ConsultContext'
import { Mail, ShieldCheck, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react'

export const Footer: FC = () => {
  const { openConsult } = useConsult()
  const [subEmail, setSubEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subSuccess, setSubSuccess] = useState(false)
  const [subError, setSubError] = useState('')

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()
    if (!subEmail || !subEmail.includes('@')) {
      setSubError('Please enter a valid email address.')
      return
    }
    setIsSubscribing(true)
    setSubError('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: subEmail }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setSubError(data.error || 'Failed to subscribe. Please try again.')
        return
      }

      setSubSuccess(true)
      setSubEmail('')
    } catch (err: any) {
      console.error('Newsletter subscribe error:', err)
      setSubError('Connection error. Please try again.')
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <footer
      style={{
        backgroundColor: '#070608',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '80px 24px 40px',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '64px',
        }}
      >
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '40px',
          }}
        >
          {/* Col 1: Brand Info */}
          <div style={{ gridColumn: 'span 2', maxWidth: '380px' }}>
            <div style={{ marginBottom: '18px' }}>
              <NovarixLogo height={28} withGlow />
            </div>
            <p style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, marginBottom: '24px' }}>
              Novarix builds production-grade autonomous AI agents, enterprise RAG knowledge layers, and workflow automation infrastructure engineered for sovereign enterprise deployment.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a
                href="https://www.linkedin.com/in/namanostwal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Novarix LinkedIn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://github.com/NamanOstwal/novarix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Novarix GitHub"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="mailto:contact@novarixai.com"
                aria-label="Email Novarix"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
              <li><a href="#solutions" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>AI Agent Swarms</a></li>
              <li><a href="#solutions" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Enterprise RAG Layer</a></li>
              <li><a href="#solutions" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Voice Agents & Support</a></li>
              <li><a href="#solutions" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Document Intelligence</a></li>
              <li><a href="#solutions" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Custom Sovereign VPC</a></li>
            </ul>
          </div>

          {/* Col 3: Platform */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
              Platform & Tech
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px' }}>
              <li><a href="#demo" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Live Agent Simulator</a></li>
              <li><a href="#architecture" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Multi-Layer Architecture</a></li>
              <li><a href="#security" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Human-in-the-Loop Governance</a></li>
              <li><a href="#calculator" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Annual ROI Calculator</a></li>
              <li><a href="#case-studies" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Production Case Studies</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Direct Intake */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
              Engineering Briefs
            </h4>
            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.5, marginBottom: '14px' }}>
              Get monthly architectural benchmarks and sovereign AI release notes.
            </p>

            {subSuccess ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', fontSize: '13px', padding: '8px 0' }}>
                <CheckCircle2 size={16} />
                <span>Subscribed to research briefings!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <input
                    type="email"
                    required
                    placeholder="engineer@enterprise.com"
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '8px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#FFFFFF',
                      fontSize: '12.5px',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--neon-cyan)',
                      color: '#070608',
                      border: 'none',
                      fontWeight: 700,
                      fontSize: '12.5px',
                      cursor: isSubscribing ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Send size={13} />
                  </button>
                </div>
                {subError && (
                  <span style={{ fontSize: '11.5px', color: '#FF7070' }}>{subError}</span>
                )}
              </form>
            )}

            <div style={{ marginTop: '16px' }}>
              <button
                type="button"
                onClick={openConsult}
                style={{
                  color: 'var(--neon-cyan)',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontFamily: 'var(--font-matter)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontWeight: 600,
                }}
              >
                <span>Book Technical Consultation</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Novarix AI. All rights reserved. Sovereign Enterprise AI Platform.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981' }}>
              <ShieldCheck size={14} />
              <span>SOC2 Type II Aligned</span>
            </span>
            <a href="#security" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>
              Privacy & Zero-Retention Policy
            </a>
            <a href="#security" style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>
              Security Whitepaper
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
