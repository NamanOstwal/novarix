import { useEffect, useState } from 'react'
import { ConsultButton } from './Button'
import { Reveal } from './Reveal'

const STEPS = [
  { id: 0, title: 'Customer submits request', status: 'Ingested', detail: 'Inbound ticket received from web form.' },
  { id: 1, title: 'AI understands request', status: 'Analyzing', detail: 'Intent, entities, and urgency classified.' },
  { id: 2, title: 'Data extracted', status: 'Validated', detail: 'Fields mapped against source-of-record schema.' },
  { id: 3, title: 'Business rules evaluated', status: 'Processing', detail: 'Routing rules and exception thresholds applied.' },
  { id: 4, title: 'CRM updated', status: 'Executing', detail: 'Record created and linked to the originating request.' },
  { id: 5, title: 'Email generated', status: 'Executing', detail: 'Confirmation drafted from validated data.' },
  { id: 6, title: 'Task completed', status: 'Completed', detail: 'Workflow closed. Exceptions remain with a human.' },
]

export function AutomationLab() {
  const [step, setStep] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const t = window.setInterval(() => {
      setStep((s) => (s + 1) % STEPS.length)
    }, 1600)
    return () => window.clearInterval(t)
  }, [paused])

  const current = STEPS[step]

  return (
    <section className="lab" id="lab" aria-labelledby="lab-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Automation lab</p>
          <h2 id="lab-title">See automation in motion.</h2>
          <p className="lede">
            A live simulation of an orchestrated workflow — the same shape we
            use to replace copy-paste, inbox chasing, and repeated system updates.
          </p>
        </Reveal>

        <Reveal className="lab-board" delay={80}>
          <div
            className="lab-dash"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <aside className="lab-rail">
              <p className="lab-kicker">Run · support.request.v3</p>
              <ol>
                {STEPS.map((item) => (
                  <li key={item.id} className={item.id === step ? 'is-active' : item.id < step ? 'is-done' : ''}>
                    <button type="button" onClick={() => setStep(item.id)}>
                      <span className="dot" />
                      {item.title}
                    </button>
                  </li>
                ))}
              </ol>
            </aside>
            <div className="lab-stage">
              <div className="lab-status">
                <span className={`pill pill-${current.status.toLowerCase()}`}>{current.status}</span>
                <span>{paused ? 'Paused' : 'Live simulation'}</span>
              </div>
              <svg viewBox="0 0 520 220" className="lab-svg" role="img" aria-label="Workflow graph">
                {STEPS.slice(0, 6).map((_, i) => (
                  <line
                    key={i}
                    x1={36 + i * 80}
                    y1="110"
                    x2={84 + i * 80}
                    y2="110"
                    className={i < step ? 'lab-link on' : 'lab-link'}
                  />
                ))}
                {STEPS.map((item, i) => (
                  <g key={item.id} transform={`translate(${20 + i * 70} 86)`}>
                    <rect
                      width="56"
                      height="48"
                      rx="12"
                      className={i === step ? 'lab-node on' : i < step ? 'lab-node done' : 'lab-node'}
                    />
                    <text x="28" y="30" textAnchor="middle">
                      {String(i + 1).padStart(2, '0')}
                    </text>
                  </g>
                ))}
              </svg>
              <div className="lab-detail">
                <h3>{current.title}</h3>
                <p>{current.detail}</p>
              </div>
            </div>
          </div>
          <ConsultButton className="lab-cta">
            Build something like this for my business <span className="arrow">→</span>
          </ConsultButton>
        </Reveal>
      </div>
    </section>
  )
}
