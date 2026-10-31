export type CertImage = { src: string; label: string }
export type CertCategory = 'Program' | 'AI & ML' | 'Data'

export type Certification = {
  id: string
  category: CertCategory
  title: string
  officialName?: string
  issuer: string
  date: string
  validUntil?: string
  hours?: number
  credentialId?: string
  verifyUrl?: string
  summary: string
  skills: string[]
  images: CertImage[]
  featured?: boolean
  highlights?: { k: string; v: string }[]
}

// Gambar ada di /public/certificates — ganti file di sana untuk mengganti gambar.
export const certifications: Certification[] = [
  {
    id: 'coding-camp-dbs',
    category: 'Program',
    title: 'Coding Camp powered by DBS Foundation',
    officialName: 'Machine Learning Engineer Specialization',
    issuer: 'DBS Foundation × Dicoding Indonesia',
    date: 'Jul 2025',
    credentialId: 'CC25/GRAD/XXV-07/MC860D5Y1518',
    summary:
      'A selective IT training program by DBS Foundation and Dicoding. I completed the Machine Learning Engineer learning path as a full graduate, from Python and data processing to deep learning, ending with a capstone project.',
    skills: ['Machine Learning', 'Deep Learning', 'Python', 'Data Processing', 'SQL', 'Git & GitHub'],
    images: [
      { src: '/certificates/coding-camp-dbs.webp', label: 'Certificate' },
      { src: '/certificates/coding-camp-dbs-transcript.webp', label: 'Learning achievement' },
    ],
    featured: true,
    highlights: [
      { k: 'Status', v: 'Full Graduate' },
      { k: 'Program', v: 'Feb – Jul 2025' },
      { k: 'Courses', v: '14 courses & activities' },
      { k: 'Capstone', v: '93.1 / 100' },
    ],
  },
  {
    id: 'dicoding-applied-ml',
    category: 'AI & ML',
    title: 'Applied Machine Learning',
    officialName: 'Machine Learning Terapan',
    issuer: 'Dicoding Indonesia',
    date: '2 Jun 2025',
    validUntil: '2 Jun 2028',
    hours: 80,
    credentialId: '0LZ0RK19NP65',
    verifyUrl: 'https://www.dicoding.com/certificates/0LZ0RK19NP65',
    summary:
      'Predictive analytics (k-NN, Random Forest, AdaBoost), sentiment analysis with deep learning and SVM, computer vision for image recognition, and recommendation systems.',
    skills: ['Predictive Analytics', 'Sentiment Analysis', 'Computer Vision', 'Recommender Systems'],
    images: [{ src: '/certificates/dicoding-applied-ml.webp', label: 'Certificate' }],
  },
  {
    id: 'dicoding-deep-learning',
    category: 'AI & ML',
    title: 'Deep Learning Fundamentals',
    officialName: 'Belajar Fundamental Deep Learning',
    issuer: 'Dicoding Indonesia',
    date: '21 May 2025',
    validUntil: '21 May 2028',
    hours: 110,
    credentialId: '0LZ0RLKEQP65',
    verifyUrl: 'https://www.dicoding.com/certificates/0LZ0RLKEQP65',
    summary:
      'Neural networks with TensorFlow and Keras, NLP, time series (LSTM, RNN), image classification, recommendation systems, reinforcement learning, model conversion for deployment, and generative AI. The final project was an image classification model.',
    skills: ['TensorFlow', 'Keras', 'NLP', 'Time Series', 'Image Classification'],
    images: [{ src: '/certificates/dicoding-deep-learning.webp', label: 'Certificate' }],
  },
  {
    id: 'dicoding-data-processing',
    category: 'Data',
    title: 'Fundamental Data Processing',
    officialName: 'Belajar Fundamental Pemrosesan Data',
    issuer: 'Dicoding Indonesia',
    date: '17 May 2025',
    validUntil: '17 May 2028',
    hours: 60,
    credentialId: '0LZ0RLRNNP65',
    verifyUrl: 'https://www.dicoding.com/certificates/0LZ0RLRNNP65',
    summary:
      'Building quality datasets with Python: data repositories, ETL pipelines (extract, transform, load), and automation. The final project was a simple ETL pipeline.',
    skills: ['Python', 'ETL Pipelines', 'Data Cleaning', 'Automation'],
    images: [{ src: '/certificates/dicoding-data-processing.webp', label: 'Certificate' }],
  },
  {
    id: 'dicoding-data-analysis',
    category: 'Data',
    title: 'Data Analysis with Python',
    officialName: 'Belajar Analisis Data dengan Python',
    issuer: 'Dicoding Indonesia',
    date: '16 Mar 2025',
    validUntil: '16 Mar 2028',
    credentialId: 'GRX53Y3EVZ0M',
    verifyUrl: 'https://www.dicoding.com/certificates/GRX53Y3EVZ0M',
    summary:
      'The full analysis workflow in Python: descriptive statistics, data wrangling, exploratory data analysis, visualization, and an interactive dashboard built with Streamlit.',
    skills: ['Data Wrangling', 'EDA', 'Descriptive Statistics', 'Streamlit'],
    images: [{ src: '/certificates/dicoding-data-analysis.webp', label: 'Certificate' }],
  },
  {
    id: 'dicoding-data-visualization',
    category: 'Data',
    title: 'Basic Data Visualization',
    officialName: 'Belajar Dasar Visualisasi Data',
    issuer: 'Dicoding Indonesia',
    date: '19 Feb 2025',
    validUntil: '19 Feb 2028',
    hours: 16,
    credentialId: '07Z634JKJZQR',
    verifyUrl: 'https://www.dicoding.com/certificates/07Z634JKJZQR',
    summary:
      'Preparing data in Google Sheets and turning it into effective charts, using principles such as Gestalt and preattentive attributes.',
    skills: ['Data Visualization', 'Google Sheets', 'Data Storytelling'],
    images: [{ src: '/certificates/dicoding-data-visualization.webp', label: 'Certificate' }],
  },
  {
    id: 'dicoding-ai-basics',
    category: 'AI & ML',
    title: 'AI Fundamentals',
    officialName: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    date: '18 Feb 2025',
    validUntil: '18 Feb 2028',
    hours: 10,
    credentialId: 'QLZ93VDYDZ5D',
    verifyUrl: 'https://www.dicoding.com/certificates/QLZ93VDYDZ5D',
    summary:
      'Core AI concepts, how data is used to build AI, an introduction to machine learning, and deep learning with practical examples.',
    skills: ['AI Concepts', 'Machine Learning', 'Deep Learning'],
    images: [{ src: '/certificates/dicoding-ai-basics.webp', label: 'Certificate' }],
  },
]
