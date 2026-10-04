import type { FC } from 'react'

export const PlatformArchitecture: FC = () => {
  return (
    <section
      id="platform"
      data-section-reveal
      style={{
        position: 'relative',
        width: '100%',
        padding: '80px 24px 100px',
        backgroundColor: '#0C0B0C',
      }}
    >
      <div className="container-sarvam" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Section Heading with Superconscious Accent */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div className="sc-telemetry-badge" style={{ marginBottom: '16px' }}>
            <span className="dot" />
            <span>Sovereign Full-Stack Architecture</span>
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
            Full-Stack Sovereign AI Platform
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-matter)',
              fontSize: '17px',
              color: 'rgba(255, 255, 255, 0.72)',
              lineHeight: 1.6,
            }}
          >
            A cohesive stack spanning autonomous end-user applications down to sovereign low-latency compute and customer-owned KMS isolation.
          </p>
        </div>

        {/* 3 Tier Stacked Architecture Layout with Interconnected Connectors */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Tier 1: Applications */}
          <div className="sc-bento-tile" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
              <div>
                <span className="sc-telemetry-badge" style={{ marginBottom: '8px' }}>
                  <span className="dot" />
                  <span>Tier 1 · Population-Scale Applications</span>
                </span>
                <h3 style={{ fontFamily: 'var(--font-season-mix)', fontSize: '26px', fontWeight: 500, color: '#FFFFFF', marginTop: '6px' }}>
                  Enterprise Autonomous Applications
                </h3>
                <p style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', color: 'rgba(255, 255, 255, 0.68)', marginTop: '4px', maxWidth: '700px' }}>
                  Conversational agents fluent in 22 languages and platforms that run mission-critical enterprise workflows from inception to final settlement.
                </p>
              </div>

              <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.45)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                48kHz Full-Duplex Dialogue
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              <div style={{ padding: '22px', backgroundColor: 'rgba(255,255,255,0.025)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', transition: 'border-color 0.25s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div className="sc-icon-pod" style={{ width: '36px', height: '36px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--neon-cyan)' }}>Voice Agents</div>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>Autonomous inbound & outbound conversational call agents with 58ms RTT.</p>
              </div>

              <div style={{ padding: '22px', backgroundColor: 'rgba(255,255,255,0.025)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', transition: 'border-color 0.25s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div className="sc-icon-pod" style={{ width: '36px', height: '36px', outlineColor: '#0070F3' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0070F3" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" x2="22" y1="12" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '16px', color: '#0070F3' }}>Content Studio</div>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>Multilingual creative generation & localized campaign asset synthesis.</p>
              </div>

              <div style={{ padding: '22px', backgroundColor: 'rgba(255,255,255,0.025)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', transition: 'border-color 0.25s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div className="sc-icon-pod" style={{ width: '36px', height: '36px', outlineColor: '#9780FF' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9780FF" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '16px', color: '#9780FF' }}>Doc Agents</div>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>Intelligent tabular and KYC extraction from dense unstructured PDFs.</p>
              </div>

              <div style={{ padding: '22px', backgroundColor: 'rgba(255,255,255,0.025)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', transition: 'border-color 0.25s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div className="sc-icon-pod" style={{ width: '36px', height: '36px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--neon-cyan)" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--neon-cyan)' }}>Work Agents</div>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>Multi-agent orchestrators managing complex enterprise operational flows.</p>
              </div>
            </div>
          </div>

          {/* Tier 2: Foundation & Specialized Models */}
          <div className="sc-bento-tile" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
              <div>
                <span className="sc-telemetry-badge" style={{ color: '#0070F3', marginBottom: '8px' }}>
                  <span className="dot" style={{ backgroundColor: '#0070F3', boxShadow: '0 0 8px #0070F3' }} />
                  <span>Tier 2 · Frontier Foundation Models</span>
                </span>
                <h3 style={{ fontFamily: 'var(--font-season-mix)', fontSize: '26px', fontWeight: 500, color: '#FFFFFF', marginTop: '6px' }}>
                  State-of-the-Art Frontier Models
                </h3>
                <p style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', color: 'rgba(255, 255, 255, 0.68)', marginTop: '4px', maxWidth: '700px' }}>
                  Trained on sovereign datasets, engineered specifically for multi-modal reasoning, dense tabular parsing, and cultural context.
                </p>
              </div>

              <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.45)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Quantized 70B & 8B Edge Weights
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              <div style={{ padding: '22px', backgroundColor: 'rgba(255,255,255,0.025)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--neon-cyan)', marginBottom: '6px' }}>Novarix Reasoner-V4</div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>Complex policy logic, mathematical checks, deterministic audit planning.</p>
              </div>

              <div style={{ padding: '22px', backgroundColor: 'rgba(255,255,255,0.025)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontWeight: 600, fontSize: '16px', color: '#0070F3', marginBottom: '6px' }}>Audio-Omni 2.0</div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>Native end-to-end voice-to-voice transformer with human acoustic pauses.</p>
              </div>

              <div style={{ padding: '22px', backgroundColor: 'rgba(255,255,255,0.025)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontWeight: 600, fontSize: '16px', color: '#9780FF', marginBottom: '6px' }}>DocuVision 2.1</div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>Sub-millisecond spatial document parser for dense tables and signatures.</p>
              </div>

              <div style={{ padding: '22px', backgroundColor: 'rgba(255,255,255,0.025)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--neon-cyan)', marginBottom: '6px' }}>IndicLingua-23</div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>Native syntax preservation across all 22 official languages.</p>
              </div>
            </div>
          </div>

          {/* Tier 3: Sovereign Compute Infrastructure */}
          <div className="sc-bento-tile" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
              <div>
                <span className="sc-telemetry-badge" style={{ color: '#10B981', marginBottom: '8px' }}>
                  <span className="dot" style={{ backgroundColor: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                  <span>Tier 3 · Sovereign Compute Fabric</span>
                </span>
                <h3 style={{ fontFamily: 'var(--font-season-mix)', fontSize: '26px', fontWeight: 500, color: '#FFFFFF', marginTop: '6px' }}>
                  Bare-Metal Sovereign Infrastructure
                </h3>
                <p style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', color: 'rgba(255, 255, 255, 0.68)', marginTop: '4px', maxWidth: '700px' }}>
                  Ultra low-latency clusters delivering sub-100ms time-to-first-token, on-premises air-gapped isolation, and zero external egress.
                </p>
              </div>

              <span style={{ fontSize: '12px', color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                EAL6+ HSM Security
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              <div style={{ padding: '22px', backgroundColor: 'rgba(255,255,255,0.025)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontWeight: 600, fontSize: '16px', color: '#10B981', marginBottom: '6px' }}>Sub-100ms Bare Metal</div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>Hardware-optimized FlashAttention kernels for rapid real-time response.</p>
              </div>

              <div style={{ padding: '22px', backgroundColor: 'rgba(255,255,255,0.025)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--neon-cyan)', marginBottom: '6px' }}>Dynamic GPU Routing</div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>Intelligent traffic orchestration eliminating GPU idle waste and latency spikes.</p>
              </div>

              <div style={{ padding: '22px', backgroundColor: 'rgba(255,255,255,0.025)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontWeight: 600, fontSize: '16px', color: '#0070F3', marginBottom: '6px' }}>Zero Data Egress</div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>Full air-gapped isolation with customer-managed KMS keys and private VPC peering.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
