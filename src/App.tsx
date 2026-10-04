import { useState } from 'react'
import { ConsultProvider } from './context/ConsultContext'
import { Preloader } from './components/Preloader'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Playground } from './components/Playground'
import { DeveloperSection } from './components/DeveloperSection'
import { EnterpriseCan } from './components/EnterpriseCan'
import { WhyNovarix } from './components/WhyNovarix'
import { PlatformArchitecture } from './components/PlatformArchitecture'
import { EnterpriseGrade } from './components/EnterpriseGrade'
import { ResearchUpdates } from './components/ResearchUpdates'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { ConsultModal } from './components/ConsultModal'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const [consultOpen, setConsultOpen] = useState(false)
  useScrollReveal()

  return (
    <ConsultProvider openConsult={() => setConsultOpen(true)}>
      {/* Creative Minimalist Preloader */}
      <Preloader />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Assembly */}
      <main id="main" className="bg-sf font-matter">
        <Hero />
        <Playground />
        <DeveloperSection />
        <EnterpriseCan />
        <WhyNovarix />
        <PlatformArchitecture />
        <EnterpriseGrade />
        <ResearchUpdates />
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation & Demo Request Modal */}
      <ConsultModal open={consultOpen} onClose={() => setConsultOpen(false)} />
    </ConsultProvider>
  )
}
