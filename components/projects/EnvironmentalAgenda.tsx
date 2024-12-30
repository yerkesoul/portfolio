import { projects } from '@/lib/projects'
import { ProjectCard } from './ProjectCard'

export function EnvironmentalAgenda() {
  const project = projects.find(p => p.slug === 'environmental-agenda')
  if (!project) return null
  
  return <ProjectCard project={project} />
}

