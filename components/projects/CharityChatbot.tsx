import { projects } from '@/lib/projects'
import { ProjectCard } from './ProjectCard'

export function CharityChatbot() {
  const project = projects.find(p => p.slug === 'charity-chatbot')
  if (!project) return null
  
  return <ProjectCard project={project} />
}

