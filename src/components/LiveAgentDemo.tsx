import { useState, useEffect, useRef, type FC } from 'react'
import { Play, Pause, RotateCcw, Check, Sparkles, ArrowRight, ShieldCheck, Wrench } from 'lucide-react'
import { useConsult } from '../context/ConsultContext'

interface Step {
  id: number
  title: string
  tool: string
  output: string
  status: 'pending' | 'running' | 'completed'
}

interface DemoScenario {
  id: string
  title: string
  department: string
  userPrompt: string
  steps: Step[]
  finalSummary: {
    heading: string
    keyFindings: string[]
    actionTaken: string
  }
}

const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: 'engineering-incident',
    title: 'Incident Investigation & Jira Triage',
    department: 'Engineering & SRE',
    userPrompt: 'Investigate the API latency spike reported in EU-West cluster yesterday and create an action item.',
    steps: [
      {
        id: 1,
        title: 'Search Logs & Telemetry',
        tool: 'Datadog & CloudWatch API',
        output: 'Retrieved 84,200 log lines from 14:00 - 15:30 UTC. Isolated 504 Gateway Timeouts peaking at 14:22 UTC.',
        status: 'pending'
      },
      {
        id: 2,
        title: 'Cross-Reference Git Deployments',
        tool: 'GitHub API & CI/CD Pipeline',
        output: 'Correlated spike with PR #412 ("Migrate user permissions query"). Commit SHA: e9f82d1 deployed at 14:18 UTC.',
        status: 'pending'
      },
      {
        id: 3,
        title: 'Analyze Root Cause',
        tool: 'Postgres Query Profiler & LLM Engine',
        output: 'Missing index on `organizations.member_roles` table caused full table scans on tenant auth lookups under load.',
        status: 'pending'
      },
      {
        id: 4,
        title: 'File Tracked Jira Ticket & Alert On-Call',
        tool: 'Jira Software API & Slack Webhook',
        output: 'Created P1 Ticket NVX-2041 with suggested composite B-Tree index migration script. Dispatched Slack notification to #sre-alerts.',
        status: 'pending'
      }
    ],
    finalSummary: {
      heading: 'Root Cause Identified & Remediated',
      keyFindings: [
        'Root Cause: Full table scan on `organizations.member_roles` table introduced in PR #412',
        'Impact Duration: 34 minutes (14:18 - 14:52 UTC), 4.2% requests affected',
        'Auto-Generated Fix: `CREATE INDEX CONCURRENTLY idx_org_member ON organizations(member_roles);`'
      ],
      actionTaken: 'Jira ticket NVX-2041 created with migration patch & assigned to DevOps lead.'
    }
  },
  {
    id: 'sales-churn',
    title: 'Customer Churn Analysis & Outreach',
    department: 'Sales & Customer Success',
    userPrompt: 'Analyze our enterprise accounts and identify clients with high risk of churn this quarter.',
    steps: [
      {
        id: 1,
        title: 'Connect & Ingest CRM Data',
        tool: 'Salesforce CRM API',
        output: 'Ingested 1,842 active accounts, usage metrics, support ticket frequency, and contract renewal dates.',
        status: 'pending'
      },
      {
        id: 2,
        title: 'Evaluate Usage Anomalies',
        tool: 'Novarix Predictive Risk Engine',
        output: 'Detected 42% drop in active weekly seats for 3 key enterprise accounts over past 30 days.',
        status: 'pending'
      },
      {
        id: 3,
        title: 'Triage High-Risk Accounts',
        tool: 'Risk Scoring Classifier',
        output: 'Identified 3 high-risk tier-1 accounts: Acme Corp (87% churn score), Nexus Dynamics (82%), Horizon Global (79%).',
        status: 'pending'
      },
      {
        id: 4,
        title: 'Draft Proactive Remediation Plans',
        tool: 'Email & Calendar Integration',
        output: 'Generated executive health summary and drafted personalized re-engagement agendas for assigned Customer Success Managers.',
        status: 'pending'
      }
    ],
    finalSummary: {
      heading: '3 High-Risk Accounts Flagged with Action Plans',
      keyFindings: [
        'Acme Corp (Annual Value: $120,000) — API error rate increased by 18% in last sprint',
        'Nexus Dynamics (Annual Value: $85,000) — Primary admin stakeholder left company',
        'Horizon Global (Annual Value: $95,000) — Support tickets pending > 48 hours'
      ],
      actionTaken: 'Drafted tailored executive review emails and staged meetings in CSM calendars.'
    }
  },
  {
    id: 'enterprise-rag',
    title: 'SOC2 Compliance & Policy Search',
    department: 'Legal & Security',
    userPrompt: 'What is our corporate vendor risk assessment protocol before approving third-party AI software under SOC2?',
    steps: [
      {
        id: 1,
        title: 'Semantic Vector Retrieval',
        tool: 'Novarix Sovereign Vector DB (Hybrid Search)',
        output: 'Scanned 14,800 enterprise documents across Confluence, Google Drive, and SecOps policy repository.',
        status: 'pending'
      },
      {
        id: 2,
        title: 'Extract Grounded Policy Citations',
        tool: 'RAG Citation & Grounding Filter',
        output: 'Retrieved §4.2 ("Vendor Due Diligence Guidelines 2026") & Appendix B ("Third-Party AI & Subprocessor Assessment").',
        status: 'pending'
      },
      {
        id: 3,
        title: 'Cross-Check Access Control & RBAC',
        tool: 'Enterprise RBAC Evaluator',
        output: 'Verified requester has Level-3 Security clearance. Redacted internal audit key credentials.',
        status: 'pending'
      },
      {
        id: 4,
        title: 'Synthesize Step-by-Step Approval Protocol',
        tool: 'Grounded Synthesis Engine',
        output: 'Generated compliant 4-step vendor evaluation checklist with direct hyperlinks to internal SecOps verification forms.',
        status: 'pending'
      }
    ],
    finalSummary: {
      heading: 'Grounded SOC2 Vendor Protocol with Verifiable Citations',
      keyFindings: [
        'Mandatory Requirement: Vendor must provide SOC2 Type II or ISO 27001 report under NDA (§4.2.1)',
        'Data Governance: Must verify vendor provides zero model training guarantees on customer data (§4.2.3)',
        'Security Review: Requires sign-off from Chief Information Security Officer (CISO) and DPO'
      ],
      actionTaken: 'Delivered grounded protocol with direct citations to [SecOps-Handbook-2026.pdf#page=14].'
    }
  },
  {
    id: 'financial-invoice',
    title: 'Autonomous Accounts Payable & ERP Sync',
    department: 'Finance & Operations',
    userPrompt: 'Extract vendor invoice #NVX-9821, validate line items against PO-4412, and stage payment in SAP.',
    steps: [
      {
        id: 1,
        title: 'Dense Tabular OCR & Spatial Parsing',
        tool: 'Novarix Spatial Document Engine',
        output: 'Parsed multi-page PDF invoice #NVX-9821 from vendor "Novarix Global Logistics". Extracted ₹2,49,000.00 total.',
        status: 'pending'
      },
      {
        id: 2,
        title: '3-Way Match Against Purchase Order',
        tool: 'SAP S/4HANA ERP Connector',
        output: 'Matched line items against PO-4412. Quantities, unit rates, and GSTIN (29AAACN8472M1Z0) verified with 100% precision.',
        status: 'pending'
      },
      {
        id: 3,
        title: 'Human-in-the-Loop Risk Evaluation',
        tool: 'Policy & Threshold Guardrail',
        output: 'Invoice amount (< ₹5,00,000 threshold) meets autonomous settlement policy rules.',
        status: 'pending'
      },
      {
        id: 4,
        title: 'Stage Ledger Entry & Dispatch Receipt',
        tool: 'ERP Ledger & WhatsApp Business API',
        output: 'Staged entry in Accounts Payable ledger. Generated remittance receipt and notified finance team.',
        status: 'pending'
      }
    ],
    finalSummary: {
      heading: 'Invoice Validated & Staged for Settlement in 1.8s',
      keyFindings: [
        'Vendor: Novarix Global Logistics Ltd. (GSTIN: 29AAACN8472M1Z0)',
        'Validation: 3-way match verified against Purchase Order PO-4412',
        'Total Amount: ₹2,49,000.00 (Tax Invoice NVX-9821)'
      ],
      actionTaken: 'Staged in SAP Accounts Payable module with full audit provenance.'
    }
  }
]

export const LiveAgentDemo: FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<DemoScenario>(DEMO_SCENARIOS[0])
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [completed, setCompleted] = useState<boolean>(false)
  const timerRef = useRef<number | null>(null)
  const { openConsult } = useConsult()

  // Reset simulation when scenario changes
  useEffect(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current)
      timerRef.current = null
    }
    setIsRunning(false)
    setCurrentStepIndex(0)
    setCompleted(false)
  }, [selectedScenario])

  // Step progression simulator
  useEffect(() => {
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev < selectedScenario.steps.length) {
            return prev + 1
          } else {
            setIsRunning(false)
            setCompleted(true)
            if (timerRef.current !== null) {
              window.clearInterval(timerRef.current)
              timerRef.current = null
            }
            return prev
          }
        })
      }, 1400)
    } else if (timerRef.current !== null) {
      window.clearInterval(timerRef.current)
      timerRef.current = null
    }

    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [isRunning, selectedScenario.steps.length])

  const handleRun = () => {
    if (completed) {
      setCurrentStepIndex(0)
      setCompleted(false)
    }
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setCurrentStepIndex(0)
    setCompleted(false)
  }

  return (
    <section
      id="demo"
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
          <span>Interactive AI Demo Simulator</span>
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
          See an Agent Work in Real Time
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.72)',
            textAlign: 'center',
            maxWidth: '740px',
            lineHeight: 1.6,
            marginBottom: '40px',
          }}
        >
          Select an enterprise scenario below to simulate how Novarix agents reason over natural language requests, query tools, coordinate multi-step workflows, and generate verified outcomes.
        </p>

        {/* Scenario Selection Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '12px',
            width: '100%',
            marginBottom: '32px',
          }}
        >
          {DEMO_SCENARIOS.map((sc) => {
            const isSelected = selectedScenario.id === sc.id
            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => setSelectedScenario(sc)}
                style={{
                  padding: '16px 20px',
                  borderRadius: '16px',
                  backgroundColor: isSelected ? 'rgba(0, 112, 243, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${isSelected ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.08)'}`,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 0 24px rgba(0, 240, 255, 0.25)' : 'none',
                }}
              >
                <div style={{ fontSize: '11px', color: isSelected ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '6px' }}>
                  {sc.department}
                </div>
                <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.3 }}>
                  {sc.title}
                </div>
              </button>
            )
          })}
        </div>

        {/* Main Terminal Sandbox Card */}
        <div
          className="sc-stroke-card"
          style={{
            width: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
          }}
        >
          <div className="sc-gradient-beam" />
          <div className="sc-card-body">
            
            {/* Terminal Top Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', marginLeft: '6px' }}>
                  novarix-agent // execution-runtime-v4.2 // {selectedScenario.id}
                </span>
              </div>

              {/* Simulation Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {!isRunning && !completed && (
                  <button
                    type="button"
                    onClick={handleRun}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '7px 16px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(0, 240, 255, 0.15)',
                      border: '1px solid var(--neon-cyan)',
                      color: 'var(--neon-cyan)',
                      fontFamily: 'var(--font-matter)',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      boxShadow: '0 0 16px rgba(0, 240, 255, 0.3)',
                    }}
                  >
                    <Play size={14} />
                    <span>Run Agent Workflow</span>
                  </button>
                )}

                {isRunning && (
                  <button
                    type="button"
                    onClick={handlePause}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '7px 16px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 189, 46, 0.15)',
                      border: '1px solid #FFBD2E',
                      color: '#FFBD2E',
                      fontFamily: 'var(--font-matter)',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    <Pause size={14} />
                    <span>Pause</span>
                  </button>
                )}

                {completed && (
                  <button
                    type="button"
                    onClick={handleRun}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '7px 16px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid #10B981',
                      color: '#10B981',
                      fontFamily: 'var(--font-matter)',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    <RotateCcw size={14} />
                    <span>Re-Run Demo</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset Demo"
                  style={{
                    padding: '7px 10px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.6)',
                    cursor: 'pointer',
                  }}
                >
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              style={{
                padding: 'clamp(20px, 4vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {/* User Prompt Box */}
              <div
                style={{
                  padding: '18px 22px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(115, 34, 242, 0.12)',
                  border: '1px solid rgba(151, 128, 255, 0.35)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(151, 128, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C4B5FD',
                    flexShrink: 0,
                  }}
                >
                  <Sparkles size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#9780FF', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '4px' }}>
                    User Request:
                  </div>
                  <div style={{ fontFamily: 'var(--font-matter)', fontSize: '15.5px', color: '#FFFFFF', fontWeight: 500 }}>
                    "{selectedScenario.userPrompt}"
                  </div>
                </div>
              </div>

              {/* Step by Step Execution Timeline */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.55)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Multi-Step Autonomous Execution Chain
                  </span>
                  <span className="sc-telemetry-badge">
                    <span className="dot" />
                    <span>
                      {isRunning
                        ? `Executing Step ${Math.min(currentStepIndex + 1, selectedScenario.steps.length)} of ${selectedScenario.steps.length}...`
                        : completed
                        ? 'Execution Complete (100% Verified)'
                        : 'Ready to Run'}
                    </span>
                  </span>
                </div>

                {selectedScenario.steps.map((step, index) => {
                  const isDone = currentStepIndex > index
                  const isCurrent = currentStepIndex === index && isRunning

                  return (
                    <div
                      key={step.id}
                      style={{
                        padding: '18px 20px',
                        borderRadius: '14px',
                        backgroundColor: isDone
                          ? 'rgba(0, 112, 243, 0.08)'
                          : isCurrent
                          ? 'rgba(0, 240, 255, 0.12)'
                          : 'rgba(255, 255, 255, 0.02)',
                        border: `1px solid ${
                          isDone
                            ? 'rgba(0, 240, 255, 0.3)'
                            : isCurrent
                            ? 'var(--neon-cyan)'
                            : 'rgba(255, 255, 255, 0.06)'
                        }`,
                        transition: 'all 0.3s ease',
                        boxShadow: isCurrent ? '0 0 20px rgba(0, 240, 255, 0.2)' : 'none',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          {/* Step Number / Status Icon */}
                          <div
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              backgroundColor: isDone
                                ? '#10B981'
                                : isCurrent
                                ? 'var(--neon-cyan)'
                                : 'rgba(255, 255, 255, 0.1)',
                              color: isDone || isCurrent ? '#0C0B0C' : 'rgba(255, 255, 255, 0.6)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '12px',
                              fontWeight: 700,
                            }}
                          >
                            {isDone ? <Check size={14} strokeWidth={3} /> : step.id}
                          </div>

                          <span style={{ fontFamily: 'var(--font-matter)', fontSize: '14.5px', fontWeight: 600, color: '#FFFFFF' }}>
                            {step.title}
                          </span>
                        </div>

                        {/* Tool Badge */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '3px 10px',
                            borderRadius: '6px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            fontSize: '12px',
                            color: 'var(--neon-cyan)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          <Wrench size={12} />
                          <span>{step.tool}</span>
                        </div>
                      </div>

                      {/* Output preview */}
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '13px',
                          color: isDone || isCurrent ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.35)',
                          paddingLeft: '34px',
                          lineHeight: 1.5,
                        }}
                      >
                        {isDone || isCurrent ? `➔ ${step.output}` : 'Standing by for execution trigger...'}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Final Summary Card (Visible when completed) */}
              {completed && (
                <div
                  style={{
                    padding: '24px',
                    borderRadius: '18px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    boxShadow: '0 0 35px rgba(16, 185, 129, 0.15)',
                    animation: 'fadeIn 0.5s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: '#10B981',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0C0B0C',
                      }}
                    >
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '17px', fontWeight: 600, color: '#FFFFFF' }}>
                      {selectedScenario.finalSummary.heading}
                    </h4>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', paddingLeft: '38px' }}>
                    {selectedScenario.finalSummary.keyFindings.map((finding, idx) => (
                      <li key={idx} style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.5 }}>
                        • {finding}
                      </li>
                    ))}
                  </ul>

                  <div
                    style={{
                      padding: '12px 18px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      fontSize: '13.5px',
                      color: 'var(--neon-cyan)',
                      fontFamily: 'var(--font-matter)',
                      fontWeight: 500,
                    }}
                  >
                    <strong>Action Executed:</strong> {selectedScenario.finalSummary.actionTaken}
                  </div>
                </div>
              )}

              {/* Bottom Conversion Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  flexWrap: 'wrap',
                  gap: '14px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.55)' }}>
                  <ShieldCheck size={16} color="#10B981" />
                  <span>Full telemetry provenance & tamper-proof audit trail</span>
                </div>

                <button
                  type="button"
                  className="btn-superconscious-primary"
                  onClick={openConsult}
                  style={{ padding: '0.75rem 1.8rem', fontSize: '14.5px' }}
                >
                  <span>Build This Agent For Your Business</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
