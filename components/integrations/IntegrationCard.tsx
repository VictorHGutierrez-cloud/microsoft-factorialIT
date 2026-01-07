'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { partnerConfig } from '@/config/partner-config'
import { cn } from '@/lib/utils'

interface IntegrationCardProps {
  title: string
  description: string
  icon: ReactNode
  color: string
  benefits: string[]
  delay?: number
}

export default function IntegrationCard({
  title,
  description,
  icon,
  color,
  benefits,
  delay = 0,
}: IntegrationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
    >
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span
              className="mr-2 mt-1"
              style={{ color: partnerConfig.colors.primary }}
            >
              ✓
            </span>
            <span className="text-gray-700 text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="inline-flex items-center text-sm font-semibold group"
        style={{ color: partnerConfig.colors.primary }}
      >
        Learn more
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  )
}
