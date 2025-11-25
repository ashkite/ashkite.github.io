import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const featuredProjects = [
    {
      title: 'Featured Project 1',
      description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
      github: '#',
      external: '#'
    },
    {
      title: 'Featured Project 2',
      description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information of each track.',
      tech: ['React', 'Styled Components', 'Spotify API'],
      github: '#',
      external: '#'
    }
  ];

  const otherProjects = [
     {
      title: 'Project One',
      description: 'Building a custom multisite compatible WordPress plugin to build global search with Algolia.',
      tech: ['Algolia', 'WordPress', 'PHP'],
      github: '#',
      external: '#'
    },
     {
      title: 'Project Two',
      description: 'A comprehensive guide to the best coding bootcamps with a focus on web development.',
      tech: ['React', 'Contentful'],
      github: '#',
      external: '#'
    },
     {
      title: 'Project Three',
      description: 'Designed and developed the website for a student-led design studio.',
      tech: ['Gatsby', 'Netlify'],
      github: '#',
      external: '#'
    },
  ];

  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6 sm:px-10">
      <div className="flex items-center mb-12 animate-fade-in-up">
        <span className="text-green font-mono text-xl mr-2">03.</span>
        <h2 className="text-3xl font-bold text-lightest-slate whitespace-nowrap">주요 프로젝트</h2>
        <div className="h-[1px] w-full bg-lightest-navy ml-6"></div>
      </div>

      {/* Featured Projects - Alternating Layout */}
      <div className="space-y-24 mb-24">
        {featuredProjects.map((project, index) => (
          <div key={index} className={`relative grid grid-cols-12 gap-4 items-center ${index % 2 !== 0 ? 'text-left' : 'text-right'}`}>
            {/* Project Image */}
            <div className={`col-span-12 md:col-span-7 relative h-80 md:h-full ${index % 2 !== 0 ? 'md:col-start-6' : 'md:col-start-1'}`}>
               <div className="w-full h-full bg-green/20 rounded overflow-hidden relative group cursor-pointer border border-lightest-navy">
                   <div className="absolute inset-0 bg-navy/30 group-hover:bg-transparent transition-colors"></div>
                   <div className="w-full h-full flex items-center justify-center text-green/50 text-6xl font-mono bg-light-navy">IMG</div>
               </div>
            </div>

            {/* Project Content */}
            <div className={`col-span-12 md:col-span-7 z-10 pointer-events-none md:pointer-events-auto ${index % 2 !== 0 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-6 md:row-start-1 text-right'}`}>
              <p className="font-mono text-green text-sm mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-lightest-slate mb-6 hover:text-green cursor-pointer transition-colors inline-block">
                <a href={project.external}>{project.title}</a>
              </h3>
              <div className="bg-light-navy text-slate p-6 rounded shadow-xl text-sm leading-relaxed mb-6 z-20 relative">
                {project.description}
              </div>
              <ul className={`flex flex-wrap gap-4 text-slate font-mono text-xs mb-8 ${index % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                {project.tech.map(t => <li key={t}>{t}</li>)}
              </ul>
              <div className={`flex items-center gap-4 ${index % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                <a href={project.github} className="text-slate hover:text-green transition-colors"><Github size={20} /></a>
                <a href={project.external} className="text-slate hover:text-green transition-colors"><ExternalLink size={20} /></a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects - Grid */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-lightest-slate mb-2">기타 프로젝트</h3>
        <a href="#" className="font-mono text-green text-sm hover:underline">아카이브 보기</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherProjects.map((project, index) => (
            <div key={index} className="bg-light-navy p-8 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full group">
                <div className="flex justify-between items-center mb-8">
                    <Folder size={40} className="text-green" />
                    <div className="flex space-x-4">
                         <a href={project.github} className="text-slate hover:text-green transition-colors"><Github size={20} /></a>
                         <a href={project.external} className="text-slate hover:text-green transition-colors"><ExternalLink size={20} /></a>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-lightest-slate mb-2 group-hover:text-green transition-colors">{project.title}</h3>
                <p className="text-slate text-sm flex-grow mb-6">{project.description}</p>
                <ul className="flex flex-wrap gap-2 text-slate font-mono text-xs mt-auto">
                    {project.tech.map(t => <li key={t}>{t}</li>)}
                </ul>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;