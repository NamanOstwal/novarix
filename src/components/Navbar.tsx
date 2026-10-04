import { useState, useEffect, type FC } from 'react'
import { NovarixLogo } from './NovarixLogo'
import { useConsult } from '../context/ConsultContext'

export const Navbar: FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true) // Open by default for immediate richness
  const [mobileDevelopersOpen, setMobileDevelopersOpen] = useState(false)
  const { openConsult } = useConsult()

  // Prevent background scroll when mobile menu is open
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

  return (
    <header className="header-superconscious">
      <div className="nav-container-superconscious">
        {/* Brand Logo with User's Uploaded Icon (Enlarged & Clear) */}
        <a href="#" style={{ display: 'flex', alignItems: 'center' }} aria-label="Novarix Home">
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            className="btn-superconscious-primary"
            style={{ padding: '0.45rem 1.1rem', fontSize: '12.5px', whiteSpace: 'nowrap' }}
            onClick={openConsult}
          >
            Join Waitlist
          </button>

          {/* Mobile Hamburger Toggle with Pulsing Glow Indicator */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: mobileMenuOpen ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              border: mobileMenuOpen ? '1px solid rgba(0, 240, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span style={{ width: '16px', height: '1.5px', backgroundColor: '#FFFFFF', transition: 'all 0.3s ease', transform: mobileMenuOpen ? 'rotate(45deg) translate(3.5px, 4px)' : 'none' }}></span>
            <span style={{ width: '16px', height: '1.5px', backgroundColor: '#FFFFFF', opacity: mobileMenuOpen ? 0 : 1, transition: 'opacity 0.2s ease' }}></span>
            <span style={{ width: '16px', height: '1.5px', backgroundColor: '#FFFFFF', transition: 'all 0.3s ease', transform: mobileMenuOpen ? 'rotate(-45deg) translate(3.5px, -4px)' : 'none' }}></span>
          </button>
        </div>
      </div>

      {/* Superconscious Mobile Navigation Drawer with Expandable Dropdowns & Widgets */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop with High-Performance Gaussian Blur */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(8, 7, 10, 0.8)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              zIndex: 9998,
              pointerEvents: 'auto',
            }}
            className="md:hidden"
          />

          {/* Luxury Sliding Glass Drawer */}
          <div
            style={{
              position: 'fixed',
              top: 'max(12px, env(safe-area-inset-top, 12px))',
              left: '12px',
              right: '12px',
              backgroundColor: 'rgba(14, 13, 18, 0.96)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              borderRadius: '26px',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 112, 243, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              pointerEvents: 'auto',
              zIndex: 9999,
              maxHeight: 'calc(94vh - max(20px, env(safe-area-inset-top, 20px)))',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              animation: 'mobileDrawerSlide 0.32s var(--ease-super)',
            }}
            className="md:hidden no-scrollbar"
          >
            {/* Drawer Header Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <NovarixLogo height={24} withGlow />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            {/* Drawer Body Items */}
            <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              
              {/* Telemetry Status Widget */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 240, 255, 0.06)',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  marginBottom: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#00F0FF', fontWeight: 600 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00F0FF', boxShadow: '0 0 8px #00F0FF' }} />
                  <span>Sovereign AI Runtime</span>
                </div>
                <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>12+ Indic Dialects</span>
              </div>

              {/* 1. Products Expandable Dropdown Accordion */}
              <div style={{ borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', overflow: 'hidden' }}>
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 16px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '15px',
                    fontFamily: 'var(--font-matter)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00F0FF' }} />
                    <span>Products</span>
                  </div>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    style={{
                      transform: mobileProductsOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s ease',
                      opacity: 0.7,
                    }}
                  >
                    <path d="M1 1L5 5L9 1" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {mobileProductsOpen && (
                  <div style={{ padding: '0 12px 14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <a
                      href="#playground"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        padding: '10px 12px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(0, 240, 255, 0.08)',
                        border: '1px solid rgba(0, 240, 255, 0.25)',
                      }}
                    >
                      <div style={{ color: '#00F0FF', paddingTop: '2px' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          <line x1="12" x2="12" y1="19" y2="22" />
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#FFFFFF' }}>Autonomous Voice Agents</div>
                        <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.6)', marginTop: '2px' }}>48kHz full-duplex conversational AI in 12+ dialects</div>
                      </div>
                    </a>

                    <a
                      href="#playground"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        padding: '10px 12px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(0, 112, 243, 0.08)',
                        border: '1px solid rgba(0, 112, 243, 0.25)',
                      }}
                    >
                      <div style={{ color: '#38BDF8', paddingTop: '2px' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#FFFFFF' }}>Document Intelligence & OCR</div>
                        <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.6)', marginTop: '2px' }}>Sub-millisecond spatial financial parsing</div>
                      </div>
                    </a>

                    <a
                      href="#platform"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        padding: '10px 12px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(151, 128, 255, 0.08)',
                        border: '1px solid rgba(151, 128, 255, 0.25)',
                      }}
                    >
                      <div style={{ color: '#9780FF', paddingTop: '2px' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#FFFFFF' }}>Workflow Orchestrator</div>
                        <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.6)', marginTop: '2px' }}>Multi-agent autonomous enterprise swarms</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              {/* 2. Developers Expandable Dropdown Accordion */}
              <div style={{ borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', overflow: 'hidden' }}>
                <button
                  type="button"
                  onClick={() => setMobileDevelopersOpen(!mobileDevelopersOpen)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 16px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '15px',
                    fontFamily: 'var(--font-matter)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#9780FF' }} />
                    <span>Developers</span>
                  </div>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    style={{
                      transform: mobileDevelopersOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s ease',
                      opacity: 0.7,
                    }}
                  >
                    <path d="M1 1L5 5L9 1" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {mobileDevelopersOpen && (
                  <div style={{ padding: '0 12px 14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <a
                      href="#developers"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#FFFFFF' }}>API Documentation</div>
                        <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.5)' }}>REST, WebSocket, & gRPC specs</div>
                      </div>
                      <span style={{ color: 'var(--neon-cyan)', fontSize: '16px' }}>→</span>
                    </a>

                    <a
                      href="#developers"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#FFFFFF' }}>Python & JS SDKs</div>
                        <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.5)' }}>One line install with full typing</div>
                      </div>
                      <span style={{ color: 'var(--neon-cyan)', fontSize: '16px' }}>→</span>
                    </a>

                    <a
                      href="#playground"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#FFFFFF' }}>Interactive Playground</div>
                        <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.5)' }}>Browser runtime sandbox</div>
                      </div>
                      <span style={{ color: 'var(--neon-cyan)', fontSize: '16px' }}>→</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Direct Page Navigation Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '6px 4px' }}>
                <a
                  href="#platform"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 12px',
                    fontSize: '15px',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    borderRadius: '10px',
                  }}
                >
                  <span>Platform Architecture</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>→</span>
                </a>
                <a
                  href="#why-novarix"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 12px',
                    fontSize: '15px',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    borderRadius: '10px',
                  }}
                >
                  <span>Why Novarix</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>→</span>
                </a>
                <a
                  href="#research"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 12px',
                    fontSize: '15px',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    borderRadius: '10px',
                  }}
                >
                  <span>Research & Milestones</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>→</span>
                </a>
              </div>

              {/* Call to Action Button */}
              <button
                type="button"
                className="btn-superconscious-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '6px', padding: '0.88rem', fontSize: '15px' }}
                onClick={() => {
                  setMobileMenuOpen(false)
                  openConsult()
                }}
              >
                <span>Join Sovereign Waitlist</span>
                <span style={{ marginLeft: '4px' }}>→</span>
              </button>

              {/* Superconscious Down Elements */}
              <div
                style={{
                  marginTop: '12px',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.55)', letterSpacing: '0.02em' }}>
                  Unlock Your Limitless Potential
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.45)' }}>
                  <span>Enterprise Ready</span>
                  <span>·</span>
                  <span>SOC2 Type II</span>
                  <span>·</span>
                  <span>Air-Gapped Sovereign</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

