import { COMPANY } from '../brand'
import { Reveal } from './Reveal'

const POINTS = [
  {
    title: 'Business-first automation',
    copy: 'We automate workflows that create measurable operational value.',
  },
  {
    title: 'Human-in-the-loop',
    copy: 'Not every decision should be automated. Critical decisions can remain with people.',
  },
  {
    title: 'Reliable workflows',
    copy: 'Design workflows around retries, validation, failure handling, and observability.',
  },
  {
    title: 'Built for your systems',
    copy: 'Integrate with existing software instead of forcing businesses to replace everything.',
  },
  {
    title: 'Continuous improvement',
    copy: 'Automation can be monitored and refined as business processes evolve.',
  },
]

export function Why() {
  return (
    <section className="why" id="about" aria-labelledby="why-title">
      <div className="wrap why-grid">
        <Reveal className="why-sticky">
          <p className="eyebrow">Why {COMPANY}</p>
          <h2 id="why-title">The company you call when software work is still being done by people.</h2>
        </Reveal>
        <ol className="why-list">
          {POINTS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70}>
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
