import { useState, type FC } from 'react'
import { Briefcase, Cog, Code2, Headphones, CheckCircle2 } from 'lucide-react'
import { useConsult } from '../context/ConsultContext'

interface DepartmentUseCase {
  id: string
  name: string
  icon: typeof Briefcase
  summary: string
  workflows: Array<{
    title: string
    description: string
    impact: string
  }>
}

const USE_CASES: DepartmentUseCase[] = [
  {
    id: 'sales',
    name: 'Sales & Revenue Operations',
    icon: Briefcase,
    summary: 'Accelerate deal velocity, automate CRM updates, and qualify inbound pipeline in seconds.',
    workflows: [
      {
        title: 'Instant Inbound Lead Qualification',
        description: 'Enrich incoming leads using website telemetry, LinkedIn data, and firmographics, assigning scores and booking meetings in SDR calendars automatically.',
        impact: '4x faster time-to-first-touch on high-intent inbound prospects.'
      },
      {
        title: 'Autonomous CRM Data Hygiene',
        description: 'Listen to sales call transcripts and automatically log deal stages, next steps, objections, and buying committees directly into Salesforce/HubSpot.',
        impact: 'Saves sales reps 6+ hours per week of manual data entry.'
      },
      {
        title: 'Personalized Multi-Channel Outreach',
        description: 'Generate hyper-personalized email and WhatsApp follow-ups grounded in each account’s specific tech stack and recent funding or news.',
        impact: '38% higher response rates over generic template cadences.'
      },
      {
        title: 'Automated Quote & Proposal Drafting',
        description: 'Parse customer requirements from discovery notes and assemble customized RFP responses and commercial proposals with pricing guardrails.',
        impact: 'Reduces RFP turnaround time from 3 days to 20 minutes.'
      }
    ]
  },
  {
    id: 'operations',
    name: 'Finance & Operations',
    icon: Cog,
    summary: 'Eliminate manual data reconciliation, invoice processing, and cross-system administrative friction.',
    workflows: [
      {
        title: 'End-to-End Invoice Reconciliation',
        description: 'Ingest multi-currency vendor invoices via email or portals, perform automated 3-way matching with Purchase Orders, and stage ERP ledger entries.',
        impact: '85% faster invoice payment cycles with zero manual keying errors.'
      },
      {
        title: 'Contract Compliance & Risk Auditing',
        description: 'Scan vendor MSAs, NDAs, and customer agreements for non-standard indemnification clauses, SLA risks, and renewal deadlines.',
        impact: '70% reduction in legal review bottlenecks for standard agreements.'
      },
      {
        title: 'Cross-System Data Synchronization',
        description: 'Bridge legacy on-prem databases with modern SaaS tools, continuously validating data integrity and triggering alerts on schema drift.',
        impact: 'Eliminates periodic data reconciliation weekends.'
      },
      {
        title: 'Automated Financial Reporting',
        description: 'Aggregate revenue, expense, and operational metrics across multiple subsidiaries into consolidated executive slide decks and spreadsheets.',
        impact: 'Monthly close reporting expedited by 4 full business days.'
      }
    ]
  },
  {
    id: 'engineering',
    name: 'Engineering & DevOps / IT',
    icon: Code2,
    summary: 'Empower developers with automated incident triage, log analysis, and continuous operational intelligence.',
    workflows: [
      {
        title: 'On-Call Incident Investigation',
        description: 'When PagerDuty triggers, agent immediately queries Datadog metrics, Sentry stack traces, and recent GitHub commits to present root-cause hypotheses.',
        impact: 'Mean Time to Resolution (MTTR) cut from 45 mins to 3.5 mins.'
      },
      {
        title: 'Intelligent Code Review & Security Scanning',
        description: 'Analyze pull requests against internal architectural standards, checking for unindexed queries, API breaking changes, and secret leaks.',
        impact: 'Catches 94% of common performance and security regressions pre-merge.'
      },
      {
        title: 'Automated Jira & Backlog Maintenance',
        description: 'De-duplicate bug reports, gather reproduction logs from customers, and generate structured tickets with acceptance criteria.',
        impact: 'Zero unclassified tickets lingering in developer backlogs.'
      },
      {
        title: 'Infrastructure Cost Optimization',
        description: 'Identify idle cloud instances, unattached EBS volumes, and oversized Kubernetes pods, suggesting automated downscaling terraform PRs.',
        impact: 'Average 22% reduction in monthly cloud infrastructure spend.'
      }
    ]
  },
  {
    id: 'support',
    name: 'Customer Support & Experience',
    icon: Headphones,
    summary: 'Deliver 24/7 grounded support across voice and chat in 22+ languages with zero wait time.',
    workflows: [
      {
        title: '24/7 Multilingual Voice & Chat Concierge',
        description: 'Handle customer inquiries in real time across phone, web chat, and WhatsApp with low-latency sovereign speech synthesis.',
        impact: '70% first-contact resolution rate with zero hold time.'
      },
      {
        title: 'Grounded Technical Troubleshooting',
        description: 'Retrieve accurate, verifiable troubleshooting steps from internal product documentation, guiding users step-by-step.',
        impact: 'Zero fabricated responses due to strict vector grounding.'
      },
      {
        title: 'Smart Human Escalation & Context Handoff',
        description: 'When complex issues require a human agent, Novarix packages the entire summary, customer sentiment, and proposed solution.',
        impact: 'Human agents resolve escalated tickets 50% faster.'
      },
      {
        title: 'Customer Feedback & Voice-of-Customer Synthesis',
        description: 'Categorize thousands of support tickets weekly, clustering emerging product bugs and feature requests for the product team.',
        impact: 'Weekly executive insights on customer friction drivers.'
      }
    ]
  }
]

export const UseCasesSection: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('sales')
  const { openConsult } = useConsult()
  const activeDepartment = USE_CASES.find((d) => d.id === activeTab) || USE_CASES[0]

  return (
    <section
      id="use-cases"
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
          <span>Departmental Use Cases</span>
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
          What Can You Automate with Novarix?
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.72)',
            textAlign: 'center',
            maxWidth: '720px',
            lineHeight: 1.6,
            marginBottom: '44px',
          }}
        >
          Explore high-ROI workflows designed to replace tedious manual handoffs with autonomous, verifiable execution across every department.
        </p>

        {/* Department Tab Buttons */}
        <div
          className="no-scrollbar"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
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
          {USE_CASES.map((dept) => {
            const Icon = dept.icon
            const isActive = dept.id === activeTab
            return (
              <button
                key={dept.id}
                type="button"
                onClick={() => setActiveTab(dept.id)}
                style={{
                  fontFamily: 'var(--font-matter)',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  padding: '10px 22px',
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
                <span>{dept.name}</span>
              </button>
            )
          })}
        </div>

        {/* Department Summary Header */}
        <div
          style={{
            width: '100%',
            padding: '24px 32px',
            borderRadius: '18px',
            backgroundColor: 'rgba(0, 112, 243, 0.08)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ maxWidth: '800px' }}>
            <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '20px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>
              {activeDepartment.name} Automation Suite
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5 }}>
              {activeDepartment.summary}
            </p>
          </div>

          <button
            type="button"
            className="btn-superconscious-primary"
            onClick={openConsult}
            style={{ padding: '0.65rem 1.6rem', fontSize: '14px' }}
          >
            <span>Request {activeDepartment.name.split('&')[0].trim()} Workflow</span>
          </button>
        </div>

        {/* 4 Workflows Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
            width: '100%',
          }}
        >
          {activeDepartment.workflows.map((wf, idx) => (
            <div
              key={idx}
              className="sc-bento-tile"
              style={{
                padding: '30px 26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(21, 20, 25, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--neon-cyan)',
                      backgroundColor: 'rgba(0, 240, 255, 0.12)',
                      border: '1px solid rgba(0, 240, 255, 0.3)',
                      padding: '2px 8px',
                      borderRadius: '6px',
                    }}
                  >
                    Workflow 0{idx + 1}
                  </span>
                </div>

                <h4 style={{ fontFamily: 'var(--font-matter)', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
                  {wf.title}
                </h4>

                <p style={{ fontFamily: 'var(--font-matter)', fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
                  {wf.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '24px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}
              >
                <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '13px', color: '#34D399', fontWeight: 500, lineHeight: 1.4 }}>
                  <strong>Impact:</strong> {wf.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
