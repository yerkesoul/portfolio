const Education = () => {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">Education</h2>
      <div className="space-y-8">
        <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold">Master of Science in Cognitive Systems</h3>
          <p className="text-primary">Universität Potsdam, Germany</p>
          <p className="text-secondary">October 2020 - September 2024</p>
          <p className="mt-2">Major: Advanced NLP, Machine Learning, Data Science, Artificial intelligence, Deep learning</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold">Bachelor of Computational Linguistics</h3>
          <p className="text-primary">Al-Farabi Kazakh National University, Kazakhstan</p>
          <p className="text-secondary">September 2016 - June 2020</p>
        </div>
      </div>
    </section>
  )
}

export default Education

