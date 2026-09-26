// app/components/Footer.tsx
'use client'

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line p-6 md:p-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="font-[family-name:var(--font-display)] font-bold text-ink">
          DARS<span className="text-lime">.</span>
        </p>
        <div className="flex items-center gap-5 text-lg text-ink-dim">
          <a href="https://github.com/dimas-k" aria-label="GitHub" className="hover:text-lime transition-colors"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/dimas-arya-ramadhan-setiawan-4544362aa/" aria-label="LinkedIn" className="hover:text-lime transition-colors"><FaLinkedin /></a>
          <a href="https://www.instagram.com/dimasarya880/" aria-label="Instagram" className="hover:text-lime transition-colors"><FaInstagram /></a>
        </div>
        <p className="text-sm text-ink-dim">&copy; {year} Dimas Arya Ramadhan Setiawan</p>
      </div>
    </footer>
  )
}

export default Footer
