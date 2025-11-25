import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-navy min-h-screen text-slate selection:bg-green selection:text-navy">
      <Header />
      <main className="flex flex-col items-center w-full px-4 md:px-24 xl:px-32">
        <div className="w-full max-w-[1600px]">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
