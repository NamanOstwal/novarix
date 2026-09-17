import { ConsultButton, Button, Eyebrow } from './Button'
import { HeroCanvas } from './HeroCanvas'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <Eyebrow>AI automation for modern businesses</Eyebrow>
          <h1>
            Turn Manual<br />
            Work Into
            {' '}
            <span>Intelligent<br />Automation.</span>
          </h1>
          <p className="lede">
            We design and deploy AI-powered workflows that eliminate repetitive
            software work, reduce manual intervention, and help teams operate
            faster at scale.
          </p>
          <p className="hero-fit">
            <strong>Built for:</strong> operations teams at growing businesses
            with repeatable work spread across multiple software systems.
          </p>
          <div className="hero-actions">
            <ConsultButton>
              Automate Your Workflow <span className="arrow">→</span>
            </ConsultButton>
            <Button variant="ghost" href="#solutions">
              See What We Automate
            </Button>
          </div>
          <p className="trust-line">
            Built for teams that want software to do more — with less manual
            intervention.
          </p>
        </div>
        <HeroCanvas />
      </div>
    </section>
  )
}
