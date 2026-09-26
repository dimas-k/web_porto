// app/components/Skills.tsx
'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', bg: 'bg-bg-panel', text: 'text-ink', tag: 'text-ink-dim border-line', skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Bootstrap', 'jQuery'] },
    { title: 'Backend', bg: 'bg-moss', text: 'text-ink', tag: 'text-ink/85 border-ink/20', skills: ['Laravel', 'PHP', 'FastAPI', 'Python', 'Express', 'Node.js', 'PostgreSQL', 'MySQL', 'MongoDB'] },
    { title: 'AI & Machine Learning', bg: 'bg-lime', text: 'text-bg', tag: 'text-bg/80 border-bg/25', skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LSTM / NLP', 'Vision Transformer / CNN', 'LLM Integration (Groq)'] },
    { title: 'Tools & Others', bg: 'bg-clay', text: 'text-bg', tag: 'text-bg/80 border-bg/25', skills: ['Git', 'Docker', 'Figma', 'Flutter'] },
  ]

  return (
    <section id="skills" className="border-t border-line">
      <div className="p-6 md:p-10 border-b border-line">
        <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl text-ink">
          Skills<span className="text-lime">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
            viewport={{ once: true }}
            className={`p-6 md:p-10 border-b border-r border-line ${category.bg}`}
          >
            <h3 className={`font-[family-name:var(--font-display)] font-semibold text-lg mb-5 ${category.text}`}>{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={`px-3 py-1.5 text-sm font-[family-name:var(--font-mono)] border ${category.tag}`}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
