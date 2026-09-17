import { Reveal } from './Reveal'

const BEFORE = [
  'Manual data entry',
  'Copy-paste between systems',
  'Email-based approvals',
  'Spreadsheet updates',
  'Repeated API operations',
  'Human follow-ups',
  'Manual reporting',
]

const AFTER = [
  'AI-powered processing',
  'Automatic system synchronization',
  'Intelligent routing',
  'Real-time updates',
  'Automated workflows',
  'Exception-based human review',
  'Automated reporting',
]

export function BeforeAfter() {
  return (
    <section className="ba" aria-labelledby="ba-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Shift the work</p>
          <h2 id="ba-title">Less manual intervention. More operational throughput.</h2>
        </Reveal>
        <div className="ba-split">
          <Reveal className="ba-col ba-before">
            <p className="ba-label">Before</p>
            <ul>
              {BEFORE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80} className="ba-center">
            <div className="ba-meter">
              <p>
                Manual Intervention <strong>↓</strong>
              </p>
              <p>
                Automation <strong>↑</strong>
              </p>
              <p>
                Operational Efficiency <strong>↑</strong>
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="ba-col ba-after">
            <p className="ba-label">After</p>
            <ul>
              {AFTER.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
