import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const visualRef = useRef(null);

  useEffect(() => {
    // Basic mouse move effect for the SVG graphic to make it feel "alive" and interactive
    const handleMouseMove = (e) => {
      if (!visualRef.current) return;
      const rect = visualRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const elements = visualRef.current.querySelectorAll('.interactive-node');
      elements.forEach((el, index) => {
        const factor = (index + 1) * 0.04;
        el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    const container = visualRef.current;
    if (container) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Subtle background SVG grid lines */}
      <svg className="bg-pattern" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-tagline">
            <span>Evolvica One • Firemní vzdělávání</span>
          </div>
          <h1 className="hero-title">
            Firemní vzdělávání pro lidi, kteří pracují v době změn
          </h1>
          <p className="hero-subtitle">
            Evolvica One pomáhá firmám rozvíjet digitální kompetence, praktické využití AI, pracovní komunikaci a odolnost lidí v náročných situacích.
          </p>
          <p className="hero-description">
            Vzdělávání nestavíme jako univerzální katalog kurzů. Program skládáme podle konkrétních potřeb firmy, pracovních rolí a prostředí, ve kterém lidé skutečně fungují.
          </p>
          <div className="hero-actions">
            <button onClick={() => scrollToSection('kontakt')} className="btn btn-primary">
              Domluvit konzultaci
              <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollToSection('okruhy')} className="btn btn-secondary">
              Zobrazit vzdělávací okruhy
            </button>
          </div>
        </div>

        <div className="hero-visual" ref={visualRef}>
          <div className="hero-svg-background"></div>
          <div className="hero-svg-wrapper">
            <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0D9488" />
                  <stop offset="100%" stopColor="#2DD4BF" />
                </linearGradient>
                <linearGradient id="navyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E3E62" />
                  <stop offset="100%" stopColor="#0B192C" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background geometric structures */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5, 5" />
              <circle cx="200" cy="200" r="90" fill="none" stroke="#CBD5E1" strokeWidth="1" />
              <circle cx="200" cy="200" r="40" fill="none" stroke="#94A3B8" strokeWidth="1.5" />

              {/* Network connecting lines */}
              <line x1="200" y1="200" x2="80" y2="120" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3, 3" />
              <line x1="200" y1="200" x2="320" y2="120" stroke="#0D9488" strokeWidth="1.5" />
              <line x1="200" y1="200" x2="290" y2="290" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="200" y1="200" x2="90" y2="280" stroke="#0D9488" strokeWidth="2" />
              <line x1="80" y1="120" x2="320" y2="120" stroke="#E2E8F0" strokeWidth="1" />
              <line x1="320" y1="120" x2="290" y2="290" stroke="#E2E8F0" strokeWidth="1" />
              <line x1="290" y1="290" x2="90" y2="280" stroke="#E2E8F0" strokeWidth="1" />
              <line x1="90" y1="280" x2="80" y2="120" stroke="#E2E8F0" strokeWidth="1" />

              {/* Interactive skill nodes */}
              {/* Center Core */}
              <g className="interactive-node" style={{ transition: 'transform 0.1s ease-out' }}>
                <circle cx="200" cy="200" r="28" fill="url(#tealGrad)" filter="url(#glow)" style={{ cursor: 'pointer' }} />
                <circle cx="200" cy="200" r="14" fill="#FFFFFF" />
                <path d="M196 194 L204 194 L200 200 L204 206 L196 206 Z" fill="url(#tealGrad)" style={{ display: 'none' }} />
              </g>

              {/* Node 1: AI (Top Right) */}
              <g className="interactive-node" style={{ transition: 'transform 0.12s ease-out' }}>
                <circle cx="320" cy="120" r="22" fill="url(#navyGrad)" stroke="#0D9488" strokeWidth="2" />
                <circle cx="320" cy="120" r="6" fill="#2DD4BF" />
                <text x="320" y="85" textAnchor="middle" fontFamily="var(--font-heading)" fontWeight="600" fontSize="12" fill="var(--color-primary-navy)">
                  UMĚLÁ INTELIGENCE
                </text>
              </g>

              {/* Node 2: MS 365 (Top Left) */}
              <g className="interactive-node" style={{ transition: 'transform 0.08s ease-out' }}>
                <circle cx="80" cy="120" r="18" fill="url(#navyGrad)" stroke="#94A3B8" strokeWidth="1.5" />
                <circle cx="80" cy="120" r="4" fill="#64748B" />
                <text x="80" y="90" textAnchor="middle" fontFamily="var(--font-heading)" fontWeight="600" fontSize="12" fill="var(--color-primary-navy)">
                  DIGITÁLNÍ KANCELÁŘ
                </text>
              </g>

              {/* Node 3: Resilience (Bottom Left) */}
              <g className="interactive-node" style={{ transition: 'transform 0.15s ease-out' }}>
                <circle cx="90" cy="280" r="24" fill="url(#navyGrad)" stroke="#0D9488" strokeWidth="2" filter="url(#glow)" />
                <circle cx="90" cy="280" r="8" fill="#2DD4BF" />
                <text x="90" y="320" textAnchor="middle" fontFamily="var(--font-heading)" fontWeight="600" fontSize="12" fill="var(--color-primary-navy)">
                  ODOLNOST A VÝKON
                </text>
              </g>

              {/* Node 4: Communication (Bottom Right) */}
              <g className="interactive-node" style={{ transition: 'transform 0.1s ease-out' }}>
                <circle cx="290" cy="290" r="20" fill="url(#navyGrad)" stroke="#94A3B8" strokeWidth="1.5" />
                <circle cx="290" cy="290" r="5" fill="#64748B" />
                <text x="290" y="325" textAnchor="middle" fontFamily="var(--font-heading)" fontWeight="600" fontSize="12" fill="var(--color-primary-navy)">
                  KOMUNIKACE
                </text>
              </g>

              {/* Dynamic floating data particles */}
              <circle cx="140" cy="150" r="3" fill="#2DD4BF" className="interactive-node" style={{ transition: 'transform 0.18s ease-out' }} />
              <circle cx="260" cy="170" r="4" fill="#0D9488" className="interactive-node" style={{ transition: 'transform 0.05s ease-out' }} />
              <circle cx="220" cy="270" r="3" fill="#64748B" className="interactive-node" style={{ transition: 'transform 0.13s ease-out' }} />
              <circle cx="130" cy="240" r="3.5" fill="#2DD4BF" className="interactive-node" style={{ transition: 'transform 0.22s ease-out' }} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
