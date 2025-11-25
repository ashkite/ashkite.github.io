import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-blue-600 font-mono mb-4">What's Next?</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <p className="text-gray-600 text-lg mb-12">
          Although I'm not currently looking for any new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a
          href="mailto:example@email.com"
          className="inline-flex items-center px-8 py-4 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors mb-16"
        >
          Say Hello
        </a>

        <footer className="flex flex-col items-center space-y-4 pt-10 border-t border-gray-100">
          <div className="flex space-x-6">
            <a href="https://github.com/Park-Jaeyeon" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
              <Linkedin size={20} />
            </a>
             <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Designed & Built by Park Jaeyeon
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
