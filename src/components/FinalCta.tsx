import type { FC } from 'react'
import { useConsult } from '../context/ConsultContext'

export const FinalCta: FC = () => {
  const { openConsult } = useConsult()

  return (
    <section
      data-section-reveal
      style={{
        position: 'relative',
        width: '100%',
        padding: '80px 0 120px',
        backgroundColor: 'var(--sf)',
        overflow: 'hidden',
      }}
    >
      <div className="container-sarvam">
        <div
          style={{
            position: 'relative',
            borderRadius: '32px',
            backgroundColor: '#0F0E14',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: 'clamp(56px, 7vw, 96px) clamp(24px, 5vw, 64px)',
            textAlign: 'center',
            overflow: 'hidden',
            boxShadow: '0 24px 80px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
          }}
        >
          {/* Rotating Cosmic Gradient Light (Superconscious signature) */}
          <div
            className="card-gradient-point"
            style={{
              position: 'absolute',
              top: '-40%',
              left: '50%',
              marginLeft: '-350px',
              width: '700px',
              height: '700px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 240, 255, 0.22) 0%, rgba(115, 34, 242, 0.35) 40%, rgba(0, 112, 243, 0.2) 65%, transparent 75%)',
              filter: 'blur(70px)',
              pointerEvents: 'none',
              opacity: 0.85,
            }}
          />

          {/* Additional bottom purple rim glow */}
          <div
            style={{
              position: 'absolute',
              bottom: '-30%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '350px',
              background: 'radial-gradient(ellipse, rgba(151, 128, 255, 0.25) 0%, transparent 70%)',
              filter: 'blur(80px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 5,
              maxWidth: '820px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Embedded Floating Logo with Pulsing Halo */}
            <div
              className="animate-glow-ring"
              style={{
                position: 'relative',
                marginBottom: '28px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '-14px',
                  borderRadius: '32px',
                  background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.6), rgba(115, 34, 242, 0.5))',
                  filter: 'blur(22px)',
                  opacity: 0.9,
                }}
              />
              <img
                src="/assets/novarix-logo.png"
                alt="Novarix Emblem"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '26px',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 0 45px rgba(0, 240, 255, 0.7), inset 0 0 25px rgba(0, 240, 255, 0.4)',
                  border: '1.5px solid rgba(0, 240, 255, 0.6)',
                }}
              />
            </div>

            {/* Top Badge */}
            <div
              style={{
                fontFamily: 'var(--font-matter)',
                fontSize: '12px',
                fontWeight: 600,
                color: '#00F0FF',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                padding: '5px 16px',
                borderRadius: '9999px',
                background: 'rgba(0, 240, 255, 0.08)',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                marginBottom: '20px',
              }}
            >
              Enterprise Sovereign Automation
            </div>

            {/* Headline in Season Mix */}
            <h2
              style={{
                fontFamily: 'var(--font-season-mix)',
                fontSize: 'clamp(32px, 5.2vw, 58px)',
                fontWeight: 500,
                color: '#FFFFFF',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                marginBottom: '20px',
              }}
            >
              Build the Future of Enterprise AI with Novarix
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: 'var(--font-matter)',
                fontSize: 'clamp(16px, 2vw, 19px)',
                color: 'rgba(255, 255, 255, 0.72)',
                lineHeight: 1.6,
                maxWidth: '640px',
                marginBottom: '40px',
              }}
            >
              Partner with forward-deployed engineers to automate complex operational workflows with sovereign latency, privacy, and full deterministic control.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                type="button"
                className="btn-superconscious-primary"
                style={{
                  padding: '14px 34px',
                  fontSize: '16px',
                }}
                onClick={openConsult}
              >
                Talk to an AI Architect
              </button>

              <button
                type="button"
                className="btn-superconscious-secondary"
                style={{
                  padding: '14px 34px',
                  fontSize: '16px',
                }}
                onClick={openConsult}
              >
                Schedule Strategy Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
