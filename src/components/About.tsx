import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 max-w-4xl mx-auto px-6 sm:px-10">
      <div className="flex items-center mb-10 animate-fade-in-up">
        <span className="text-green font-mono text-xl mr-2">01.</span>
        <h2 className="text-3xl font-bold text-lightest-slate whitespace-nowrap">About Me</h2>
        <div className="h-[1px] w-full bg-lightest-navy ml-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-2 text-slate space-y-4 leading-relaxed font-sans text-lg animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <p>
            Hello! My name is Park Jaeyeon and I enjoy creating things that live on the internet. 
            My interest in web development started back when I decided to try editing custom themes — turns out hacking together HTML & CSS was pretty fun!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. 
            My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
            {['JavaScript (ES6+)', 'TypeScript', 'React', 'Vue', 'Node.js', 'WordPress'].map((skill) => (
              <li key={skill} className="flex items-center before:content-['▹'] before:text-green before:mr-2">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="col-span-1 mx-auto md:mx-0 w-64 md:w-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="relative group w-full aspect-square">
            <div className="absolute inset-0 bg-green/20 rounded group-hover:bg-transparent transition-colors z-20"></div>
            <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform z-0"></div>
            {/* Placeholder Image */}
            <div className="relative w-full h-full bg-light-navy rounded flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all z-10">
               <span className="text-4xl text-green font-mono">IMG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;