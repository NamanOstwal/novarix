import { useState, useEffect, type FC } from 'react'
import { NovarixLogo } from './NovarixLogo'
import { useConsult } from '../context/ConsultContext'
import { Menu, X, ChevronRight, Calendar } from 'lucide-react'

export const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openConsult } = useConsult()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const NAV_LINKS = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Live Demo', href: '#demo' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Security', href: '#security' },
    { label: 'ROI Calculator', href: '#calculator' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'FAQ', href: '#faq' },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className="header-superconscious"
        style={{
          backgroundColor: scrolled ? 'rgba(12, 11, 12, 0.88)' : 'rgba(12, 11, 12, 0.45)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'}`,
          transition: 'all 0.3s ease',
        }}
      >
        <div className="nav-container-superconscious" style={{ maxWidth: '1540px', margin: '0 auto', padding: '0 20px' }}>
          {/* Brand Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} aria-label="Novarix Home">
            <NovarixLogo height={28} withGlow />
          </a>

          {/* Desktop & Tablet Navigation Links */}
          <nav
            className="hidden lg:flex"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                style={{
                  fontFamily: 'var(--font-matter)',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.78)',
                  padding: '6px 11px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF'
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              className="btn-superconscious-primary"
              onClick={openConsult}
              style={{ padding: '0.55rem 1.35rem', fontSize: '13.5px', whiteSpace: 'nowrap' }}
            >
              <Calendar size={14} />
              <span>Book a Demo</span>
            </button>

            {/* Mobile / Tablet Menu Hamburger Toggle */}
            <button
              type="button"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: mobileMenuOpen ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                border: `1px solid ${mobileMenuOpen ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.15)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: mobileMenuOpen ? 'var(--neon-cyan)' : '#FFFFFF',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: mobileMenuOpen ? '0 0 16px rgba(0, 240, 255, 0.4)' : 'none',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Menu with Direct Pointer Events */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(12, 11, 12, 0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            zIndex: 99999,
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
            pointerEvents: 'auto',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {/* Top Row with Logo & Close */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <NovarixLogo height={26} withGlow />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Links Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-matter)',
                  fontSize: '15.5px',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} color="var(--neon-cyan)" />
              </a>
            ))}
          </div>

          {/* Bottom Action Section */}
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              type="button"
              className="btn-superconscious-primary"
              onClick={() => {
                setMobileMenuOpen(false)
                openConsult()
              }}
              style={{ width: '100%', padding: '0.9rem 1.6rem', fontSize: '15px' }}
            >
              <Calendar size={16} />
              <span>Book a 30-Minute Consultation</span>
            </button>

            <div style={{ textAlign: 'center', fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.5)' }}>
              Sovereign Enterprise AI · Zero Data Retention
            </div>
          </div>
        </div>
      )}
    </>
  )
}
