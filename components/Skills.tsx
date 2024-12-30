'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skillCategories = [
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-learn", level: 95 },
      { name: "HuggingFace", level: 90 },
      { name: "LangChain", level: 85 }
    ],
    icon: "🤖"
  },
  {
    category: "NLP",
    skills: [
      { name: "Named Entity Recognition", level: 95 },
      { name: "Text Classification", level: 90 },
      { name: "Event Extraction", level: 85 },
      { name: "Generative AI", level: 90 },
      { name: "RAG", level: 85 }
    ],
    icon: "📝"
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
      { name: "Git", level: 90 },
      { name: "Flask", level: 80 },
      { name: "Django", level: 75 }
    ],
    icon: "💻"
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Apache Kafka", level: 75 },
      { name: "PySpark", level: 85 },
      { name: "Data Mining", level: 90 },
      { name: "ETL", level: 85 }
    ],
    icon: "🔧"
  }
]

const SkillCard = ({ category, skills, icon, isSelected, onClick }) => {
  return (
    <motion.div
      className={`p-6 rounded-xl cursor-pointer transition-all ${
        isSelected ? 'bg-primary text-white scale-105' : 'bg-white hover:bg-primary/5'
      }`}
      onClick={onClick}
      whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
      layout
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-xl font-bold">{category}</h3>
      </div>
      {isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <section id="skills" className="py-20">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.category}
            {...category}
            isSelected={selectedCategory === category.category}
            onClick={() => setSelectedCategory(
              selectedCategory === category.category ? null : category.category
            )}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills

