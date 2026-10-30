'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUpRight, FiCalendar, FiUsers, FiUser, FiX } from 'react-icons/fi'
import { projects, projectMeta, type Tag } from '@/data/projects'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

const filters: ('All' | Tag)[] = ['All', 'Web', 'AI/ML', 'Mobile']

export default function Projects() {
  const [filter, setFilter] = useState<'All' | Tag>('All')
  const [open, setOpen] = useState<number | null>(null)

  const visible = projects
    .map((p, i) => ({ p, m: projectMeta[i], i }))
    .filter(({ m }) => filter === 'All' || m.tags.includes(filter))

  useEffect(() => {
    if (open === null) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <section id="projects" className="py-24">
      <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            Projects that <span className="text-grad">ship</span>.
          </h2>
        </div>

        <div className="flex w-fit gap-1 rounded-2xl border border-edge bg-surface p-1 backdrop-blur">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="relative rounded-xl px-4 py-2 text-sm font-semibold"
            >
              {filter === f && (
                <motion.span layoutId="filter-pill" className="bg-grad absolute inset-0 rounded-xl" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />
              )}
              <span className={`relative ${filter === f ? 'text-black' : 'text-muted'}`}>{f}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map(({ p, m, i }, idx) => (
            <motion.button
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              onClick={() => setOpen(i)}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
              className="tile group flex flex-col text-left"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-edge">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: m.focus ?? 'center' }}
                />
                <div className="absolute inset-0 z-[2] bg-gradient-to-t from-bg/60 to-transparent" />
                <span className="mono absolute left-4 top-4 z-[2] rounded-full bg-bg/70 px-3 py-1 text-[0.65rem] backdrop-blur">
                  {m.year}
                </span>
                <span className="absolute right-4 top-4 z-[2] grid h-9 w-9 place-items-center rounded-full bg-grad text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <FiArrowUpRight />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="mono text-[0.68rem] text-a1">{m.category}</p>
                <h3 className="mt-2 text-xl font-bold leading-tight tracking-tight">{m.short}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {p.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="mono rounded-full border border-edge px-2.5 py-1 text-[0.65rem] text-muted">
                      {t}
                    </span>
                  ))}
                  {p.technologies.length > 3 && (
                    <span className="mono px-1 py-1 text-[0.65rem] text-muted">+{p.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open !== null && <Modal key="modal" i={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  )
}

function Modal({ i, onClose }: { i: number; onClose: () => void }) {
  const p = projects[i]
  const m = projectMeta[i]

<<<<<<< Updated upstream
    const projects: Project[] = [
        {
            title: 'Sistem Informasi Kekayaan Intelktual Politeknik Negeri Indramayu',
            description: 'An application that manages the intellectual property of Politeknik Negeri Indramayu.',
            image: '/projects/siki.png',
            technologies: ['Laravel', 'Javascript', 'Ajax', 'Bootstrap', 'PHP', 'MySql', 'Jquery', 'Chart.js'],
            fullDescription: "An application that manages the intellectual property of Politeknik Negeri Indramayu, whether it is from students or Politeknik Negeri Indramayu community. This includes patents, copyrights, and industrial designs. ",
            myTask: "My task in this project is to create a dynamic frontend using Bootstrap and a backend using PHP and Laravel. In the system, I handle the validation of intellectual property forms, create login authentication, and build the entire admin panel. I also design and implement the database along with its relational structure to support the application's functionality. Additionally, I manage supporting project files and documentation to ensure the development process runs smoothly and is well-documented.",
            features: [
                'Intellectual property management (patents, copyrights, industrial designs) with full CRUD',
                'Visualization of application progress through charts, tables, and text',
                'Abstracts and short descriptions for each intellectual property submission',
                'Document download support for required files',
                'Responsive design across all devices',
                'Real-time admin dashboard for monitoring and management'
            ],
            date: 'Sep 2023 - Present',
            role: 'Full Stack Developer & Project Manager',
            teamSize: '4 people (2 developers, 2 designers, 1 PM)',
            challenges: [
                'Managing complex relational data for multiple IP types',
                'Role-based access control for different user types',
                'Building a clean and intuitive admin panel'
            ],
            solutions: [
                'Designed normalized relational database with Laravel migrations',
                'Implemented role-based authentication with Laravel middleware',
                'Used Bootstrap with custom components for consistent UI'
            ]
        },
        {
            title: 'Dashboard Produk Inovasi dan Penelitian Politeknik Negeri Indramayu',
            description: 'Innovation and research product management application at Politeknik Negeri Indramayu.',
            image: '/projects/dbpro.png',
            technologies: ['Laravel', 'Bootstrap', 'Javascript', 'PHP', 'Ajax', 'ApexCharts', 'MySql', 'Jquery'],
            fullDescription: 'Innovation and research product management application at Politeknik Negeri Indramayu. This application makes it easier for lecturers to manage innovation and research products that have been created. It also makes it easier for the community or external parties to learn about and become familiar with innovation products at Politeknik Negeri Indramayu.',
            myTask: "I work on both the front-end and back-end development. I handle the front-end for the admin and landing pages, while on the back-end I am responsible for almost all of the core functionality. I also use AJAX for all form validations and assist my teammates in creating APIs. Additionally, I design and implement the database along with its relational structure to support the system's logic. I also manage the project's supporting files and documentation to ensure smooth and organized development.",
            features: [
                'Real-time dashboard for innovation and research products',
                'Categorization by field of expertise',
                'Detailed information for each product and research project',
                'Direct contact with related persons via email',
                'Data input by field group leaders',
                'Admin validation before publishing',
                'Export data to Excel for reporting'
            ],
            date: 'Okt 2024 - Present',
            role: 'Full Stack Developer',
            teamSize: '3 People (3 developers, 1 PM)',
            challenges: [
                'Real-time data synchronization across modules',
                'Building efficient search and filter for large datasets',
                'Handling concurrent data input by multiple users'
            ],
            solutions: [
                'Used AJAX for seamless real-time form validation and updates',
                'Implemented advanced indexing in MySQL for fast queries',
                "Applied Laravel's Eloquent ORM with optimized relationships"
            ]
        },
        {
            title: 'Hibah Eksternal – Grant Management Module in MyBTP Superapps (Internship Project)',
            description: 'A grant management module developed as part of MyBTP Superapps during my internship at Bandung Techno Park.',
            image: '/projects/hibah.png',
            technologies: ['Laravel', 'Livewire', 'AJAX', 'Javascript', 'Bootstrap', 'Postgresql', 'PHP', 'Jquery'],
            fullDescription: 'A grant management module developed as part of MyBTP Superapps during my internship at Bandung Techno Park. This module enables administrators to create and manage grant events, while lecturers can submit and track proposals. Features include event management, proposal submission, review workflow, and reporting dashboard.',
            myTask: "I developed the admin dashboard and data management module for the grant system. I built a dynamic form builder for grant applications, implemented the proposal submission and review workflow, and designed the PostgreSQL database structure. I also created search, filter, and reporting features, and integrated Excel export functionality. The system was built using Laravel with Livewire for reactive UI components.",
            features: [
                'Hibah event management (CRUD)',
                'Dynamic form builder for registration',
                'Hibah external dashboard with statistics',
                'Data filtering and search',
                'Distribution and trend charts',
                'Hibah event list for lecturers',
                'Proposal submission form for lecturers',
                'Proposal history and status tracking',
                'Grant recipient management',
                'Export recipient data to Excel'
            ],
            date: 'July 2025 - Des 2025',
            role: 'Fullstack Developer',
            teamSize: '16 people',
            challenges: [
                'Building a flexible dynamic form system for different grant types',
                'Managing complex proposal review workflow with multiple stakeholders',
                'Ensuring data integrity across a large collaborative team'
            ],
            solutions: [
                'Designed a dynamic form builder with configurable field types',
                'Implemented status-based workflow with notification system',
                'Used PostgreSQL with strict schema validation and migrations'
            ]
        },
        {
            title: 'Rasa Kata – Stress Detection & Anonymous Sharing Web Application (MBKM DBS Foundation)',
            description: 'Rasa Kata is a web-based application that uses NLP and deep learning to detect emotional states from text and provide personalized content recommendations.',
            image: '/projects/rasakata.png',
            technologies: ['Flask', 'Python', 'TensorFlow', 'Keras', 'LSTM', 'NLP', 'JavaScript', 'React.js', 'YouTube API', 'Docker'],
            fullDescription: "Rasa Kata is a mental health–focused web application that leverages NLP and LSTM models to analyze text input and detect the user's emotional state. Based on the detected sentiment (e.g., stress, anxiety, sadness), the system recommends relevant YouTube videos for relaxation, motivation, or self-care. Beyond AI-powered detection, Rasa Kata also provides an anonymous community space where users can share their thoughts and support each other without revealing their identity.",
            myTask: "I built the NLP pipeline and trained an LSTM model for emotion detection from text, covering preprocessing, embedding preparation, and model evaluation. I developed a Flask-based REST API to serve predictions and integrated it with the React frontend. I implemented the YouTube API for dynamic video recommendations based on emotional states and containerized the AI model using Docker. On the social side, I created the anonymous sharing feature where users can post and interact without exposing personal data.",
            features: [
                'Real-time emotion detection from text using NLP and LSTM',
                'Personalized YouTube video recommendations based on user emotion',
                'Anonymous community forum for sharing and peer support',
                'Interactive web interface with instant feedback',
                'Flask REST API serving model predictions to the frontend',
                'Dockerized AI model for easy deployment'
            ],
            date: 'Feb 2025 – Jul 2025',
            role: 'Machine Learning Engineer & Backend Developer',
            teamSize: '6 People (3 Fullstack Developers, 2 ML Engineers, 1 PM)',
            challenges: [
                'Mapping emotional states to relevant content recommendations',
                'Maintaining anonymity and privacy in user interactions',
                'Ensuring fast response times for real-time inference'
            ],
            solutions: [
                'Built a sentiment-to-content mapping layer with YouTube API integration',
                'Implemented anonymous user IDs and moderation system for safe sharing',
                'Optimized Flask model serving with caching and lightweight inference'
            ]
        },
        {
            title: 'Byanice – AI Personal Assistant App (Self Project)',
            description: 'AI-powered personal assistant app with agentic LLM capabilities, voice interaction, and smart device control — built with Flutter and FastAPI.',
            image: '/projects/byanice.png',
            technologies: ['Flutter', 'FastAPI', 'Python', 'Groq (LLaMA 3.3)', 'Whisper STT', 'ElevenLabs', 'Supabase', 'Agentic AI'],
            fullDescription: 'Byanice is an AI-powered personal assistant mobile application built with Flutter (frontend) and FastAPI (backend). It leverages agentic LLM capabilities via Groq (LLaMA 3.3) for natural conversation, Whisper STT for voice input, and ElevenLabs/gTTS for text-to-speech output. The app can autonomously control device functions, send WhatsApp messages, control Spotify, set reminders, and fetch real-time weather — acting as a true AI agent on mobile.',
            myTask: "I built the full mobile UI using Flutter with voice interaction support. I implemented voice input using Whisper STT and text-to-speech using ElevenLabs and gTTS for natural voice conversations. I designed and developed the agentic tool system that allows the AI to open apps, send WhatsApp messages, control Spotify, set reminders, and check real-time weather. I integrated Groq (LLaMA 3.3) as the LLM backbone and used Supabase for authentication and user preference management.",
            features: [
                'AI-powered natural conversation using Groq LLaMA 3.3',
                'Voice input with Whisper Speech-to-Text (STT)',
                'Text-to-speech output using ElevenLabs and gTTS',
                'Agentic tool system: open apps, send WhatsApp, control Spotify',
                'Set reminders and check real-time weather automatically',
                'Supabase authentication and user preference management',
                'FastAPI backend for efficient AI inference and tool orchestration'
            ],
            date: 'Mar 2026 - Present',
            role: 'Fullstack Developer (Flutter + FastAPI)',
            teamSize: '1 Person',
            challenges: [
                'Building a reliable agentic system that handles multiple tool calls',
                'Achieving low-latency voice interaction on mobile',
                'Managing LLM context and conversation state across sessions'
            ],
            solutions: [
                'Implemented structured agentic tool routing with fallback handling',
                'Optimized audio processing pipeline for minimal voice latency',
                'Used Supabase to persist conversation context and user preferences'
            ]
        },
        {
            title: 'Undergraduate Thesis – Rice Disease Classification System | Politeknik Negeri Indramayu',
            description: 'Smart rice plant disease classification system combining deep learning models, IoT sensor integration, and LLM-based automated recommendations.',
            image: '/projects/padi.png',
            technologies: ['Python', 'Flutter', 'FastAPI', 'Swin Transformer', 'Vision Transformer', 'EfficientNet', 'ResNet', 'InceptionV3', 'LLM (Groq)', 'IoT', 'Docker'],
            fullDescription: 'A smart rice plant disease classification system developed as an undergraduate thesis at Politeknik Negeri Indramayu. The system integrates mobile image capture with real-time IoT sensor data (temperature and humidity) to classify leaf diseases using five state-of-the-art deep learning models. An LLM automatically generates disease handling recommendations based on classification results and environmental sensor data, creating a complete end-to-end smart agriculture solution.',
            myTask: "I researched and compared 5 deep learning architectures: Swin Transformer, ViT, EfficientNet, ResNet, and InceptionV3 for rice leaf disease classification across multiple datasets. I developed the end-to-end pipeline from mobile image capture and IoT data fusion to classification and LLM-based recommendation output. I built the mobile app using Flutter and the backend using Python with FastAPI, and integrated IoT sensors for real-time temperature and humidity readings. The LLM (Groq) was integrated to automatically generate actionable disease handling recommendations.",
            features: [
                'Classification using 5 DL models: Swin Transformer, ViT, EfficientNet, ResNet, InceptionV3',
                'IoT sensor integration for real-time temperature and humidity data',
                'LLM-based automated disease handling recommendations (Groq)',
                'Mobile app built with Flutter for image capture and results',
                'FastAPI backend for model inference and LLM orchestration',
                'End-to-end pipeline: image capture → IoT fusion → classification → recommendation',
                'Comparative analysis of model performance across 4 rice disease datasets'
                
            ],
            date: 'Feb 2026 - Jul 2026',
            role: 'Researcher & Fullstack Developer',
            teamSize: '1 Person (Thesis Research)',
            challenges: [
                'Comparing 5 architectures fairly across datasets of very different sizes',
                'Fusing heterogeneous data (image + IoT sensor) for accurate classification',
                'Generating contextually relevant LLM recommendations from model output'
            ],
            solutions: [
                'Standardized training protocol with transfer learning and identical hyperparameters',
                'Built a data fusion pipeline combining image features with sensor readings',
                'Designed structured prompts for LLM to produce actionable recommendations'
            ]
        }
    ]

    return (
        <>
            <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">My Projects</h2>
                        <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Here are the projects I have worked on. Click on a project to see the full details.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="h-60 bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                                                +{project.technologies.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <p className="text-gray-600 dark:text-gray-300">
                            Click on the project to see the full details and technologies used.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Modal Detail Project */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <div className="relative">
                            <div className=" bg-gray-200 dark:bg-gray-700">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    width={800}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />

                            </div>

                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                <FaTimes className="text-gray-600 dark:text-gray-300" />
                            </button>
                        </div>

                        <div className="p-6">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{selectedProject.title}</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="flex items-center text-gray-600 dark:text-gray-300">
                                    <FaCalendar className="mr-3 text-purple-600 dark:text-purple-400" />
                                    <span>{selectedProject.date}</span>
                                </div>
                                <div className="flex items-center text-gray-600 dark:text-gray-300">
                                    <FaUsers className="mr-3 text-purple-600 dark:text-purple-400" />
                                    <span>{selectedProject.teamSize}</span>
                                </div>
                                <div className="flex items-center text-gray-600 dark:text-gray-300">
                                    <FaCode className="mr-3 text-purple-600 dark:text-purple-400" />
                                    <span>{selectedProject.role}</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Project Description</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">My Task</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.myTask}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Key Features</h3>
                                    <ul className="space-y-2">
                                        {selectedProject.features.map((feature, index) => (
                                            <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                                                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Technology</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Challenges</h3>
                                    <ul className="space-y-2">
                                        {selectedProject.challenges.map((challenge, index) => (
                                            <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <span>{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Solutions</h3>
                                    <ul className="space-y-2">
                                        {selectedProject.solutions.map((solution, index) => (
                                            <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <span>{solution}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    )
}

export default Projects
=======
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center p-3 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-edge bg-bg shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="sticky top-4 z-10 float-right mr-4 mt-4 grid h-10 w-10 place-items-center rounded-full border border-edge bg-bg/80 backdrop-blur transition-colors hover:bg-fg/10"
        >
          <FiX />
        </button>

        <div className="relative -mt-14 aspect-[16/8] w-full overflow-hidden">
          <Image src={p.image} alt={p.title} fill sizes="900px" className="object-cover" style={{ objectPosition: m.focus ?? 'center' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
        </div>

        <div className="-mt-16 relative px-6 pb-10 sm:px-10">
          <p className="mono text-xs text-a1">{m.category}</p>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">{p.title}</h2>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {[
              [FiCalendar, p.date],
              [FiUser, p.role],
              [FiUsers, p.teamSize],
            ].map(([Icon, text], k) => {
              const I = Icon as typeof FiCalendar
              return (
                <span key={k} className="inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-2 text-muted">
                  <I className="text-a1" /> {text as string}
                </span>
              )
            })}
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-5">
            <div className="space-y-8 md:col-span-3">
              <Section title="Overview"><p className="leading-relaxed text-muted">{p.fullDescription}</p></Section>
              <Section title="My role"><p className="leading-relaxed text-muted">{p.myTask}</p></Section>
            </div>
            <div className="space-y-8 md:col-span-2">
              <Section title="Key features">
                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="bg-grad mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          </div>

          <Section title="Challenge → Solution" className="mt-10">
            <div className="space-y-3">
              {p.challenges.map((c, k) => (
                <div key={c} className="grid overflow-hidden rounded-2xl border border-edge sm:grid-cols-2">
                  <div className="bg-surface p-4 text-sm">
                    <span className="mono mb-1 block text-[0.65rem] text-a3">Challenge</span>
                    {c}
                  </div>
                  <div className="border-t border-edge p-4 text-sm sm:border-l sm:border-t-0" style={{ background: 'color-mix(in srgb, var(--a1) 10%, transparent)' }}>
                    <span className="mono mb-1 block text-[0.65rem] text-a1">Solution</span>
                    {p.solutions[k]}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Tech stack" className="mt-10">
            <div className="flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <span key={t} className="mono rounded-full border border-edge bg-surface px-3 py-1.5 text-xs">{t}</span>
              ))}
            </div>
          </Section>
        </div>
      </motion.div>
    </div>
  )
}

function Section({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h3 className="mono mb-3 text-xs uppercase tracking-wider text-muted">{title}</h3>
      {children}
    </div>
  )
}
>>>>>>> Stashed changes
