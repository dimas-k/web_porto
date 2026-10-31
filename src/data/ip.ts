export type IPItem = {
  id: string
  kind: 'Copyright'
  status: 'registered' | 'pending'
  title: string
  officialName: string
  summary: string
  image?: string
  /** Detail resmi dari surat pencatatan */
  details?: { k: string; v: string }[]
  myRole?: string
  relatedHref?: string
  tags: string[]
}

// Gambar sertifikat: halaman 1 surat pencatatan, alamat pribadi pencipta disamarkan.
// Halaman "Lampiran Pencipta" sengaja tidak dipublikasikan (memuat alamat rumah 5 orang).
export const ipItems: IPItem[] = [
  {
    id: 'hak-cipta-dashboard',
    kind: 'Copyright',
    status: 'registered',
    title: 'Innovation & Research Dashboard',
    officialName: 'Dashboard Produk Inovasi dan Penelitian Politeknik Negeri Indramayu',
    summary:
      'A computer program I led as Technical Lead and built as Fullstack Developer, officially registered as copyright with the Ministry of Law of the Republic of Indonesia.',
    image: '/certificates/hak-cipta-1.webp',
    details: [
      { k: 'Type of work', v: 'Computer Program (Program Komputer)' },
      { k: 'Registration no.', v: '000829823' },
      { k: 'Application', v: 'EC002024257391 · 20 Dec 2024' },
      { k: 'First published', v: '20 Dec 2024, Indramayu' },
      { k: 'Copyright holder', v: 'Politeknik Negeri Indramayu' },
      { k: 'Creators', v: '5 co-creators' },
      { k: 'Protection', v: '50 years from first publication' },
      { k: 'Legal basis', v: 'Law No. 28 of 2014 on Copyright' },
    ],
    myRole: 'Technical Lead & Fullstack Developer',
    relatedHref: '#experience',
    tags: ['Laravel', 'MySQL', 'REST API', 'Copyright'],
  },
  {
    id: 'hak-cipta-2',
    kind: 'Copyright',
    status: 'pending',
    title: 'Second copyright registration',
    officialName: 'Surat Pencatatan Ciptaan (Hak Cipta)',
    summary: 'The certificate is still being processed and will be added here once it is issued.',
    tags: ['Copyright'],
  },
]