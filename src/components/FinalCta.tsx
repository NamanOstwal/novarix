import { Button, ConsultButton } from './Button'
import { Reveal } from './Reveal'

export function FinalCta() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="final-flow" aria-hidden="true">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path className="pipe" d="M-20 120 C 200 80, 400 200, 620 160 S 980 80, 1220 140" />
          <path className="pipe delay" d="M-20 240 C 220 280, 460 180, 700 230 S 1020 300, 1220 220" />
        </svg>
      </div>
      <div className="wrap final-inner">
        <Reveal>
          <h2 id="final-title">Your team shouldn't be doing work software can do.</h2>
          <p className="lede">
            Tell us what your team does manually. We'll help identify what can
            be automated.
          </p>
          <div className="hero-actions">
            <ConsultButton variant="lime">
              Book an Automation Consultation <span className="arrow">→</span>
            </ConsultButton>
            <Button variant="light" href="#solutions">
              Explore Our Solutions
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
