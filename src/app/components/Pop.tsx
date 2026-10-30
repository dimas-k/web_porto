'use client'

import { motion } from 'framer-motion'

// Muncul dengan efek "pop" memantul
export default function Pop({
  children,
  delay = 0,
  rotate = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  rotate?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.92, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
