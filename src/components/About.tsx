import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 relative inline-block">
          About Me
          <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-50 origin-left"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Hello! My name is Park Jaeyeon and I enjoy creating things that live on the internet. 
              My interest in web development started when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was pretty fun!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. 
              My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              I am passionate about learning new technologies and applying them to solve real-world problems.
            </p>
          </div>
          <div className="relative group">
             {/* Placeholder for profile image */}
            <div className="w-full aspect-square bg-gray-200 rounded-lg shadow-xl relative z-10 flex items-center justify-center overflow-hidden">
                <span className="text-gray-400">Profile Image</span>
            </div>
            <div className="absolute top-4 left-4 w-full h-full border-2 border-blue-600 rounded-lg z-0 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
