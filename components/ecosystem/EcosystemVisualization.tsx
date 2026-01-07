'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cloud, Users, Database, Building2, Shield, Zap } from 'lucide-react'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { partnerConfig } from '@/config/partner-config'
import { cn } from '@/lib/utils'

interface EcosystemNode {
  id: string
  label: string
  category: 'people' | 'tools' | 'data' | 'business' | 'infrastructure' | 'automation'
  icon: React.ReactNode
  color: string
  description: string
  connections: string[]
}

const ecosystemNodes: EcosystemNode[] = [
  {
    id: 'factorial-hr',
    label: 'Factorial HR',
    category: 'people',
    icon: <Users className="w-6 h-6" />,
    color: '#3B82F6',
    description: 'Onboarding, Payroll, Talent Management',
    connections: ['factorial-it'],
  },
  {
    id: 'factorial-it',
    label: 'Factorial IT',
    category: 'tools',
    icon: <Zap className="w-6 h-6" />,
    color: partnerConfig.colors.secondary,
    description: 'MDM + SaaS + Procurement',
    connections: ['azure-ad', 'dynamics', 'fabric'],
  },
  {
    id: 'azure-ad',
    label: 'Azure AD',
    category: 'infrastructure',
    icon: <Shield className="w-6 h-6" />,
    color: partnerConfig.colors.primary,
    description: 'Identity & Access Management',
    connections: ['factorial-it', 'dynamics'],
  },
  {
    id: 'dynamics',
    label: 'Dynamics 365',
    category: 'business',
    icon: <Building2 className="w-6 h-6" />,
    color: '#00B294',
    description: 'ERP + CRM',
    connections: ['factorial-it', 'fabric'],
  },
  {
    id: 'fabric',
    label: 'Microsoft Fabric',
    category: 'data',
    icon: <Database className="w-6 h-6" />,
    color: '#F9CA24',
    description: 'Unified Data Platform',
    connections: ['factorial-it', 'dynamics', 'factorial-hr'],
  },
  {
    id: 'power-platform',
    label: 'Power Platform',
    category: 'automation',
    icon: <Cloud className="w-6 h-6" />,
    color: '#742774',
    description: 'Low-Code Automation',
    connections: ['factorial-it', 'dynamics'],
  },
]

export default function EcosystemVisualization() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [filter, setFilter] = useState<string | null>(null)

  const filteredNodes = filter
    ? ecosystemNodes.filter((node) => node.category === filter)
    : ecosystemNodes

  const categoryColors: Record<string, string> = {
    people: 'bg-blue-100 text-blue-800',
    tools: 'bg-pink-100 text-pink-800',
    data: 'bg-yellow-100 text-yellow-800',
    business: 'bg-green-100 text-green-800',
    infrastructure: 'bg-purple-100 text-purple-800',
    automation: 'bg-indigo-100 text-indigo-800',
  }

  return (
    <section id="ecosystem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Integrated Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Factorial IT seamlessly connects with Microsoft&apos;s ecosystem,
              creating a unified platform for People, Tools, Data, and Business.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setFilter(null)}
              className={cn(
                'px-6 py-2 rounded-full font-medium transition-all',
                !filter
                  ? 'text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
              style={!filter ? { backgroundColor: partnerConfig.colors.primary } : {}}
            >
              All
            </button>
            {Array.from(new Set(ecosystemNodes.map((n) => n.category))).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  'px-6 py-2 rounded-full font-medium transition-all capitalize',
                  filter === category
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
                style={
                  filter === category ? { backgroundColor: partnerConfig.colors.primary } : {}
                }
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Ecosystem Visualization */}
        <AnimatedSection delay={0.4}>
          <div className="relative min-h-[600px] bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-16">
            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {ecosystemNodes.map((node) =>
                node.connections.map((connectionId) => {
                  const targetNode = ecosystemNodes.find((n) => n.id === connectionId)
                  if (!targetNode) return null

                  // Simple line drawing (would be more sophisticated in production)
                  return (
                    <motion.line
                      key={`${node.id}-${connectionId}`}
                      x1="50%"
                      y1="50%"
                      x2="50%"
                      y2="50%"
                      stroke={partnerConfig.colors.primary}
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      opacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  )
                })
              )}
            </svg>

            {/* Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
              {filteredNodes.map((node, index) => {
                const isSelected = selectedNode === node.id
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onClick={() => setSelectedNode(isSelected ? null : node.id)}
                    className={cn(
                      'bg-white p-6 rounded-2xl shadow-lg cursor-pointer transition-all',
                      'border-2',
                      isSelected ? 'border-blue-500 shadow-xl' : 'border-transparent'
                    )}
                    style={
                      isSelected
                        ? {
                            borderColor: partnerConfig.colors.primary,
                            boxShadow: `0 10px 30px rgba(0, 120, 212, 0.3)`,
                          }
                        : {}
                    }
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white"
                      style={{ backgroundColor: node.color }}
                    >
                      {node.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{node.label}</h3>
                    <p className="text-sm text-gray-600 mb-3">{node.description}</p>
                    <span
                      className={cn(
                        'inline-block px-3 py-1 rounded-full text-xs font-medium',
                        categoryColors[node.category]
                      )}
                    >
                      {node.category}
                    </span>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <p className="text-sm text-gray-700">
                          Connects with:{' '}
                          {node.connections
                            .map((id) => ecosystemNodes.find((n) => n.id === id)?.label)
                            .join(', ')}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Flow Description */}
        <AnimatedSection delay={0.6}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-gray-100 rounded-full px-8 py-4">
              <span className="font-semibold text-gray-700">Flow:</span>
              <span className="text-gray-600">People</span>
              <span className="text-gray-400">→</span>
              <span className="text-gray-600">Tools</span>
              <span className="text-gray-400">→</span>
              <span className="text-gray-600">Data</span>
              <span className="text-gray-400">→</span>
              <span className="text-gray-600">Business</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
