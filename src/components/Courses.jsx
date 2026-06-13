import React, { useState } from 'react';
import { Cpu, Layers, Users, Brain, Shield, Zap, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Courses() {
  const [expandedIndices, setExpandedIndices] = useState([0]); // First item open by default

  const toggleExpand = (index) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  const courseList = [
    {
      icon: <Cpu size={24} />,
      title: 'AI v pracovní praxi',
      description: 'Praktické využití AI nástrojů pro administrativu, obchod, HR, management i běžnou kancelářskou práci. Účastníci se učí používat AI bezpečně, smysluplně a s ohledem na firemní data.',
      topics: [
        'Základy práce s AI nástroji',
        'Promptování',
        'Tvorba textů, zápisů a rešerší',
        'Analýza informací',
        'Limity a rizika AI',
        'Bezpečné zacházení s daty'
      ]
    },
    {
      icon: <Layers size={24} />,
      title: 'Microsoft 365 a digitální kompetence',
      description: 'Školení zaměřené na efektivní používání nástrojů Microsoft 365 v každodenní práci. Cílem je zlepšit spolupráci, sdílení informací a organizaci práce napříč týmy.',
      topics: [
        'Teams',
        'Outlook',
        'OneDrive',
        'SharePoint',
        'Excel',
        'PowerPoint',
        'Digitální spolupráce',
        'Bezpečné sdílení dokumentů'
      ]
    },
    {
      icon: <Users size={24} />,
      title: 'Komunikace v pracovních situacích',
      description: 'Rozvoj komunikačních dovedností pro jednání s klienty, kolegy, týmem a vedením. Důraz je na praktické situace, hranice, strukturu rozhovoru a zvládání napětí.',
      topics: [
        'Komunikace se zákazníkem',
        'Komunikace v týmu',
        'Práce s konfliktem',
        'Deeskalace',
        'Zpětná vazba',
        'Komunikace změn',
        'Práce s odporem'
      ]
    },
    {
      icon: <Brain size={24} />,
      title: 'Stres management a pracovní zátěž',
      description: 'Vzdělávání zaměřené na zvládání tlaku, udržení pozornosti a schopnost dělat kvalitní rozhodnutí v náročných pracovních situacích.',
      topics: [
        'Práce se stresem',
        'Prevence chyb pod tlakem',
        'Stabilizace pozornosti',
        'Rozhodování v zátěži',
        'Práce s kapacitou',
        'Regenerace po náročném období'
      ]
    },
    {
      icon: <Shield size={24} />,
      title: 'Resilience a pracovní odolnost',
      description: 'Programy zaměřené na schopnost lidí zvládat změnu, tlak, nejistotu a náročnou komunikaci bez ztráty funkčnosti.',
      topics: [
        'Adaptace na změnu',
        'Osobní a týmová odolnost',
        'Práce s nejistotou',
        'Praktické protokoly pro zátěžové situace',
        'Schopnost jednat pod tlakem'
      ]
    },
    {
      icon: <Zap size={24} />,
      title: 'Prevence přetížení a vyhoření',
      description: 'Vzdělávání pro zaměstnance, manažery a HR zaměřené na rozpoznání rizik dlouhodobého přetížení, práci s kapacitou a nastavení zdravějších pracovních návyků.',
      topics: [
        'Signály přetížení',
        'Práce s pracovní kapacitou',
        'Role manažera',
        'Prevence vyhoření',
        'Psychohygiena',
        'Dlouhodobě udržitelný výkon'
      ]
    }
  ];

  return (
    <section id="okruhy" className="section section-dark">
      {/* Subtle vector grid in the dark background */}
      <svg className="bg-pattern" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">
        <defs>
          <pattern id="grid-dark" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#334155" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid-dark)" />
      </svg>

      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-tag">Vzdělávací programy</span>
          <h2 className="section-title">Vzdělávací okruhy pro vaši firmu</h2>
          <p className="section-subtitle">
            Nenabízíme jeden univerzální kurz pro všechny. S firmou nejprve pojmenujeme potřebu, cílové skupiny a pracovní kontext. Teprve potom sestavíme vzdělávací plán z vhodných okruhů.
          </p>
        </div>

        <div className="courses-container">
          {courseList.map((course, idx) => {
            const isExpanded = expandedIndices.includes(idx);
            return (
              <div
                key={idx}
                className={`course-item animate-on-scroll ${isExpanded ? 'expanded' : ''}`}
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div
                  className="course-header"
                  onClick={() => toggleExpand(idx)}
                >
                  <div className="course-header-left">
                    <div className="course-icon-container">
                      {course.icon}
                    </div>
                    <div className="course-header-text">
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                    </div>
                  </div>
                  <ChevronDown className="course-chevron" size={20} />
                </div>

                <div className="course-body">
                  <div className="course-body-title">
                    <span>Témata okruhu</span>
                  </div>
                  <div className="course-topics-grid">
                    {course.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="course-topic-card">
                        <CheckCircle2 className="course-topic-icon" />
                        <span className="course-topic-name">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
