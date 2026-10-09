import type { Profile } from '../types'

export const profileData: Profile = {
  name: 'Kevin',
  title: 'Full-Stack Software Engineer',
  handle: 'kevcoder',
  location: 'United States',
  statusBadge: 'Available for high-impact opportunities & projects',
  bio: 'Building reliable full-stack applications, distributed tooling, and streamlined developer workflows. Focused on clean architecture, modern Vue/TypeScript frontends, and robust backend services.',
  secondaryBio: 'Passionate about open-source tools, homelab infrastructure, AI agent workflows, and crafting fast, intuitive digital experiences.',
  email: 'kevin@kevcoder.com',
  githubUrl: 'https://github.com/kevcoder',
  linkedinUrl: 'https://linkedin.com/in/kevcoder',
  resumeUrl: '/resume.pdf',
  skills: [
    {
      category: 'Frontend',
      items: ['Vue 3', 'TypeScript', 'Vite', 'HTML5/CSS3', 'Responsive Design', 'State Management']
    },
    {
      category: 'Backend & Systems',
      items: ['Node.js', 'Python', 'FastAPI', 'REST APIs', 'PostgreSQL', 'Docker']
    },
    {
      category: 'DevOps & Tooling',
      items: ['Linux / Bash', 'Git & GitHub Actions', 'Nginx', 'Reverse Proxies', 'CI/CD']
    }
  ]
}
