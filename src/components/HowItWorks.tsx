import { Reveal } from './Reveal'
import { SectionHead } from './Button'

const STAGES = [
  {
    n: '01',
    title: 'Discover',
    copy: 'We map your existing workflow and identify repetitive manual intervention.',
  },
  {
    n: '02',
    title: 'Design',
    copy: 'We architect the automation workflow, integrations, business rules, and human checkpoints.',
  },
  {
    n: '03',
    title: 'Build',
    copy: 'We develop and deploy the automation using AI, APIs, software integrations, and workflow orchestration.',
  },
  {
    n: '04',
    title: 'Optimize',
    copy: 'We monitor performance, improve reliability, and continuously optimize the workflow.',
  },
]

export function HowItWorks() {
  return (
    <section className="how" id="how-it-works" aria-labelledby="how-title">
      <div className="wrap">
        <Reveal>
          <SectionHead
            id="how-title"
            eyebrow="How it works"
            title="From manual process to automated system."
          />
        </Reveal>
        <ol className="pipeline">
          {STAGES.map((stage, i) => (
            <Reveal as="li" key={stage.n} delay={i * 90} className="pipe-stage">
              <div className="pipe-node">
                <span>{stage.n}</span>
              </div>
              {i < STAGES.length - 1 ? <span className="pipe-line" aria-hidden="true" /> : null}
              <h3>{stage.title}</h3>
              <p>{stage.copy}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
