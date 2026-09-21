import { COMPANY, DOMAIN, NAV_LINKS } from '../brand'
import { LogoMark } from './LogoMark'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <LogoMark size={28} />
            <p className="logo-word">{COMPANY}</p>
          </div>
          <p>AI automation for operations teams.</p>
          <p className="footer-domain">{DOMAIN}</p>
        </div>
        <div>
          <p className="footer-h">Explore</p>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#engagement">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-h">Trust</p>
          <ul>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© 2026 {COMPANY}. All rights reserved.</p>
        <p>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </p>
      </div>
      <div className="wrap legal" id="privacy">
        <h2>Privacy</h2>
        <p>
          Consultation details submitted through this site are used only to
          evaluate automation fit and follow up. Do not send secrets,
          credentials, or personal data you are not authorized to share.
        </p>
      </div>
      <div className="wrap legal" id="terms">
        <h2>Terms</h2>
        <p>
          Work is scoped by written agreement. Delivery timelines, access
          requirements, support, and ownership are defined before work begins.
        </p>
      </div>
    </footer>
  )
}
