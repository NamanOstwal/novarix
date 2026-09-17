import { Reveal } from './Reveal'
import { SectionHead } from './Button'

const SOLUTIONS = [
  {
    title: 'Invoice & document processing',
    copy: 'Extract, validate, route, and write document data into the systems your finance or operations team already uses.',
  },
  {
    title: 'Support intake & routing',
    copy: 'Classify requests, gather the right context, update records, and escalate the exceptions that need a person.',
  },
  {
    title: 'CRM & operations sync',
    copy: 'Move validated data between systems, trigger follow-up work, and keep humans in control of unusual cases.',
  },
]

export function Solutions() {
  return (
    <section className="solutions" id="solutions" aria-labelledby="sol-title">
      <div className="wrap">
        <Reveal>
          <SectionHead
            id="sol-title"
            eyebrow="Start here"
            title="Start with one workflow that is costing your team time."
            copy="We begin with a defined operational problem, prove the workflow, then expand only where it makes sense."
          />
        </Reveal>
        <div className="sol-grid">
          {SOLUTIONS.map((item, i) => (
            <Reveal as="article" key={item.title} delay={i * 70} className="sol-card">
              <div className="sol-mark" aria-hidden="true">
                <span />
                <span />
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
