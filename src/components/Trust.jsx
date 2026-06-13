import React from 'react';
import { GraduationCap, Wrench, Building, ClipboardCheck } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function Trust() {
  const points = [
    {
      icon: <GraduationCap className="trust-bullet-icon" />,
      title: 'Odborní lektoři',
      desc: 'Spolupracujeme s lektory se zkušeností z praxe, technických oblastí, firemního vzdělávání a práce s lidmi.'
    },
    {
      icon: <Wrench className="trust-bullet-icon" />,
      title: 'Praktické zaměření',
      desc: 'Účastníci pracují s konkrétními situacemi, nástroji a postupy, které mohou využít ve své práci.'
    },
    {
      icon: <Building className="trust-bullet-icon" />,
      title: 'Firemní kontext',
      desc: 'Obsah přizpůsobujeme cílové skupině, provozu a skutečným potřebám organizace.'
    },
    {
      icon: <ClipboardCheck className="trust-bullet-icon" />,
      title: 'Dokumentace a výstupy',
      desc: 'Programy připravujeme tak, aby měly jasnou strukturu, doložitelné výstupy a profesionální administrativní oporu.'
    }
  ];

  return (
    <section id="duveryhodnost" className="section section-dark">
      {/* Background decoration grid */}
      <svg className="bg-pattern" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">
        <defs>
          <pattern id="dot-grid" width="15" height="15" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.75" fill="#334155" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#dot-grid)" />
      </svg>

      <div className="container trust-grid">
        <AnimateOnScroll className="trust-content">
          <span className="section-tag">Záruka kvality</span>
          <h2 className="section-title">Odbornost, praxe a srozumitelná realizace</h2>
          <p className="section-subtitle" style={{ color: 'var(--color-text-muted-light)' }}>
            Evolvica One staví na kombinaci technické odbornosti, zkušenosti s firemním vzděláváním a praktického přístupu k rozvoji lidí. Naše programy propojují digitální nástroje, komunikaci a pracovní odolnost tak, aby vzdělávání nebylo odtržené od reality firmy.
          </p>
        </AnimateOnScroll>

        <div className="trust-bullets">
          {points.map((point, idx) => (
            <AnimateOnScroll
              key={idx}
              className="trust-bullet-card"
              delay={((idx % 2) + 1) * 0.15}
            >
              {point.icon}
              <h3 className="trust-bullet-title">{point.title}</h3>
              <p className="trust-bullet-desc">{point.desc}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
