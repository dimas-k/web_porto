'use client'

import { useState } from 'react'
import { FiArrowUpRight, FiCheck, FiCopy, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import Eyebrow from './Eyebrow'
import Tile from './Tile'

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
  }

  // Membuka aplikasi email dengan pesan yang sudah terisi (tanpa backend)
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const input =
    'w-full rounded-2xl border border-edge bg-bg/40 px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-a1'

  return (
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
