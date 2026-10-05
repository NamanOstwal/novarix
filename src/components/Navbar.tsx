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
    { label: 'About', href: '#team' },
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
      <div className="nav-container-superconscious" style={{ maxWidth: '1540px', margin: '0 auto', padding: '0 24px' }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} aria-label="Novarix Home">
          <NovarixLogo height={28} withGlow />
        </a>

        {/* Center Desktop Navigation Links */}
        <nav
          className="hidden xl:flex"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
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
                fontSize: '13.5px',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.75)',
                padding: '6px 12px',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF'
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            className="btn-superconscious-primary"
            onClick={openConsult}
            style={{ padding: '0.55rem 1.4rem', fontSize: '13.5px' }}
          >
            <Calendar size={14} />
            <span>Book a Demo</span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="xl:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: '64px 0 0 0',
            backgroundColor: '#0C0B0C',
            zIndex: 9999,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-matter)',
                  fontSize: '15px',
                  fontWeight: 500,
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} color="var(--neon-cyan)" />
              </a>
            ))}
          </div>

          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <button
              type="button"
              className="btn-superconscious-primary"
              onClick={() => {
                setMobileMenuOpen(false)
                openConsult()
              }}
              style={{ width: '100%', padding: '0.85rem 1.6rem', fontSize: '15px' }}
            >
              <span>Book a 30-Minute Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
