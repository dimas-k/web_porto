export type CertImage = { src: string; label: string }

export type Certification = {
  id: string
  title: string
  officialName?: string
  issuer: string
  date: string
  validUntil?: string
  hours?: number
  credentialId: string
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
    id: 'dicoding-data-processing',
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
    id: 'dicoding-data-visualization',
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
]
