import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: '소개', href: '#about', number: '01.' },
  { name: '기술', href: '#skills', number: '02.' },
  { name: '프로젝트', href: '#projects', number: '03.' },
  { name: '문의', href: '#contact', number: '04.' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/80 backdrop-blur-lg shadow-lg border-b border-lightest-navy/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center text-green font-mono text-lg font-semibold border border-green px-3 py-2 rounded hover:bg-green/10 transition-colors"
        >
          PJY
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <ol className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 80}ms` }}>
                <a
                  href={item.href}
                  className="group text-sm font-mono text-lightest-slate hover:text-green transition-colors"
                >
                  <span className="text-green mr-2">{item.number}</span>
                  <span className="group-hover:text-green">{item.name}</span>
                </a>
              </li>
            ))}
          </ol>
          <a
            href="mailto:jaeyoun310@gmail.com"
            className="px-4 py-2 border border-green text-green font-mono text-sm rounded hover:bg-green/10 transition-colors animate-fade-in-up"
            style={{ animationDelay: '320ms' }}
          >
            메일 보내기
          </a>
          <a
            href="/portfolio.pdf"
            target="_blank"
            className="px-4 py-2 bg-green text-navy font-mono text-sm rounded shadow hover:shadow-lg transition-all animate-fade-in-up"
            style={{ animationDelay: '380ms' }}
            rel="noreferrer"
          >
            포트폴리오
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green hover:text-green/80 focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed inset-y-0 right-0 w-3/4 max-w-sm bg-light-navy shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-40 flex flex-col pt-24 pb-12 px-8 space-y-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group flex flex-col items-center text-lg font-mono text-lightest-slate hover:text-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-green mb-1">{item.number}</span>
              <span>{item.name}</span>
            </a>
          ))}
          <a
            href="mailto:jaeyoun310@gmail.com"
            className="px-6 py-3 border border-green text-green font-mono text-base rounded hover:bg-green/10 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            메일 보내기
          </a>
          <a
            href="/portfolio.pdf"
            target="_blank"
            className="px-6 py-3 bg-green text-navy font-mono text-base rounded shadow hover:shadow-lg transition-all"
            onClick={() => setIsOpen(false)}
            rel="noreferrer"
          >
            포트폴리오
          </a>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-navy/70 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
