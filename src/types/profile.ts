import type { IconType } from 'react-icons'

export interface ContactInfo {
  email: string
  phone: string
  location: string
  website?: string
  linkedin?: string
}

export interface ContactSection {
  title: string
  subtitle: string
  actionText1: string
  actionText2?: string
}

export interface CodeContent {
  header: string
  nombre: string
  rol: string
  servicios: string
  modalidad: string
  compromiso: string
  ubicacion: string
  disponible: string
}

export interface ExperienceEntry {
  id: string
  role: string
  organization: string
  location?: string
  startDate: string
  endDate: string
  highlights: string[]
  image: string
}

export interface EducationEntry {
  id: string
  title: string
  specialistSkill: string
  institution: string
  details?: string[]
}

export type SkillCategory = 'frontend' | 'backend' | 'db-apis' | 'cloud-devops-tools'

export interface SkillItem {
  name: string
  icon?: string | IconType
}

export interface SkillGroup {
  category: SkillCategory
  label: string
  items: (string | SkillItem)[]
}

export interface SectionHeader {
  title: string
  subtitle: string
}

export interface ServiceOffering {
  id: string
  title: string
  description: string
  icon?: IconType
}

export interface LanguageSkill {
  name: string
  level: string
}
