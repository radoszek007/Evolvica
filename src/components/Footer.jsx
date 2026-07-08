import React from 'react';
import { Cpu } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id) => {
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
    <footer className="footer-wrapper">
      <div className="container footer-grid">
        
        <div className="footer-brand">
          <div className="footer-logo">
            <Cpu size={24} style={{ color: 'var(--color-accent-mint)' }} />
            <span>Evolvica One</span>
          </div>
          <p className="footer-desc">
            Firemní vzdělávání pro digitální kompetence, komunikaci a pracovní odolnost.
          </p>
          <p className="footer-desc" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-light)' }}>
            Evolvica One s.r.o.<br />
            IČ: 297 56 987<br />
            Sídlo: Cihelní 668/1, Nové Město, 735 06 Karviná
          </p>
        </div>

        <div>
          <h3 className="footer-col-title">Navigace</h3>
          <ul className="footer-links">
            <li>
              <a href="#hero" onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }} className="footer-link">
                Úvod
              </a>
            </li>
            <li>
              <a href="#proc-evolvica" onClick={(e) => { e.preventDefault(); handleLinkClick('proc-evolvica'); }} className="footer-link">
                Co děláme
              </a>
            </li>
            <li>
              <a href="#okruhy" onClick={(e) => { e.preventDefault(); handleLinkClick('okruhy'); }} className="footer-link">
                Vzdělávací okruhy
              </a>
            </li>
            <li>
              <a href="#pro-koho" onClick={(e) => { e.preventDefault(); handleLinkClick('pro-koho'); }} className="footer-link">
                Pro koho
              </a>
            </li>
            <li>
              <a href="#jak-pracujeme" onClick={(e) => { e.preventDefault(); handleLinkClick('jak-pracujeme'); }} className="footer-link">
                Jak pracujeme
              </a>
            </li>
            <li>
              <a href="#duveryhodnost" onClick={(e) => { e.preventDefault(); handleLinkClick('duveryhodnost'); }} className="footer-link">
                Důvěryhodnost
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-col-title">Kontakt</h3>
          <ul className="footer-links">
            <li style={{ color: 'var(--color-text-light)' }}>
              <strong>E-mail:</strong><br />
              <a href="mailto:info@evolvica.cz" className="footer-link" style={{ color: 'var(--color-accent-mint)' }}>
                info@evolvica.cz
              </a>
            </li>
            <li style={{ color: 'var(--color-text-light)' }}>
              <strong>Telefon:</strong><br />
              <span>+420 723 554 643</span>
            </li>
            <li>
              <a 
                href="#kontakt" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('kontakt'); }} 
                className="footer-link"
                style={{ fontWeight: 600, color: 'var(--color-neutral-white)' }}
              >
                Poptat vzdělávání &rarr;
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="container footer-bottom">
        <div>
          &copy; {currentYear} Evolvica One s.r.o. Všechna práva vyhrazena.
        </div>
        <div className="footer-bottom-links">
          <a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Ochrana osobních údajů</a>
          <a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Cookies</a>
        </div>
      </div>
    </footer>
  );
}
