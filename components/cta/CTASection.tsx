'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { partnerConfig } from '@/config/partner-config'
import { cn } from '@/lib/utils'

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you! We will contact you soon.')
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Factorial IT can transform your Microsoft ecosystem.
            Let's discuss your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'w-full px-6 py-3 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2',
                  'hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
                )}
                style={{ backgroundColor: partnerConfig.colors.primary }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-gray-300 mb-8">
                Whether you're a Microsoft partner looking to offer Factorial IT,
                or a company wanting to integrate your Microsoft stack, we're here to help.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${partnerConfig.contact.email}`}
                className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: partnerConfig.colors.primary }}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300 text-sm">{partnerConfig.contact.email}</div>
                </div>
              </a>

              {partnerConfig.contact.phone && (
                <a
                  href={`tel:${partnerConfig.contact.phone}`}
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: partnerConfig.colors.primary }}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300 text-sm">{partnerConfig.contact.phone}</div>
                  </div>
                </a>
              )}

              {partnerConfig.contact.website && (
                <a
                  href={partnerConfig.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: partnerConfig.colors.primary }}
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Website</div>
                    <div className="text-gray-300 text-sm">{partnerConfig.contact.website}</div>
                  </div>
                </a>
              )}
            </div>

            {/* Partner CTA */}
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <h4 className="font-semibold mb-2">Microsoft Partner?</h4>
              <p className="text-sm text-gray-300 mb-4">
                Get your custom landing page template to showcase Factorial IT integration.
              </p>
              <a
                href={`mailto:${partnerConfig.contact.email}?subject=Partner Landing Page Request`}
                className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                style={{ color: partnerConfig.colors.secondary }}
              >
                Request Template <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
