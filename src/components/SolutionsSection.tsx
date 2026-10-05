import { useState, type FC } from 'react'
import { Bot, Database, MessageSquare, FileSpreadsheet, Server, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useConsult } from '../context/ConsultContext'

interface SolutionItem {
  id: string
  title: string
  tagline: string
  icon: typeof Bot
  problem: string
  solution: string
  result: string
  features: string[]
  badge: string
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: 'agents',
    title: 'Enterprise AI Agents & Swarms',
    tagline: 'Autonomous multi-step execution across your business systems.',
    icon: Bot,
    badge: 'Flagship Core',
    problem: 'Teams waste 15+ hours weekly manually transferring data, updating CRM pipelines, investigating alerts, and executing routine back-office workflows.',
    solution: 'Novarix builds autonomous agent swarms that reason over complex business rules, call internal APIs, query databases, and execute multi-step operations.',
    result: '80% reduction in manual operational turnaround with 100% auditable logging.',
    features: [
      'Autonomous multi-system tool calling (Jira, Salesforce, SAP, Slack)',
      'Deterministic policy engine with safety guardrails',
      'Configurable human-in-the-loop approval thresholds',
      'Continuous state persistence and self-healing error recovery'
    ]
  },
  {
    id: 'rag',
    title: 'Enterprise RAG & Knowledge Layer',
    tagline: 'Grounded intelligence across all enterprise documentation.',
    icon: Database,
    badge: 'Zero Hallucinations',
    problem: 'Proprietary knowledge is scattered across thousands of PDFs, Confluence spaces, Google Drive files, Notion docs, and databases, creating information bottlenecks.',
    solution: 'A unified semantic vector retrieval and hybrid search layer that delivers real-time, grounded answers with strict document page citations.',
    result: 'Sub-second knowledge retrieval with 0% ungrounded hallucinations.',
    features: [
      'Hybrid semantic vector search + keyword dense retrieval',
      'Verifiable click-to-source page and section citations',
      'Role-based document access control (RBAC) filtering',
      'Automated daily incremental sync with Google Drive, Confluence, & Slack'
    ]
  },
  {
    id: 'voice',
    title: 'AI Customer Support & Voice Agents',
    tagline: 'Ultra-low latency conversational agents in 22+ languages.',
    icon: MessageSquare,
    badge: '58ms Latency',
    problem: 'High customer support ticket volumes cause long wait times, rising support headcount costs, and inconsistent multilingual resolution quality.',
    solution: 'Full-duplex voice and omnichannel text agents powered by sovereign speech models, resolving queries and updating backend tickets autonomously.',
    result: '70% first-contact autonomous resolution with 24/7 instant availability.',
    features: [
      'Full-duplex 48kHz voice synthesis with human-grade natural prosody',
      'Real-time automated ticket classification & CRM logging',
      'Intelligent escalation to human agents with full conversation context',
      'Native support for 22 Indic languages and global enterprise dialects'
    ]
  },
  {
    id: 'ocr',
    title: 'Document Intelligence & Extraction',
    tagline: 'Instant extraction, tabular validation, and ERP ledger sync.',
    icon: FileSpreadsheet,
    badge: '99.8% Precision',
    problem: 'Accounts payable and operations teams manually retype invoices, purchase orders, shipping manifests, and contracts with high error rates.',
    solution: 'Spatial vision models and dense table extractors that parse unstructured PDFs, scans, and spreadsheets into structured JSON schemas automatically.',
    result: '85% faster invoice processing cycles with zero data-entry errors.',
    features: [
      'Dense tabular extraction for multi-page complex financial records',
      'Automated 3-way matching against Purchase Orders and contracts',
      'Built-in GSTIN, tax, currency, and vendor validation rules',
      'Direct one-click export into SAP, Oracle, Zoho, and QuickBooks'
    ]
  },
  {
    id: 'custom',
    title: 'Custom Sovereign AI & VPC Deployment',
    tagline: 'Private, air-gapped infrastructure built for regulated industries.',
    icon: Server,
    badge: 'Complete Privacy',
    problem: 'Enterprises in finance, healthcare, and defense cannot transmit sensitive customer data or intellectual property to public multi-tenant APIs.',
    solution: 'Custom fine-tuned models deployed inside your private AWS/GCP/Azure VPC or on-premise data center with complete isolation.',
    result: '100% data sovereignty, full regulatory compliance, and zero vendor lock-in.',
    features: [
      'Air-gapped and private VPC container deployment',
      'Custom fine-tuning on proprietary domain terminology and datasets',
      'Zero model training on customer data guarantees',
      'SOC2 Type II, ISO 27001, and HIPAA compliance readiness'
    ]
  }
]

export const SolutionsSection: FC = () => {
  const [activeId, setActiveId] = useState<string>('agents')
  const { openConsult } = useConsult()
  const activeSolution = SOLUTIONS.find((s) => s.id === activeId) || SOLUTIONS[0]
  const ActiveIcon = activeSolution.icon

  return (
    <section
      id="solutions"
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
          <span>Enterprise AI Solutions</span>
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
          Targeted Systems Built for Real Business Value
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.72)',
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.6,
            marginBottom: '48px',
          }}
        >
          We don't sell generic chatbots. We build deterministic, production-grade AI systems tailored to your company's highest-cost operational workflows.
        </p>

        {/* Solutions Selector Navigation Pills */}
        <div
          className="no-scrollbar"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(20px)',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflowX: 'auto',
            maxWidth: '100%',
            marginBottom: '40px',
          }}
        >
          {SOLUTIONS.map((s) => {
            const Icon = s.icon
            const isActive = s.id === activeId
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveId(s.id)}
                style={{
                  fontFamily: 'var(--font-matter)',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s var(--ease-super)',
                  backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                  color: isActive ? '#0C0B0C' : 'rgba(255, 255, 255, 0.75)',
                  boxShadow: isActive ? '0 0 20px rgba(0, 240, 255, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)' : 'none',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                <Icon size={16} color={isActive ? '#0C0B0C' : '#00F0FF'} />
                <span>{s.title.split('&')[0].trim()}</span>
              </button>
            )
          })}
        </div>

        {/* Active Solution Deep-Dive Card */}
        <div
          className="sc-stroke-card"
          style={{
            width: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
          }}
        >
          <div className="sc-gradient-beam" />
          <div
            className="sc-card-body"
            style={{
              padding: 'clamp(28px, 4vw, 48px)',
              backgroundColor: 'rgba(18, 17, 23, 0.85)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: 'clamp(32px, 4vw, 56px)',
                alignItems: 'center',
              }}
            >
              {/* Left Column: Problem -> Solution -> Result Narrative */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(0, 240, 255, 0.12)',
                      border: '1px solid rgba(0, 240, 255, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--neon-cyan)',
                      boxShadow: '0 0 20px rgba(0, 240, 255, 0.25)',
                    }}
                  >
                    <ActiveIcon size={24} />
                  </div>
                  <div>
                    <span className="sc-telemetry-badge">
                      <span className="dot" />
                      <span>{activeSolution.badge}</span>
                    </span>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-season-mix)',
                    fontSize: 'clamp(26px, 3vw, 36px)',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    marginBottom: '10px',
                  }}
                >
                  {activeSolution.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-matter)',
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.75)',
                    lineHeight: 1.55,
                    marginBottom: '28px',
                  }}
                >
                  {activeSolution.tagline}
                </p>

                {/* Problem Box */}
                <div
                  style={{
                    padding: '16px 20px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(255, 95, 86, 0.08)',
                    border: '1px solid rgba(255, 95, 86, 0.22)',
                    marginBottom: '14px',
                  }}
                >
                  <div style={{ fontSize: '11px', color: '#FF5F56', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                    The Client Problem:
                  </div>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.82)', lineHeight: 1.5 }}>
                    {activeSolution.problem}
                  </p>
                </div>

                {/* Solution Box */}
                <div
                  style={{
                    padding: '16px 20px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(0, 112, 243, 0.12)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    marginBottom: '14px',
                  }}
                >
                  <div style={{ fontSize: '11px', color: 'var(--neon-cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                    The Novarix Solution:
                  </div>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.5 }}>
                    {activeSolution.solution}
                  </p>
                </div>

                {/* Measurable Result Box */}
                <div
                  style={{
                    padding: '16px 20px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                  }}
                >
                  <div style={{ fontSize: '11px', color: '#10B981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                    Measurable Client Outcome:
                  </div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#34D399', lineHeight: 1.5 }}>
                    {activeSolution.result}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Features & CTA */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  padding: 'clamp(20px, 3vw, 32px)',
                  backgroundColor: 'rgba(12, 11, 12, 0.65)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-matter)',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span>Capabilities & Specifications</span>
                    <span style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                  </h4>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none', marginBottom: '32px' }}>
                    {activeSolution.features.map((feature, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          fontFamily: 'var(--font-matter)',
                          fontSize: '14.5px',
                          color: 'rgba(255, 255, 255, 0.82)',
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2 size={18} color="#00F0FF" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <button
                    type="button"
                    className="btn-superconscious-primary"
                    onClick={openConsult}
                    style={{ width: '100%', padding: '0.9rem 1.6rem', fontSize: '15px' }}
                  >
                    <span>Book a Demo for {activeSolution.title.split('&')[0].trim()}</span>
                    <ArrowRight size={16} />
                  </button>

                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.5)' }}>
                    <span>Includes Custom Proof-of-Concept</span>
                    <span>•</span>
                    <span>No Obligation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
