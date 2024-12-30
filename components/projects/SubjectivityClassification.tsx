import { projects } from '@/lib/projects'
import { ProjectCard } from './ProjectCard'

export function SubjectivityClassification() {
  const project = projects.find(p => p.slug === 'subjectivity-classification')
  if (!project) return null
  
  return <ProjectCard project={project} />
}

