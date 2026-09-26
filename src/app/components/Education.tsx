// app/components/Education.tsx
'use client'

import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      degree: 'D4 — Rekayasa Perangkat Lunak',
      school: 'Politeknik Negeri Indramayu (Polindra)',
      period: '2022-2026',
      detail: 'GPA 3.89 / 4.00',
    },
  ]

  return (
    <section id="education" className="border-t border-line">
      <div className="p-6 md:p-10 border-b border-line">
        <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl text-ink">
          Education<span className="text-lime">.</span>
        </h2>
      </div>

      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-[auto_1fr] border-b border-line"
        >
          <div className="p-6 md:p-10 md:w-64 bg-clay border-b md:border-b-0 md:border-r border-line flex flex-col justify-center">
            <span className="font-[family-name:var(--font-mono)] font-bold text-3xl text-bg">{edu.period}</span>
          </div>
          <div className="p-6 md:p-10">
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-xl text-ink mb-1">{edu.degree}</h3>
            <p className="text-lime mb-4">{edu.school}</p>
            <p className="text-ink-dim">{edu.detail}</p>
          </div>
        </motion.div>
      ))}
    </section>
  )
}

export default Education
