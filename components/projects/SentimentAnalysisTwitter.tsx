import { projects } from '@/lib/projects'
import { ProjectCard } from './ProjectCard'

export function SentimentAnalysisTwitter() {
  const project = projects.find(p => p.slug === 'sentiment-analysis-twitter')
  if (!project) return null
  
  return <ProjectCard project={project} />
}

