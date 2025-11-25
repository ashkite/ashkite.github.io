import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Language',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML5/CSS3']
    },
    {
      title: 'Frontend',
      skills: ['React', 'Vue.js', 'Tailwind CSS', 'Redux', 'Zustand']
    },
    {
      title: 'Backend',
      skills: ['Spring Boot', 'Django']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'Figma', 'Jira']
    }
  ];

  return (
    <section id="skills" className="py-24 max-w-4xl mx-auto px-6 sm:px-10">
      <div className="flex items-center mb-10 animate-fade-in-up">
        <span className="text-green font-mono text-xl mr-2">02.</span>
        <h2 className="text-3xl font-bold text-lightest-slate whitespace-nowrap">보유 기술</h2>
        <div className="h-[1px] w-full bg-lightest-navy ml-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title} 
            className="bg-light-navy p-6 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-green font-mono font-bold text-lg mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center text-slate text-sm">
                  <span className="text-green mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;