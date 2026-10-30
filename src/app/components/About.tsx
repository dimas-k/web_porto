'use client'

<<<<<<< Updated upstream
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaRocket } from 'react-icons/fa'

const About = () => {
    const skills = [
        {
            icon: <FaCode />,
            title: 'Frontend Development',
            description: 'Building modern web applications using Vanilla CSS, Bootstrap, jQuery, Ajax, React, Next.js, TypeScript, and Tailwind CSS.'
        },
        {
            icon: <FaDatabase />,
            title: 'Database Development',
            description: 'Designing and managing efficient, well-structured, and secure databases using MySQL, PostgreSQL, and MongoDB.',
        },
        {
            icon: <FaRocket />,
            title: 'Backend Development',
            description: 'Developing scalable and secure APIs using Node.js, Express, Python, PHP, and Laravel.',
        },
        {
            icon: <FaRocket />,
            title: 'Machine Learning Enthusiast',
            description: 'Building machine learning models for classification, prediction, and data analysis using Python, Scikit-learn, TensorFlow, and LSTM networks. Experienced in both supervised and unsupervised learning projects, with a focus on data exploration, model training, and AI experimentation.'
        }
    ]

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-7xl mx-auto">
                        A Bachelor of Applied Science in Software Engineering graduate from Politeknik Negeri Indramayu, with strong interests in Full Stack Development, Artificial Intelligence, and Intelligent Systems. Experienced in building scalable web and mobile applications using Laravel, Flutter, PostgreSQL, and RESTful APIs. Completed thesis research on rice disease classification using Deep Learning (Swin Transformer, ViT, EfficientNet), IoT sensor integration, and LLM-based automated recommendation systems. Passionate about crafting real solutions that have impact through clean code, continuous learning, and AI-driven applications.

                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="text-3xl text-purple-600 dark:text-purple-400 mb-4">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{skill.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">5</div>
                            <div className="text-sm">Completed Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">3</div>
                            <div className="text-sm">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">2</div>
                            <div className="text-sm">Years of Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">15+</div>
                            <div className="text-sm">Technologies Mastered</div>
                        </div>
                    </div>

                </motion.div> */}
            </div>
        </section>
    )
}

export default About
=======
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiCpu, FiBookOpen, FiBriefcase, FiAward } from 'react-icons/fi'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'
import Tile from './Tile'

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
    <section id="about" className="py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* left */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <Eyebrow>About me</Eyebrow>
              <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
                Crafting real solutions with <span className="text-grad">clean code</span> and AI.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-muted">
                Software Engineering (D4) graduate from Politeknik Negeri Indramayu and co-founder of Pepra Lab, an
                early-stage startup. I build AI agents and automation systems end-to-end, with hands-on experience in
                LLM tool calling (Groq function calling), RAG pipelines (FAISS), and API integration using FastAPI,
                Laravel, and Express.js. I led the technical direction of two production campus systems, completed
                thesis research on rice disease classification with Deep Learning and LLM-based recommendations, and I
                am currently learning n8n for workflow automation. Comfortable working independently in remote, Agile
                environments, and always looking to build things that go beyond theory into real, usable systems.
              </p>
            </Reveal>
          </div>
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

            <div className="min-h-[15rem] p-5 sm:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <cur.icon size={28} className="text-a1" />
                  <p className="mt-5 text-lg leading-relaxed sm:text-xl">{cur.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
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

          <div className="grid gap-4 sm:grid-cols-3">
            {facts.map(({ icon: Icon, k, v, s }) => (
              <Tile key={k} className="p-5">
                <Icon className="mb-8 text-a2" size={20} />
                <p className="mono text-[0.68rem] text-muted">{k}</p>
                <p className="mt-1 font-bold leading-snug">{v}</p>
                <p className="mt-1 text-xs text-muted">{s}</p>
              </Tile>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
>>>>>>> Stashed changes
