import type { FC } from 'react'
import { CheckCircle2 } from 'lucide-react'

interface CaseStudy {
  id: string
  clientType: string
  title: string
  headlineMetric: string
  headlineLabel: string
  problem: string
  solution: string
  outcomes: string[]
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-rag',
    clientType: 'Enterprise Financial Services',
    title: 'Autonomous Compliance RAG & Regulatory Intelligence',
    headlineMetric: '72%',
    headlineLabel: 'Reduction in Policy Search Time',
    problem: 'Compliance officers and underwriters were spending 4+ hours daily cross-referencing 14,000+ changing regulatory circulars, audit memos, and credit policies across legacy drives.',
    solution: 'Novarix deployed an on-premise sovereign RAG knowledge layer with hybrid dense vector retrieval and strict page-level citation verification.',
    outcomes: [
      'Search turnaround dropped from 4 hours to under 30 seconds',
      '100% citation traceability for all internal compliance audit filings',
      'Zero proprietary credit policies transmitted to external cloud APIs'
    ]
  },
  {
    id: 'logistics-ocr',
    clientType: 'Global Supply Chain & Freight',
    title: 'Autonomous Multi-Currency Accounts Payable Pipeline',
    headlineMetric: '85%',
    headlineLabel: 'Faster Invoice Processing Cycles',
    problem: 'Operations teams manually processed over 5,000 international vendor manifests and customs declarations monthly, leading to invoice backlogs and duplicate billing errors.',
    solution: 'Integrated Novarix Spatial OCR and multi-agent validation swarm that performs automated 3-way PO matching and direct SAP ledger sync.',
    outcomes: [
      'Processed 5,000+ multi-page shipping invoices with 99.8% field extraction precision',
      'Eliminated manual keying errors and duplicate payments completely',
      'Recovered $320,000+ in annual operational labor spend'
    ]
  },
  {
    id: 'sre-devops',
    clientType: 'High-Growth Enterprise SaaS',
    title: 'Autonomous SRE On-Call Incident Investigation Agent',
    headlineMetric: '3.5 min',
    headlineLabel: 'Mean Time to Root Cause (down from 45 min)',
    problem: 'On-call DevOps engineers were overwhelmed by alert storms during outages, manually querying Datadog logs, AWS metrics, and GitHub commits to diagnose root causes.',
    solution: 'Configured a Novarix Autonomous Investigation Agent triggered via PagerDuty webhooks that correlates logs, profiles database queries, and generates Jira remediation tickets.',
    outcomes: [
      'MTTR reduced by 92% across production microservice clusters',
      'Automated root-cause reports generated and posted to Slack in under 4 minutes',
      'Saved on-call engineers 120+ hours of off-hours manual log digging'
    ]
  }
]

export const CaseStudiesSection: FC = () => {
  return (
    <section
      id="case-studies"
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
          <span>Proven Production Impact</span>
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
          Engineered for Real Production Deployments
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.72)',
            textAlign: 'center',
            maxWidth: '720px',
            lineHeight: 1.6,
            marginBottom: '52px',
          }}
        >
          See how leading organizations leverage Novarix to replace tedious manual processes with sovereign, verifiable AI workflows.
        </p>

        {/* Case Studies 3-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '28px',
            width: '100%',
          }}
        >
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="sc-stroke-card"
              style={{
                borderRadius: '22px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className="sc-gradient-beam" />
              <div
                className="sc-card-body"
                style={{
                  padding: '32px 28px',
                  backgroundColor: 'rgba(18, 17, 23, 0.85)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <div>
                  <div style={{ fontSize: '11.5px', color: 'var(--neon-cyan)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '8px' }}>
                    {cs.clientType}
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-matter)', fontSize: '20px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '20px' }}>
                    {cs.title}
                  </h3>

                  {/* Big Metric Box */}
                  <div
                    style={{
                      padding: '16px 20px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(0, 112, 243, 0.12)',
                      border: '1px solid rgba(0, 240, 255, 0.3)',
                      marginBottom: '20px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '32px',
                        fontWeight: 800,
                        color: 'var(--neon-cyan)',
                        lineHeight: 1,
                        marginBottom: '4px',
                      }}
                    >
                      {cs.headlineMetric}
                    </div>
                    <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 500 }}>
                      {cs.headlineLabel}
                    </div>
                  </div>

                  {/* Problem & Solution snippets */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      Problem:
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, marginBottom: '12px' }}>
                      {cs.problem}
                    </p>

                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--neon-cyan)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      Novarix Solution:
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Key Outcomes */}
                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '11px', color: '#10B981', textTransform: 'uppercase', fontWeight: 700, marginBottom: '10px' }}>
                    Key Verified Outcomes:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {cs.outcomes.map((item, idx) => (
                      <li key={idx} style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.4 }}>
                        <CheckCircle2 size={15} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
