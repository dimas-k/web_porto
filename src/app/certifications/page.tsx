import type { Metadata } from 'next'
import Certifications from '../components/Certifications'

export const metadata: Metadata = { title: 'Certificates' }

export default function Page() {
  return <Certifications />
}
