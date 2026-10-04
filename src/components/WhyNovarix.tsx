import type { FC } from 'react'
import { useConsult } from '../context/ConsultContext'

interface FeaturePillar {
  id: string
  title: string
  description: string
  badge: string
  color: string
}

const PILLARS: FeaturePillar[] = [
  {
    id: 'sovereign',
    title: 'Sovereign by design',
    badge: 'Zero Data Retention',
    description: 'Build, deploy, and run autonomous AI with complete data residency, zero third-party telemetry leakage, and full sovereign perimeter control under your encryption keys.',
    color: 'var(--neon-cyan)',
  },
  {
    id: 'state-of-art',
    title: 'State of the art models',
    badge: 'Indic Benchmark #1',
    description: 'Proprietary reasoning and multi-modal models fine-tuned on real-world enterprise documents, speech, and complex multi-lingual multi-turn dialogues.',
    color: '#0070F3',
  },
  {
    id: 'humans',
    title: 'Human at the core',
    badge: 'Embedded Engineers',
    description: 'Forward deployed AI engineers embed alongside your internal engineering team to architect, integrate, and operationalize high-throughput agents in production.',
    color: '#9780FF',
  },
]

export const WhyNovarix: FC = () => {
  const { openConsult } = useConsult()

  return (
    <section
      id="why-novarix"
      data-section-reveal
      style={{
        position: 'relative',
        width: '100%',
        padding: '80px 24px 100px',
        backgroundColor: '#0C0B0C',
      }}
    >
      <div className="container-sarvam" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Section Heading with Superconscious Accent */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <div className="sc-telemetry-badge" style={{ marginBottom: '16px' }}>
            <span className="dot" />
            <span>Sovereign Enterprise AI</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-season-mix)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              textShadow: '0 0 35px rgba(0, 112, 243, 0.3)',
            }}
          >
            Powering the AI-first future
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-matter)',
              fontSize: '17px',
              color: 'rgba(255, 255, 255, 0.72)',
              lineHeight: 1.6,
              marginTop: '12px',
            }}
          >
            Engineered from ground up to deliver uncompromising autonomy without ever compromising institutional control.
          </p>
        </div>

        {/* Split Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Visual Banner Card in Superconscious Stroke Card */}
          <div className="sc-stroke-card" style={{ minHeight: '440px' }}>
            <div className="sc-gradient-beam" />
            <div
              className="sc-card-body"
              style={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '36px',
                overflow: 'hidden',
              }}
            >
              {/* Top Telemetry Chip */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 3 }}>
                <span className="sc-telemetry-badge">
                  <span className="dot" />
                  <span>Sovereign Hardware Enclave</span>
                </span>
                <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>EAL6+ Verified</span>
              </div>

              {/* Center Glowing Logo Hologram */}
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '32px 0',
                  zIndex: 3,
                }}
              >
                <div
                  className="animate-glow-ring"
                  style={{
                    position: 'relative',
                    width: '140px',
                    height: '140px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Orbital Ring behind hologram */}
                  <div
                    className="animate-spin-slow"
                    style={{
                      position: 'absolute',
                      inset: '-14px',
                      borderRadius: '50%',
                      border: '1.5px dashed rgba(0, 240, 255, 0.45)',
                      boxShadow: '0 0 35px rgba(0, 240, 255, 0.25)',
                    }}
                  />
                  <img
                    src="/assets/novarix-logo.png"
                    alt="Novarix Emblem"
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '32px',
                      filter: 'drop-shadow(0 0 35px rgba(0, 240, 255, 0.95)) drop-shadow(0 0 60px rgba(0, 112, 243, 0.6))',
                    }}
                  />
                </div>
              </div>

              {/* Bottom Tagline Overlay */}
              <div style={{ position: 'relative', zIndex: 3 }}>
                <div style={{ fontFamily: 'var(--font-season-mix)', fontSize: '24px', fontWeight: 500, color: '#FFFFFF', marginBottom: '6px' }}>
                  Institutional-Grade Autonomy
                </div>
                <div style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                  Operated entirely within secure enterprise boundaries with customer-owned cryptographic keys.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Feature Pillars in Bento Tiles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'space-between' }}>
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="sc-bento-tile"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  padding: '26px 30px',
                }}
              >
                {/* Superconscious Icon Pod */}
                <div className="sc-icon-pod" style={{ outlineColor: pillar.color, marginTop: '2px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C13 7.5 16.5 11 22 12C16.5 13 13 16.5 12 22C11 16.5 7.5 13 2 12C7.5 11 11 7.5 12 2Z"
                      fill={pillar.color}
                    />
                  </svg>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-matter)',
                        fontSize: '19px',
                        fontWeight: 600,
                        color: '#FFFFFF',
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <span className="sc-telemetry-badge" style={{ color: pillar.color }}>
                      <span className="dot" style={{ backgroundColor: pillar.color, boxShadow: `0 0 8px ${pillar.color}` }} />
                      <span>{pillar.badge}</span>
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-matter)',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      color: 'rgba(255, 255, 255, 0.68)',
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button
                type="button"
                className="btn-superconscious-primary"
                onClick={openConsult}
                style={{ padding: '0.85rem 2.2rem', fontSize: '15px' }}
              >
                <span>Partner with Novarix</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
