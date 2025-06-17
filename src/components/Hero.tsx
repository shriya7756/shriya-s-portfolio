
import React from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm Shriya Pachunuri
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 mb-6">
              Curious and Creative Problem solver
            </div>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              I enjoy making tech useful, not just impressive.
              I’m especially drawn to projects that turn data into something real, relevant and transform 
              ideas into meaningful impact.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>Available for opportunities</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href="mailto:shriyapachunuri1105@gmail.com"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/shriya-pachunuri/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
