// app/components/Contact.tsx
'use client'

import { useState } from 'react'
import Link from "next/link";
import { motion } from 'framer-motion'
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('The message has been sent! I will reply soon..')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="border-t border-line">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr]">
        <div className="p-6 md:p-10 bg-lime flex flex-col justify-between">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl text-bg mb-10">
            Let&apos;s work<br />together.
          </h2>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-bg mt-1 flex-shrink-0" />
              <p className="text-bg/85">Indramayu, West Java, Indonesia</p>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-bg mt-1 flex-shrink-0" />
              <p className="text-bg/85">dimasarya81821@gmail.com</p>
            </div>
            <div className="flex items-start gap-3">
              <FaPhone className="text-bg mt-1 flex-shrink-0" />
              <Link href="https://wa.me/6287894818389" target="_blank" rel="noopener noreferrer" className="text-bg/85 hover:text-bg">
                +62 878 9481 8389
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-ink-dim mb-2">Name</label>
              <input
                type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                className="w-full px-3 py-2.5 border border-line bg-transparent text-ink focus:outline-none focus:border-lime transition-colors"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-ink-dim mb-2">Email</label>
              <input
                type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full px-3 py-2.5 border border-line bg-transparent text-ink focus:outline-none focus:border-lime transition-colors"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-ink-dim mb-2">Message</label>
              <textarea
                id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                className="w-full px-3 py-2.5 border border-line bg-transparent text-ink focus:outline-none focus:border-lime transition-colors"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-lime text-bg font-[family-name:var(--font-display)] font-semibold hover:bg-ink transition-colors flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
