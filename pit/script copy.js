// Data
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
];

const projects = [
  {
    title: "Master Thesis in Generative AI",
    slug: "master-thesis",
    date: "2024",
    description: "Assessment of Map Navigation and Spatial Reasoning Abilities of Large Language Models",
    details: [
      "Developed five Python-based map traversal games to assess the spatial reasoning capabilities of LLMs.",
      "Tested 15 large language models (GPT-4, Llama-3, Claude-3) through API calls and conducted quantitative and qualitative analysis.",
      "Results were published as part of a conference paper.",
      "The research focused on evaluating how well large language models can understand and navigate spatial relationships in various map-based scenarios.",
      "Implemented different types of navigation challenges to test different aspects of spatial reasoning.",
      "Created a comprehensive evaluation framework for assessing LLM performance in spatial tasks."
    ],
    link: "https://doi.org/10.48550/arXiv.2406.14035"
  },
  {
    title: "Environmental Agenda Detection",
    slug: "environmental-agenda",
    date: "2023",
    description: "Individual Research on Environmental Policy Detection",
    details: [
      "Built text classification models using political data from the Manifesto Corpus.",
      "Developed one-step and two-step classification models using BERT, RoBERTa, and XLM-RoBERTa.",
      "Implemented sophisticated NLP techniques for accurate agenda detection.",
      "Created a pipeline for processing and analyzing political manifestos.",
      "Achieved significant improvements in classification accuracy compared to baseline models.",
      "Developed methods for handling multilingual political texts."
    ]
  },
  {
    title: "Guess What Game",
    slug: "guess-what",
    date: "2022",
    description: "Computer Vision + NLP Game",
    details: [
      "Built an ensemble model combining ResNET and LSTM architectures.",
      "Implemented dialogue system between game agents.",
      "Created an interactive interface for human-AI gameplay.",
      "Developed sophisticated image recognition capabilities.",
      "Implemented natural language understanding for game interactions.",
      "Optimized model performance for real-time gameplay."
    ]
  },
  {
    title: "ChatBot for Charity",
    slug: "charity-chatbot",
    date: "2024",
    description: "Arman Project Chatbot",
    details: [
      "Developed a Telegram chatbot for charity project Arman.",
      "Implemented AWS cloud server deployment.",
      "Created and managed SQL database for user interactions.",
      "Developed natural language understanding capabilities.",
      "Implemented secure donation processing system.",
      "Created administrative dashboard for charity management."
    ]
  },
  {
    title: "NLP to SQL Translator",
    slug: "nlp-to-sql",
    date: "2023",
    description: "Translating Natural Language Queries to SQL",
    details: [
      "Developed a system to convert natural language questions into SQL queries.",
      "Utilized advanced NLP techniques and machine learning models for accurate translation.",
      "Implemented a user-friendly interface for non-technical users to query databases.",
      "Integrated with multiple database systems for wide compatibility.",
      "Achieved high accuracy in query translation across various domains.",
      "Implemented error handling and query optimization features."
    ]
  },
  {
    title: "Subjectivity Classification",
    slug: "subjectivity-classification",
    date: "2022",
    description: "Classifying Text as Subjective or Objective",
    details: [
      "Developed a machine learning model to classify text as subjective or objective.",
      "Utilized various NLP techniques including word embeddings and deep learning models.",
      "Preprocessed and cleaned large datasets of labeled text.",
      "Implemented and compared multiple classification algorithms.",
      "Achieved high accuracy in distinguishing between subjective and objective statements.",
      "Created a web interface for real-time classification of user-input text."
    ]
  },
  {
    title: "Sentiment Analysis on Twitter Data",
    slug: "sentiment-analysis-twitter",
    date: "2022",
    description: "Analyzing Sentiment in Twitter Posts",
    details: [
      "Developed a sentiment analysis model for Twitter data.",
      "Utilized the Twitter API to collect large volumes of tweets.",
      "Implemented data cleaning and preprocessing techniques specific to social media text.",
      "Developed and trained machine learning models for sentiment classification.",
      "Conducted time series analysis to track sentiment trends over time.",
      "Created visualizations to present sentiment analysis results effectively."
    ]
  }
];

const education = [
  {
    degree: "Master of Science in Cognitive Systems",
    institution: "Universität Potsdam, Germany",
    period: "October 2020 - September 2024",
    details: "Major: Advanced NLP, Machine Learning, Data Science, Artificial intelligence, Deep learning"
  },
  {
    degree: "Bachelor of Computational Linguistics",
    institution: "Al-Farabi Kazakh National University, Kazakhstan",
    period: "September 2016 - June 2020",
    details: ""
  }
];

const workExperience = [
  {
    title: "Natural Language Processing Data Analyst",
    company: "UNICEPT A Corporate Intelligence (Berlin)",
    period: "April 2022 - July 2023",
    responsibilities: [
      "Developed data mining and machine learning modules for named entity recognition (NER), event extraction, and relationship extraction from unstructured texts using Python.",
      "A team of 2 people (myself included) replaced a department with a model.",
      "Enhanced NLP frameworks and libraries, improving accuracy and efficiency in text processing tasks.",
      "Processed and analyzed large-scale unstructured textual data and data visualizations to inform business decisions."
    ]
  }
];

// Helper functions
function createSkillCard(category) {
  return `
    <div class="skill-card p-6 rounded-xl cursor-pointer transition-all bg-white hover:bg-primary/5">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-3xl">${category.icon}</span>
        <h3 class="text-xl font-bold">${category.category}</h3>
      </div>
      <div class="space-y-4">
        ${category.skills.map(skill => `
          <div class="space-y-2">
            <div class="flex justify-between text-sm">
              <span>${skill.name}</span>
              <span>${skill.level}%</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div class="h-full bg-primary" style="width: ${skill.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function createProjectCard(project) {
  return `
    <div class="project-card bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
      <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
      <p class="text-secondary mb-4">${project.date}</p>
      <p class="mb-4">${project.description}</p>
      <a href="#" class="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors" onclick="showProjectDetails('${project.slug}')">
        Learn More
      </a>
    </div>
  `;
}

function createEducationCard(edu) {
  return `
    <div class="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 class="text-xl font-semibold">${edu.degree}</h3>
      <p class="text-primary">${edu.institution}</p>
      <p class="text-secondary">${edu.period}</p>
      ${edu.details ? `<p class="mt-2">${edu.details}</p>` : ''}
    </div>
  `;
}

function createExperienceCard(exp) {
  return `
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold">${exp.title}</h3>
      <p class="text-blue-600">${exp.company}</p>
      <p class="text-gray-600">${exp.period}</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
      </ul>
    </div>
  `;
}

// Populate sections
document.addEventListener('DOMContentLoaded', () => {
  // Populate skills
  const skillsGrid = document.getElementById('skills-grid');
  skillCategories.forEach(category => {
    skillsGrid.innerHTML += createSkillCard(category);
  });

  // Populate projects
  const projectsGrid = document.getElementById('projects-grid');
  projects.forEach(project => {
    projectsGrid.innerHTML += createProjectCard(project);
  });

  // Populate education
  const educationList = document.getElementById('education-list');
  education.forEach(edu => {
    educationList.innerHTML += createEducationCard(edu);
  });

  // Populate work experience
  const experienceList = document.getElementById('experience-list');
  workExperience.forEach(exp => {
    experienceList.innerHTML += createExperienceCard(exp);
  });

  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Populate sidebar
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = `
    <div class="p-4">
      <div class="flex items-center justify-center mb-8">
        <div class="w-16 h-16 rounded-full overflow-hidden">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio_photo-errqhuAcOp8zYAuerKSeX2Yd4baQdd.png" alt="Yerkezhan Abdullayeva" class="w-full h-full object-cover">
        </div>
      </div>
      <nav>
        <ul class="space-y-2">
          <li><a href="#hero" class="block py-2 px-4 hover:bg-gray-100 rounded">Home</a></li>
          <li><a href="#skills" class="block py-2 px-4 hover:bg-gray-100 rounded">Skills</a></li>
          <li><a href="#projects" class="block py-2 px-4 hover:bg-gray-100 rounded">Projects</a></li>
          <li><a href="#education" class="block py-2 px-4 hover:bg-gray-100 rounded">Education</a></li>
          <li><a href="#experience" class="block py-2 px-4 hover:bg-gray-100 rounded">Experience</a></li>
        </ul>
      </nav>
    </div>
  `;

  // Toggle sidebar
  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('-translate-x-full');
    mainContent.classList.toggle('ml-64');
  };

  // Add event listener to toggle sidebar
  document.addEventListener('click', (e) => {
    if (e.target.closest('#sidebar') || e.target.closest('#toggle-sidebar')) {
      toggleSidebar();
    }
  });

  // Populate hero section
  const heroSection = document.getElementById('hero');
  heroSection.innerHTML = `
    <div class="relative z-20 text-center space-y-6 p-4">
      <div class="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-8">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio_photo-errqhuAcOp8zYAuerKSeX2Yd4baQdd.png" alt="Yerkezhan Abdullayeva" class="w-full h-full object-cover">
      </div>
      <h1 class="text-5xl font-bold mb-4">Yerkezhan Abdullayeva</h1>
      <h2 class="text-2xl text-gray-300 mb-8">NLP Data Analyst | Machine Learning Engineer | AI Researcher</h2>
      <div class="flex flex-wrap justify-center gap-6 text-gray-300">
        <a href="mailto:yerkezhan.abdullayeva@gmail.com" class="flex items-center gap-2 hover:text-primary transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          yerkezhan.abdullayeva@gmail.com
        </a>
        <a href="tel:+4915752668911" class="flex items-center gap-2 hover:text-primary transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
          +49 157 5266 8911
        </a>
        <a href="https://www.linkedin.com/in/yerkesoul" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-primary transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path></svg>
          Yerkezhan
        </a>
        <a href="https://github.com/Yerkesoul" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-primary transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path></svg>
          Yerkesoul
        </a>
      </div>
      <p class="flex items-center justify-center gap-2 text-gray-300">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
        Berlin, Germany
      </p>
    </div>
  `;
});

// Function to show project details
function showProjectDetails(slug) {
  const project = projects.find(p => p.slug === slug);
  if (!project) return;

  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <h2 class="text-3xl font-bold text-primary mb-4">${project.title}</h2>
      <p class="text-secondary mb-4">${project.date}</p>
      ${project.details.map(detail => `<p class="mb-4">${detail}</p>`).join('')}
      ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-dark">View Project Documentation →</a>` : ''}
      <button class="mt-6 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors" onclick="closeModal(this)">Close</button>
    </div>
  `;
  document.body.appendChild(modal);
}

// Function to close modal
function closeModal(button) {
  const modal = button.closest('.fixed');
  modal.remove();
}

