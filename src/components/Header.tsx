import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', number: '01.' },
    { name: 'Skills', href: '#skills', number: '02.' },
    { name: 'Projects', href: '#projects', number: '03.' },
    { name: 'Contact', href: '#contact', number: '04.' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg border-b border-lightest-navy h-20' : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-full flex justify-between items-center">
        <div className="flex-shrink-0 text-green font-mono text-xl font-semibold border border-green p-2 rounded hover:bg-green/10 transition-colors cursor-pointer">
          PJY
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ol className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <a
                  href={item.href}
                  className="group text-sm font-mono text-lightest-slate hover:text-green transition-colors"
                >
                  <span className="text-green mr-1">{item.number}</span>
                  <span className="group-hover:text-green">{item.name}</span>
                </a>
              </li>
            ))}
          </ol>
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="px-5 py-2.5 border border-green text-green font-mono text-sm rounded hover:bg-green/10 transition-colors animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green hover:text-green/80 focus:outline-none"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-y-0 right-0 w-3/4 bg-light-navy shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-40 flex flex-col justify-center items-center ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-8 text-center">
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
            href="/resume.pdf" 
            className="px-8 py-4 border border-green text-green font-mono text-lg rounded hover:bg-green/10 transition-colors mt-4"
          >
            Resume
          </a>
        </nav>
      </div>
      
      {/* Overlay */}
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