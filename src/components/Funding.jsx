import React from 'react';
import { HelpCircle, ArrowRight } from 'lucide-react';

export default function Funding() {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
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
      
      // Auto focus the message or areas if possible
      const textarea = document.getElementById('form-message');
      if (textarea) {
        textarea.placeholder = "Dobrý den, máme zájem o konzultaci možností podpory a financování vzdělávání pro naši firmu...";
        textarea.focus();
      }
    }
  };

  return (
    <section id="financovani" className="section" style={{ backgroundColor: 'var(--color-neutral-white)' }}>
      <div className="container">
        <div className="funding-box animate-on-scroll">
          <div className="funding-grid">
            <div>
              <span className="section-tag" style={{ marginBottom: '1rem' }}>Financování a podpora</span>
              <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>
                Možnost využití podpory na firemní vzdělávání
              </h2>
              <p className="funding-desc">
                U vybraných vzdělávacích aktivit může být možné využít programy podpory odborného vzdělávání zaměstnanců. Konkrétní možnosti vždy závisí na aktuálních podmínkách výzev, způsobilosti firmy a schválení příslušnými institucemi.
              </p>
              <p className="funding-desc-secondary">
                Ve spolupráci s odbornými partnery umíme firmám pomoci s orientací v možnostech podpory, přípravou podkladů a sladěním vzdělávacího plánu s požadavky programu. Vždy postupujeme podle aktuálních pravidel a konkrétní situace klienta.
              </p>
              <button 
                onClick={scrollToContact} 
                className="btn btn-primary" 
                style={{ marginTop: '1.75rem' }}
              >
                Zjistit možnosti pro naši firmu
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="funding-card">
              <div className="funding-card-title">
                <HelpCircle size={20} />
                <span>Jak podpora funguje?</span>
              </div>
              <p className="funding-card-text">
                Programy podpory jsou administrovány státními či evropskými institucemi. Žádosti podléhají formálnímu i věcnému hodnocení. 
              </p>
              <p className="funding-card-text" style={{ fontWeight: 500, color: 'var(--color-primary-navy)' }}>
                Rádi s Vámi probereme aktuálně otevřené dotační výzvy a možnosti zapojení Vaší společnosti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
