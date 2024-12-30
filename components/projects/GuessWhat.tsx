import { projects } from '@/lib/projects'
import { ProjectCard } from './ProjectCard'

export function GuessWhat() {
  const project = projects.find(p => p.slug === 'guess-what')
  if (!project) return null
  
  return <ProjectCard project={project} />
}

