import React from 'react';
import { Factory, Files, Handshake, UserCheck, Landmark, Building } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function TargetAudience() {
  const targets = [
    {
      icon: <Factory size={22} />,
      title: 'Výrobní firmy',
      desc: 'Programy pro mistry, teamleadery, dispečery a provozní pracovníky, kteří potřebují zvládat komunikaci, digitální nástroje a tlak v každodenním provozu.'
    },
    {
      icon: <Files size={22} />,
      title: 'Administrativní týmy',
      desc: 'Praktické využití MS 365, AI a digitálních nástrojů pro rychlejší, přesnější a bezpečnější práci s informacemi.'
    },
    {
      icon: <Handshake size={22} />,
      title: 'Obchodní a servisní týmy',
      desc: 'Komunikace s klientem, práce s námitkami, zvládání napětí a používání digitálních nástrojů v obchodním procesu.'
    },
    {
      icon: <UserCheck size={22} />,
      title: 'HR a management',
      desc: 'Podpora manažerů při vedení lidí, komunikaci změn, prevenci přetížení a rozvoji pracovních kompetencí.'
    },
    {
      icon: <Landmark size={22} />,
      title: 'Veřejný sektor a organizace',
      desc: 'Vzdělávání pro pracovníky, kteří kombinují administrativní zátěž, komunikaci s veřejností a potřebu bezpečné práce s digitálními nástroji.'
    },
    {
      icon: <Building size={22} />,
      title: 'Malé, střední i nadnárodní firmy',
      desc: 'Vzdělávací programy škálujeme na míru velikosti a struktuře organizace. Od praktických školení klíčových dovedností pro menší týmy až po komplexní rozvojové projekty přizpůsobené procesům a standardům nadnárodních korporací.'
    }
  ];

  return (
    <section id="pro-koho" className="section" style={{ backgroundColor: 'var(--color-neutral-bg)' }}>
      <div className="container">
        <AnimateOnScroll className="section-header">
          <span className="section-tag">Cílové skupiny</span>
          <h2 className="section-title">Pro firmy, které chtějí rozvíjet lidi prakticky a měřitelně</h2>
          <p className="section-subtitle">
            Naše programy přizpůsobujeme na míru specifickým potřebám a podmínkám různých typů týmů a provozů.
          </p>
        </AnimateOnScroll>

        <div className="grid-3">
          {targets.map((target, idx) => (
            <AnimateOnScroll
              key={idx}
              className="card-audience"
              delay={((idx % 3) + 1) * 0.1}
            >
              <div className="audience-header">
                <div className="audience-icon-box">
                  {target.icon}
                </div>
                <h3 className="audience-title">{target.title}</h3>
              </div>
              <p className="audience-desc">{target.desc}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
