import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 pb-32 md:pt-32 md:pb-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center min-h-screen">
      <div className="space-y-6">
        <p className="text-blue-600 font-medium tracking-wide text-lg animate-fade-in">
          Hello, my name is
        </p>
        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-tight">
          Park Jaeyeon.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-500 tracking-tight">
          I build things for the web.
        </h2>
        <p className="max-w-2xl text-lg text-gray-600 leading-relaxed">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="pt-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Check out my work
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
