import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "AI Developer Intern - Summer of AI ",
      company: "Viswam.AI, Swecha Telangana",
      period: "June 2025",
      description: "Viswam.AI, Swecha Telangana"}
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-900 mb-2">
                    <Briefcase size={18} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
