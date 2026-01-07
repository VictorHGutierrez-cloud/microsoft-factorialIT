'use client'

import { Shield, Building2, Zap, Database, Cloud } from 'lucide-react'
import AnimatedSection from '@/components/shared/AnimatedSection'
import IntegrationCard from './IntegrationCard'
import { partnerConfig } from '@/config/partner-config'

const integrations = [
  {
    title: 'Azure AD Integration',
    description:
      'Seamless identity and access management. When HR creates a user, Azure AD automatically provisions access.',
    icon: <Shield className="w-8 h-8" />,
    color: partnerConfig.colors.primary,
    benefits: [
      'Automatic user provisioning',
      'Single sign-on (SSO)',
      'Role-based access control',
      'Instant access revocation',
    ],
  },
  {
    title: 'Dynamics 365 Sync',
    description:
      'Keep your business applications in sync with employee lifecycle events from Factorial HR.',
    icon: <Building2 className="w-8 h-8" />,
    color: '#00B294',
    benefits: [
      'Automatic user sync',
      'Permission management',
      'Business data integration',
      'Real-time updates',
    ],
  },
  {
    title: 'Power Platform Automation',
    description:
      'Automate workflows between Factorial IT, HR, and Microsoft services with low-code solutions.',
    icon: <Zap className="w-8 h-8" />,
    color: '#742774',
    benefits: [
      'No-code automation',
      'Custom workflows',
      'Event-driven triggers',
      'Rapid deployment',
    ],
  },
  {
    title: 'Microsoft Fabric & Power BI',
    description:
      'Unified analytics platform combining HR, IT, and business data for comprehensive insights.',
    icon: <Database className="w-8 h-8" />,
    color: '#F9CA24',
    benefits: [
      '360° data view',
      'Integrated dashboards',
      'AI-powered insights',
      'Predictive analytics',
    ],
  },
  {
    title: 'Azure Security',
    description:
      'Multi-layered security combining Azure infrastructure protection with Factorial IT device management.',
    icon: <Cloud className="w-8 h-8" />,
    color: partnerConfig.colors.primary,
    benefits: [
      'Infrastructure security',
      'Device encryption',
      'Threat detection',
      'Compliance automation',
    ],
  },
]

export default function IntegrationShowcase() {
  return (
    <section id="integrations" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Deep Microsoft Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every Microsoft service works seamlessly with Factorial IT. See how each
              integration delivers value.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <IntegrationCard
              key={integration.title}
              {...integration}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
