import { useState, type FC } from 'react'
import { useConsult } from '../context/ConsultContext'

export const EnterpriseCan: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { openConsult } = useConsult()

  return (
    <section
      data-section-reveal
      style={{
        position: 'relative',
        width: '100%',
        padding: '70px 0 90px',
        backgroundColor: '#0C0B0C',
      }}
    >
      <div className="container-sarvam">
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
          className="md:flex-row"
        >
          {/* Left Description Card */}
          <div
            style={{
              flex: '0 0 35%',
              backgroundColor: '#141318',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-season-mix)',
                  fontSize: 'clamp(32px, 3.5vw, 44px)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                  textShadow: '0 0 25px rgba(0, 112, 243, 0.25)',
                }}
              >
                Enterprises Can
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-matter)',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.72)',
                }}
              >
                From global financial institutions processing transactions for 800 million citizens to enterprises transforming customer engagement, AI that understands enterprise domain logic is changing what's possible.
              </p>
            </div>

            <div>
              <button
                type="button"
                className="btn-superconscious-primary"
                onClick={openConsult}
              >
                Explore Novarix
              </button>
            </div>
          </div>

          {/* Right Video / Interactive Canvas Container */}
          <div
            style={{
              flex: 1,
              position: 'relative',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              overflow: 'hidden',
              backgroundColor: '#0A090D',
              aspectRatio: '16 / 9',
              minHeight: '340px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(0, 112, 243, 0.18)',
            }}
          >
            {/* Visual Background Poster & Ambient Pulse */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 60% 40%, rgba(0, 112, 243, 0.35) 0%, rgba(12, 11, 12, 0.95) 75%)',
                zIndex: 1,
              }}
            />

            {/* Neural Lattice Grid Graphic */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(0, 240, 255, 0.18) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                opacity: 0.5,
                zIndex: 1,
              }}
            />

            {/* Live Metrics Telemetry HUD */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '24px',
                right: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 5,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00F0FF', boxShadow: '0 0 10px #00F0FF', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#00F0FF', letterSpacing: '0.05em' }}>
                  SOVEREIGN CLUSTER: IN-CENTRAL-1
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#A5B4FC' }}>
                LATENCY: 84ms | THROUGHPUT: 94.2k req/s
              </div>
            </div>

            {/* Center Play Button with Superconscious Glow */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                position: 'relative',
                zIndex: 10,
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(0, 240, 255, 0.5)',
                boxShadow: '0 0 35px rgba(0, 240, 255, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s cubic-bezier(0.19, 1, 0.22, 1)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#00F0FF" style={{ marginLeft: '3px' }}>
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>

            {/* Bottom Floating Stats */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '24px',
                right: '24px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: 'rgba(12, 11, 12, 0.75)',
                backdropFilter: 'blur(16px)',
                padding: '12px 20px',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                zIndex: 5,
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-season-mix)', fontSize: '20px', fontWeight: 600, color: '#00F0FF' }}>800M+</div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)' }}>Citizens Reachable</div>
              </div>
              <div style={{ height: '24px', width: '1px', backgroundColor: 'rgba(255,255,255,0.15)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-season-mix)', fontSize: '20px', fontWeight: 600, color: '#FFFFFF' }}>22</div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)' }}>Indic Languages</div>
              </div>
              <div style={{ height: '24px', width: '1px', backgroundColor: 'rgba(255,255,255,0.15)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-season-mix)', fontSize: '20px', fontWeight: 600, color: '#00F0FF' }}>99.99%</div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)' }}>Enterprise SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
