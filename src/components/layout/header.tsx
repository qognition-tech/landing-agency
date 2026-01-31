'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/ui/animated-elements'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-qog-black/80 backdrop-blur-lg border-b border-qog-white/10">
      <nav className="container-qog py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold text-qog-white">
            QOGNITION
          </Link>

          <div className="hidden lg:flex items-center space-x-12">
            <Link href="/services" className="text-qog-white hover:text-qog-teal transition-colors duration-300">
              Services
            </Link>
            <Link href="/industries" className="text-qog-white hover:text-qog-teal transition-colors duration-300">
              Industries
            </Link>
            <Link href="/work" className="text-qog-white hover:text-qog-teal transition-colors duration-300">
              Our Work
            </Link>
            <Link href="/about" className="text-qog-white hover:text-qog-teal transition-colors duration-300">
              About
            </Link>
            <Link href="/contact">
              <AnimatedButton variant="secondary">Contact Us</AnimatedButton>
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <motion.div
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                className="w-6 h-0.5 bg-qog-white"
              />
              <motion.div
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-qog-white"
              />
              <motion.div
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                className="w-6 h-0.5 bg-qog-white"
              />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-8 py-8 border-t border-qog-white/10"
          >
            <div className="flex flex-col space-y-6">
              <Link href="/services" className="text-qog-white hover:text-qog-teal transition-colors duration-300">
                Services
              </Link>
              <Link href="/industries" className="text-qog-white hover:text-qog-teal transition-colors duration-300">
                Industries
              </Link>
              <Link href="/work" className="text-qog-white hover:text-qog-teal transition-colors duration-300">
                Our Work
              </Link>
              <Link href="/about" className="text-qog-white hover:text-qog-teal transition-colors duration-300">
                About
              </Link>
              <Link href="/contact">
                <AnimatedButton variant="secondary" className="w-full">Contact Us</AnimatedButton>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}