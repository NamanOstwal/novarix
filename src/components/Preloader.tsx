import { useState, useEffect, type FC } from 'react'

interface PreloaderProps {
  onLoaded?: () => void
}

export const Preloader: FC<PreloaderProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('Initializing sovereign neural engine...')
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isExited, setIsExited] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const step = Math.max(1, Math.floor((100 - prev) * 0.12) + Math.floor(Math.random() * 4))
        const next = Math.min(100, prev + step)

        if (next < 25) {
          setStatusText('Aligning cosmic neural fabric...')
        } else if (next < 55) {
          setStatusText('Initializing autonomous agent swarms...')
        } else if (next < 80) {
          setStatusText('Synthesizing multi-modal reasoning models...')
        } else if (next < 98) {
          setStatusText('Verifying sovereign perimeter encryption...')
        } else {
          setStatusText('Novarix Platform Ready.')
        }

        return next
      })
    }, 45)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true)
        if (onLoaded) onLoaded()
      }, 500)

      const exitTimer = setTimeout(() => {
        setIsExited(true)
      }, 1200)

      return () => {
        clearTimeout(timer)
        clearTimeout(exitTimer)
      }
    }
  }, [progress, onLoaded])

  const handleSkip = () => {
    setIsFadingOut(true)
    setTimeout(() => {
      setIsExited(true)
      if (onLoaded) onLoaded()
    }, 400)
  }

  if (isExited) return null

  return (
    <aside
      aria-label="Novarix Initializing"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: '#0C0B0C',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'opacity 0.75s cubic-bezier(0.19, 1, 0.22, 1), transform 0.75s cubic-bezier(0.19, 1, 0.22, 1)',
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? 'scale(1.04) translateY(-12px)' : 'none',
        pointerEvents: isFadingOut ? 'none' : 'auto',
      }}
    >
      {/* Superconscious Cosmic Blur Ellipse */}
      <div className="cosmic-blur-ellipse" />

      {/* Rotating Ambient Light Source */}
      <div
        className="card-gradient-point"
        style={{
          position: 'absolute',
          top: '30%',
          left: '30%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, rgba(115, 34, 242, 0.15) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Skip button in top corner */}
      <button
        onClick={handleSkip}
        style={{
          position: 'absolute',
          top: '24px',
          right: '32px',
          fontFamily: 'var(--font-matter)',
          fontSize: '12px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.5)',
          padding: '6px 14px',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#00F0FF'
          e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
        }}
      >
        Skip [Esc]
      </button>

      {/* Centerpiece Container */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '26px',
          zIndex: 2,
          padding: '0 24px',
        }}
      >
        {/* Animated User Logo with Holographic Rings */}
        <div
          style={{
            position: 'relative',
            width: '160px',
            height: '160px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Outer Rotating Cyan Orbital Ring */}
          <div
            className="animate-spin-slow"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '9999px',
              border: '1px dashed rgba(0, 240, 255, 0.45)',
              boxShadow: '0 0 25px rgba(0, 240, 255, 0.3)',
            }}
          />

          {/* Inner Counter-Rotating Violet Ring */}
          <div
            className="animate-spin-reverse-slow"
            style={{
              position: 'absolute',
              inset: '16px',
              borderRadius: '9999px',
              border: '1.5px solid rgba(151, 128, 255, 0.45)',
              boxShadow: '0 0 20px rgba(115, 34, 242, 0.25)',
            }}
          />

          {/* Embedded User Logo in Center with Ambient Glow */}
          <div
            className="animate-pulse-glow"
            style={{
              position: 'relative',
              zIndex: 3,
              width: '96px',
              height: '96px',
            }}
          >
            <img
              src="/assets/novarix-logo.png"
              alt="Novarix"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '24px',
                filter: 'drop-shadow(0 0 22px rgba(0, 240, 255, 0.9)) drop-shadow(0 0 45px rgba(0, 112, 243, 0.6))',
              }}
            />
          </div>
        </div>

        {/* Brand Wordmark in Season Mix with Cyan Accent */}
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: 'var(--font-season-mix)',
              fontSize: '34px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textShadow: '0 0 25px rgba(0, 240, 255, 0.4)',
              marginBottom: '6px',
            }}
          >
            Novarix
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-matter)',
              fontSize: '11.5px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#00F0FF',
            }}
          >
            Sovereign Enterprise AI Platform
          </p>
        </div>

        {/* Dynamic Status Text */}
        <div
          style={{
            minHeight: '20px',
            fontFamily: 'var(--font-matter)',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.65)',
            textAlign: 'center',
            letterSpacing: '0.02em',
          }}
        >
          {statusText}
        </div>

        {/* Progress Bar & Percentage */}
        <div
          style={{
            width: '260px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '9999px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #0070F3 0%, #00F0FF 50%, #9780FF 100%)',
                borderRadius: '9999px',
                transition: 'width 0.1s ease-out',
                boxShadow: '0 0 12px rgba(0, 240, 255, 0.8)',
              }}
            />
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12.5px',
              fontWeight: 500,
              color: '#00F0FF',
              letterSpacing: '0.06em',
            }}
          >
            {progress.toString().padStart(2, '0')}%
          </div>
        </div>
      </div>
    </aside>
  )
}
