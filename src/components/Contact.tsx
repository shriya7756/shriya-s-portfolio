
import React from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you're looking for a passionate data scientist, have an exciting project in mind, 
              or want to collaborate on AI/ML initiatives, I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-900 p-3 rounded-lg">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:shriyapachunuri1105@gmail.com" className="text-gray-600 hover:text-gray-900">
                    shriyapachunuri1105@gamil.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gray-900 p-3 rounded-lg">
                  <Linkedin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/shriya-pachunuri/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    Connect with me
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gray-900 p-3 rounded-lg">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            © 2025 Shriya Pachunuri. Built with passion for technology and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};
