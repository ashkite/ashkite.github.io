import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-28"
    >
      <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
        <p className="text-green font-mono text-base md:text-lg">안녕하세요, 제 이름은</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-lightest-slate leading-tight">
          박재연입니다.
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-light-slate leading-tight">
          더 나은 웹 경험을 만드는 소프트웨어 엔지니어입니다.
        </h2>
        <p className="max-w-2xl text-lg text-slate leading-relaxed">
          사람을 위한 기술을 고민하며, 명확한 문제 정의와 디테일한 UI를 통해 가치를 만듭니다.
          기획 단계부터 런칭까지 전 과정을 협업하며 사용자 경험을 설계하는 데에 집중합니다.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green text-navy font-mono text-sm rounded shadow hover:shadow-lg transition-all"
          >
            프로젝트 보기
          </a>
          <a
            href="mailto:jaeyoun310@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-green text-green font-mono text-sm rounded hover:bg-green/10 transition-colors"
          >
            메일 보내기
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-sm">
          {["웹 프론트엔드", "백엔드 협업", "UI/UX", "문제 해결"].map((pill) => (
            <div
              key={pill}
              className="border border-lightest-navy/60 rounded-xl px-4 py-3 text-center text-lightest-slate bg-light-navy/60 backdrop-blur"
            >
              {pill}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <div className="relative w-64 h-64 md:w-72 md:h-72">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green/30 via-green/10 to-transparent blur-3xl" />
          <div className="relative w-full h-full rounded-3xl bg-light-navy border border-lightest-navy/40 shadow-xl p-6 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="font-mono text-sm text-green">Software Engineer</p>
              <h3 className="text-2xl font-bold text-lightest-slate">Park Jaeyeon</h3>
              <p className="text-slate text-sm leading-relaxed">
                사용자 경험과 접근성을 중심에 둔 제품을 만들고 있으며,
                팀과 함께 성장하는 과정을 즐깁니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-navy/60 border border-lightest-navy/40 p-3">
                <p className="text-light-slate">주요 스택</p>
                <p className="text-lightest-slate font-semibold">React · TypeScript</p>
              </div>
              <div className="rounded-lg bg-navy/60 border border-lightest-navy/40 p-3">
                <p className="text-light-slate">관심사</p>
                <p className="text-lightest-slate font-semibold">서비스 설계 · UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
