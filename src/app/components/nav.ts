import { FiHome, FiUser, FiBriefcase, FiLayers, FiCpu, FiAward, FiShield, FiMail } from 'react-icons/fi'

export const pages = [
  { href: '/', label: 'Home', icon: FiHome },
  { href: '/about', label: 'About', icon: FiUser },
  { href: '/experience', label: 'Experience', icon: FiBriefcase },
  { href: '/projects', label: 'Projects', icon: FiLayers },
  { href: '/skills', label: 'Skills', icon: FiCpu },
  { href: '/certifications', label: 'Certs', icon: FiAward },
  { href: '/intellectual-property', label: 'IP', icon: FiShield },
  { href: '/contact', label: 'Contact', icon: FiMail },
] as const
