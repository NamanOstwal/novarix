import { useState, type FC } from 'react'
import { Database, Shield, Cpu, Zap, Network, CheckCircle2 } from 'lucide-react'

export const ArchitectureSection: FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(2)

  const LAYERS = [
    {
      id: 0,
      name: 'Layer 1: Omnichannel Ingestion & Business Triggers',
      icon: Network,
      tag: 'Ingestion Layer',
      components: ['Webhooks & REST APIs', 'Kafka / SQS Event Streams', 'Email & Document Inboxes', 'Slack & Microsoft Teams'],
      details: 'Captures and sanitizes incoming events from across the enterprise, extracting metadata and queueing tasks into the state engine.'
    },
    {
      id: 1,
      name: 'Layer 2: Enterprise Knowledge & Hybrid RAG Engine',
      icon: Database,
      tag: 'Knowledge Layer',
      components: ['Dense Vector Database', 'BM25 Keyword Search', 'Automated Chunking & OCR', 'RBAC Document Access Filter'],
      details: 'Maintains sub-second semantic retrieval across all proprietary files, databases, and wikis with verifiable citations and zero data leakage.'
    },
    {
      id: 2,
      name: 'Layer 3: Novarix Sovereign Agent Core & Orchestrator',
      icon: Cpu,
      tag: 'Reasoning Engine',
      components: ['Multi-Agent Swarm Coordinator', 'Tool & Function Registry (MCP)', 'Long-Horizon Memory Engine', 'Self-Healing Retry Loops'],
      details: 'Directs multi-step reasoning, selects appropriate tool APIs, preserves execution state, and manages parallel subagent execution.'
    },
    {
      id: 3,
      name: 'Layer 4: Deterministic Guardrails & Human Gatekeeper',
      icon: Shield,
      tag: 'Governance Layer',
      components: ['PII Masking & Redaction', 'Deterministic Policy Validator', 'Human-in-the-Loop Sign-Off', 'Tamper-Proof Audit Ledger'],
      details: 'Enforces security policies, validates output schemas, logs every tool execution with cryptographic hashes, and gates sensitive actions behind human sign-off.'
    },
    {
      id: 4,
      name: 'Layer 5: Enterprise Systems & Tool Execution',
      icon: Zap,
      tag: 'Execution Layer',
      components: ['Salesforce & HubSpot CRM', 'SAP & Oracle ERP', 'Postgres / Snowflake DBs', 'Jira & GitHub SRE APIs'],
      details: 'Performs verified mutations, writes database records, dispatches notifications, and settles operational transactions in target systems.'
    }
  ]

  return (
    <section
      id="architecture"
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
          <span>Enterprise Technical Architecture</span>
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
          Engineered for Production Reliability
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.72)',
            textAlign: 'center',
            maxWidth: '740px',
            lineHeight: 1.6,
            marginBottom: '52px',
          }}
        >
          A modular, multi-tier architecture built with enterprise-grade guardrails, sub-100ms inference clusters, and zero third-party vendor lock-in.
        </p>

        {/* Interactive Architecture Stack Visualizer */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '32px',
            width: '100%',
          }}
        >
          {/* Left Column: Stack Layers */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {LAYERS.map((layer) => {
              const Icon = layer.icon
              const isActive = activeLayer === layer.id

              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActiveLayer(layer.id)}
                  style={{
                    padding: '20px 24px',
                    borderRadius: '16px',
                    backgroundColor: isActive ? 'rgba(0, 112, 243, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${isActive ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.08)'}`,
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 0 24px rgba(0, 240, 255, 0.25)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        backgroundColor: isActive ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        color: isActive ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <div style={{ fontSize: '11px', color: isActive ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.45)', textTransform: 'uppercase', fontWeight: 600 }}>
                        {layer.tag}
                      </div>
                      <div style={{ fontFamily: 'var(--font-matter)', fontSize: '15px', fontWeight: 600, color: '#FFFFFF' }}>
                        {layer.name.split(':')[1]?.trim() || layer.name}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--neon-cyan)' : 'transparent',
                      boxShadow: isActive ? '0 0 10px var(--neon-cyan)' : 'none',
                    }}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Column: Active Layer Deep Dive */}
          <div
            className="sc-stroke-card"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              height: '100%',
            }}
          >
            <div className="sc-gradient-beam" />
            <div
              className="sc-card-body"
              style={{
                padding: 'clamp(28px, 4vw, 40px)',
                backgroundColor: 'rgba(18, 17, 23, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span className="sc-telemetry-badge">
                    <span className="dot" />
                    <span>{LAYERS[activeLayer].tag}</span>
                  </span>
                  <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.45)' }}>
                    Enterprise Stack Specification
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '22px', fontWeight: 600, color: '#FFFFFF', marginBottom: '14px' }}>
                  {LAYERS[activeLayer].name}
                </h3>

                <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, marginBottom: '28px' }}>
                  {LAYERS[activeLayer].details}
                </p>

                <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--neon-cyan)', marginBottom: '16px' }}>
                  Core Subsystems & Modules:
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                  {LAYERS[activeLayer].components.map((comp, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontSize: '13.5px',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <CheckCircle2 size={14} color="#10B981" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Badges */}
              <div
                style={{
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '11.5px', padding: '4px 10px', borderRadius: '6px', backgroundColor: 'rgba(0, 240, 255, 0.1)', color: 'var(--neon-cyan)', border: '1px solid rgba(0, 240, 255, 0.25)' }}>
                    Model Context Protocol (MCP)
                  </span>
                  <span style={{ fontSize: '11.5px', padding: '4px 10px', borderRadius: '6px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                    LangChain / LlamaIndex Ready
                  </span>
                </div>

                <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
                  SOC2 Type II Aligned
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
