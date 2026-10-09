export type ProjectStatus = 'current' | 'completed' | 'archived'

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'backend' | 'devops' | 'ai-tools'

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  status: ProjectStatus
  featured: boolean
  category: ProjectCategory
  highlights?: string[]
}

export interface Profile {
  name: string
  title: string
  handle: string
  location: string
  statusBadge: string
  bio: string
  secondaryBio: string
  email: string
  githubUrl: string
  linkedinUrl: string
  resumeUrl: string
  skills: {
    category: string
    items: string[]
  }[]
}
