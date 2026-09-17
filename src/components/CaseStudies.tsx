import { Reveal } from './Reveal'

const CASES = [
  {
    kicker: 'Workflow pattern 01',
    title: 'Operations handoff',
    problem: 'Operations teams copied records between internal tools and waited on inbox approvals.',
    solution: 'Event-driven workflows now move data, apply rules, and surface only exceptions.',
    result: 'Only exceptions require a human decision; routine handoffs continue automatically.',
  },
  {
    kicker: 'Workflow pattern 02',
    title: 'Document to system-of-record',
    problem: 'Staff extracted fields from invoices and forms, then keyed them into downstream systems.',
    solution: 'AI extracts and validates fields, then writes clean records to the systems of record.',
    result: 'Clean, validated information reaches the downstream process without a full manual pass.',
  },
  {
    kicker: 'Workflow pattern 03',
    title: 'Cross-system orchestration',
    problem: 'Handoffs between CRM, billing, and support required people to glue each step together.',
    solution: 'A single orchestrated workflow connects the stack with retries and human checkpoints.',
    result: 'Work advances across systems with retries, observability, and clear human checkpoints.',
  },
]

export function CaseStudies() {
  return (
    <section className="cases" id="case-studies" aria-labelledby="cases-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Workflow patterns</p>
          <h2 id="cases-title">Concrete work we can automate.</h2>
          <p className="note">
            We do not publish performance claims before a workflow has been
            measured in a live client environment.
          </p>
        </Reveal>
        <div className="case-list">
          {CASES.map((item, i) => (
            <CaseCard key={item.title} item={item} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseCard({ item, delay }: {
  item: (typeof CASES)[number]
  delay: number
}) {
  return (
    <Reveal className="case-card" delay={delay}>
      <article>
        <div className="case-copy">
          <p className="eyebrow">{item.kicker}</p>
          <h3>{item.title}</h3>
          <dl>
            <div>
              <dt>Problem</dt>
              <dd>{item.problem}</dd>
            </div>
            <div>
              <dt>Solution</dt>
              <dd>{item.solution}</dd>
            </div>
            <div>
              <dt>Result</dt>
              <dd>{item.result}</dd>
            </div>
          </dl>
        </div>
        <MiniFlow />
      </article>
    </Reveal>
  )
}

function MiniFlow() {
  return (
    <svg className="case-flow" viewBox="0 0 280 180" role="presentation">
      <path className="pipe" d="M24 90 H256" />
      <circle cx="40" cy="90" r="10" />
      <circle cx="110" cy="90" r="10" />
      <circle cx="180" cy="90" r="10" />
      <circle cx="250" cy="90" r="10" />
      <text x="40" y="122" textAnchor="middle">In</text>
      <text x="110" y="122" textAnchor="middle">AI</text>
      <text x="180" y="122" textAnchor="middle">Rule</text>
      <text x="250" y="122" textAnchor="middle">Out</text>
    </svg>
  )
}
