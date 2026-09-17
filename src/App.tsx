import { useState } from 'react'
import { ConsultProvider } from './context/ConsultContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Integrations } from './components/Integrations'
import { Problem } from './components/Problem'
import { Solutions } from './components/Solutions'
import { HowItWorks } from './components/HowItWorks'
import { BeforeAfter } from './components/BeforeAfter'
import { AutomationLab } from './components/AutomationLab'
import { Industries } from './components/Industries'
import { Engagement } from './components/Engagement'
import { CaseStudies } from './components/CaseStudies'
import { Technology } from './components/Technology'
import { Why } from './components/Why'
import { FinalCta } from './components/FinalCta'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { ConsultModal } from './components/ConsultModal'

export default function App() {
  const [consultOpen, setConsultOpen] = useState(false)

  return (
    <ConsultProvider openConsult={() => setConsultOpen(true)}>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Integrations />
        <Problem />
        <Solutions />
        <HowItWorks />
        <BeforeAfter />
        <AutomationLab />
        <Industries />
        <Engagement />
        <CaseStudies />
        <Technology />
        <Why />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <ConsultModal open={consultOpen} onClose={() => setConsultOpen(false)} />
    </ConsultProvider>
  )
}
