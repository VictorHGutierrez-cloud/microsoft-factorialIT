'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { partnerConfig } from '@/config/partner-config'

const timelineSteps = [
  {
    time: '00:00',
    title: 'HR Creates Employee',
    description: 'New employee added to Factorial HR',
    icon: '👤',
  },
  {
    time: '00:01',
    title: 'Device Provisioned',
    description: 'Factorial IT automatically orders/configures device',
    icon: '💻',
  },
  {
    time: '00:02',
    title: 'Azure AD Created',
    description: 'User account automatically created in Azure AD',
    icon: '🔐',
  },
  {
    time: '00:03',
    title: 'Software Access',
    description: 'All required software access automatically granted',
    icon: '📦',
  },
  {
    time: '00:04',
    title: 'Ready to Work',
    description: 'Employee receives device and can start immediately',
    icon: '✅',
  },
]

const beforeAfter = {
  before: {
    title: 'Before: Manual Process',
    items: [
      '10+ hours of manual work per employee',
      'Multiple emails and tickets',
      'High risk of errors',
      'Days to complete onboarding',
      'Forgotten access after offboarding',
    ],
  },
  after: {
    title: 'After: Automated Integration',
    items: [
      '2 minutes of setup time',
      'Zero manual intervention',
      'Zero errors',
      'Minutes to complete onboarding',
      'Instant access removal',
    ],
  },
}

export default function EverythingWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything Just Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how a simple HR action triggers a complete automated workflow
              across the entire Microsoft ecosystem.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection delay={0.2}>
          <div className="mb-20">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-green-500 hidden md:block" />

              <div className="space-y-8">
                {timelineSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl bg-white shadow-lg border-4"
                        style={{ borderColor: partnerConfig.colors.primary }}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="text-sm font-semibold px-3 py-1 rounded-full text-white"
                          style={{ backgroundColor: partnerConfig.colors.primary }}
                        >
                          {step.time}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Before/After Comparison */}
        <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl p-8 border-2 border-red-200"
            >
              <div className="flex items-center mb-6">
                <XCircle className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-900">{beforeAfter.before.title}</h3>
              </div>
              <ul className="space-y-3">
                {beforeAfter.before.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span className="text-red-800">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl p-8 border-2 border-green-200"
            >
              <div className="flex items-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">{beforeAfter.after.title}</h3>
              </div>
              <ul className="space-y-3">
                {beforeAfter.after.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-green-800">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
