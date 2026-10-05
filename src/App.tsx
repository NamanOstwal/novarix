import { useState } from 'react'
import { ConsultProvider } from './context/ConsultContext'
import { Preloader } from './components/Preloader'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProblemSection } from './components/ProblemSection'
import { SolutionsSection } from './components/SolutionsSection'
import { LiveAgentDemo } from './components/LiveAgentDemo'
import { UseCasesSection } from './components/UseCasesSection'
import { HowItWorksSection } from './components/HowItWorksSection'
import { ArchitectureSection } from './components/ArchitectureSection'
import { SecuritySection } from './components/SecuritySection'
import { RoiCalculatorSection } from './components/RoiCalculatorSection'
import { CaseStudiesSection } from './components/CaseStudiesSection'
import { TeamSection } from './components/TeamSection'
import { FaqSection } from './components/FaqSection'
import { FinalCtaSection } from './components/FinalCtaSection'
import { Footer } from './components/Footer'
import { ConsultModal } from './components/ConsultModal'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import { CosmicMouseGlow } from './components/CosmicMouseGlow'

export default function App() {
  const [consultOpen, setConsultOpen] = useState(false)
  useScrollReveal()
  useSmoothScroll()

  return (
    <ConsultProvider openConsult={() => setConsultOpen(true)}>
      {/* Creative Minimalist Preloader */}
      <Preloader />

      {/* Cosmic Mouse Magnetic Ambient Glow */}
      <CosmicMouseGlow />

      {/* Luxury Scroll Laser HUD Progress Bar */}
      <ScrollProgressBar />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Assembly */}
      <main id="main" className="bg-sf font-matter">
        {/* 1. Hero Section with Value Prop & Trust Strip */}
        <Hero />

        {/* 2. The Enterprise Problem Section */}
        <ProblemSection />

        {/* 3. Concrete Solutions (Problem -> Solution -> Result) */}
        <SolutionsSection />

        {/* 4. Interactive Live Agent Simulator */}
        <LiveAgentDemo />

        {/* 5. Departmental Use Cases */}
        <UseCasesSection />

        {/* 6. How It Works (5-Stage Delivery Pipeline) */}
        <HowItWorksSection />

        {/* 7. Enterprise Architecture & Stack */}
        <ArchitectureSection />

        {/* 8. Security, Privacy & Human-in-the-Loop Safeguards */}
        <SecuritySection />

        {/* 9. Interactive ROI & Annual Cost Savings Calculator */}
        <RoiCalculatorSection />

        {/* 10. Real-World Case Studies */}
        <CaseStudiesSection />

        {/* 11. About Novarix & Meet the Engineers */}
        <TeamSection />

        {/* 12. FAQ Section */}
        <FaqSection />

        {/* 13. Final Conversion CTA */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation & Demo Request Modal */}
      <ConsultModal open={consultOpen} onClose={() => setConsultOpen(false)} />
    </ConsultProvider>
  )
}
