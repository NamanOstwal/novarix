import { Reveal } from './Reveal'

const NODES = [
  'AI Models',
  'APIs',
  'Databases',
  'Cloud Platforms',
  'CRMs',
  'Communication Tools',
  'ERP Systems',
  'Internal Software',
  'Workflow Engines',
  'Webhooks',
  'RPA',
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
            Veyra is an automation layer — not a replacement for the software
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
