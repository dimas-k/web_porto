// app/components/Skills.tsx
'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Bootstrap', level: 97 },
        { name: 'CSS', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Javascript', level: 90 },
        { name: 'Jquery', level: 87 },
        { name: 'Next.js', level: 77 },
        { name: 'React js', level: 77 },
        { name: 'TypeScript', level: 70 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Laravel', level: 97 },
        { name: 'PHP', level: 90 },
        { name: 'Python', level: 90 },
        { name: 'Fast API', level: 90 },
        { name: 'Express', level: 80 },
        { name: 'Node.js', level: 80 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'Mysql', level: 90 },
        { name: 'MongoDB', level: 80 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Figma', level: 70 },
        { name: 'Cucumber', level: 70 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">My Skills</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I continuously develop my skills and learn new technologies to stay relevant
            in an ever-evolving industry.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills