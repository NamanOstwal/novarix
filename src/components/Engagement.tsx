import { Reveal } from './Reveal'
import { ConsultButton } from './Button'
import { COMPANY } from '../brand'

const MODELS = [
  {
    title: 'Consultation & Discovery',
    copy: 'We review your workflows, systems, and repetitive tasks to identify where automation delivers the highest return on investment.',
  },
  {
    title: 'Custom Automation Architecture',
    copy: 'We design bespoke AI workflows and integrations tailored specifically to your data schema, security requirements, and team processes.',
  },
  {
    title: 'Contract Build & Deployment',
    copy: 'We build, test, and deploy production-ready automations without disrupting day-to-day operations.',
  },
  {
    title: 'Ongoing Monitoring & Maintenance',
    copy: 'We ensure automations stay reliable as software updates, APIs evolve, and business edge cases emerge.',
  },
]

const NEXT_STEPS = [
  'Understand what is slowing your team down',
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
            {COMPANY} designs, builds, and operates automation on a contract and
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
