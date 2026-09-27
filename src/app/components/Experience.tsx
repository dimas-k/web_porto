// app/components/Experience.tsx
'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      role: 'Researcher & Fullstack Developer',
      place: 'Undergraduate Thesis Research, Politeknik Negeri Indramayu',
      period: '2026',
      periodFull: 'Feb - Aug 2026',
      description:
        'Developed a rice plant disease classification system integrating leaf image data with IoT sensor readings. Benchmarked five deep learning models (Swin Transformer, ViT, EfficientNet, ResNet, InceptionV3), reaching 93.55% accuracy and a 95.35% F1-score, then built a RAG pipeline (embeddings, FAISS) to turn classification results into LLM-generated recommendations.',
    },
    {
      role: 'Fullstack Developer (Flutter + FastAPI)',
      place: 'Byanice AI Personal Assistant, Self Project',
      period: '2026',
      periodFull: 'Mar 2026 - Present',
      description:
        'Built an AI-powered personal assistant using Flutter and FastAPI, with agentic LLM capabilities via Groq (LLaMA 3.3), voice interaction (Whisper STT, ElevenLabs/gTTS), and a prompt-engineered tool-calling system for real tasks like sending messages and checking real-time weather.',
    },
    {
      role: 'Frontend Developer',
      place: 'Personal Portfolio Website, Self Project',
      period: '2025',
      periodFull: 'Sep 2025 - Present',
      description:
        'Built and continue to maintain this portfolio site using Next.js and React 19 with TypeScript, a component-based architecture, Tailwind CSS, and Framer Motion animations.',
    },
    {
      role: 'Backend Developer Intern, Remote',
      place: 'Icubic',
      period: '2026',
      periodFull: 'Jan - Aug 2026',
      description:
        'Started as a Backend Developer Intern; while learning Inertia.js and Express.js, was temporarily assigned to manual QA testing. Connected Laravel to a React frontend using Inertia.js and built APIs in Express.js.',
    },
    {
      role: 'Fullstack Developer, Internship',
      place: 'Bandung Techno Park',
      period: '2025',
      periodFull: 'Jul - Dec 2025',
      description:
        'Built the Grant Management (Hibah Eksternal) module inside MyBTP Superapps: admin dashboard, a dynamic form builder for grant proposals, and the review and reporting workflow, using Laravel, Livewire, and PostgreSQL.',
    },
    {
      role: 'Machine Learning Engineer',
      place: 'MBKM DBS Foundation Program',
      period: '2025',
      periodFull: 'Feb - Jul 2025',
      description:
        'Developed an emotion detection system (Rasa Kata) using an LSTM model built with TensorFlow, converted to TensorFlow Lite, and served through a Flask REST API, containerized with Docker and integrated with an Express.js backend.',
    },
    {
      role: 'Technical Lead & Fullstack Developer',
      place: 'Innovation and Research Dashboard, Politeknik Negeri Indramayu',
      period: '2024-26',
      periodFull: 'Sep 2024 - Feb 2025 (Team) · Jan - Jun 2026 (Solo)',
      description:
        'Led technical direction for the team, including tech stack selection and task delegation. Built the Laravel backend and MySQL database, implemented AJAX-based form validation, and built RESTful APIs. Continued as sole developer from Jan to Jun 2026.',
    },
    {
      role: 'Technical Lead & Fullstack Developer',
      place: 'Intellectual Property System, Politeknik Negeri Indramayu',
      period: '2023-26',
      periodFull: 'Sep 2023 - Feb 2025 (Team) · Jan - Jun 2026 (Solo)',
      description:
        'Led technical direction for the team, including tech stack selection, task delegation, and system architecture design. Built core features with Laravel, MySQL, and AJAX validation, in active production use by the POLINDRA academic community. Conducted code reviews, then continued as sole maintainer from Jan to Jun 2026.',
    },
  ]

  return (
    <section id="experience" className="border-t border-line">
      <div className="p-6 md:p-10 border-b border-line">
        <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl text-ink">
          Experience<span className="text-lime">.</span>
        </h2>
      </div>

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-[auto_1fr] border-b border-line"
        >
          <div className="p-6 md:p-10 md:w-64 bg-bg-panel border-b md:border-b-0 md:border-r border-line flex flex-col justify-center">
            <span className="font-[family-name:var(--font-mono)] font-bold text-5xl text-lime">{exp.period}</span>
            <span className="font-[family-name:var(--font-mono)] text-sm text-ink-dim mt-2">{exp.periodFull}</span>
          </div>
          <div className="p-6 md:p-10">
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-xl text-ink mb-1">{exp.role}</h3>
            <p className="text-clay mb-4">{exp.place}</p>
            <p className="text-ink-dim leading-relaxed max-w-2xl">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  )
}

export default Experience
