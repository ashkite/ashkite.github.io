import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Language',
      description: '탄탄한 타입과 클린 코드를 지향합니다.',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Java'],
    },
    {
      title: 'Frontend',
      description: '재사용 가능한 UI와 접근성을 고려한 마크업에 집중합니다.',
      skills: ['React', 'Vue.js', 'Tailwind CSS', 'Redux'],
    },
    {
      title: 'Backend',
      description: '협업을 위한 API 규격과 효율적인 데이터 흐름을 설계합니다.',
      skills: ['Spring Boot', 'Django'],
    },
    {
      title: 'Database',
      description: '데이터 모델링과 쿼리 성능을 고려합니다.',
      skills: ['MySQL', 'MongoDB', 'Redis'],
    },
    {
      title: 'Tools & DevOps',
      description: '자동화와 협업 도구로 개발 문화를 개선합니다.',
      skills: ['Git', 'Docker', 'Figma', 'Jira'],
    },
  ];

  return (
    <section id="skills" className="w-full" aria-labelledby="skills-heading">
      <div className="flex items-center mb-10 animate-fade-in-up">
        <span className="text-green font-mono text-xl mr-2">02.</span>
        <h2 id="skills-heading" className="text-3xl font-bold text-lightest-slate whitespace-nowrap">
          보유 기술
        </h2>
        <div className="h-[1px] w-full bg-lightest-navy ml-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="bg-light-navy/70 border border-lightest-navy/50 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <h3 className="text-green font-mono font-bold text-lg mb-2">{category.title}</h3>
            <p className="text-slate text-sm mb-4 leading-relaxed">{category.description}</p>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center text-lightest-slate text-sm">
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
