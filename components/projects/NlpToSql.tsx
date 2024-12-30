import { projects } from '@/lib/projects'
import { ProjectCard } from './ProjectCard'

export function NlpToSql() {
  const project = projects.find(p => p.slug === 'nlp-to-sql')
  if (!project) return null
  
  return <ProjectCard project={project} />
}

