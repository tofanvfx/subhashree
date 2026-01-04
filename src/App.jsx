import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Work from './sections/Work';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans antialiased overflow-x-hidden selection:bg-secondary/30">
      <ScrollManager />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
