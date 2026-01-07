import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/hero/HeroSection'
import EcosystemVisualization from '@/components/ecosystem/EcosystemVisualization'
import IntegrationShowcase from '@/components/integrations/IntegrationShowcase'
import ValueProposition from '@/components/features/ValueProposition'
import OnePagersSection from '@/components/features/OnePagersSection'
import EverythingWorksSection from '@/components/features/EverythingWorksSection'
import MicrosoftStackSection from '@/components/integrations/MicrosoftStackSection'
import CTASection from '@/components/cta/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EcosystemVisualization />
      <IntegrationShowcase />
      <EverythingWorksSection />
      <MicrosoftStackSection />
      <ValueProposition />
      <OnePagersSection />
      <CTASection />
      <Footer />
    </main>
  )
}
