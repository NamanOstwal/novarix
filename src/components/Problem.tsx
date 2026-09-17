import { Reveal } from './Reveal'

const PROBLEMS = [
  {
    n: '01',
    title: 'Repetitive Work',
    copy: 'Teams spend hours performing predictable software tasks manually.',
  },
  {
    n: '02',
    title: 'Human Error',
    copy: 'Manual data entry and repetitive operational workflows introduce costly mistakes.',
  },
  {
    n: '03',
    title: 'Slow Operations',
    copy: 'Work waits for people instead of moving automatically between systems.',
  },
  {
    n: '04',
    title: 'Difficult Scaling',
    copy: 'Adding more customers often means adding more people and processes.',
  },
]

export function Problem() {
  return (
    <section className="problem" aria-labelledby="problem-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">The bottleneck</p>
          <h2 id="problem-title">Manual processes are slowing your business down.</h2>
        </Reveal>
        <div className="problem-grid">
          {PROBLEMS.map((item, i) => (
            <Reveal as="article" key={item.n} delay={i * 80} className="problem-card">
              <span className="idx">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="problem-shift">
          <p>We automate the work between the systems you already use.</p>
        </Reveal>
      </div>
    </section>
  )
}
