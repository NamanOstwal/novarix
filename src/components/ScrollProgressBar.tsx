import { useEffect, useState, type FC } from 'react'

const SECTIONS = [
  { id: 'main', label: 'Overview' },
  { id: 'problem', label: 'The Problem' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'transformation-matrix', label: '3D Flip Matrix' },
  { id: 'demo', label: 'Live Agent' },
  { id: 'use-cases', label: 'Use Cases' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'security', label: 'Security' },
  { id: 'calculator', label: 'ROI Calculator' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'team', label: 'About' },
  { id: 'faq', label: 'FAQ' },
]

export const ScrollProgressBar: FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [activeSection, setActiveSection] = useState('main')

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0
      setScrollPercent(Math.min(100, Math.max(0, scrolled)))

      // Find active section
      const scrollPos = winScroll + window.innerHeight * 0.35
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sec = document.getElementById(SECTIONS[i].id)
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <aside
      className="hidden 2xl:flex"
      aria-label="Scroll Progress and Section Navigation"
      style={{
        position: 'fixed',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 8000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px',
        pointerEvents: 'none',
      }}
    >
      {/* Laser progress track pill */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 6px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(12, 11, 12, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 112, 243, 0.2)',
          pointerEvents: 'auto',
        }}
      >
        {/* Slim Laser Track */}
        <div
          style={{
            position: 'relative',
            width: '3px',
            height: '140px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: `${scrollPercent}%`,
              background: 'linear-gradient(180deg, #00F0FF 0%, #0070F3 50%, #9780FF 100%)',
              boxShadow: '0 0 12px #00F0FF, 0 0 24px #0070F3',
              borderRadius: '9999px',
              transition: 'height 0.1s ease-out',
            }}
          />
        </div>

        {/* Section Dots */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {SECTIONS.slice(0, 6).map((sec) => {
            const isActive = activeSection === sec.id
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                title={sec.label}
                aria-label={`Scroll to ${sec.label}`}
                style={{
                  width: '6px',
                  height: isActive ? '16px' : '6px',
                  borderRadius: '9999px',
                  backgroundColor: isActive ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.25)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s var(--ease-super)',
                  boxShadow: isActive ? '0 0 12px var(--neon-cyan)' : 'none',
                }}
              />
            )
          })}
        </div>
      </div>
    </aside>
  )
}
