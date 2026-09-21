import { Reveal } from './Reveal'
import { COMPANY } from '../brand'

const NODES = [
  'ERP Systems',
  'CRM Platforms',
  'Custom Internal Tools',
  'SQL / NoSQL DBs',
  'REST & GraphQL APIs',
  'Email & Slack Channels',
  'Document Stores',
  'Data Pipelines',
]

export function Technology() {
  return (
    <section className="tech" aria-labelledby="tech-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Stack</p>
          <h2 id="tech-title">Built around your existing stack.</h2>
          <p className="lede">
            {COMPANY} is an automation layer — not a replacement for the software
            you already run.
          </p>
        </Reveal>
        <Reveal className="tech-orbit" delay={80}>
          <div className="tech-core">
            <span>Automation Layer</span>
          </div>
          <ul>
            {NODES.map((node) => (
              <li key={node}>{node}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
