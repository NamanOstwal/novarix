import type { FC } from 'react'
import { Database, Layers, ShieldAlert, Cpu } from 'lucide-react'
import { SplitBlurText } from './SplitBlurText'

export const ProblemSection: FC = () => {
  return (
    <section
      id="problem"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '100px 24px 80px',
        backgroundColor: '#0C0B0C',
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0, 112, 243, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Eyebrow badge */}
        <div className="sc-telemetry-badge" style={{ marginBottom: '16px' }}>
          <span className="dot" />
          <span>The Enterprise Dilemma</span>
        </div>

        {/* Section Heading with Kinetic Blur */}
        <h2
          style={{
            fontFamily: 'var(--font-season-mix)',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 500,
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.18,
            letterSpacing: '-0.02em',
            maxWidth: '860px',
            marginBottom: '18px',
          }}
        >
          <SplitBlurText direction="up" stagger={30}>
            Your business already has the data.
          </SplitBlurText>{' '}
          <br />
          <span style={{ color: 'var(--neon-cyan)', textShadow: '0 0 25px rgba(0, 240, 255, 0.35)' }}>
            <SplitBlurText direction="up" stagger={30} delay={180}>
              The problem is getting AI to actually use it.
            </SplitBlurText>
          </span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.72)',
            textAlign: 'center',
            maxWidth: '720px',
            lineHeight: 1.65,
            marginBottom: '54px',
          }}
        >
          Generic consumer chatbots cannot safely query internal databases, execute multi-step tool calls, or adhere to enterprise compliance. Novarix bridges the gap between raw data and verifiable autonomous action.
        </p>

        {/* 4 Bento Problem vs Solution Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))',
            gap: '24px',
            width: '100%',
          }}
        >
          {/* Card 1 */}
          <div
            className="sc-bento-tile"
            style={{
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
              backgroundColor: 'rgba(21, 20, 25, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
            }}
          >
            <div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 95, 86, 0.12)',
                  border: '1px solid rgba(255, 95, 86, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: '#FF5F56',
                }}
              >
                <Database size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
                Fragmented Data Silos
              </h3>
              <p style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', color: 'rgba(255, 255, 255, 0.62)', lineHeight: 1.55 }}>
                Company knowledge is trapped across PDFs, Confluence, Slack channels, Notion, and SQL databases without unified search.
              </p>
            </div>
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '13px', color: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>✓ Novarix Solution:</span>
              <strong style={{ color: '#FFFFFF' }}>Unified Enterprise RAG</strong>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="sc-bento-tile"
            style={{
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
              backgroundColor: 'rgba(21, 20, 25, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
            }}
          >
            <div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 189, 46, 0.12)',
                  border: '1px solid rgba(255, 189, 46, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: '#FFBD2E',
                }}
              >
                <Layers size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
                Manual Operational Drag
              </h3>
              <p style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', color: 'rgba(255, 255, 255, 0.62)', lineHeight: 1.55 }}>
                Knowledge workers spend 30% of their workweek copying data between systems, filing routine tickets, and reconciling reports.
              </p>
            </div>
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '13px', color: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>✓ Novarix Solution:</span>
              <strong style={{ color: '#FFFFFF' }}>Autonomous Agent Swarms</strong>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="sc-bento-tile"
            style={{
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
              backgroundColor: 'rgba(21, 20, 25, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
            }}
          >
            <div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(244, 63, 94, 0.12)',
                  border: '1px solid rgba(244, 63, 94, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: '#F43F5E',
                }}
              >
                <ShieldAlert size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
                Hallucinations & Leaks
              </h3>
              <p style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', color: 'rgba(255, 255, 255, 0.62)', lineHeight: 1.55 }}>
                Public LLM providers risk data leakage and fabricate answers without source attribution or enterprise access control.
              </p>
            </div>
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '13px', color: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>✓ Novarix Solution:</span>
              <strong style={{ color: '#FFFFFF' }}>Sovereign Guardrails & RBAC</strong>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="sc-bento-tile"
            style={{
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
              backgroundColor: 'rgba(21, 20, 25, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
            }}
          >
            <div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(115, 34, 242, 0.16)',
                  border: '1px solid rgba(115, 34, 242, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: '#9780FF',
                }}
              >
                <Cpu size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
                Chatbots with No Action
              </h3>
              <p style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', color: 'rgba(255, 255, 255, 0.62)', lineHeight: 1.55 }}>
                Chat interfaces can only talk. They cannot reliably trigger APIs, modify ERP ledgers, or close customer support loops.
              </p>
            </div>
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '13px', color: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>✓ Novarix Solution:</span>
              <strong style={{ color: '#FFFFFF' }}>Deterministic Tool Execution</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
