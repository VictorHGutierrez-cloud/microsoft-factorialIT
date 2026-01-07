'use client'

import { partnerConfig } from '@/config/partner-config'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold" style={{ color: partnerConfig.colors.primary }}>
                {partnerConfig.name}
              </div>
              <span className="text-gray-500">+</span>
              <div className="text-2xl font-bold" style={{ color: partnerConfig.colors.secondary }}>
                Factorial IT
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              The first truly integrated ecosystem connecting People → Tools → Data → Business
            </p>
            <div className="flex space-x-4">
              {partnerConfig.microsoftDesignations.map((designation, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 rounded-full text-xs"
                >
                  {designation}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#ecosystem" className="hover:text-white transition-colors">
                  Ecosystem
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#value" className="hover:text-white transition-colors">
                  Value Proposition
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${partnerConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {partnerConfig.contact.email}
                </a>
              </li>
              {partnerConfig.contact.phone && (
                <li>
                  <a
                    href={`tel:${partnerConfig.contact.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {partnerConfig.contact.phone}
                  </a>
                </li>
              )}
              {partnerConfig.contact.website && (
                <li>
                  <a
                    href={partnerConfig.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Visit Website
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {partnerConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
