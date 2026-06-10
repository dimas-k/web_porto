// app/components/Header.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-purple-600 dark:text-purple-400"
          >
            DARS
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}

export default Header