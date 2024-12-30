const languages = [
  { language: "English", level: "Advanced (C1/C2)" },
  { language: "Russian", level: "Advanced (C1/C2)" },
  { language: "German", level: "Intermediate (B1/B2)" },
  { language: "Kazakh", level: "Native" },
  { language: "Chinese", level: "Beginner (A1)" }
]

const Languages = () => {
  return (
    <section id="languages" className="py-20">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Languages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {languages.map((lang, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{lang.language}</h3>
            <p className="text-gray-600">{lang.level}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Languages

