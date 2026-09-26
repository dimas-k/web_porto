// app/components/Experience.tsx
'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      role: 'Fullstack Developer, Internship',
      place: 'Bandung Techno Park',
      period: '2025',
      periodFull: 'Jul - Dec 2025',
      description:
        'Built the Grant Management (Hibah Eksternal) module inside MyBTP Superapps: admin dashboard, a dynamic form builder for grant proposals, and the review and reporting workflow, using Laravel, Livewire, and PostgreSQL.',
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
