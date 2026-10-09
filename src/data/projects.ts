import type { Project } from '../types'

export const projectsData: Project[] = [
  {
    id: 'rawdawg-ai',
    title: 'RawDawg AI',
    tagline: 'Autonomous AI Agent & LLM Orchestration Platform',
    description: 'An interactive AI workspace combining real-time streaming, dynamic tool execution, and modular agent prompts for developer automation.',
    techStack: ['Vue 3', 'TypeScript', 'FastAPI', 'Python', 'WebSockets', 'Docker'],
    githubUrl: 'https://github.com/kevcoder/rawdawg-ai',
    liveUrl: 'https://rawdawgai.kevcoder.com',
    status: 'current',
    featured: true,
    category: 'ai-tools',
    highlights: [
      'Multi-model LLM tool calling orchestration',
      'Real-time streaming UI with code highlighting and diff previews',
      'Containerized deployment behind Nginx SSL reverse proxy'
    ]
  },
  {
    id: 'kevcoder-infra',
    title: 'Cloud & Homelab Infrastructure',
    tagline: 'Self-Hosted Edge Services & Automated Networking',
    description: 'Production homelab cluster managing containerized microservices, WireGuard mesh networking, automated TLS certificate renewal, and backup pipelines.',
    techStack: ['Linux', 'Docker', 'Nginx', 'WireGuard', 'Bash', 'Systemd'],
    githubUrl: 'https://github.com/kevcoder/homelab-infra',
    status: 'current',
    featured: true,
    category: 'devops',
    highlights: [
      'Automated Nginx reverse proxy routing with custom domain management',
      'Encrypted internal DNS and network isolation for service tiers',
      'Automated snapshot sync and disaster recovery scripts'
    ]
  },
  {
    id: 'pulse-metrics',
    title: 'PulseMetrics Dashboard',
    tagline: 'Lightweight Server Telemetry & Health Monitor',
    description: 'A privacy-first operational monitoring dashboard providing real-time metrics on CPU, RAM, disk I/O, and active network connections.',
    techStack: ['Vue 3', 'Vite', 'TypeScript', 'Node.js', 'Chart.js'],
    githubUrl: 'https://github.com/kevcoder/pulse-metrics',
    liveUrl: 'https://pulse.kevcoder.com',
    status: 'completed',
    featured: false,
    category: 'fullstack',
    highlights: [
      'Sub-50ms WebSocket telemetry streaming',
      'Custom configurable alert thresholds with browser notifications',
      'Zero external tracking dependencies'
    ]
  },
  {
    id: 'dev-task-cli',
    title: 'TaskFlow CLI',
    tagline: 'Developer Workflow & Task Synchronization Tool',
    description: 'Command-line productivity tool designed to manage Git branch tasks, issue tracking, and automated workspace context switching directly in terminal.',
    techStack: ['TypeScript', 'Node.js', 'Commander.js', 'Git API'],
    githubUrl: 'https://github.com/kevcoder/taskflow-cli',
    status: 'completed',
    featured: false,
    category: 'backend',
    highlights: [
      'Interactive terminal UI with fuzzy searching and quick filters',
      'Local-first SQLite storage with Git commit metadata synchronization'
    ]
  },
  {
    id: 'portfolio-home',
    title: 'Portfolio & Project Showcase',
    tagline: 'Modern, Fast Single-Page Application',
    description: 'Clean personal landing page showcasing active projects, skill inventory, downloadable resume, and direct contact details.',
    techStack: ['Vue 3', 'TypeScript', 'Vite', 'Vanilla CSS'],
    githubUrl: 'https://github.com/kevcoder/home',
    liveUrl: 'https://home.kevcoder.com',
    status: 'current',
    featured: true,
    category: 'frontend',
    highlights: [
      'Responsive design with dark/light theme switching',
      'Accessible navigation and semantic HTML structure',
      'Sub-second load times and zero heavy UI framework overhead'
    ]
  }
]
