import { Reveal } from './Reveal'

const INTEGRATION_TYPES = [
  'CRM systems',
  'Email & chat',
  'Databases',
  'Payment platforms',
  'ERP systems',
  'Internal tools',
  'Cloud storage',
  'Custom APIs',
]

export function Integrations() {
  return (
    <section className="integrations" id="integrations" aria-labelledby="int-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Integrations</p>
          <h2 id="int-title">Connect the systems your team already runs.</h2>
          <p className="note">
            We scope every workflow around the systems you use today. No forced
            platform replacement, and no assumptions about your stack.
          </p>
        </Reveal>
        <ul className="logo-strip">
          {INTEGRATION_TYPES.map((name, i) => (
            <Reveal as="li" key={name} delay={i * 40} className="logo-chip">
              <span className="logo-glyph" aria-hidden="true">
                {name.slice(0, 1)}
              </span>
              {name}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
