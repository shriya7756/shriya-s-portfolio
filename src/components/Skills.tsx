
import React from 'react';
import { Code, Database, Brain, Wrench } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "SQL", "HTML", "CSS", "JavaScript", "R"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: ["OpenCV", "Flask", "Streamlit", "Swing (Java)", "NumPy", "Pandas", "Matplotlib", "BeautifulSoup", "PyTorch"]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: ["Machine Learning (ML)", "Object Detection", "Image Processing", "Generative AI", "Large Language Models (LLM)", "Computer Vision"]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MySQL", "SQLite", "MongoDB", "DBMS", "Microsoft Office Suite", "Power BI", "Docker", "CI/CD with GitHub Actions"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Technical Skills</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-900 p-3 rounded-lg">
                  <category.icon className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
