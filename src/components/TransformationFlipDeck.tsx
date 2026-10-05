import { useState, useRef, useEffect, type FC } from 'react'
import {
  RotateCw,
  Zap,
  Bot,
  Database,
  ShieldCheck,
  Cpu,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  DollarSign
} from 'lucide-react'
import { SplitBlurText } from './SplitBlurText'
import { useConsult } from '../context/ConsultContext'

interface FlipCardData {
  id: string
  category: 'revops' | 'finance' | 'sre' | 'support' | 'compliance'
  badge: string
  title: string
  problemText: string
  legacyCost: string
  legacyTime: string
  solutionTitle: string
  solutionText: string
  novarixGain: string
  systemTelemetry: {
    agent: string
    model: string
    tools: string[]
    latency: string
    safetyScore: string
  }
  icon: typeof Bot
  accentColor: string
}

const FLIP_CARDS: FlipCardData[] = [
  {
    id: 'lead-enrichment',
    category: 'revops',
    badge: 'Revenue Operations',
    title: 'Autonomous Inbound Deal Qualification',
    problemText: 'Sales development reps spend 14 hours per week researching LinkedIn, company wikis, and firmographics before sending a single personalized response.',
    legacyCost: '$120,000 / yr SDR drain',
    legacyTime: '24-48 hrs touch latency',
    solutionTitle: 'Novarix Autonomous RevOps Swarm',
    solutionText: 'Instantly enriches inbound leads via 12 real-time APIs, computes proprietary ICP alignment, drafts hyper-tailored pitches, and schedules calendar holds.',
    novarixGain: '4x pipeline velocity · 90s response time',
    systemTelemetry: {
      agent: 'RevOps-Swarm-v4',
      model: 'Sovereign Llama-3-70B + RAG',
      tools: ['salesforce.upsertLead', 'clearbit.enrich', 'cal.createBooking'],
      latency: '820ms',
      safetyScore: '99.9%'
    },
    icon: TrendingUp,
    accentColor: '#00F0FF'
  },
  {
    id: 'invoice-recon',
    category: 'finance',
    badge: 'Finance & ERP',
    title: 'Multi-Entity 3-Way Invoice Reconciliation',
    problemText: 'Accounts payable teams manually key in thousands of PDF vendor invoices, cross-referencing Purchase Orders in SAP and warehouse receipts line-by-line.',
    legacyCost: '$18 / invoice processed',
    legacyTime: '7 days cycle time',
    solutionTitle: 'Novarix Sovereign Document Swarm',
    solutionText: 'Extracts complex tabular line items with zero hallucinations, matches GL codes with strict ERP constraints, and executes ledger postings with human-in-the-loop sign-off.',
    novarixGain: '85% faster close · 0% keying errors',
    systemTelemetry: {
      agent: 'Finance-Extractor-v3',
      model: 'Sovereign Vision-Reasoner',
      tools: ['sap.postInvoice', 'oracle.verifyPO', 'slack.requestApproval'],
      latency: '450ms',
      safetyScore: '100% auditable'
    },
    icon: DollarSign,
    accentColor: '#0070F3'
  },
  {
    id: 'incident-triage',
    category: 'sre',
    badge: 'Engineering & SRE',
    title: 'Real-Time Incident Triage & Root Cause',
    problemText: 'On-call engineers wake up to ambiguous PagerDuty alarms, spending 45+ minutes digging through fragmented logs, traces, and recent GitHub pull requests.',
    legacyCost: '$8,500 / hr downtime cost',
    legacyTime: '45 min mean-time-to-diagnose',
    solutionTitle: 'Novarix DevOps Autonomous Sentinel',
    solutionText: 'Correlates distributed Datadog traces, Sentry stack traces, and recent deployments, producing an actionable root-cause hypothesis and auto-generating rollbacks.',
    novarixGain: '92% reduction in MTTR · 3.5 min resolution',
    systemTelemetry: {
      agent: 'SRE-Sentinel-v2',
      model: 'DeepReason-SRE-Engine',
      tools: ['datadog.queryMetrics', 'github.diffPR', 'k8s.triggerRollback'],
      latency: '240ms',
      safetyScore: 'Policy Guardrailed'
    },
    icon: Cpu,
    accentColor: '#9780FF'
  },
  {
    id: 'multilingual-support',
    category: 'support',
    badge: 'Customer Voice & Omni',
    title: 'Sovereign Full-Duplex Customer Voice Agents',
    problemText: 'Call centers suffer from 40% staff turnover, 8-minute hold queues, and inconsistent support across 22+ regional enterprise languages.',
    legacyCost: '$4.20 / phone ticket',
    legacyTime: '8 min wait queue',
    solutionTitle: 'Novarix Full-Duplex Voice Engine',
    solutionText: 'Sub-100ms ultra-low latency conversational voice agents speak fluent Indic and global languages, executing CRM updates and resolving Tier-1/Tier-2 issues natively.',
    novarixGain: '70% autonomous resolution · 0s queue time',
    systemTelemetry: {
      agent: 'Voice-Duplex-48kHz',
      model: 'Sovereign Indic-TTS-STT',
      tools: ['zendesk.resolveTicket', 'stripe.issueRefund', 'telephony.bridge'],
      latency: '58ms end-to-end',
      safetyScore: 'Zero Hallucination'
    },
    icon: Zap,
    accentColor: '#10B981'
  },
  {
    id: 'compliance-auditing',
    category: 'compliance',
    badge: 'Security & Legal',
    title: 'Continuous Contract & Policy Compliance',
    problemText: 'Legal counsel spends hundreds of billable hours reviewing vendor MSAs, DPAs, and NDAs for risky uncapped liability or strict data residency breaches.',
    legacyCost: '$450 / hour legal counsel',
    legacyTime: '2 weeks turnaround',
    solutionTitle: 'Novarix Sovereign Legal Guardrail',
    solutionText: 'Performs multi-clause semantic analysis against company standard terms, flags non-compliant liabilities, and suggests redline revisions with exact risk citations.',
    novarixGain: '75% faster legal sign-off · 100% compliance',
    systemTelemetry: {
      agent: 'LegalGuard-Auditor',
      model: 'Sovereign Contract-Reasoner',
      tools: ['ironclad.redlineContract', 'vault.logHash', 'notion.exportDoc'],
      latency: '680ms',
      safetyScore: 'Cryptographically Verified'
    },
    icon: ShieldCheck,
    accentColor: '#F97316'
  },
  {
    id: 'enterprise-rag',
    category: 'revops',
    badge: 'Knowledge Engine',
    title: 'Unified Cross-Repository Knowledge Search',
    problemText: 'Employees search across Google Drive, Notion, Confluence, Slack, and Salesforce, wasting 2 hours every day searching for lost internal knowledge.',
    legacyCost: '2 hrs / employee daily wasted',
    legacyTime: '15 min per query search',
    solutionTitle: 'Novarix Hybrid RAG Vector Spine',
    solutionText: 'Indexes enterprise wikis and private repositories with automated daily chunking, BM25 dense search, and role-based document access control (RBAC).',
    novarixGain: 'Sub-second answers · 100% verified citations',
    systemTelemetry: {
      agent: 'RAG-Spine-Enterprise',
      model: 'Hybrid Dense + BM25 Retr.',
      tools: ['qdrant.vectorSearch', 'gdrive.syncDaily', 'slack.replyThread'],
      latency: '180ms',
      safetyScore: 'RBAC Enforced'
    },
    icon: Database,
    accentColor: '#00F0FF'
  }
]

export const TransformationFlipDeck: FC = () => {
  const { openConsult } = useConsult()
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState<string>('all')
  const sectionRef = useRef<HTMLElement>(null)

  // Toggle card flip
  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // Auto-flip preview on scroll intersection
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Sequentially flip the first card as a live dynamic demo
          const timer1 = setTimeout(() => {
            setFlippedCards((prev) => ({ ...prev, [FLIP_CARDS[0].id]: true }))
          }, 800)

          const timer2 = setTimeout(() => {
            setFlippedCards((prev) => ({ ...prev, [FLIP_CARDS[0].id]: false }))
          }, 3200)

          observer.unobserve(el)
          return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
          }
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const filteredCards = activeTab === 'all'
    ? FLIP_CARDS
    : FLIP_CARDS.filter((c) => c.category === activeTab)

  return (
    <section
      ref={sectionRef}
      id="transformation-matrix"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '110px 24px 90px',
        backgroundColor: '#0C0B0C',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(115, 34, 242, 0.12) 0%, rgba(0, 112, 243, 0.08) 50%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Eyebrow badge */}
        <div className="sc-telemetry-badge" style={{ marginBottom: '16px' }}>
          <span className="dot" />
          <span>Interactive 3D Transformation Matrix</span>
        </div>

        {/* Section Heading with Kinetic Blur */}
        <h2
          style={{
            fontFamily: 'var(--font-season-mix)',
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 500,
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            maxWidth: '900px',
            marginBottom: '16px',
          }}
        >
          <SplitBlurText direction="up" stagger={35}>
            Dual-Sided Transformation:
          </SplitBlurText>{' '}
          <span style={{ color: 'var(--neon-cyan)', textShadow: '0 0 25px rgba(0, 240, 255, 0.4)' }}>
            <SplitBlurText direction="up" stagger={35} delay={150}>
              From Bottleneck to Autonomous Scale
            </SplitBlurText>
          </span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.72)',
            textAlign: 'center',
            maxWidth: '740px',
            lineHeight: 1.6,
            marginBottom: '38px',
          }}
        >
          Flip any card to inspect the real-world operational problem on the front, and the underlying Novarix sovereign architecture, live execution telemetry, and verified ROI on the back.
        </p>

        {/* Category Filter Pills */}
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
            marginBottom: '44px',
          }}
        >
          {[
            { id: 'all', label: 'All Operations' },
            { id: 'revops', label: 'Revenue & Sales' },
            { id: 'finance', label: 'Finance & ERP' },
            { id: 'sre', label: 'Engineering SRE' },
            { id: 'support', label: 'Customer Voice' },
            { id: 'compliance', label: 'Security & Legal' },
          ].map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-matter)',
                  fontSize: '13.5px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#0C0B0C' : 'rgba(255, 255, 255, 0.7)',
                  backgroundColor: isActive ? 'var(--neon-cyan)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s var(--ease-super)',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? '0 0 15px rgba(0, 240, 255, 0.4)' : 'none',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* 3D Flip Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
            width: '100%',
          }}
        >
          {filteredCards.map((card) => {
            const isFlipped = !!flippedCards[card.id]
            const Icon = card.icon

            return (
              <div
                key={card.id}
                className="perspective-container"
                style={{
                  height: '460px',
                  width: '100%',
                  cursor: 'pointer',
                }}
                onClick={() => toggleFlip(card.id)}
              >
                <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                  {/* ========================================================
                      FRONT SIDE: The Problem & Operational Friction
                      ======================================================== */}
                  <div
                    className="flip-card-front"
                    style={{
                      backgroundColor: 'rgba(21, 20, 25, 0.85)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65)',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    {/* Top row: badge & 3D Flip Prompt Button */}
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '20px',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-matter)',
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: card.accentColor,
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            border: `1px solid ${card.accentColor}40`,
                          }}
                        >
                          {card.badge}
                        </span>

                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            color: 'rgba(255, 255, 255, 0.5)',
                            backgroundColor: 'rgba(255, 255, 255, 0.06)',
                            padding: '4px 10px',
                            borderRadius: '9999px',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                          }}
                        >
                          <RotateCw size={12} className="animate-spin-slow" />
                          <span>Flip Blueprint</span>
                        </div>
                      </div>

                      {/* Icon & Title */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                        <div
                          style={{
                            width: '46px',
                            height: '46px',
                            borderRadius: '14px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: card.accentColor,
                            boxShadow: `0 0 20px ${card.accentColor}25`,
                          }}
                        >
                          <Icon size={22} />
                        </div>

                        <h3
                          style={{
                            fontFamily: 'var(--font-matter)',
                            fontSize: '19px',
                            fontWeight: 600,
                            color: '#FFFFFF',
                            lineHeight: 1.3,
                          }}
                        >
                          {card.title}
                        </h3>
                      </div>

                      {/* Problem Description */}
                      <p
                        style={{
                          fontFamily: 'var(--font-matter)',
                          fontSize: '14.5px',
                          color: 'rgba(255, 255, 255, 0.72)',
                          lineHeight: 1.6,
                          marginBottom: '20px',
                        }}
                      >
                        {card.problemText}
                      </p>
                    </div>

                    {/* Bottom metrics & tap prompt */}
                    <div>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '10px',
                          padding: '12px 14px',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(255, 75, 75, 0.06)',
                          border: '1px solid rgba(255, 75, 75, 0.2)',
                          marginBottom: '16px',
                        }}
                      >
                        <div>
                          <div style={{ fontFamily: 'var(--font-matter)', fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>
                            Legacy Annual Drain
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12.5px', fontWeight: 600, color: '#FF7B7B' }}>
                            {card.legacyCost}
                          </div>
                        </div>

                        <div>
                          <div style={{ fontFamily: 'var(--font-matter)', fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>
                            Manual Touch Lag
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12.5px', fontWeight: 600, color: '#FF7B7B' }}>
                            {card.legacyTime}
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          fontFamily: 'var(--font-matter)',
                          fontSize: '13px',
                          fontWeight: 500,
                          color: card.accentColor,
                        }}
                      >
                        <span>Click to reveal Novarix Sovereign Solution</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>

                  {/* ========================================================
                      BACK SIDE: The Novarix Solution & Live Telemetry
                      ======================================================== */}
                  <div
                    className="flip-card-back"
                    style={{
                      backgroundColor: '#121118',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: `1px solid ${card.accentColor}60`,
                      padding: '26px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: `0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px ${card.accentColor}20`,
                    }}
                  >
                    <div>
                      {/* Top status bar */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '16px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#10B981',
                              boxShadow: '0 0 10px #10B981',
                            }}
                          />
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '11px',
                              fontWeight: 600,
                              color: '#10B981',
                              letterSpacing: '0.05em',
                            }}
                          >
                            NOVARIX ACTIVE
                          </span>
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            color: card.accentColor,
                          }}
                        >
                          <RotateCw size={11} />
                          <span>Flip Back</span>
                        </div>
                      </div>

                      {/* Solution Title */}
                      <h4
                        style={{
                          fontFamily: 'var(--font-matter)',
                          fontSize: '17.5px',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          marginBottom: '10px',
                          lineHeight: 1.3,
                        }}
                      >
                        {card.solutionTitle}
                      </h4>

                      <p
                        style={{
                          fontFamily: 'var(--font-matter)',
                          fontSize: '13.5px',
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: 1.55,
                          marginBottom: '16px',
                        }}
                      >
                        {card.solutionText}
                      </p>

                      {/* Telemetry Box */}
                      <div
                        style={{
                          padding: '12px',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.7)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          marginBottom: '16px',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Agent Orchestrator:</span>
                          <span style={{ color: card.accentColor }}>{card.systemTelemetry.agent}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Execution Latency:</span>
                          <span style={{ color: '#10B981' }}>{card.systemTelemetry.latency}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Deterministic Safety:</span>
                          <span style={{ color: '#FFFFFF' }}>{card.systemTelemetry.safetyScore}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '2px' }}>
                          {card.systemTelemetry.tools.map((t, idx) => (
                            <span
                              key={idx}
                              style={{
                                fontSize: '10px',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                                color: '#00F0FF',
                                border: '1px solid rgba(0, 240, 255, 0.25)',
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Verified Gain Chip */}
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          marginBottom: '12px',
                        }}
                      >
                        <CheckCircle2 size={16} color="#10B981" />
                        <span
                          style={{
                            fontFamily: 'var(--font-matter)',
                            fontSize: '12.5px',
                            fontWeight: 600,
                            color: '#10B981',
                          }}
                        >
                          {card.novarixGain}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          openConsult()
                        }}
                        style={{
                          width: '100%',
                          padding: '8px',
                          borderRadius: '8px',
                          backgroundColor: card.accentColor,
                          color: '#0C0B0C',
                          fontFamily: 'var(--font-matter)',
                          fontSize: '12.5px',
                          fontWeight: 700,
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'opacity 0.2s ease',
                          textAlign: 'center',
                        }}
                      >
                        Deploy This Solution →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
