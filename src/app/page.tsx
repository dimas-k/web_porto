// app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import ParticleBackground from './components/ParticleBackground'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Variants untuk stagger animation dengan type yang benar
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 bg-gray-50 transition-colors duration-300">
        <ParticleBackground darkMode={darkMode} />
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div variants={itemVariants}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Hero />
          </motion.div>
          <motion.div variants={itemVariants}>
            <About />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Projects />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Skills />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Contact />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Footer />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}