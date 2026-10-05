import type { FC } from 'react'
import { Calendar, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react'
import { useConsult } from '../context/ConsultContext'

export const FinalCtaSection: FC = () => {
  const { openConsult } = useConsult()

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '80px 24px 120px',
        backgroundColor: '#0C0B0C',
      }}
    >
      {/* Superconscious Outer Glow Card */}
      <div
        className="sc-stroke-card"
        style={{
          borderRadius: '32px',
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
        }}
      >
        <div className="sc-gradient-beam" />
        <div
          className="sc-card-body"
          style={{
            padding: 'clamp(40px, 6vw, 72px) clamp(24px, 5vw, 64px)',
            backgroundColor: 'radial-gradient(ellipse at 50% 0%, rgba(0, 112, 243, 0.25) 0%, rgba(12, 11, 12, 0.95) 75%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Top Badge */}
          <div className="sc-telemetry-badge" style={{ marginBottom: '22px' }}>
            <Sparkles size={13} color="var(--neon-cyan)" />
            <span>Ready to Transform Your Operational Workflows?</span>
          </div>

          {/* Big Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-season-mix)',
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              maxWidth: '860px',
              marginBottom: '20px',
              textShadow: '0 0 40px rgba(0, 112, 243, 0.4)',
            }}
          >
            Have a Workflow That Should Be Automated?
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-matter)',
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: 'rgba(255, 255, 255, 0.78)',
              lineHeight: 1.6,
              maxWidth: '680px',
              marginBottom: '40px',
            }}
          >
            Schedule a 30-minute consultation with our engineering team. We’ll map your workflow, evaluate technical feasibility, and design a custom proof-of-concept.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px',
              marginBottom: '36px',
            }}
          >
            <button
              type="button"
              className="btn-superconscious-primary"
              onClick={openConsult}
              style={{ padding: '0.95rem 2.4rem', fontSize: '16px' }}
            >
              <Calendar size={18} />
              <span>Book a 30-Minute Consultation</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="#demo"
              className="btn-superconscious-secondary"
              style={{ padding: '0.95rem 2.2rem', fontSize: '16px', textDecoration: 'none' }}
            >
              <span>Explore Interactive Demo</span>
            </a>
          </div>

          {/* Trust assurances strip */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(16px, 3vw, 32px)',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.55)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#10B981" />
              <span>Zero data training guarantee</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={16} color="var(--neon-cyan)" />
              <span>2–4 week production rollout</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#9780FF" />
              <span>Sovereign VPC & on-prem deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
