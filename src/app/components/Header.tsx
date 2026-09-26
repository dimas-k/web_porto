// app/components/Header.tsx
'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg/95 backdrop-blur-sm">
      <div className="px-6 md:px-10">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="font-[family-name:var(--font-display)] font-bold text-lg text-ink"
          >
            DARS<span className="text-lime">.</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-ink-dim hover:text-lime transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-5 py-2.5 bg-lime text-bg font-[family-name:var(--font-display)] font-semibold text-sm hover:bg-ink transition-colors"
          >
            Let&apos;s talk
          </button>

          <button
            className="md:hidden text-ink text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-6">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-3 text-ink-dim hover:text-lime transition-colors border-t border-line"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
