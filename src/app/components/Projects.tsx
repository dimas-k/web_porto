// app/components/Projects.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaTimes, FaCalendar, FaUsers, FaCode } from 'react-icons/fa'

interface Project {
    title: string
    description: string
    image: string
    technologies: string[]
    fullDescription: string
    myTask: string
    features: string[]
    date: string
    role: string
    teamSize: string
    challenges: string[]
    solutions: string[]
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
            date: 'Sep 2023 - Sep 2024',
            role: 'Full Stack Developer & Project Manager',
            teamSize: '4 people (2 developers, 2 designers, 1 PM)',
            challenges: [
                'Integrasi payment gateway yang kompleks',
                'Handling inventory real-time',
                'Optimasi performance untuk banyak produk'
            ],
            solutions: [
                'Mengimplementasikan caching dengan Redis',
                'Microservices architecture untuk scalability',
                'CDN untuk optimasi load time gambar'
            ]
        },
        {
            title: 'Dashboard Produk Inovasi dan Penelitian Politeknik Negeri Indramayu',
            description: 'Innovation and research product management application at Politeknik Negeri Indramayu.',
            image: '/projects/dbpro.png',
            technologies: ['Laravel', 'Bootstrap', 'Javascript', 'PHP', 'Ajax', 'ApexCharts', 'MySql', 'Jquery'],
            fullDescription: 'Innovation and research product management application at PPoliteknik Negeri Indramayu. This application makes it easier for lecturers to manage innovation and research products that have been created. It also makes it easier for the community or external parties to learn about and become familiar with innovation products at Politeknik Negeri Indramayu. ',
            myTask: "I work on both the front-end and back-end development. I handle the front-end for the admin and landing pages, while on the back-end I am responsible for almost all of the core functionality. I also use AJAX for all form validations and assist my teammates in creating APIs. Additionally, I design and implement the database along with its relational structure to support the system’s logic. I also manage the project's supporting files and documentation to ensure smooth and organized development.",
            features: [
                'Real-time dashboard for innovation and research products',
                'Categorization by field of expertise',
                'Detailed information for each product and research project',
                'Direct contact with related persons via email',
                'Data input by field group leaders',
                'Admin validation before publishing',
                'Export data to Excel for reporting'
            ]
            ,
            date: 'Okt 2024 - Mar 2025',
            role: 'Full Stack Developer & Project Manager',
            teamSize: '3 People (3 developers, 1 PM)',
            challenges: [
                'Real-time synchronization data',
                'Conflict resolution untuk concurrent edits',
                'Offline functionality'
            ],
            solutions: [
                'Menggunakan Firebase Firestore untuk real-time updates',
                'Implementasi optimistic UI',
                'Service worker untuk offline capability'
            ]
        },
        {
            title: 'Travel Fortuna Cakrawala Web',
            description: 'PT Fortuna Cakrawala is a web-based transportation and service application that makes it easy for users to manage intercity travel and printing needs in one place.',
            image: '/projects/fortuna.png',
            technologies: ['Laravel', 'Bootstrap', 'Javascript', 'Ajax', 'Chart.js'],
            fullDescription: 'PT Fortuna Cakrawala is a web-based platform that provides integrated services for transportation and printing. Users can book intercity shuttle tickets, rent vehicles for group trips, and manage printing orders (banners, brochures, and other media) online. The platform centralizes multiple services into a single web application for easier access and management.',
            myTask: "My task in this project was to fully develop the PT Fortuna Cakrawala web application as a solo developer. I was responsible for building a dynamic frontend using Bootstrap and developing the backend with PHP and Laravel. I designed and implemented the database along with its relational structure, ensuring smooth integration with the system’s core features. I also created login authentication, developed the entire admin panel, and managed all project documentation and supporting files. By handling both frontend and backend development, as well as system architecture, I ensured the application was delivered as a complete, functional, and well-documented solution.",
            features: [
                'Online ticket booking for intercity shuttles and trains',
                'Vehicle and bus rental management',
                'E-commerce printing service (flyers, banners, business cards)',
                'Upload design files with live preview and instant price calculation',
                'Integrated payment methods (QRIS, transfer, e-wallet)'
            ],
            date: 'Jan 2025 - Feb 2025',
            role: 'Fullstack Developer',
            teamSize: '1 Person',
            challenges: [
                'Integrating multiple services (transportation and printing) into one platform',
                'Designing a scalable and relational database structure',
                'Implementing secure and user-friendly payment options'
            ],
            solutions: [
                'Modular architecture for transport and printing services',
                'Normalized relational database with Laravel migrations',
                'Payment gateway integration with QRIS and e-wallet support'
            ]
        }
        ,
        {
            title: 'Rasa Kata – Stress Detection & Anonymous Sharing Web Application (Coding Camp powered by DBS Foundation Project)',
            description: 'Rasa Kata is a web-based application that uses NLP and deep learning to detect emotional states from text and provide personalized content recommendations.',
            image: '/projects/rasakata.png',
            technologies: ['Flask', 'Python', 'TensorFlow', 'Keras', 'LSTM', 'NLP', 'JavaScript', 'React.js', 'YouTube API'],
            fullDescription: 'Rasa Kata is a mental health–focused web application that leverages NLP and LSTM models to analyze text input and detect the user’s emotional state. Based on the detected sentiment (e.g., stress, anxiety, sadness), the system recommends relevant YouTube videos for relaxation, motivation, or self-care. Beyond AI-powered detection, Rasa Kata also provides an anonymous community space where users can share their thoughts and support each other without revealing their identity.',
            myTask: "I built the NLP pipeline and trained an LSTM model for emotion detection from text, covering preprocessing, embedding preparation, and model evaluation. I developed a Flask-based REST API to serve predictions and integrated it with the React frontend. Additionally, I implemented the YouTube API for dynamic video recommendations based on emotional states. On the social side, I created the anonymous sharing feature where users can post and interact without exposing personal data. I also ensured deployment, testing, and security for user-generated content.",
            features: [
                'Real-time emotion detection from text using NLP and LSTM',
                'Personalized YouTube video recommendations based on user emotion',
                'Anonymous community forum for sharing and peer support',
                'Interactive web interface with instant feedback',
                'Flask REST API serving model predictions to the frontend'
            ],
            date: 'Apr 2025 - Jul 2025',
            role: 'Machine Learning Engineer & Backend Developer',
            teamSize: '6 People (3 Fullstack Developers, 2 Machine Learning Engineers, 1 Project Manager)',
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
            title: 'Hibah Eksternal – Grant Management Module in MyBTP Superapps (Internship Project)',
            description: 'A grant management module developed as part of MyBTP Superapps during my internship. This module enables administrators to create and manage grant events, while lecturers can submit and track proposals.',
            image: '/projects/hibah.png',
            technologies: ['Laravel', 'Livewire', 'AJAX', 'Javascript', 'Bootstrap', 'Postgresql', 'PHP', 'Jquery'],
            fullDescription: 'A grant management module developed as part of MyBTP Superapps during my internship. This module enables administrators to create and manage grant events, while lecturers can submit and track proposals. Features include event management, proposal submission, review workflow, and reporting dashboard.',
            myTask: "My task in this project is to create a dynamic frontend using Bootstrap and a backend using PHP and Laravel. In the system, I handle the validation of intellectual property forms, create login authentication, and build the entire admin panel. I also design and implement the database along with its relational structure to support the application's functionality. Additionally, I manage supporting project files and documentation to ensure the development process runs smoothly and is well-documented.",
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
            date: 'July 2025 - Present',
            role: 'Fullstack Developer',
            teamSize: '16 people',
            challenges: [
                'Handling large image/video assets',
                'Map performance dengan banyak markers',
                'Search algorithm complexity'
            ],
            solutions: [
                'Image optimization dengan Cloudinary',
                'Cluster map markers untuk performance',
                'Advanced indexing untuk search'
            ]
        },
        {
            title: 'Autonomous Bimbel Platform – Ongoing Project',
            description: 'Online tutoring platform with automated enrollment, progress tracking, quizzes, and certificate generation.',
            image: '/projects/bimbel.png',
            technologies: ['Next.js', 'Express.js', 'MongoDB', 'Mongoose', 'Node.js', 'JWT', 'Tailwind CSS'],
            fullDescription: 'Modern online tutoring platform with automated enrollment, progress tracking, quizzes, certificates, and admin reporting system.',
            myTask: "In this project, I built an online tutoring platform using Next.js for the frontend and Express.js for the backend, with MongoDB as the database. I implemented user authentication, automated enrollment, progress tracking, quizzes, and certificate generation. I also designed the database schema, developed the admin panel, and ensured smooth integration between frontend and backend.",
            features: [
                'Auto-enrollment after payment',
                'Progress tracking & automated reminders for students',
                'Auto-correction of quizzes & certificate generation',
                'Payment validation & automated reporting for admins',
                'Automated analytics dashboard & gamification'
            ],
            date: 'Jul 2025 - Present',
            role: 'Fullstack Developer',
            teamSize: '1 Person',
            challenges: [
                'Handling large image/video assets',
                'Map performance dengan banyak markers',
                'Search algorithm complexity'
            ],
            solutions: [
                'Image optimization dengan Cloudinary',
                'Cluster map markers untuk performance',
                'Advanced indexing untuk search'
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
                                    {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-10" /> */}
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
                                {/* <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Tantangan</h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}

                                {/* <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Solusi</h3>
                  <ul className="space-y-2">
                    {selectedProject.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    )
}

export default Projects