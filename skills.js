const skillsData = {
  Languages: [
    { name: "Python", icon: "skills_icons/Python-logo-notext.svg.png" },
    { name: "SQL", icon: "skills_icons/Sql_data_base_with_logo.svg.png" },
    { name: "Shell", icon: "skills_icons/shell_scripting.png" },
  ],
  DataAnalysis: [
    { name: "NumPy", icon: "skills_icons/NumPy_logo_2020.svg.png" },
    { name: "Pandas", icon: "skills_icons/Pandas_logo.svg.png" },
    { name: "matplotlib", icon: "skills_icons/Matplotlib_icon.svg.png" },
    { name: "Seaborn", icon: "skills_icons/seaborn-logo.png" },
    { name: "Plotly", icon: "skills_icons/plotly_icon.png" },
    { name: "Power BI", icon: "skills_icons/power_bi.png" },
  ],
  MachineLearning: [
    { name: "PyTorch", icon: "skills_icons/pytorch-2.svg" },
    { name: "TensorFlow", icon: "skills_icons/TensorFlow_logo.svg.png" },
    { name: "NetworkX", icon: "skills_icons/networkx.png" },
    { name: "scikit-learn", icon: "skills_icons/Scikit_learn_logo_small.svg.png" },
    { name: "Keras", icon: "skills_icons/2048px-Keras_logo.svg.png" },
    { name: "Convolutional Neural Network", icon: "skills_icons/image_processing.png" },
  ],
  NLP: [
    { name: "Named Entity Recognition (NER)", icon: "skills_icons/NER-Text.png" },
    { name: "Event Extraction", icon: "skills_icons/event_extraction.png" },
    { name: "LangChain", icon: "skills_icons/langchain.png" },
    { name: "Hugging Face", icon: "skills_icons/hugging_face.png" },
    { name: "spaCy", icon: "skills_icons/SpaCy_logo.svg.png" },
    { name: "NLTK", icon: "skills_icons/nltk_logo.png" },
    { name: "Transformer Models", icon: "skills_icons/transfromer.jpg" },
    { name: "Generative AI", icon: "skills_icons/GenAI.jpg" },
    { name: "Data preprocessing", icon: "skills_icons/data_preproc.png" },
    { name: "Data mining", icon: "skills_icons/data_mining.png" },
    { name: "Deep Learning", icon: "skills_icons/deep_learning.png" },
  ],
  CloudDataEngineering: [
    { name: "AWS", icon: "skills_icons/aws.svg.png" },
    { name: "Apache Kafka", icon: "skills_icons/kafka.svg" },
    { name: "Apache Spark", icon: "skills_icons/Apache_Spark_logo.svg.png" },
    { name: "Amazon S3", icon: "skills_icons/aws_s3.png" },
    { name: "Amazon Glue", icon: "skills_icons/aws_glue.png" },
    { name: "Amazon Athena", icon: "skills_icons/aws_athena.png" },
  ],
  Development: [
    { name: "GitHub", icon: "skills_icons/github.jpg" },
    { name: "Git", icon: "skills_icons/Git_icon.svg.png" },
    { name: "JIRA Atlassian", icon: "skills_icons/Atlassian-Logo.png" },
    { name: "Flask", icon: "skills_icons/flask.png" },
    { name: "PyCharm", icon: "skills_icons/pycharm_logo.png" },
    { name: "Visual Studio Code", icon: "skills_icons/Visual_Studio_Code_icon.svg.png" },
  ],
};

function renderSkills() {
  const container = document.getElementById("skillsContainer");
  for (const [category, skills] of Object.entries(skillsData)) {
    const section = document.createElement("div");
    section.className = "skills-section";

    const title = document.createElement("h3");
    title.textContent = category.replace(/([A-Z])/g, ' $1').trim();
    section.appendChild(title);

    const iconsContainer = document.createElement("div");
    iconsContainer.className = "icons-container";

    skills.forEach(skill => {
      const skillWrapper = document.createElement("div");
      skillWrapper.className = "skill-wrapper";

      const icon = document.createElement("img");
      icon.src = skill.icon;
      icon.alt = skill.name;
      icon.title = skill.name;
      icon.className = "skill-icon";

      const label = document.createElement("span");
      label.textContent = skill.name;
      label.className = "skill-label";

      skillWrapper.appendChild(icon);
      skillWrapper.appendChild(label);
      iconsContainer.appendChild(skillWrapper);
    });

    section.appendChild(iconsContainer);
    container.appendChild(section);
  }
}

document.addEventListener("DOMContentLoaded", renderSkills);
