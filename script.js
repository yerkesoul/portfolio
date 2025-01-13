const skills = [
  { name: "Python", level: 95, image: "skills_icons/Python-logo-notext.svg.png" },
  { name: "SQL", level: 85, image: "skills_icons/Sql_data_base_with_logo.svg.png" },
  { name: "NumPy", level: 85, image: "skills_icons/NumPy_logo_2020.svg.png" },
  { name: "Pandas", level: 90, image: "skills_icons/Pandas_logo.svg.png" },
  { name: "PyTorch", level: 90, image: "skills_icons/pytorch-2.svg" },
  { name: "TensorFlow", level: 85, image: "skills_icons/TensorFlow_logo.svg.png" },
  { name: "LangChain", level: 85, image: "skills_icons/langchain.png" },
  { name: "Named Entity Recognition", level: 95, image: "skills_icons/NER-Text.png" },
  { name: "Event Extraction", level: 85, image: "skills_icons/event_extraction.png" },
  { name: "AWS", level: 80, image: "skills_icons/aws.svg.png" },
  { name: "Git", level: 90, image: "skills_icons/github.jpg" },
  { name: "Flask", level: 80, image: "skills_icons/flask.png" }
];

const projects = [
  {
    title: "Master Thesis in Generative AI",
    slug: "master-thesis",
    date: "2024",
    description: `
      <img src="pictures/thesis_picture.png" alt="Master Thesis Picture" class="w-full h-auto mb-4">
      Exploration of the spatial reasoning and map traversal capabilities of LLMs through an interactive, dialogue-driven Mapnavigation game, that I have developed.
    `,
    file: "projects/master-thesis.html"
  },
  {
    title: "Environmental Agenda Detection",
    slug: "environmental-agenda",
    date: "2023",
    description: `
      <img src="pictures/manifesto.png" alt="Environmental Agenda Detection Picture" class="w-full h-auto mb-4">
      Individual Research on Environmental Policy Detection: development of text classification models using BERT, RoBERTa, and XLM-RoBERTa using political data from the Manifesto Corpus.`,
    file: "projects/environmental-agenda.html"
  },
  {
    title: "Guess What Game: CV + NLP",
    slug: "guess-what",
    date: "2022",
    description: `
      <img src="pictures/guesswhat_icon.png" alt="Guess What Game Picture" class="w-full h-auto mb-4">
      Computer Vision and Natural Language Processing Project. Replicating the model of trained the MS-COCO dataset in ensemble with the multi-layer perceptron (MLP) and LSTM-processed dialogue history.
    `,
    file: "projects/guess-what.html"
  },
  {
    title: "ChatBot for Charity",
    slug: "charity-chatbot",
    date: "2024",
    description: `
      <img src="pictures/Telegram_chatbot.png" alt="ChatBot for Charity Picture" class="w-full h-auto mb-4">
      Deploying a Telegram chatbot for a Arman charity project on Amazon Web Services (AWS) using EC2 and S3 services.
    `,
    file: "projects/charity-chatbot.html"
  },
  {
    title: "NLP to SQL Translator",
    slug: "nlp-to-sql",
    date: "2023",
    description: `
      <img src="pictures/sql_nlp_icon.png" alt="NLP to SQL Translator Picture" class="w-full h-auto mb-4">
      Building  web application that enables users to interact with datasets through natural language queries and getting descriptions of those datasets. 
    `,
    file: "projects/nlp-to-sql.html"
  },
  {
    title: "Subjectivity Classification",
    slug: "subjectivity-classification",
    date: "2022",
    description: `
      <img src="pictures/subjectivity.png" alt="Subjectivity Classification Picture" class="w-full h-auto mb-4">
    Data mining project on subjectivity classification of publishers by traning the BERT-base model on the New York Times Annotated Corpus(NYT).
    `,
    file: "projects/subjectivity-classification.html"
  },
  {
    title: "Sentiment Analysis on Twitter Data",
    slug: "sentiment-analysis-twitter",
    date: "2022",
    description: `
      <img src="pictures/twitter_icon.png" alt="Twitter Sentiment Analysis Picture" class="w-full h-auto mb-4">
      Data mining project: Mining, Collection, transforming Twitter Posts for sentiment analysis.
    `,
    file: "projects/sentiment-analysis-twitter.html"
  }
];

function createSkillCard(skill) {
  return `
    <div class="skill-card p-6 rounded-xl transition-all bg-white hover:bg-primary/5">
      <div class="flex items-center gap-3 mb-4">
        <img src="${skill.image}" alt="${skill.name}" class="w-12 h-12 object-contain">
        <h3 class="text-xl font-bold">${skill.name}</h3>
      </div>
      <div class="space-y-2">
        <div class="flex justify-between text-sm">
          <span>${skill.name}</span>
          <span>${skill.level}%</span>
        </div>
        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div class="h-full bg-primary" style="width: ${skill.level}%"></div>
        </div>
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
      <a href="${project.file}" class="inline-block px-4 py-2 rounded transition-colors">
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
  // Remove skills population

  // Populate projects
  const projectsGrid = document.getElementById('projects-grid');
  projects.forEach(project => {
    projectsGrid.innerHTML += createProjectCard(project);
  });

  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Populate topbar
  const topbar = document.getElementById('topbar');
  topbar.innerHTML = `
    <ul class="flex space-x-4">
      <li><a href="#hero" class="text-black">Home</a></li>
      <li><a href="#skills" class="text-black">Skills</a></li>
      <li><a href="#projects" class="text-black">Projects</a></li>
      <li><a href="about.html" class="text-black">About</a></li>
      <li><a href="Yerkezhan_Abdullayeva_CV.pdf" class="text-black">My CV</a></li>
    </ul>
  `;

  // Adjust main content to not overlap with topbar
  const mainContent = document.getElementById('main-content');
  mainContent.classList.add('mt-16');

  // Populate hero section
  const heroSection = document.getElementById('hero');
  heroSection.innerHTML = `
    <div class="relative z-20 flex items-center justify-center space-x-8 p-4">
      <div class="text-left space-y-6">
        <h1 class="text-5xl mb-4">Hi, I am</h1> <!-- Unbold -->
        <h1 class="text-5xl font-bold mb-4">Yerkezhan Abdullayeva</h1>
        <h2 class="text-2xl text-gray-700 mb-8">NLP Data Analyst | Machine Learning Engineer | AI Researcher</h2>
        <div class="flex flex-wrap gap-6 text-gray-700">
          <a href="mailto:yerkezhan.abdullayeva@gmail.com" class="flex items-center gap-2 hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            yerkezhan.abdullayeva@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/yerkezhan-abdullayeva/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path></svg>
            Yerkezhan
          </a>
          <a href="https://github.com/Yerkesoul" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path></svg>
            Yerkesoul
          </a>
        </div>
        <p class="flex items-center gap-2 text-gray-700">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
          Berlin, Germany
        </p>
      </div>
      <div class="w-96 h-96 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-8"> <!-- 1.5 times bigger -->
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio_photo-errqhuAcOp8zYAuerKSeX2Yd4baQdd.png" alt="Yerkezhan Abdullayeva" class="w-full h-full object-cover">
      </div>
    </div>
    <div class="text-right mt-8"> <!-- Align to the right -->
        <a href="#projects" class="inline-block px-4 py-2 rounded transition-colors bg-gray-800 text-white shadow-md hover:bg-gray-900">My Projects</a>
    </div>
  `;
});

