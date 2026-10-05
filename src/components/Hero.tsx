import { useEffect, useRef, useState, type FC, type MouseEvent } from 'react'
import { useConsult } from '../context/ConsultContext'
import { ParticlesBackground } from './ParticlesBackground'
import { SlimyBlobCanvas } from './SlimyBlobCanvas'
import { IntegrationsShowcase } from './IntegrationsShowcase'
import { SplitBlurText } from './SplitBlurText'

export const Hero: FC = () => {
  const { openConsult } = useConsult()
  const btnRef = useRef<HTMLButtonElement>(null)
  const desktopVideoRef = useRef<HTMLVideoElement>(null)
  const mobileVideoRef = useRef<HTMLVideoElement>(null)
  const [desktopVideoPlaying, setDesktopVideoPlaying] = useState(false)
  const [mobileVideoPlaying, setMobileVideoPlaying] = useState(false)

  // Robust programmatic video play trigger for iOS Safari, Android, and WebViews
  useEffect(() => {
    const startVideo = (video: HTMLVideoElement | null, setPlaying: (val: boolean) => void) => {
      if (!video) return
      video.muted = true
      video.defaultMuted = true
      video.playsInline = true
      video.setAttribute('playsinline', 'true')
      video.setAttribute('webkit-playsinline', 'true')
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlaying(true)
          })
          .catch(() => {
            // Autoplay delayed or restricted by mobile battery-saver mode.
            // SlimyBlobCanvas continues running underneath seamlessly!
          })
      }
    }

    startVideo(desktopVideoRef.current, setDesktopVideoPlaying)
    startVideo(mobileVideoRef.current, setMobileVideoPlaying)

    // Touch resume listener: the moment mobile user touches or scrolls, resume videos immediately
    const resumeOnInteraction = () => {
      startVideo(desktopVideoRef.current, setDesktopVideoPlaying)
      startVideo(mobileVideoRef.current, setMobileVideoPlaying)
    }

    window.addEventListener('touchstart', resumeOnInteraction, { once: true, passive: true })
    window.addEventListener('touchend', resumeOnInteraction, { once: true, passive: true })
    window.addEventListener('click', resumeOnInteraction, { once: true, passive: true })
    window.addEventListener('scroll', resumeOnInteraction, { once: true, passive: true })

    return () => {
      window.removeEventListener('touchstart', resumeOnInteraction)
      window.removeEventListener('touchend', resumeOnInteraction)
      window.removeEventListener('click', resumeOnInteraction)
      window.removeEventListener('scroll', resumeOnInteraction)
    }
  }, [])

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    btnRef.current.style.setProperty('--gx', `${x}px`)
    btnRef.current.style.setProperty('--gy', `${y}px`)
  }

  return (
    <section
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 'clamp(115px, 15vh, 160px)',
        minHeight: '94vh',
        overflow: 'hidden',
        backgroundColor: '#0C0B0C',
      }}
    >
      {/* 1. Guaranteed Living Slimy Fluid Blob Simulation (Always running at 60fps on mobile & desktop) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 1,
        }}
      >
        <SlimyBlobCanvas />
      </div>

      {/* 2. Superconscious High-Resolution Video Layer (Desktop + Mobile Portrait) */}
      <div
        className="hero-video-area"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 2,
          maskImage: 'linear-gradient(180deg, #000 0%, #000 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(180deg, #000 0%, #000 88%, transparent 100%)',
        }}
      >
        {/* Desktop Video (Screen width >= 768px) */}
        <div className="hidden md:block" style={{ width: '100%', height: '100%' }}>
          <video
            ref={desktopVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controls={false}
            onPlaying={() => setDesktopVideoPlaying(true)}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: desktopVideoPlaying ? 0.72 : 0,
              transition: 'opacity 0.6s ease',
              filter: 'contrast(125%) brightness(0.62) saturate(135%)',
            }}
          >
            <source src="/assets/blob-hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Mobile Portrait Video (Screen width < 768px - Superconscious phone optimized) */}
        <div className="block md:hidden" style={{ width: '100%', height: '100%' }}>
          <video
            ref={mobileVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controls={false}
            onPlaying={() => setMobileVideoPlaying(true)}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: mobileVideoPlaying ? 0.75 : 0,
              transition: 'opacity 0.6s ease',
              filter: 'contrast(125%) brightness(0.65) saturate(135%)',
            }}
          >
            <source src="/assets/blob-hero-mobile.mp4" type="video/mp4" />
            <source src="/assets/blob-hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* 3. 4-Way Seamless Boundary Dissolve Gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, #0C0B0C 0%, rgba(12, 11, 12, 0.7) 15%, transparent 32%, transparent 68%, rgba(12, 11, 12, 0.85) 85%, #0C0B0C 100%), linear-gradient(90deg, #0C0B0C 0%, rgba(12, 11, 12, 0.7) 10%, transparent 28%, transparent 72%, rgba(12, 11, 12, 0.7) 90%, #0C0B0C 100%)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />

      {/* Central High-Contrast Dark Gradient Scrim (Tames middle brightness & guarantees 100% text readability) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 48%, rgba(12, 11, 12, 0.82) 0%, rgba(12, 11, 12, 0.55) 45%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 4,
        }}
      />

      {/* Desktop Radial Center Aperture Vignette */}
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 85% 75% at 50% 45%, transparent 35%, rgba(12, 11, 12, 0.65) 68%, #0C0B0C 98%)',
          pointerEvents: 'none',
          zIndex: 4,
        }}
      />

      {/* Superconscious Cosmic Background Particles */}
      <ParticlesBackground particleCount={45} />

      {/* Superconscious Cosmic Blur Ellipse */}
      <div className="cosmic-blur-ellipse" />

      {/* Rotating Background Nebula Gradient */}
      <div
        className="card-gradient-point"
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 112, 243, 0.2) 0%, rgba(115, 34, 242, 0.15) 45%, transparent 70%)',
          filter: 'blur(70px)',
          zIndex: 0,
        }}
      />

      {/* Main Content Container */}
      <div
        className="container-sarvam"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingBottom: '60px',
        }}
      >
        {/* Floating User's Logo Emblem with Glowing Halo (Enlarged & Prominent) */}
        <div
          className="animate-glow-ring"
          style={{
            position: 'relative',
            width: '128px',
            height: '128px',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Pulsing Outer Aurora Halo */}
          <div
            style={{
              position: 'absolute',
              inset: '-16px',
              borderRadius: '35%',
              background: 'radial-gradient(circle, rgba(0, 240, 255, 0.65) 0%, rgba(0, 112, 243, 0.4) 45%, rgba(115, 34, 242, 0.25) 70%, transparent 80%)',
              filter: 'blur(22px)',
              pointerEvents: 'none',
            }}
          />
          <img
            src="/assets/novarix-logo.png"
            alt="Novarix"
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '30px',
              filter: 'drop-shadow(0 0 25px rgba(0, 240, 255, 0.9)) drop-shadow(0 0 50px rgba(0, 112, 243, 0.6))',
            }}
          />
        </div>

        {/* Top Tagline with Superconscious Glowing Radial Lines */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '280px',
              height: '1px',
              background: 'radial-gradient(circle, #00F0FF 0%, transparent 100%)',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-matter)',
              fontSize: '13.5px',
              fontWeight: 600,
              color: '#00F0FF',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0 16px',
              textShadow: '0 0 12px rgba(0, 240, 255, 0.6), 0 2px 8px rgba(0, 0, 0, 0.8)',
            }}
          >
            Production-Grade Enterprise AI Automation
          </p>
          <div
            style={{
              width: '280px',
              height: '1px',
              background: 'radial-gradient(circle, #00F0FF 0%, transparent 100%)',
            }}
          />
        </div>

        {/* Grand Headline in Season Mix with Superconscious Kinetic Blur-In */}
        <h1
          style={{
            fontFamily: 'var(--font-season-mix)',
            fontSize: 'clamp(40px, 5.5vw, 68px)',
            fontWeight: 500,
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
            maxWidth: '940px',
            marginBottom: '22px',
            textShadow: '0 4px 24px rgba(0, 0, 0, 0.95), 0 0 40px rgba(0, 112, 243, 0.4)',
          }}
        >
          <SplitBlurText direction="up" stagger={40} delay={100}>
            AI Systems That Actually
          </SplitBlurText>{' '}
          <br />
          <span style={{ color: '#00F0FF', textShadow: '0 4px 20px rgba(0, 0, 0, 0.95), 0 0 35px rgba(0, 240, 255, 0.6)' }}>
            <SplitBlurText direction="up" stagger={40} delay={300}>
              Do the Work.
            </SplitBlurText>
          </span>
        </h1>

        {/* Subtitle in Matter */}
        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: 'clamp(16.5px, 2vw, 19.5px)',
            fontWeight: 400,
            lineHeight: 1.65,
            color: 'rgba(255, 255, 255, 0.92)',
            maxWidth: '740px',
            marginBottom: '36px',
            textShadow: '0 2px 14px rgba(0, 0, 0, 0.95), 0 0 20px rgba(0, 0, 0, 0.8)',
          }}
        >
          We build autonomous AI agents, enterprise RAG systems, and workflow automation that connect directly into your business data, internal tools, and operations.
        </p>

        {/* Superconscious CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '18px',
            marginBottom: '44px',
          }}
        >
          <button
            ref={btnRef}
            type="button"
            className="btn-superconscious-primary"
            onMouseMove={handleMouseMove}
            onClick={openConsult}
            style={{ padding: '0.9rem 2.2rem', fontSize: '16px' }}
          >
            <span>Book a Demo</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>

          <a
            href="#demo"
            className="btn-superconscious-secondary"
            style={{
              padding: '0.9rem 2.2rem',
              fontSize: '16px',
              textDecoration: 'none',
              backgroundColor: 'rgba(18, 17, 24, 0.85)',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              color: '#FFFFFF',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 112, 243, 0.25)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <span>See Live Demo</span>
          </a>
        </div>

        {/* Trust & Credibility Strip */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(14px, 2vw, 24px)',
            padding: '14px 28px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(15, 14, 20, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
            marginBottom: '48px',
            fontSize: '13.5px',
            color: 'rgba(255, 255, 255, 0.85)',
            fontFamily: 'var(--font-matter)',
          }}
        >
          <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Built by engineers. Designed for production.</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>•</span>
          <span style={{ color: '#00F0FF', fontWeight: 600 }}>AI Agents</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>•</span>
          <span style={{ color: '#C4B5FD', fontWeight: 600 }}>Enterprise RAG</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>•</span>
          <span style={{ color: '#34D399', fontWeight: 600 }}>Zero Data Retention</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>•</span>
          <span style={{ color: '#93C5FD', fontWeight: 600 }}>500+ Integrations</span>
        </div>

        {/* Plug AI into your own data & over 500 integrations (n8n-style) with flowing apps/companies */}
        <IntegrationsShowcase />
      </div>
    </section>
  )
}
