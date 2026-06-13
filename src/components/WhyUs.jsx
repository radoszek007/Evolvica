import React from 'react';
import { Laptop, Cpu, MessageSquare, ShieldCheck } from 'lucide-react';

export default function WhyUs() {
  const cards = [
    {
      icon: <Laptop size={24} />,
      title: 'Digitální efektivita',
      desc: 'MS 365, spolupráce, sdílení informací, organizace práce a bezpečné používání digitálních nástrojů.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'AI v praxi',
      desc: 'Praktické využití AI pro každodenní práci, tvorbu textů, analýzy, zápisy, rešerše a podporu rozhodování.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Komunikace a tlak',
      desc: 'Komunikace s klienty, týmem i vedením v náročných situacích, práce s odporem, konfliktem a eskalací.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Pracovní odolnost',
      desc: 'Stres management, resilience, wellbeing a prevence dlouhodobého přetížení zaměstnanců.'
    }
  ];

  return (
    <section id="proc-evolvica" className="section" style={{ backgroundColor: 'var(--color-neutral-white)' }}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">Proč Evolvica One</span>
          <h2 className="section-title">Kompetence, které firmy potřebují teď</h2>
          <p className="section-subtitle">
            Firmy dnes řeší rychlou digitalizaci, tlak na efektivitu, nástup AI, komunikační nároky a rostoucí zatížení zaměstnanců. Evolvica One propojuje technické dovednosti s lidskou připraveností. Zaměřujeme se na to, co lidé skutečně využijí ve své práci: v administrativě, výrobě, obchodu, službách, HR i managementu.
          </p>
        </div>

        <div className="grid-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`card-why animate-on-scroll delay-${idx + 1}`}
            >
              <div className="card-why-icon-box">
                {card.icon}
              </div>
              <h3 className="card-why-title">{card.title}</h3>
              <p className="card-why-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
