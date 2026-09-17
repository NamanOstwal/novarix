import { ConsultButton } from './Button'
import { Reveal } from './Reveal'

const MODELS = [
  {
    title: 'Workflow Audit',
    copy: 'Identify high-value automation opportunities inside the business.',
  },
  {
    title: 'Fixed-Scope Automation',
    copy: 'Build a specific automation workflow from discovery to deployment.',
  },
  {
    title: 'Ongoing Automation Partner',
    copy: 'Continuously build, maintain, monitor, and improve automation systems.',
  },
  {
    title: 'Custom Enterprise Engagement',
    copy: 'Design larger interconnected automation systems across multiple teams and platforms.',
  },
]

const NEXT_STEPS = [
  'Book a 30-minute workflow call',
  'Share the systems and manual steps involved',
  'Receive a practical recommendation and next scope',
]

export function Engagement() {
  return (
    <section className="engage" id="engagement" aria-labelledby="eng-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Engagement model</p>
          <h2 id="eng-title">Automation, delivered as a service.</h2>
          <p className="lede">
            Veyra designs, builds, and operates automation on a contract and
            project basis — not as a self-serve product you have to assemble
            yourself.
          </p>
        </Reveal>
        <div className="engage-grid">
          {MODELS.map((item, i) => (
            <Reveal as="article" key={item.title} delay={i * 70} className="engage-card">
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="next-steps">
          <div>
            <p className="eyebrow">After you book</p>
            <h3>Know exactly what happens next.</h3>
          </div>
          <ol>
            {NEXT_STEPS.map((step, i) => (
              <li key={step}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal>
          <ConsultButton>
            Discuss Your Automation Project <span className="arrow">→</span>
          </ConsultButton>
        </Reveal>
      </div>
    </section>
  )
}
