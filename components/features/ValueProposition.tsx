'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, DollarSign, Shield, TrendingUp } from 'lucide-react'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { partnerConfig } from '@/config/partner-config'

interface Metric {
  icon: React.ReactNode
  value: string
  suffix: string
  label: string
  description: string
  color: string
}

const metrics: Metric[] = [
  {
    icon: <Clock className="w-8 h-8" />,
    value: '90',
    suffix: '%',
    label: 'Time Reduction',
    description: 'Onboarding time reduced from 10h to 1h',
    color: partnerConfig.colors.primary,
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    value: '30',
    suffix: '%',
    label: 'Cost Savings',
    description: 'Reduction in SaaS license waste',
    color: '#00B294',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    value: '100',
    suffix: '%',
    label: 'Access Control',
    description: 'Zero forgotten access after offboarding',
    color: partnerConfig.colors.secondary,
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: '500',
    suffix: '%',
    label: 'ROI',
    description: 'Average annual return on investment',
    color: '#742774',
  },
]

function AnimatedCounter({ value, suffix, inView }: { value: string; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)
  const targetValue = parseInt(value)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const increment = targetValue / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const newValue = Math.min(Math.floor(increment * currentStep), targetValue)
      setCount(newValue)

      if (currentStep >= steps) {
        clearInterval(timer)
        setCount(targetValue)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [inView, targetValue])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
    >
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white"
        style={{ backgroundColor: metric.color }}
      >
        {metric.icon}
      </div>
      <div className="text-5xl font-bold mb-2" style={{ color: metric.color }}>
        <AnimatedCounter value={metric.value} suffix={metric.suffix} inView={inView} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{metric.label}</h3>
      <p className="text-gray-600">{metric.description}</p>
    </motion.div>
  )
}

export default function ValueProposition() {
  return (
    <section id="value" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proven Value & ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real metrics from companies using Factorial IT with Microsoft ecosystem.
              See the measurable impact on your business.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>

        {/* Additional Benefits */}
        <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Instant Automation</h3>
              <p className="text-gray-600">
                Zero manual work. Everything happens automatically when HR events occur.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Complete Security</h3>
              <p className="text-gray-600">
                Multi-layered security from infrastructure to devices to access control.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">360° Visibility</h3>
              <p className="text-gray-600">
                Unified view of HR, IT, and business data for better decisions.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
