import { useState, type FC } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useConsult } from '../context/ConsultContext'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: 'How does Novarix prevent AI hallucinations and unauthorized actions?',
    answer: 'Novarix enforces deterministic output validation and strict RAG grounding. For information queries, answers are synthesized only from retrieved chunks with exact citations. For operational tool execution (e.g., modifying records in Salesforce or staging bank payouts), actions pass through a configurable risk engine. High-risk transactions trigger a 1-click human approval request in Slack, Teams, or email before any API mutation executes.'
  },
  {
    question: 'Will our proprietary enterprise data be used to train AI models?',
    answer: 'Absolutely not. We have a strict contractual zero-training guarantee. All embeddings, prompts, document files, and tool parameters remain strictly isolated to your dedicated tenant or private VPC. No customer data is ever retained for foundation model training or shared with third parties.'
  },
  {
    question: 'Can Novarix agents connect to legacy on-premise databases and custom APIs?',
    answer: 'Yes. Novarix supports the Model Context Protocol (MCP) as well as custom REST, GraphQL, gRPC, and SQL/ODBC database adapters. We can deploy secure VPC agent proxies that peer directly with your private AWS/Azure/GCP subnets or on-premise datacenter firewalls with zero inbound public internet exposure.'
  },
  {
    question: 'What is the typical timeline to launch a production-grade AI agent workflow?',
    answer: 'Our structured delivery process takes 2 to 4 weeks for an initial production pilot. Week 1 is dedicated to workflow mapping and data connector setup. Week 2–3 involves agent orchestration, guardrail tuning, and benchmark validation against historical data. Week 4 is production rollout with live monitoring.'
  },
  {
    question: 'How does deployment and hosting work (Cloud vs. Sovereign VPC)?',
    answer: 'We offer flexible deployment topologies based on your security compliance needs: (1) Managed Enterprise Cloud with tenant isolation and KMS encryption, (2) Dedicated Private VPC deployed directly in your AWS, Azure, or GCP cloud account, or (3) Fully air-gapped on-premise deployment for defense and sovereign banking environments.'
  },
  {
    question: 'How does Novarix pricing work?',
    answer: 'We structure pricing transparently around business value: an initial implementation sprint for custom workflow architecture & integration, followed by predictable monthly capacity based on active agent workflows and compute throughput. No opaque per-token surprise bills.'
  }
]

export const FaqSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { openConsult } = useConsult()

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section
      id="faq"
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
          <span>Frequently Asked Questions</span>
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
          Frequently Asked Questions
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-matter)',
            fontSize: '17px',
            color: 'rgba(255, 255, 255, 0.72)',
            textAlign: 'center',
            maxWidth: '720px',
            lineHeight: 1.6,
            marginBottom: '48px',
          }}
        >
          Key questions prospective enterprise partners ask before deploying Novarix in production.
        </p>

        {/* Accordion Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            width: '100%',
            maxWidth: '880px',
            marginBottom: '48px',
          }}
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                style={{
                  borderRadius: '16px',
                  backgroundColor: isOpen ? 'rgba(0, 112, 243, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${isOpen ? 'rgba(0, 240, 255, 0.35)' : 'rgba(255, 255, 255, 0.08)'}`,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 8px 30px rgba(0, 112, 243, 0.15)' : 'none',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '22px 26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-matter)',
                    fontSize: '16.5px',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ paddingRight: '16px', lineHeight: 1.35 }}>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    color={isOpen ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.5)'}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 26px 24px',
                      fontFamily: 'var(--font-matter)',
                      fontSize: '14.5px',
                      lineHeight: 1.65,
                      color: 'rgba(255, 255, 255, 0.78)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      paddingTop: '16px',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Contact Prompt */}
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)' }}>
            Have a question specific to your architecture or security compliance requirements?
          </div>
          <button
            type="button"
            className="btn-superconscious-secondary"
            onClick={openConsult}
            style={{ padding: '0.65rem 1.6rem', fontSize: '14px' }}
          >
            <span>Ask Our Engineering Team</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  )
}
