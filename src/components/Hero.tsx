import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start max-w-6xl mx-auto px-6 sm:px-10 pt-24">
      <div className="space-y-5">
        <p className="text-green font-mono text-base md:text-lg animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-lightest-slate tracking-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Park Jaeyeon.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate tracking-tight animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          I build things for the web.
        </h2>
        <p className="max-w-xl text-lg text-slate leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="pt-10 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <a
            href="#projects"
            className="inline-block px-8 py-4 border border-green text-green font-mono text-sm rounded hover:bg-green/10 transition-colors"
          >
            Check out my work!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;