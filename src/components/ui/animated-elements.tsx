'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export function AnimatedButton({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: AnimatedButtonProps) {
  const baseClasses = variant === 'primary' 
    ? 'btn-primary' 
    : 'btn-secondary'

  return (
    <motion.button
      className={`${baseClasses} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedText({ children, className = '', delay = 0 }: AnimatedTextProps) {
  return (
    <div className={`text-reveal ${className}`}>
      <motion.div 
        className="text-reveal-content"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      className={`fade-in-up ${className}`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "power3.out" }}
    >
      {children}
    </motion.div>
  )
}

interface ScrollProgressProps {
  className?: string
}

export function ScrollProgress({ className = '' }: ScrollProgressProps) {
  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-qog-teal origin-left z-50 ${className}`}
      style={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, ease: "linear" }}
    />
  )
}