// app/components/About.tsx
'use client'

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
                        A Final-year Software Engineering student (8th Semester, GPA: 3.90) at Politeknik Negeri Indramayu,
                        with strong interests in Full Stack Development, Artificial Intelligence, and Intelligent Systems.
                        Experienced in building scalable web and mobile applications using Laravel, Flutter, PostgreSQL, and RESTful APIs.
                        Currently conducting thesis research on rice disease classification using Deep Learning (Swin Transformer, ViT, EfficientNet),
                        IoT sensor integration, and LLM-based automated recommendation systems. Passionate about crafting real solutions
                        that have impact through clean code, continuous learning, and AI-driven applications.
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