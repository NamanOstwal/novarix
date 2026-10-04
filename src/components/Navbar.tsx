import { useState, type FC } from 'react'
import { NovarixLogo } from './NovarixLogo'
import { useConsult } from '../context/ConsultContext'

export const Navbar: FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openConsult } = useConsult()

  return (
    <header className="header-superconscious">
      <div className="nav-container-superconscious">
        {/* Brand Logo with User's Uploaded Icon (Enlarged & Clear) */}
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <NovarixLogo height={28} withGlow />
        </a>

        {/* Center Desktop Nav Links with Kinetic Hover Mask */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          className="hidden md:flex"
          onMouseLeave={() => setActiveMenu(null)}
        >
          {/* Products Dropdown */}
          <div style={{ position: 'relative' }} onMouseEnter={() => setActiveMenu('products')}>
            <button
              type="button"
              className="nav-link-item"
              style={{
                fontFamily: 'var(--font-matter)',
                fontSize: '14px',
                fontWeight: 500,
                color: activeMenu === 'products' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.75)',
                padding: '6px 14px',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
              }}
            >
              <span className="hover-link-mask">
                <span className="nav-link-text original">Products</span>
                <span className="nav-link-text clone">Products</span>
              </span>
              <svg
                width="8"
                height="5"
                viewBox="0 0 10 6"
                fill="none"
                style={{
                  opacity: 0.6,
                  transform: activeMenu === 'products' ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.25s ease',
                }}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Superconscious Dropdown Mega-Card */}
            {activeMenu === 'products' && (
              <div className="super-dropdown-menu">
                <a
                  href="#playground"
                  onClick={() => setActiveMenu(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px 14px',
                    borderRadius: '14px',
                    transition: 'all 0.2s ease',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.08)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)'
                    e.currentTarget.style.transform = 'none'
                  }}
                >
                  <div
                    style={{
                      padding: '8px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 240, 255, 0.12)',
                      border: '1px solid rgba(0, 240, 255, 0.3)',
                      color: '#00F0FF',
                      display: 'flex',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" x2="12" y1="19" y2="22" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                      Autonomous Voice Agents
                    </div>
                    <div style={{ fontFamily: 'var(--font-matter)', fontSize: '12px', color: 'rgba(255, 255, 255, 0.55)', marginTop: '2px' }}>
                      Real-time conversational agents fluent in 12+ Indic languages.
                    </div>
                  </div>
                </a>

                <a
                  href="#playground"
                  onClick={() => setActiveMenu(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px 14px',
                    borderRadius: '14px',
                    transition: 'all 0.2s ease',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 112, 243, 0.1)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)'
                    e.currentTarget.style.transform = 'none'
                  }}
                >
                  <div
                    style={{
                      padding: '8px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 112, 243, 0.12)',
                      border: '1px solid rgba(0, 112, 243, 0.3)',
                      color: '#38BDF8',
                      display: 'flex',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                      Document Intelligence & OCR
                    </div>
                    <div style={{ fontFamily: 'var(--font-matter)', fontSize: '12px', color: 'rgba(255, 255, 255, 0.55)', marginTop: '2px' }}>
                      Sub-millisecond spatial parsing of unstructured financial files.
                    </div>
                  </div>
                </a>

                <a
                  href="#platform"
                  onClick={() => setActiveMenu(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px 14px',
                    borderRadius: '14px',
                    transition: 'all 0.2s ease',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(151, 128, 255, 0.1)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)'
                    e.currentTarget.style.transform = 'none'
                  }}
                >
                  <div
                    style={{
                      padding: '8px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(151, 128, 255, 0.12)',
                      border: '1px solid rgba(151, 128, 255, 0.3)',
                      color: '#9780FF',
                      display: 'flex',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>
                      Workflow Orchestrator
                    </div>
                    <div style={{ fontFamily: 'var(--font-matter)', fontSize: '12px', color: 'rgba(255, 255, 255, 0.55)', marginTop: '2px' }}>
                      Multi-agent swarms resolving end-to-end enterprise tasks.
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Developers Dropdown */}
          <div style={{ position: 'relative' }} onMouseEnter={() => setActiveMenu('developers')}>
            <button
              type="button"
              className="nav-link-item"
              style={{
                fontFamily: 'var(--font-matter)',
                fontSize: '14px',
                fontWeight: 500,
                color: activeMenu === 'developers' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.75)',
                padding: '6px 14px',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
              }}
            >
              <span className="hover-link-mask">
                <span className="nav-link-text original">Developers</span>
                <span className="nav-link-text clone">Developers</span>
              </span>
              <svg
                width="8"
                height="5"
                viewBox="0 0 10 6"
                fill="none"
                style={{
                  opacity: 0.6,
                  transform: activeMenu === 'developers' ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.25s ease',
                }}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {activeMenu === 'developers' && (
              <div className="super-dropdown-menu" style={{ width: '320px' }}>
                <a href="#developers" onClick={() => setActiveMenu(null)} style={{ padding: '10px 14px', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>API Documentation</span>
                  <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.55)' }}>REST endpoints and quickstart guides</span>
                </a>
                <a href="#developers" onClick={() => setActiveMenu(null)} style={{ padding: '10px 14px', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>Python & JS SDKs</span>
                  <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.55)' }}>One line install with full type safety</span>
                </a>
                <a href="#playground" onClick={() => setActiveMenu(null)} style={{ padding: '10px 14px', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>Interactive Playground</span>
                  <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.55)' }}>Test models in browser with live telemetry</span>
                </a>
              </div>
            )}
          </div>

          <a href="#platform" className="nav-link-item" style={{ padding: '6px 14px' }}>
            <span className="hover-link-mask" style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.75)' }}>
              <span className="nav-link-text original">Platform</span>
              <span className="nav-link-text clone">Platform</span>
            </span>
          </a>

          <a href="#why-novarix" className="nav-link-item" style={{ padding: '6px 14px' }}>
            <span className="hover-link-mask" style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.75)' }}>
              <span className="nav-link-text original">Why Novarix</span>
              <span className="nav-link-text clone">Why Novarix</span>
            </span>
          </a>

          <a href="#research" className="nav-link-item" style={{ padding: '6px 14px' }}>
            <span className="hover-link-mask" style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.75)' }}>
              <span className="nav-link-text original">Research</span>
              <span className="nav-link-text clone">Research</span>
            </span>
          </a>
        </nav>

        {/* Right Upper Widget Bar & CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            type="button"
            className="btn-superconscious-primary"
            style={{ padding: '0.55rem 1.3rem', fontSize: '13.5px' }}
            onClick={openConsult}
          >
            Join Waitlist
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span style={{ width: '16px', height: '1.5px', backgroundColor: '#FFFFFF', transition: 'all 0.3s ease', transform: mobileMenuOpen ? 'rotate(45deg) translate(3px, 4px)' : 'none' }}></span>
            <span style={{ width: '16px', height: '1.5px', backgroundColor: '#FFFFFF', opacity: mobileMenuOpen ? 0 : 1, transition: 'opacity 0.3s ease' }}></span>
            <span style={{ width: '16px', height: '1.5px', backgroundColor: '#FFFFFF', transition: 'all 0.3s ease', transform: mobileMenuOpen ? 'rotate(-45deg) translate(3px, -4px)' : 'none' }}></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Backdrop & Menu */}
      {mobileMenuOpen && (
        <>
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 9998,
              pointerEvents: 'auto',
            }}
            className="md:hidden"
          />
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 12px)',
              width: '92%',
              maxWidth: '380px',
              padding: '24px',
              backgroundColor: 'rgba(18, 17, 24, 0.98)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 112, 243, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              pointerEvents: 'auto',
              zIndex: 9999,
              maxHeight: 'calc(85vh - 80px)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
            className="md:hidden"
          >
            <a href="#playground" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15.5px', color: '#FFFFFF', fontWeight: 500, padding: '4px 0' }}>Products</a>
            <a href="#developers" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15.5px', color: '#FFFFFF', fontWeight: 500, padding: '4px 0' }}>Developers</a>
            <a href="#platform" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15.5px', color: '#FFFFFF', fontWeight: 500, padding: '4px 0' }}>Platform</a>
            <a href="#why-novarix" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15.5px', color: '#FFFFFF', fontWeight: 500, padding: '4px 0' }}>Why Novarix</a>
            <a href="#research" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '15.5px', color: '#FFFFFF', fontWeight: 500, padding: '4px 0' }}>Research</a>
            <button
              type="button"
              className="btn-superconscious-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '10px', padding: '0.85rem' }}
              onClick={() => { setMobileMenuOpen(false); openConsult(); }}
            >
              <span>Join Waitlist</span>
            </button>
          </div>
        </>
      )}
    </header>
  )
}
