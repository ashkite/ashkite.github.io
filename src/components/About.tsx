import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 max-w-4xl mx-auto px-6 sm:px-10">
      <div className="flex items-center mb-10 animate-fade-in-up">
        <span className="text-green font-mono text-xl mr-2">01.</span>
        <h2 className="text-3xl font-bold text-lightest-slate whitespace-nowrap">소개</h2>
        <div className="h-[1px] w-full bg-lightest-navy ml-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-2 text-slate space-y-4 leading-relaxed font-sans text-lg animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <p>
            안녕하세요! 저는 박재연입니다. 웹이라는 공간에서 무언가를 창조하는 것을 즐깁니다.
            커스텀 테마를 편집하며 HTML과 CSS를 처음 접했을 때, 코딩의 매력에 빠지게 되었습니다.
          </p>
          <p>
            현재는 다양한 클라이언트를 위한 접근성 높고 포용적인 디지털 경험을 만드는 데 주력하고 있습니다.
            새로운 기술을 배우고 이를 실제 문제 해결에 적용하는 것에 열정을 가지고 있습니다.
          </p>
          <p>
            최근에 사용하고 있는 기술들은 다음과 같습니다:
          </p>
          <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
            {['JavaScript (ES6+)', 'TypeScript', 'React', 'Vue', 'Java', 'Spring Boot'].map((skill) => (
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