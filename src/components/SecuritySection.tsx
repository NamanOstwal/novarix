import type { FC } from 'react'
import { ShieldCheck, Lock, EyeOff, UserCheck, FileText, Server } from 'lucide-react'

export const SecuritySection: FC = () => {
  return (
    <section
      id="security"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '100px 24px',
        backgroundColor: '#0C0B0C',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Eyebrow badge */}
        <div className="sc-telemetry-badge" style={{ marginBottom: '16px' }}>
          <span className="dot" />
          <span>Enterprise Security & Data Sovereignty</span>
        </div>

        {/* Section Heading */}
        <h2
          style={{
            fontFamily: 'var(--font-season-mix)',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 500,
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '14px',
          }}
        >
          Built for Your Most Sensitive Enterprise Data
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.72)',
            textAlign: 'center',
            maxWidth: '740px',
            lineHeight: 1.6,
            marginBottom: '48px',
          }}
        >
          When deploying autonomous agents that interact with critical systems, security cannot be an afterthought. Novarix incorporates strict human approval controls, air-gapped VPC hosting, and zero-retention guarantees.
        </p>

        {/* Human in the Loop Visual Flow Banner */}
        <div
          style={{
            width: '100%',
            padding: 'clamp(24px, 4vw, 36px)',
            borderRadius: '24px',
            backgroundColor: 'rgba(21, 20, 25, 0.85)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            marginBottom: '40px',
            boxShadow: '0 0 40px rgba(0, 112, 243, 0.15)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--neon-cyan)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Deterministic Safety Architecture
            </span>
            <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '22px', fontWeight: 600, color: '#FFFFFF', marginTop: '6px' }}>
              Human-in-the-Loop Governance Matrix
            </h3>
          </div>

          {/* Flow Visualizer */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            {/* Step 1 */}
            <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontWeight: 600 }}>Step 1</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', margin: '6px 0' }}>AI Proposes Action</div>
              <div style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.6)' }}>Generates tool call payload & parameter checks</div>
            </div>

            {/* Step 2 */}
            <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: 'rgba(0, 112, 243, 0.12)', border: '1px solid rgba(0, 240, 255, 0.3)', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: 'var(--neon-cyan)', textTransform: 'uppercase', fontWeight: 600 }}>Step 2</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', margin: '6px 0' }}>Policy & Risk Engine</div>
              <div style={{ fontSize: '12.5px', color: 'var(--neon-cyan)' }}>Evaluates impact threshold & sensitivity tier</div>
            </div>

            {/* Branch A: Low Risk */}
            <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.35)', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: '#10B981', textTransform: 'uppercase', fontWeight: 700 }}>Low Risk Tier</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', margin: '6px 0' }}>Autonomous Execution</div>
              <div style={{ fontSize: '12.5px', color: '#34D399' }}>Reads data & updates logs with full audit trail</div>
            </div>

            {/* Branch B: High Risk */}
            <div style={{ padding: '20px', borderRadius: '14px', backgroundColor: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.35)', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: '#F43F5E', textTransform: 'uppercase', fontWeight: 700 }}>High Risk Tier</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', margin: '6px 0' }}>Human Sign-Off Required</div>
              <div style={{ fontSize: '12.5px', color: '#FDA4AF' }}>1-Click manager authorization in Slack/Email</div>
            </div>
          </div>
        </div>

        {/* 6 Core Enterprise Security Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '24px',
            width: '100%',
          }}
        >
          {/* Pillar 1 */}
          <div className="sc-bento-tile" style={{ padding: '30px 26px', backgroundColor: 'rgba(21, 20, 25, 0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <EyeOff size={20} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '17px', fontWeight: 600, color: '#FFFFFF' }}>
                Zero Model Training Policy
              </h4>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              Your proprietary company data, documents, and API responses are NEVER used to train base models or shared across client boundaries.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="sc-bento-tile" style={{ padding: '30px 26px', backgroundColor: 'rgba(21, 20, 25, 0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(0, 240, 255, 0.15)', color: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Server size={20} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '17px', fontWeight: 600, color: '#FFFFFF' }}>
                Private VPC & Air-Gapped Ready
              </h4>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              Deploy entirely within your AWS, Azure, or GCP Virtual Private Cloud (VPC), or on-premise infrastructure behind your enterprise firewall.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="sc-bento-tile" style={{ padding: '30px 26px', backgroundColor: 'rgba(21, 20, 25, 0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(115, 34, 242, 0.2)', color: '#9780FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Lock size={20} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '17px', fontWeight: 600, color: '#FFFFFF' }}>
                End-to-End Enterprise Encryption
              </h4>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              All vector embeddings, database connections, and telemetry logs are encrypted using AES-256 at rest and TLS 1.3 in transit.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="sc-bento-tile" style={{ padding: '30px 26px', backgroundColor: 'rgba(21, 20, 25, 0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(255, 189, 46, 0.15)', color: '#FFBD2E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <UserCheck size={20} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '17px', fontWeight: 600, color: '#FFFFFF' }}>
                Role-Based Access Control (RBAC)
              </h4>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              Agents strictly respect user identity, SSO/SAML authorization scopes, and internal data permission policies.
            </p>
          </div>

          {/* Pillar 5 */}
          <div className="sc-bento-tile" style={{ padding: '30px 26px', backgroundColor: 'rgba(21, 20, 25, 0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(0, 112, 243, 0.2)', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileText size={20} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '17px', fontWeight: 600, color: '#FFFFFF' }}>
                Immutable Audit Logging
              </h4>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              Every model prompt, intermediate reasoning step, and tool execution is recorded with cryptographic timestamps for compliance audits.
            </p>
          </div>

          {/* Pillar 6 */}
          <div className="sc-bento-tile" style={{ padding: '30px 26px', backgroundColor: 'rgba(21, 20, 25, 0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={20} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '17px', fontWeight: 600, color: '#FFFFFF' }}>
                Automated PII Masking
              </h4>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
              Sensitive customer identifiers, credit card numbers, passwords, and tokens are scrubbed in real-time before reaching inference models.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
