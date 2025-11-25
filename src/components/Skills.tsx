import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Git & GitHub",
    "Python",
    "SQL"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:border-blue-500 hover:shadow-md transition-all cursor-default text-gray-700 font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
