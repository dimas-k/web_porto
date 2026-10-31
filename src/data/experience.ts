export type ExperienceType = 'Startup' | 'Research' | 'Internship' | 'Program' | 'Project' | 'Lead'

export type Experience = {
  role: string
  org: string
  type: ExperienceType
  period: string
  periodNote?: string
  location?: string
  current?: boolean
  bullets: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Co-Founder',
    org: 'Pepra Lab',
    type: 'Startup',
    period: 'Sep 2026 – Present',
    current: true,
    bullets: [
      'Co-founded an early-stage technology startup with four other founders.',
      'Secured our first client, the news portal cuplik.com.',
      'Built the full content management system (CMS) for the cuplik.com news channel, including site-wide and per-article SEO, sitemap, reCAPTCHA, role management, and email notifications.',
      'Developing an education SaaS product and building the company profile website.',
    ],
    tech: ['Laravel', 'CMS', 'SEO', 'reCAPTCHA', 'SaaS'],
  },
  {
    role: 'Researcher & Fullstack Developer',
    org: 'Undergraduate Thesis Research, POLINDRA',
    type: 'Research',
    period: 'Feb 2026 – Aug 2026',
    bullets: [
      'Developed a rice plant disease classification system integrating leaf image data with IoT sensor readings for temperature and humidity.',
      'Implemented and benchmarked deep learning models, including Swin Transformer, ViT, EfficientNet, ResNet, and Inception, achieving 93.55% accuracy and 95.35% F1-score with a 14-class combined-dataset Swin Transformer model.',
      'Integrated a Large Language Model with a Retrieval-Augmented Generation (RAG) pipeline, using sentence embeddings and FAISS vector search, to generate automated disease-handling recommendations from classification results and sensor data.',
      'Built an end-to-end pipeline from mobile image capture and IoT data fusion to LLM-based recommendation output using Python and Flutter.',
    ],
    tech: ['Swin Transformer', 'PyTorch', 'RAG', 'FAISS', 'Flutter', 'Python'],
  },
  {
    role: 'Backend Developer Intern',
    org: 'Icubic',
    type: 'Internship',
    period: 'Jan 2026 – Aug 2026',
    location: 'Remote',
    bullets: [
      'Started as Backend Developer Intern; temporarily assigned to manual QA while learning Inertia.js and Express.js.',
      'Performed manual QA testing using Excel for test case documentation and Selenium for automated test scripts.',
      'As backend developer, connected Laravel to a React frontend using Inertia.js, and built APIs in Express.js.',
      'Joined weekly Scrum meetings while fully remote, coordinating testing and development cycles.',
    ],
    tech: ['Laravel', 'Inertia.js', 'React', 'Express.js', 'Selenium'],
  },
  {
    role: 'Frontend Developer',
    org: 'Personal Portfolio Website, Self Project',
    type: 'Project',
    period: 'Sep 2025 – Present',
    current: true,
    bullets: [
      'Built and continue to maintain a personal portfolio website using Next.js and React 19 with TypeScript.',
      'Implemented a component-based architecture (Hero, About, Skills, Projects, Contact) styled with Tailwind CSS, with animations built using Framer Motion.',
      'Configured SEO for better search visibility.',
    ],
    tech: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    role: 'Fullstack Developer (Flutter + FastAPI)',
    org: 'Byanice AI Personal Assistant, Self Project',
    type: 'Project',
    period: 'Jul 2025 – Sep 2026',
    bullets: [
      'Built an AI-powered personal assistant application using Flutter for mobile and FastAPI for backend, with agentic LLM capabilities via Groq (LLaMA 3.3).',
      'Implemented voice input (Whisper speech-to-text) and text-to-speech (ElevenLabs/gTTS) for natural voice interaction.',
      'Designed an agentic tool-calling system, using prompt engineering, enabling the AI to open apps, send WhatsApp messages, control Spotify, set reminders, and check real-time weather.',
      'Used Supabase for authentication and user preference management.',
      'Built the agent loop on Groq function calling with 9 tools, including Telegram Bot API integration and Google Calendar and Spotify connections via OAuth 2.0.',
      'Built a privacy-first “Habit DNA” module (metadata only) for proactive nudges, text-based emotion detection, and camera-based visual Q&A with the Gemini Vision API.',
    ],
    tech: ['Flutter', 'FastAPI', 'Groq', 'Whisper', 'Supabase', 'OAuth 2.0'],
  },
  {
    role: 'Fullstack Developer Intern',
    org: 'MyBTP Super App Web Based, Bandung Techno Park',
    type: 'Internship',
    period: 'Jul 2025 – Dec 2025',
    bullets: [
      'Developed a Laravel backend and Tailwind CSS frontend for a web-based application supporting external grants.',
      'Collaborated with the team to define the design and key features for external grants.',
      'Built the backend system and database using PostgreSQL, writing and optimizing SQL queries for the application’s data workflows.',
      'Used GitHub for version control and collaborative development.',
    ],
    tech: ['Laravel', 'Tailwind CSS', 'PostgreSQL', 'GitHub'],
  },
  {
    role: 'Machine Learning Engineer',
    org: 'MBKM DBS Foundation Program',
    type: 'Program',
    period: 'Feb 2025 – Jul 2025',
    bullets: [
      'Participated in a 6-month industry-based learning program in machine learning and AI, completing 13 Dicoding Academy courses.',
      'Developed an emotion detection system (Rasa Kata Project) using an LSTM model built with TensorFlow, converted to TensorFlow Lite, and served through a Flask REST API.',
      'Containerized the AI model with Docker and integrated it with an Express.js backend for seamless real-time predictions.',
    ],
    tech: ['TensorFlow', 'LSTM', 'TensorFlow Lite', 'Flask', 'Docker', 'Express.js'],
  },
  {
    role: 'Technical Lead & Fullstack Developer',
    org: 'Innovation and Research Dashboard, POLINDRA',
    type: 'Lead',
    period: 'Sep 2024 – Feb 2025',
    periodNote: 'Team · continued solo Jan 2026 – Jun 2026',
    bullets: [
      'Led technical direction for the team, including tech stack selection and task delegation (Sep 2024 – Feb 2025).',
      'Developed the Laravel backend and MySQL database, implemented AJAX-based form validation to reduce submission errors, and built RESTful APIs consumed by a companion mobile app.',
      'Participated in feature planning, testing, bug fixing, and continuous improvements with the project team.',
      'Led the team that built the system, which was registered as a computer program copyright (Surat Pencatatan Ciptaan No. 000829823, 20 Dec 2024) held by POLINDRA.',
      'Continued solo development of the system (Jan 2026 – Jun 2026), alongside maintaining the Intellectual Property System.',
    ],
    tech: ['Laravel', 'MySQL', 'AJAX', 'REST API', 'Copyright'],
  },
  {
    role: 'Technical Lead & Fullstack Developer',
    org: 'Intellectual Property System, POLINDRA (Campus Project)',
    type: 'Lead',
    period: 'Sep 2023 – Feb 2025',
    periodNote: 'Team · continued solo Jan 2026 – Jun 2026',
    bullets: [
      'Led technical direction for the team, including tech stack selection, task delegation, and system architecture design (Sep 2023 – Feb 2025).',
      'Developed core application features using Laravel, MySQL, and AJAX-based form validation, including authentication and role-based dashboards, in active production use by the POLINDRA academic community.',
      'Designed and implemented RESTful APIs, integrating them with the Innovation Dashboard for cross-system data exchange.',
      'Integrated the Midtrans payment gateway and built email notification functionality to automate system events.',
      'Conducted code reviews and system analysis, database design, functional testing, and bug fixing to maintain quality across the team.',
      'Continued as sole developer and maintainer (Jan 2026 – Jun 2026), handling bug fixes and feature updates independently.',
    ],
    tech: ['Laravel', 'MySQL', 'Midtrans', 'RBAC', 'REST API'],
  },
]