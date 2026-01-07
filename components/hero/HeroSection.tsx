'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { partnerConfig } from '@/config/partner-config'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="block">Where Factorial IT</span>
            <span className="block mt-2" style={{ color: partnerConfig.colors.primary }}>
              Meets Microsoft
            </span>
            <span className="block mt-2 text-gray-800">Everything Just Works</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto px-4"
          >
            {partnerConfig.customContent?.heroSubtitle || 
              "The first truly integrated ecosystem connecting People → Tools → Data → Business"}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#ecosystem"
              className={cn(
                "px-8 py-4 rounded-full text-white font-semibold text-lg",
                "flex items-center gap-2 transition-all hover:scale-105 shadow-lg",
                "hover:shadow-xl"
              )}
              style={{ backgroundColor: partnerConfig.colors.primary }}
            >
              {partnerConfig.customContent?.ctaText || "See How It Works"}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold text-lg flex items-center gap-2 transition-all hover:scale-105 hover:border-gray-400"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </a>
          </motion.div>

          {/* Ecosystem Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {/* Factorial HR */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl mb-2">👥</div>
                <div className="font-semibold text-gray-800">People</div>
                <div className="text-sm text-gray-500">Factorial HR</div>
              </motion.div>

              {/* Factorial IT */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl mb-2">🛠️</div>
                <div className="font-semibold text-gray-800">Tools</div>
                <div className="text-sm text-gray-500">Factorial IT</div>
              </motion.div>

              {/* Microsoft Data */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl mb-2">📊</div>
                <div className="font-semibold text-gray-800">Data</div>
                <div className="text-sm text-gray-500">Fabric & Power BI</div>
              </motion.div>

              {/* Microsoft Business */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl mb-2">💼</div>
                <div className="font-semibold text-gray-800">Business</div>
                <div className="text-sm text-gray-500">Dynamics 365</div>
              </motion.div>
            </div>

            {/* Connection Arrows */}
            <div className="hidden md:flex items-center justify-center mt-8 space-x-2">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl text-gray-400"
              >
                →
              </motion.div>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                className="text-2xl text-gray-400"
              >
                →
              </motion.div>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                className="text-2xl text-gray-400"
              >
                →
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
