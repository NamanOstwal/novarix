import type { FC } from 'react'
import { useConsult } from '../context/ConsultContext'

export const EnterpriseGrade: FC = () => {
  const { openConsult } = useConsult()

  return (
    <section
      id="enterprise"
      data-section-reveal
      style={{
        position: 'relative',
        width: '100%',
        padding: '80px 24px 100px',
        backgroundColor: '#0C0B0C',
      }}
    >
      <div className="container-sarvam" style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
        {/* =========================================================================
            PART 1: ENTERPRISE-GRADE OUT OF THE BOX
           ========================================================================= */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
            <div className="sc-telemetry-badge" style={{ marginBottom: '16px' }}>
              <span className="dot" />
              <span>Enterprise Guardrails & Governance</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-season-mix)',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 500,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '14px',
                textShadow: '0 0 35px rgba(0, 112, 243, 0.3)',
              }}
            >
              Enterprise-grade. Out of the box.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-matter)',
                fontSize: '17px',
                color: 'rgba(255, 255, 255, 0.72)',
                lineHeight: 1.6,
              }}
            >
              Compliance, isolation, and confidence. Not bolted on as an afterthought. Built in from day one.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '24px',
            }}
          >
            {/* Card 1: Forward Deployed */}
            <div
              className="sc-bento-tile"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '22px' }}>
                  <div className="sc-icon-pod">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="sc-telemetry-badge">
                    <span className="dot" />
                    <span>Embedded Team</span>
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '21px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
                  Forward deployed
                </h3>
                <p style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', color: 'rgba(255, 255, 255, 0.68)', lineHeight: 1.6, marginBottom: '28px' }}>
                  Our staff engineers work directly alongside yours: designing agentic topology, auditing integrations, and remaining until you are scaled in production. Not a handoff. A dedicated partnership.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#FFFFFF' }}>
                  <span style={{ color: 'var(--neon-cyan)', fontWeight: 700 }}>✓</span> Dedicated solutions architect from day one
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#FFFFFF' }}>
                  <span style={{ color: 'var(--neon-cyan)', fontWeight: 700 }}>✓</span> Joint workflow architecture & latency tuning
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--neon-cyan)' }}>
                  <span style={{ color: 'var(--neon-cyan)', fontWeight: 700 }}>✓</span> Ongoing domain fine-tuning and safety filters
                </div>
              </div>
            </div>

            {/* Card 2: Deployment Flexibility */}
            <div
              className="sc-bento-tile"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '22px' }}>
                  <div className="sc-icon-pod" style={{ outlineColor: '#0070F3' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0070F3" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" />
                      <line x1="6" y1="18" x2="6.01" y2="18" />
                    </svg>
                  </div>
                  <span className="sc-telemetry-badge" style={{ color: '#0070F3' }}>
                    <span className="dot" style={{ backgroundColor: '#0070F3', boxShadow: '0 0 8px #0070F3' }} />
                    <span>Multi-Cloud & Air-Gap</span>
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '21px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
                  Deployment flexibility
                </h3>
                <p style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', color: 'rgba(255, 255, 255, 0.68)', lineHeight: 1.6, marginBottom: '28px' }}>
                  Run in our high-availability sovereign cloud, deploy inside your private AWS/GCP/Azure VPC, or operate completely on-premises air-gapped without external network calls.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#FFFFFF' }}>
                  <span style={{ color: '#0070F3', fontWeight: 700 }}>✓</span> Multi-cloud AWS, Azure, GCP VPC peering
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#FFFFFF' }}>
                  <span style={{ color: '#0070F3', fontWeight: 700 }}>✓</span> Air-gapped bare-metal hardware appliances
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#0070F3' }}>
                  <span style={{ color: '#0070F3', fontWeight: 700 }}>✓</span> Enterprise 99.999% uptime guarantee with SLA
                </div>
              </div>
            </div>

            {/* Card 3: Security & Governance */}
            <div
              className="sc-bento-tile"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '22px' }}>
                  <div className="sc-icon-pod" style={{ outlineColor: '#9780FF' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9780FF" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span className="sc-telemetry-badge" style={{ color: '#9780FF' }}>
                    <span className="dot" style={{ backgroundColor: '#9780FF', boxShadow: '0 0 8px #9780FF' }} />
                    <span>Zero Data Retention</span>
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '21px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
                  Security & governance
                </h3>
                <p style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', color: 'rgba(255, 255, 255, 0.68)', lineHeight: 1.6, marginBottom: '28px' }}>
                  Built to satisfy the strictest regulatory frameworks across banking, defense, and healthcare with zero data retention, strict audit logs, and hardware isolation.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#FFFFFF' }}>
                  <span style={{ color: '#9780FF', fontWeight: 700 }}>✓</span> SOC 2 Type II & ISO 27001 Certified
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#FFFFFF' }}>
                  <span style={{ color: '#9780FF', fontWeight: 700 }}>✓</span> Contractual zero data retention guarantee
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#9780FF' }}>
                  <span style={{ color: '#9780FF', fontWeight: 700 }}>✓</span> End-to-end encryption with BYOK / EAL6+ HSM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 2: BUILT TO RUN ANYWHERE YOUR BUSINESS RUNS
           ========================================================================= */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 36px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-season-mix)',
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 500,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '10px',
              }}
            >
              Built to run anywhere your business runs
            </h2>
            <p style={{ fontFamily: 'var(--font-matter)', fontSize: '16px', color: 'rgba(255, 255, 255, 0.65)' }}>
              Choose your ideal operational topology without sacrificing performance or control.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '18px',
            }}
          >
            {/* Deployment Option 1 */}
            <div className="sc-bento-tile" style={{ padding: '30px', cursor: 'pointer' }} onClick={openConsult}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="sc-telemetry-badge">
                  <span className="dot" />
                  <span>Managed</span>
                </span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>99.999% SLA</span>
              </div>
              <div style={{ fontFamily: 'var(--font-matter)', fontSize: '20px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>
                Novarix Sovereign Cloud
              </div>
              <p style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
                Fully managed, automatic autoscaling, fastest time-to-value with guaranteed 99.999% uptime across Indian data regions.
              </p>
            </div>

            {/* Deployment Option 2 */}
            <div className="sc-bento-tile" style={{ padding: '30px', cursor: 'pointer' }} onClick={openConsult}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="sc-telemetry-badge" style={{ color: '#0070F3' }}>
                  <span className="dot" style={{ backgroundColor: '#0070F3', boxShadow: '0 0 8px #0070F3' }} />
                  <span>Isolated</span>
                </span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>BYOK Encryption</span>
              </div>
              <div style={{ fontFamily: 'var(--font-matter)', fontSize: '20px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>
                Virtual Private Cloud (VPC)
              </div>
              <p style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
                Operates entirely inside your AWS, Azure, or GCP perimeter with customer-managed keys and zero public ingress.
              </p>
            </div>

            {/* Deployment Option 3 */}
            <div className="sc-bento-tile" style={{ padding: '30px', cursor: 'pointer' }} onClick={openConsult}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="sc-telemetry-badge" style={{ color: '#9780FF' }}>
                  <span className="dot" style={{ backgroundColor: '#9780FF', boxShadow: '0 0 8px #9780FF' }} />
                  <span>Air-Gapped</span>
                </span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Zero Egress</span>
              </div>
              <div style={{ fontFamily: 'var(--font-matter)', fontSize: '20px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>
                On-Premises Bare Metal
              </div>
              <p style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
                Complete sovereignty: air-gapped bare-metal hardware appliances engineered for defense, national security, and Tier-1 banking.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <button type="button" className="btn-superconscious-secondary" onClick={openConsult} style={{ padding: '0.85rem 2.2rem', fontSize: '15.5px' }}>
              <span>Consult an Enterprise Architect</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
