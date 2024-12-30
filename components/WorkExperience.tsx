const WorkExperience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Work Experience</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Natural Language Processing Data Analyst</h3>
        <p className="text-blue-600">UNICEPT A Corporate Intelligence (Berlin)</p>
        <p className="text-gray-600">April 2022 - July 2023</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Developed data mining and machine learning modules for named entity recognition (NER), event extraction, and relationship extraction from unstructured texts using Python.</li>
          <li>A team of 2 people (myself included) replaced a department with a model.</li>
          <li>Enhanced NLP frameworks and libraries, improving accuracy and efficiency in text processing tasks.</li>
          <li>Processed and analyzed large-scale unstructured textual data and data visualizations to inform business decisions.</li>
        </ul>
      </div>
    </section>
  )
}

export default WorkExperience

