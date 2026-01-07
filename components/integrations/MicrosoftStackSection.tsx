'use client'

import { motion } from 'framer-motion'
import { Cloud, Building2, Database, Zap, Shield, BarChart3 } from 'lucide-react'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { partnerConfig } from '@/config/partner-config'

const microsoftProducts = [
  {
    name: 'Azure',
    icon: <Cloud className="w-8 h-8" />,
    color: partnerConfig.colors.primary,
    description: 'Cloud Infrastructure',
    integrated: true,
  },
  {
    name: 'Azure AD',
    icon: <Shield className="w-8 h-8" />,
    color: partnerConfig.colors.primary,
    description: 'Identity & Access',
    integrated: true,
  },
  {
    name: 'Dynamics 365',
    icon: <Building2 className="w-8 h-8" />,
    color: '#00B294',
    description: 'ERP & CRM',
    integrated: true,
  },
  {
    name: 'Power Platform',
    icon: <Zap className="w-8 h-8" />,
    color: '#742774',
    description: 'Low-Code Automation',
    integrated: true,
  },
  {
    name: 'Microsoft Fabric',
    icon: <Database className="w-8 h-8" />,
    color: '#F9CA24',
    description: 'Data Platform',
    integrated: true,
  },
  {
    name: 'Power BI',
    icon: <BarChart3 className="w-8 h-8" />,
    color: '#6C5CE7',
    description: 'Business Intelligence',
    integrated: true,
  },
]

export default function MicrosoftStackSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Microsoft Stack Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Factorial IT integrates seamlessly with every Microsoft product you use.
              No gaps, no workarounds—just seamless integration.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {microsoftProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white mx-auto"
                style={{ backgroundColor: product.color }}
              >
                {product.icon}
              </div>
              <h3 className="text-lg font-bold text-center mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 text-center mb-4">{product.description}</p>
              {product.integrated && (
                <div className="flex items-center justify-center">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: product.color }}
                  >
                    ✓ Integrated
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Microsoft Designations */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Microsoft Solution Partner in:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {partnerConfig.microsoftDesignations.map((designation, index) => (
                <span
                  key={index}
                  className="px-6 py-2 bg-gray-100 rounded-full text-gray-700 font-medium"
                >
                  {designation}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
