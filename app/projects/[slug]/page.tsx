import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/#projects">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
      </Link>
      <article className="prose prose-slate max-w-none">
        <h1 className="text-3xl font-bold text-primary mb-4">{project.title}</h1>
        <p className="text-secondary mb-4">{project.date}</p>
        <div className="bg-card p-6 rounded-lg shadow-md">
          {project.details.map((detail, index) => (
            <p key={index} className="mb-4">{detail}</p>
          ))}
          {project.link && (
            <div className="mt-6">
              <Link 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                View Project Documentation →
              </Link>
            </div>
          )}
        </div>
      </article>
    </div>
  )
}

