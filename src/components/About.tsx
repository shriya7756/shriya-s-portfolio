
import React from 'react';
import { Code, Brain, Target } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
      
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I like to build solutions that actually help. For me, a good project starts with clear 
              inspiration and ends with something solid, thoughtful, and functional.

              I care about building what matters. I’m passionate about solving meaningful problems, 
              and I believe the best work comes from a mix of creativity, focus, and a bit of 
              stubbornness to get things right.
            </p>
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-lg">
                  <Brain className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI/ML Expertise</h3>
                  <p className="text-gray-600">Specialized in machine learning, object detection, and generative AI solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-lg">
                  <Code className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
                  <p className="text-gray-600">Proficient in Python, Java, React, and modern web technologies</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-lg">
                  <Target className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Problem Solving</h3>
                  <p className="text-gray-600">Transforming complex challenges into innovative, practical solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900">B.Tech in Computer Science</h4>
              <p className="text-gray-900 font-medium">Bharathi Institute of Technology Autonomous</p>
              <p className="text-gray-600">2023-2027 • CGPA: 9.01</p>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-6">Certifications</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900">Programming in Java | NPTEL</p>
                <p className="text-sm text-gray-600">July 2024 - October 2024</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Oracle Cloud Infrastructure 2025 AI Foundations Associate</p>
                <p className="text-sm text-gray-600">April 2025</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">VJ Hackathon 2024</p>
                <p className="text-sm text-gray-600">December 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
