import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ProjectCard({ project }) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-secondary mb-4">{project.date}</p>
      <p className="mb-4">{project.description}</p>
      <Link href={`/projects/${project.slug}`}>
        <Button className="w-full">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}

