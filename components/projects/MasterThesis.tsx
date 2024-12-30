import { projects } from '@/lib/projects'
import { ProjectCard } from './ProjectCard'

export function MasterThesis() {
  const project = projects.find(p => p.slug === 'master-thesis')
  if (!project) return null
  
  return <ProjectCard project={project} />
}

