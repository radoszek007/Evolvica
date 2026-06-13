import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Courses from './components/Courses';
import TargetAudience from './components/TargetAudience';
import HowWeWork from './components/HowWeWork';
import Trust from './components/Trust';
import Funding from './components/Funding';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Intersection Observer for active section in Header navigation
    const sectionIds = ['hero', 'proc-evolvica', 'okruhy', 'pro-koho', 'jak-pracujeme', 'duveryhodnost', 'kontakt'];
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // check when section is in the middle of screen
        threshold: 0
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    // Clean up observers
    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) sectionObserver.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <WhyUs />
        <Courses />
        <TargetAudience />
        <HowWeWork />
        <Trust />
        <Funding />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
