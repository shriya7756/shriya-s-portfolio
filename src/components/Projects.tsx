import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Skin Analysis Tool",
      tech: "Streamlit, Python, OpenCV, DeepFace",
      period: "October 2024 - Present",
      description: "Built Streamlit-based skin analysis tool to assess skin condition, tone, melanin, and UV sensitivity.",
      highlights: [
        "Planning to enhance it to detect skin issues and suggest natural remedies",
        "Integrated computer vision for accurate skin tone analysis"
      ],
      demoLink: "https://drive.google.com/file/d/1nw5p7zspQd5GCs3CjGw9JlgZKMQWNDx1/view?usp=drivesdk"
    },
    {
      title: "Object Detection System",
      tech: "Python, Computer Vision, Machine Learning",
      period: "February 2024",
      description: "Developed a real-time video-based object detection system with 90% accuracy.",
      highlights: [
        "Leveraging Cascade Classifiers to enhance data science endeavors",
        "Real-time processing with high accuracy detection"
      ],
      demoLink: "https://drive.google.com/file/d/1JkulpvW3KKTRZ0sbydgRGHnL-wqoIpRO/view?usp=sharing",
      codeLink: "https://github.com/shriya7756/fastapi-object-detection"
    },
    {
      title: "mindScribe",
      tech: "MERN",
      period: "June 2025",
      description: "A full-stack personal journaling web app built using MERN.",
      highlights: [
        "Built a personal journal web app with media-rich entries, event calendar,  budget tracker, a secure login, media uploads, and responsive UI.",
        "Deployed on Vercel with GitHub CI/CD"
      ],
      projectLink: "https://jpmc-stats.netlify.app/"
    },
    {
      title: "CBIT JPMC Hiring Trends Analysis",
      tech: "Power BI, HTML, CSS",
      period: "March 2025",
      description: "Created web-based platform to display JPMC hiring trends at CBIT.",
      highlights: [
        "Integrating Power BI dashboards with a dynamic UI",
        "Enabling interactive charts and downloadable reports"
      ],
      projectLink: "https://jpmc-stats.netlify.app/"
    },
    {
      title: "Budget Analyzer",
      tech: "Java, Swing",
      period: "October 2024",
      description: "Designed a Java Swing desktop application for spending analysis.",
      highlights: [
        "Dynamic expense categorization with automated record-keeping",
        "Overspending alerts and income-based budget tracking"
      ]
    },
    {
      title: "Transaction Analysis Tool",
      tech: "Flask, Python",
      period: "June 2024 - August 2024",
      description: "Built a platform to visualize detailed data from transaction screenshots.",
      highlights: [
        "Parse transaction data for expense and expenditure graphs",
        "Displaying detailed transactions with planned enhancements"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work in AI/ML, data analysis, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-2 text-gray-500 mb-3">
                <Calendar size={16} />
                <span className="text-sm">{project.period}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>

              <div className="bg-gray-100 rounded-lg px-3 py-1 mb-4 inline-block">
                <span className="text-sm font-medium text-gray-700">{project.tech}</span>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 flex-wrap">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium text-sm"
                  >
                    <ExternalLink size={16} />
                    View Demo
                  </a>
                )}
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium text-sm"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
