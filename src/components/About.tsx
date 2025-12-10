import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full" aria-labelledby="about-heading">
      <div className="flex items-center gap-4 mb-10 animate-fade-in-up">
        <span className="text-green font-mono text-xl">01.</span>
        <h2 id="about-heading" className="text-3xl font-bold text-lightest-slate whitespace-nowrap">
          소개
        </h2>
        <div className="h-[1px] w-full bg-lightest-navy" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-2 space-y-5 text-lg leading-relaxed animate-fade-in-up">
          <p>
            사용자에게 닿는 경험을 설계하는 것을 좋아합니다. 문제 정의부터 화면 설계,
            구현, 배포까지 전 과정을 함께 하며 팀의 목표를 제품으로 풀어내는 일을 하고 있습니다.
          </p>
          <p>
            특히 접근성과 유지보수를 고려한 아키텍처를 고민하고, 디자이너와 기획자와의 긴밀한 협업을 통해
            "사용하기 쉬운" 인터페이스를 만드는 데 집중합니다.
          </p>
          <div className="grid grid-cols-2 gap-3 font-mono text-sm">
            {["JavaScript (ES6+)", "TypeScript", "React", "Vue", "Java", "Spring Boot"].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 rounded-lg bg-light-navy/60 border border-lightest-navy/50 px-3 py-2"
              >
                <span className="text-green">▹</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 flex justify-center lg:justify-end animate-fade-in-up">
          <div className="relative w-64 aspect-square">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green/40 via-green/10 to-transparent blur-2xl" />
            <div className="relative h-full rounded-3xl border border-lightest-navy/50 bg-light-navy shadow-xl overflow-hidden">
              <div className="absolute inset-3 rounded-2xl border border-green/50" />
              <div className="absolute inset-6 rounded-2xl bg-navy/70 backdrop-blur flex items-center justify-center">
                <span className="text-4xl text-green font-mono">JA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
