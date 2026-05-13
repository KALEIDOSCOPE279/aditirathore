import React from 'react';
import NavBar from './components/NavBar';
import ParallaxBackground from './components/ParallaxBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <NavBar />
      <ParallaxBackground />

      {/* Main Content Overlay */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
