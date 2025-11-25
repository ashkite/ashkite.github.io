import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A web application built with React and TypeScript that allows users to track their daily tasks and productivity.',
      tech: ['React', 'TypeScript', 'Tailwind'],
      github: '#',
      external: '#'
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform featuring a shopping cart, user authentication, and payment processing integration.',
      tech: ['Next.js', 'Stripe', 'Firebase'],
      github: '#',
      external: '#'
    },
    {
      title: 'Project Three',
      description: 'A real-time weather dashboard that provides forecasts and historical weather data using a third-party API.',
      tech: ['Vue.js', 'Chart.js', 'WeatherAPI'],
      github: '#',
      external: '#'
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div className="folder-icon text-blue-600">
                   {/* You can add a folder icon here if you want */}
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="text-gray-500 hover:text-gray-900 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.external} className="text-gray-500 hover:text-blue-600 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-gray-500">
                    {t}
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

export default Projects;
