// app/components/About.tsx
'use client'

import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaServer, FaBrain } from 'react-icons/fa'

const About = () => {
    const skills = [
        { icon: <FaCode />, title: 'Frontend', description: 'React, Next.js, Flutter, Tailwind CSS.' },
        { icon: <FaServer />, title: 'Backend', description: 'Laravel, FastAPI, Node.js, PHP, Python.' },
        { icon: <FaBrain />, title: 'AI / ML', description: 'TensorFlow, PyTorch, NLP, applied LLMs.' },
        { icon: <FaDatabase />, title: 'Data', description: 'PostgreSQL, MySQL, Supabase.' },
    ]

    return (
        <section id="about" className="border-t border-line">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr]">
                <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-line flex items-center bg-bg-panel">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl text-ink leading-tight"
                    >
                        About
                        <span className="text-lime">.</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="p-6 md:p-10 flex items-center"
                >
                    <p className="text-lg text-ink-dim leading-relaxed max-w-2xl">
                        A Bachelor of Applied Science in Software Engineering graduate from Politeknik Negeri Indramayu, with strong interests in Full Stack Development, Artificial Intelligence, and Intelligent Systems. Experienced in building scalable web and mobile applications using Laravel, Flutter, PostgreSQL, and RESTful APIs. Completed thesis research on rice disease classification using Deep Learning (Swin Transformer, ViT, EfficientNet), IoT sensor integration, and LLM-based automated recommendation systems.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-line">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.06 }}
                        viewport={{ once: true }}
                        className={`p-6 md:p-8 border-r border-line last:border-r-0 ${index === 1 ? 'bg-moss' : ''}`}
                    >
                        <div className={`text-2xl mb-6 ${index === 1 ? 'text-ink' : 'text-lime'}`}>{skill.icon}</div>
                        <h3 className="font-[family-name:var(--font-display)] font-semibold text-ink mb-2">{skill.title}</h3>
                        <p className={`text-sm leading-relaxed ${index === 1 ? 'text-ink/80' : 'text-ink-dim'}`}>{skill.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default About
