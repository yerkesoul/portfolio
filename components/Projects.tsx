import { MasterThesis } from './projects/MasterThesis'
import { EnvironmentalAgenda } from './projects/EnvironmentalAgenda'
import { GuessWhat } from './projects/GuessWhat'
import { CharityChatbot } from './projects/CharityChatbot'
import { NlpToSql } from './projects/NlpToSql'
import { SubjectivityClassification } from './projects/SubjectivityClassification'
import { SentimentAnalysisTwitter } from './projects/SentimentAnalysisTwitter'

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MasterThesis />
        <EnvironmentalAgenda />
        <GuessWhat />
        <CharityChatbot />
        <NlpToSql />
        <SubjectivityClassification />
        <SentimentAnalysisTwitter />
      </div>
    </section>
  )
}

export default Projects

