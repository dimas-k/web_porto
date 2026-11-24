'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiCpu, FiBookOpen, FiBriefcase, FiAward } from 'react-icons/fi'
import Tile from './Tile'
import Page, { PageTitle } from './Page'

const focus = [
  {
    title: 'Frontend',
    icon: FiCode,
    desc: 'Building modern web applications using React, Next.js, TypeScript, Tailwind CSS, Inertia.js, Bootstrap, and Ajax.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Inertia.js', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: FiServer,
    desc: 'Developing scalable and secure APIs using Laravel, FastAPI, and Express.js — with RESTful design, OAuth 2.0 integrations, RBAC, database migrations, logging, and exception handling.',
    tech: ['Laravel', 'PHP', 'FastAPI', 'Python', 'Express', 'OAuth 2.0'],
  },
  {
    title: 'Database',
    icon: FiDatabase,
    desc: 'Designing and managing efficient, well-structured, and secure databases using MySQL, PostgreSQL, and MongoDB.',
    tech: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'AI & Automation',
    icon: FiCpu,
    desc: 'Building AI agents with LLM tool calling (Groq) and RAG pipelines (FAISS), plus deep learning models for classification with PyTorch and TensorFlow. Connecting them to Telegram, Google Calendar, and Spotify, and learning n8n for workflow automation.',
    tech: ['Agentic AI', 'RAG', 'PyTorch', 'TensorFlow', 'Swin Transformer', 'n8n'],
  },
]

const facts = [
  { icon: FiBookOpen, k: 'Education', v: 'D4 Applied, Software Engineering', s: 'Politeknik Negeri Indramayu · GPA 3.89' },
  { icon: FiBriefcase, k: 'Internships', v: 'Icubic & MyBTP Superapps', s: 'Backend · Fullstack · 2025–2026' },
  { icon: FiAward, k: 'Thesis', v: 'Rice disease classification', s: 'Deep Learning · IoT · LLM' },
]

export default function About() {
  const [tab, setTab] = useState(0)
  const cur = focus[tab]

  return (
    <Page>
      <div className="grid flex-1 content-center gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        {/* left */}
        <div className="lg:col-span-5">
          <PageTitle eyebrow="About me">
            Crafting real solutions with <span className="text-grad">clean code</span> and AI.
          </PageTitle>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-muted [@media(min-width:1024px)_and_(max-height:800px)]:text-sm">
            Software Engineering (D4) graduate from Politeknik Negeri Indramayu and co-founder of Pepra Lab, an
            early-stage startup. I build AI agents and automation systems end-to-end, with hands-on experience in
            LLM tool calling (Groq function calling), RAG pipelines (FAISS), and API integration using FastAPI,
            Laravel, and Express.js. I led the technical direction of two production campus systems, completed
            thesis research on rice disease classification with Deep Learning and LLM-based recommendations, and I
            am currently learning n8n for workflow automation. Comfortable working independently in remote, Agile
            environments, and always looking to build things that go beyond theory into real, usable systems.
          </p>
        </div>

        {/* right */}
        <div className="space-y-4 lg:col-span-7">
          <Tile className="p-2" spotlight={false}>
            <div role="tablist" className="grid grid-cols-2 gap-1 sm:grid-cols-4">
              {focus.map((f, i) => (
                <button
                  key={f.title}
                  role="tab"
                  aria-selected={tab === i}
                  onClick={() => setTab(i)}
                  className="relative rounded-[1.2rem] px-3 py-3 text-sm font-semibold transition-colors"
                >
                  {tab === i && (
                    <motion.span layoutId="about-tab" className="absolute inset-0 rounded-[1.2rem] bg-fg/10" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />
                  )}
                  <span className={`relative ${tab === i ? '' : 'text-muted'}`}>{f.title}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[14rem] p-5 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <cur.icon size={26} className="text-a1" />
                  <p className="mt-4 text-base leading-relaxed sm:text-lg">{cur.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cur.tech.map((t) => (
                      <span key={t} className="mono rounded-full border border-edge px-3 py-1 text-xs text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Tile>

          <div className="grid gap-3 sm:grid-cols-3">
            {facts.map(({ icon: Icon, k, v, s }) => (
              <Tile key={k} className="p-5">
                <Icon className="mb-5 text-a2" size={20} />
                <p className="mono text-[0.68rem] text-muted">{k}</p>
                <p className="mt-1 font-bold leading-snug">{v}</p>
                <p className="mt-1 text-xs text-muted">{s}</p>
              </Tile>
            ))}
          </div>
        </div>
      </div>
    </Page>
  )
}
