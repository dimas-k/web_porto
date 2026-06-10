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
            date: 'Okt 2024 - Mar 2025',
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
            date: 'Feb 2026 - Present',
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