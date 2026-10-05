import type { FC } from 'react'
import { Search, Link2, Cpu, CheckSquare2, Rocket, ArrowRight } from 'lucide-react'
import { useConsult } from '../context/ConsultContext'

interface Stage {
  num: string
  title: string
  icon: typeof Search
  badge: string
  description: string
  deliverables: string[]
}

const STAGES: Stage[] = [
  {
    num: '01',
    title: 'Discover & Map',
    icon: Search,
    badge: 'Week 1',
    description: 'We conduct a deep operational audit to map your team’s highest-friction manual workflows, identify data dependencies, and establish measurable ROI metrics.',
    deliverables: ['Workflow Architecture Blueprint', 'Target ROI & Cost Savings Model', 'Data Security & Clearance Review']
  },
  {
    num: '02',
    title: 'Securely Connect',
    icon: Link2,
    badge: 'Week 1–2',
    description: 'We connect your existing tools, private databases, cloud APIs, and document repositories using strict granular role-based access control (RBAC).',
    deliverables: ['Zero-Trust API & Database Connectors', 'Private VPC Subnet Peering', 'PII Masking & Encryption Filters']
  },
  {
    num: '03',
    title: 'Build & Guard',
    icon: Cpu,
    badge: 'Week 2–3',
    description: 'We construct domain-specialized agent swarms and RAG pipelines embedded with deterministic business logic and configurable human-in-the-loop safeguards.',
    deliverables: ['Multi-Agent Orchestration Chain', 'Hybrid Vector & Semantic Index', 'Human Approval Checkpoints']
  },
  {
    num: '04',
    title: 'Validate & Benchmark',
    icon: CheckSquare2,
    badge: 'Week 3–4',
    description: 'We rigorously stress-test the system against thousands of historical edge-cases, verifying 99.8%+ factual precision, latency guarantees, and error recovery.',
    deliverables: ['Benchmark Accuracy Scorecard', 'Failure Recovery & Circuit Breakers', 'Compliance & Security Sign-Off']
  },
  {
    num: '05',
    title: 'Deploy & Observe',
    icon: Rocket,
    badge: 'Production Launch',
    description: 'We transition the system to live production with real-time telemetry, comprehensive audit logging, SLA monitoring, and continuous model improvement.',
    deliverables: ['Live Production VPC Rollout', 'Real-Time Telemetry Dashboard', 'Tamper-Proof Audit Logging']
  }
]

export const HowItWorksSection: FC = () => {
  const { openConsult } = useConsult()

  return (
    <section
      id="how-it-works"
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
          <span>Implementation Methodology</span>
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
          From Discovery to Production in Weeks
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.72)',
            textAlign: 'center',
            maxWidth: '720px',
            lineHeight: 1.6,
            marginBottom: '56px',
          }}
        >
          Our structured engineering delivery framework minimizes client overhead, ensures complete data isolation, and delivers verifiable production value rapidly.
        </p>

        {/* 5-Stage Pipeline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '20px',
            width: '100%',
            marginBottom: '48px',
          }}
        >
          {STAGES.map((stage) => {
            const Icon = stage.icon
            return (
              <div
                key={stage.num}
                className="sc-bento-tile"
                style={{
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(21, 20, 25, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Number watermark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '16px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '28px',
                    fontWeight: 800,
                    color: 'rgba(255, 255, 255, 0.06)',
                    pointerEvents: 'none',
                  }}
                >
                  {stage.num}
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(0, 240, 255, 0.12)',
                        border: '1px solid rgba(0, 240, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--neon-cyan)',
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--neon-cyan)',
                        backgroundColor: 'rgba(0, 240, 255, 0.1)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      {stage.badge}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
                    {stage.num}. {stage.title}
                  </h3>

                  <p style={{ fontFamily: 'var(--font-matter)', fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.55, marginBottom: '20px' }}>
                    {stage.description}
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
                    Key Deliverables:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {stage.deliverables.map((item, idx) => (
                      <li key={idx} style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--neon-cyan)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Consultation CTA */}
        <div
          style={{
            padding: '24px 32px',
            borderRadius: '16px',
            backgroundColor: 'rgba(0, 112, 243, 0.1)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            width: '100%',
          }}
        >
          <div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', marginBottom: '4px' }}>
              Want to see what an AI roadmap looks like for your team?
            </div>
            <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.65)' }}>
              We offer a complimentary 30-minute discovery call with our engineering leadership.
            </div>
          </div>

          <button
            type="button"
            className="btn-superconscious-primary"
            onClick={openConsult}
            style={{ padding: '0.75rem 1.8rem', fontSize: '14.5px' }}
          >
            <span>Book a Discovery Call</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  )
}
