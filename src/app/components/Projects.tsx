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
            <section id="projects" className="border-t border-line">
                <div className="p-6 md:p-10 border-b border-line flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl text-ink">
                        Projects<span className="text-lime">.</span>
                    </h2>
                    <p className="text-ink-dim max-w-sm">Tap any project for the full write-up — role, features, and the challenges I ran into.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.button
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedProject(project)}
                            className="relative text-left h-72 md:h-80 border-b border-r border-line overflow-hidden group"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-lime text-sm font-[family-name:var(--font-mono)]">{project.date}</span>
                                <h3 className="font-[family-name:var(--font-display)] font-semibold text-xl text-ink mt-1 mb-2">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                        <span key={techIndex} className="px-2.5 py-1 text-xs font-[family-name:var(--font-mono)] border border-ink/25 text-ink/80">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* Modal Detail Project */}
            {selectedProject && (
                <div className="fixed inset-0 bg-bg/80 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-bg-panel border border-line max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <div className="relative h-64 md:h-80">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                fill
                                className="object-cover"
                            />
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-bg border border-line hover:border-lime hover:text-lime transition-colors"
                            >
                                <FaTimes className="text-ink" />
                            </button>
                        </div>

                        <div className="p-6 md:p-8">
                            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl text-ink mb-4">{selectedProject.title}</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 pb-6 border-b border-line">
                                <div className="flex items-center text-ink-dim text-sm">
                                    <FaCalendar className="mr-3 text-lime" />
                                    <span>{selectedProject.date}</span>
                                </div>
                                <div className="flex items-center text-ink-dim text-sm">
                                    <FaUsers className="mr-3 text-lime" />
                                    <span>{selectedProject.teamSize}</span>
                                </div>
                                <div className="flex items-center text-ink-dim text-sm">
                                    <FaCode className="mr-3 text-lime" />
                                    <span>{selectedProject.role}</span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-medium mb-3 text-ink">Project Description</h3>
                                <p className="text-ink-dim leading-relaxed">{selectedProject.fullDescription}</p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-lg font-medium mb-3 text-ink">My Task</h3>
                                <p className="text-ink-dim leading-relaxed">{selectedProject.myTask}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-ink">Key Features</h3>
                                    <ul className="space-y-2">
                                        {selectedProject.features.map((feature, index) => (
                                            <li key={index} className="flex items-start text-ink-dim text-sm">
                                                <span className="w-1 h-1 bg-lime mt-2 mr-3 flex-shrink-0"></span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-ink">Technology</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2.5 py-1 border border-line text-ink-dim text-xs font-[family-name:var(--font-mono)]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-ink">Challenges</h3>
                                    <ul className="space-y-2">
                                        {selectedProject.challenges.map((challenge, index) => (
                                            <li key={index} className="flex items-start text-ink-dim text-sm">
                                                <span className="w-1 h-1 bg-clay mt-2 mr-3 flex-shrink-0"></span>
                                                <span>{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 text-ink">Solutions</h3>
                                    <ul className="space-y-2">
                                        {selectedProject.solutions.map((solution, index) => (
                                            <li key={index} className="flex items-start text-ink-dim text-sm">
                                                <span className="w-1 h-1 bg-lime mt-2 mr-3 flex-shrink-0"></span>
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
