'use client'

import { motion } from 'framer-motion'
import { Download, FileText, Eye } from 'lucide-react'
import Image from 'next/image'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { partnerConfig } from '@/config/partner-config'
import { cn } from '@/lib/utils'

const categoryIcons: Record<string, React.ReactNode> = {
  security: '🔒',
  automation: '⚡',
  analytics: '📊',
  integration: '🔗',
}

const categoryColors: Record<string, string> = {
  security: 'bg-red-100 text-red-800',
  automation: 'bg-blue-100 text-blue-800',
  analytics: 'bg-yellow-100 text-yellow-800',
  integration: 'bg-purple-100 text-purple-800',
}

export default function OnePagersSection() {
  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Integration Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download detailed one-pagers covering specific integration scenarios
              and use cases.
            </p>
          </div>
        </AnimatedSection>

        {partnerConfig.onePagers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerConfig.onePagers.map((pager, index) => (
              <motion.div
                key={pager.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                {/* Thumbnail Placeholder */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-48 flex items-center justify-center mb-4 relative overflow-hidden">
                  {pager.thumbnail ? (
                    <Image
                      src={pager.thumbnail}
                      alt={pager.title}
                      fill
                      className="object-cover rounded-xl"
                      unoptimized
                    />
                  ) : (
                    <div className="text-6xl">{categoryIcons[pager.category] || '📄'}</div>
                  )}
                </div>

                <div className="mb-4">
                  <span
                    className={cn(
                      'inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3',
                      categoryColors[pager.category] || 'bg-gray-100 text-gray-800'
                    )}
                  >
                    {pager.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{pager.title}</h3>
                </div>

                <div className="flex gap-3">
                  <a
                    href={pager.file}
                    download
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                  <a
                    href={pager.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all hover:scale-105"
                    style={{ backgroundColor: partnerConfig.colors.primary }}
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <AnimatedSection delay={0.2}>
            <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-gray-300">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">One pagers will appear here</p>
              <p className="text-sm text-gray-500">
                Add one pagers to the partner configuration file
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
