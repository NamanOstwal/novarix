import { useState } from 'react'
import { Reveal } from './Reveal'

const QUESTIONS = [
  ['How long does an automation project take?', 'A focused workflow starts with discovery and is scoped around the systems, rules, and approvals involved. We provide a delivery plan before build work begins.'],
  ['Do we need to replace our current tools?', 'No. The goal is to connect and improve the systems your team already uses, not force a platform migration.'],
  ['How do you handle sensitive access?', 'Access is scoped to the workflow, credentials are handled through approved methods, and we avoid collecting information that is not needed to deliver the work.'],
  ['Will people still be able to review decisions?', 'Yes. We design human checkpoints for important, ambiguous, or high-impact cases and make the escalation path explicit.'],
  ['What happens after launch?', 'We can hand over a fixed-scope workflow or continue as an ongoing automation partner for monitoring, maintenance, and new improvements.'],
] as const

export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">Practical answers before we talk.</h2>
          <p className="lede">Clear scope, controlled access, and humans where they matter.</p>
        </Reveal>
        <div className="faq-list">
          {QUESTIONS.map(([question, answer], i) => (
            <Reveal key={question} delay={i * 45}>
              <article className={`faq-item ${open === i ? 'is-open' : ''}`}>
                <h3>
                  <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                    {question}<span aria-hidden="true">+</span>
                  </button>
                </h3>
                {open === i ? <p>{answer}</p> : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
