import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

export default function HowWeWork() {
  const steps = [
    {
      title: 'Analýza potřeb',
      desc: 'Společně pojmenujeme cílové skupiny, pracovní situace a dovednosti, které má školení rozvíjet.'
    },
    {
      title: 'Návrh vzdělávacího rámce',
      desc: 'Sestavíme vhodnou kombinaci vzdělávacích okruhů, rozsah a doporučenou strukturu.'
    },
    {
      title: 'Příprava obsahu',
      desc: 'Program přizpůsobíme konkrétní firmě, rolím účastníků a pracovním situacím.'
    },
    {
      title: 'Realizace školení',
      desc: 'Školení vedou odborní lektoři s důrazem na praktické použití, srozumitelnost a zapojení účastníků.'
    },
    {
      title: 'Výstupy a dokumentace',
      desc: 'Dodáme podklady k absolvování, zpětnou vazbu a přehled výstupů pro další rozvoj firmy.'
    }
  ];

  return (
    <section id="jak-pracujeme" className="section" style={{ backgroundColor: 'var(--color-neutral-white)' }}>
      <div className="container">
        <AnimateOnScroll className="section-header">
          <span className="section-tag">Metodika a spolupráce</span>
          <h2 className="section-title">Od potřeby firmy k funkčnímu vzdělávacímu plánu</h2>
          <p className="section-subtitle">
            Naše spolupráce má jasnou strukturu. Postupujeme systematicky tak, aby výsledné vzdělávání odpovídalo reálné praxi ve vaší organizaci.
          </p>
        </AnimateOnScroll>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          {steps.map((step, idx) => (
            <AnimateOnScroll key={idx} className="timeline-item" delay={idx * 0.05}>
              <div className="timeline-number">{idx + 1}</div>
              <div className="timeline-content">
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-desc">{step.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
