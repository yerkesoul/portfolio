const experiences = [
  {
    title: "NLP Engineer",
    company: "AI Solutions Inc.",
    period: "2020 - Present",
    description: "Developing and implementing advanced NLP models for various applications including sentiment analysis, named entity recognition, and machine translation."
  },
  {
    title: "Machine Learning Researcher",
    company: "Tech Innovations Lab",
    period: "2018 - 2020",
    description: "Conducted research on novel machine learning algorithms with a focus on natural language understanding and generation."
  },
  // Add more experiences as needed
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-teal-600">{exp.company}</p>
            <p className="text-gray-600">{exp.period}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

