import React, { useState } from 'react';
import { Laptop, Cpu, MessageSquare, ShieldCheck, ChevronDown } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function WhyUs() {
  const [expandedIndices, setExpandedIndices] = useState([0]); // First item open by default to signal interactivity

  const toggleExpand = (index) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  const cards = [
    {
      icon: <Laptop size={22} />,
      title: 'Digitální efektivita',
      desc: 'MS 365, spolupráce, sdílení informací, organizace práce a bezpečné používání digitálních nástrojů.'
    },
    {
      icon: <Cpu size={22} />,
      title: 'AI v praxi',
      desc: 'Praktické využití AI pro každodenní práci, tvorbu textů, analýzy, zápisy, rešerše a podporu rozhodování.'
    },
    {
      icon: <MessageSquare size={22} />,
      title: 'Komunikace a tlak',
      desc: 'Komunikace s klienty, týmem i vedením v náročných situacích, práce s odporem, konfliktem a eskalací.'
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Pracovní odolnost',
      desc: 'Stres management, resilience, wellbeing a prevence dlouhodobého přetížení zaměstnanců.'
    }
  ];

  return (
    <section id="proc-evolvica" className="section" style={{ backgroundColor: 'var(--color-neutral-white)' }}>
      <div className="container">
        <AnimateOnScroll className="section-header">
          <span className="section-tag">Proč Evolvica One</span>
          <h2 className="section-title">Kompetence, které firmy potřebují teď</h2>
          <p className="section-subtitle">
            Firmy dnes řeší rychlou digitalizaci, tlak na efektivitu, nástup AI, komunikační nároky a rostoucí zatížení zaměstnanců. Evolvica One propojuje technické dovednosti s lidskou připraveností. Zaměřujeme se na to, co lidé skutečně využijí ve své práci: v administrativě, výrobě, obchodu, službách, HR i managementu.
          </p>
        </AnimateOnScroll>

        <div className="grid-4">
          {cards.map((card, idx) => {
            const isExpanded = expandedIndices.includes(idx);
            return (
              <AnimateOnScroll
                key={idx}
                className={`card-why ${isExpanded ? 'expanded' : ''}`}
                delay={(idx + 1) * 0.1}
              >
                <div className="card-why-header" onClick={() => toggleExpand(idx)}>
                  <div className="card-why-header-left">
                    <div className="card-why-icon-box">
                      {card.icon}
                    </div>
                    <h3 className="card-why-title">{card.title}</h3>
                  </div>
                  <ChevronDown className="card-why-chevron" size={18} />
                </div>
                <div className="card-why-body">
                  <p className="card-why-desc">{card.desc}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
