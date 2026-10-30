'use client'

import { useState } from 'react'
import { FiArrowUpRight, FiCheck, FiCopy, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import Eyebrow from './Eyebrow'
import Tile from './Tile'

<<<<<<< Updated upstream
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
=======
const EMAIL = 'dimasarya81821@gmail.com'

const links = [
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/6287894818389' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dimas-arya-ramadhan-setiawan-4544362aa/' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/dimas-k' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/dimasarya880/' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
>>>>>>> Stashed changes
  }

  // Membuka aplikasi email dengan pesan yang sudah terisi (tanpa backend)
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
<<<<<<< Updated upstream
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('The message has been sent! I will reply soon..')
    setFormData({ name: '', email: '', message: '' })
=======
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
>>>>>>> Stashed changes
  }

  const input =
    'w-full rounded-2xl border border-edge bg-bg/40 px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-a1'

  return (
<<<<<<< Updated upstream
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Interested in collaborating or have any questions? Feel free to reach out to me!
          </p>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-purple-600 dark:text-purple-400 mt-1 mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Indramayu, West Java, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-purple-600 dark:text-purple-400 mt-1 mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">dimasarya81821@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-purple-600 dark:text-purple-400 mt-1 mr-4">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
                  <Link
                    href="https://wa.me/6287894818389"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-green-500"
                  >
                    +62 878 9481 8389
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Message"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Send
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
=======
    <section id="contact" className="py-24 pb-40">
      <Tile className="relative p-7 sm:p-12" spotlight>
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-a1 opacity-20 blur-[90px]" />
        <div className="relative z-[2] grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-5 text-[clamp(2.2rem,5.4vw,4.4rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
              Let&apos;s build something <span className="text-grad">useful</span> together.
            </h2>
            <p className="mt-5 max-w-md text-muted">
              Interested in collaborating or have any questions? Feel free to reach out — I usually reply fast.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 break-all text-lg font-semibold hover:text-a1">
                  <FiMail className="shrink-0 text-a1" /> {EMAIL}
                </a>
                <button
                  onClick={copy}
                  className="mono inline-flex items-center gap-1.5 rounded-full border border-edge px-3 py-1.5 text-xs transition-colors hover:border-a1 hover:text-a1"
                >
                  {copied ? <FiCheck /> : <FiCopy />} {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className="inline-flex items-center gap-3 text-muted">
                <FiMapPin className="text-a1" /> Indramayu, West Java, Indonesia
              </p>
            </div>

            <div className="mt-auto grid grid-cols-2 gap-3 pt-10">
              {links.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-edge px-4 py-3.5 text-sm font-semibold transition-colors hover:border-a1"
                >
                  <span className="flex items-center gap-3"><Icon className="text-muted group-hover:text-a1" /> {label}</span>
                  <FiArrowUpRight className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="space-y-4 self-end">
            <input className={input} placeholder="Your name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className={input} type="email" placeholder="Your email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <textarea className={`${input} resize-none`} rows={6} placeholder="Tell me about your project…" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button type="submit" className="bg-grad group flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-bold text-black transition-transform hover:scale-[1.02]">
              Send message <FiSend className="transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mono text-center text-[0.68rem] text-muted">Opens your email app with the message prefilled.</p>
          </form>
        </div>
      </Tile>
    </section>
  )
}
>>>>>>> Stashed changes
