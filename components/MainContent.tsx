import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'
import WorkExperience from './WorkExperience'
import Footer from './Footer'

export default function MainContent() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4">
        <Skills />
        <Projects />
        <Education />
        <WorkExperience />
      </main>
      <Footer />
    </div>
  )
}

