// app/components/ClientWrapper.tsx
'use client'

import { useState, useEffect } from 'react'
import Header from './Header'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)

  // Effect untuk memeriksa preferensi tema user
  useEffect(() => {
    // Cek jika tema gelap disimpan di localStorage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    
    // Cek preferensi sistem user
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    // Gunakan preferensi yang disimpan, jika tidak ada gunakan preferensi sistem
    setDarkMode(savedDarkMode || prefersDark)
  }, [])

  // Effect untuk menerapkan dark mode ke document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
      </div>
    </div>
  )
}