import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

const Intro = () => {
  return (
    <section id="intro" className="py-20">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio_photo-errqhuAcOp8zYAuerKSeX2Yd4baQdd.png"
            alt="Yerkezhan Abdullayeva"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Yerkezhan Abdullayeva</h1>
          <h2 className="text-2xl text-secondary mb-4">NLP Data Analyst | Machine Learning Engineer | AI Researcher</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-secondary">
          <a href="mailto:yerkezhan.abdullayeva@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaEnvelope /> yerkezhan.abdullayeva@gmail.com
          </a>
          <a href="tel:+4915752668911" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaPhone /> +49 157 5266 8911
          </a>
          <a href="https://www.linkedin.com/in/yerkesoul" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaLinkedin /> Yerkezhan
          </a>
          <a href="https://github.com/Yerkesoul" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaGithub /> Yerkesoul
          </a>
        </div>
        <p className="flex items-center justify-center gap-2 text-secondary">
          <FaMapMarkerAlt /> Berlin, Germany
        </p>
      </div>
    </section>
  )
}

export default Intro

