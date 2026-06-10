// app/components/ClientWrapper.tsx
// ClientWrapper tidak lagi digunakan untuk dark mode
// State darkMode dikelola langsung di page.tsx
'use client'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}