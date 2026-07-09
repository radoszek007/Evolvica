import React, { useState } from 'react';
import { Cpu, X } from 'lucide-react';

export default function Footer() {
  const [showGdprModal, setShowGdprModal] = useState(false);
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
          <a href="#gdpr" className="footer-link" onClick={(e) => { e.preventDefault(); setShowGdprModal(true); }}>
            Ochrana osobních údajů
          </a>
          <a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Cookies</a>
        </div>
      </div>

      {/* GDPR Modal Overlay */}
      {showGdprModal && (
        <div className="modal-overlay" style={{ zIndex: 9999 }}>
          <div className="modal-card-gdpr">
            <button 
              onClick={() => setShowGdprModal(false)} 
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted-dark)' }}
              aria-label="Zavřít"
            >
              <X size={20} />
            </button>
            <h3>Informační memorandum o ochraně osobních údajů (GDPR)</h3>
            <p>
              Společnost <strong>Evolvica One s.r.o.</strong>, se sídlem Cihelní 668/1, Nové Město, 735 06 Karviná, IČ: 297 56 987 (dále jen „Správce“), jakožto správce osobních údajů, vás tímto v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů (dále jen „GDPR“) informuje o zpracování vašich osobních údajů a o vašich právech.
            </p>

            <h4>1. Rozsah a účel zpracování osobních údajů</h4>
            <p>
              Správce zpracovává osobní údaje, které mu poskytnete prostřednictvím kontaktního formuláře na tomto webu. Jedná se o:
            </p>
            <ul>
              <li>Jméno a příjmení (identifikační údaj)</li>
              <li>Název společnosti (identifikační údaj)</li>
              <li>E-mailová adresa (kontaktní údaj)</li>
              <li>Telefonní číslo (kontaktní údaj)</li>
              <li>Počet zaměstnanců / účastníků a oblasti zájmu (údaje o poptávce)</li>
              <li>Obsah vaší zprávy</li>
            </ul>
            <p>
              Tyto údaje jsou zpracovávány za účelem vyřízení vaší poptávky, zodpovězení dotazu nebo přípravy nabídky vzdělávacích služeb (plnění smlouvy nebo provedení opatření před uzavřením smlouvy).
            </p>

            <h4>2. Právní základ zpracování</h4>
            <p>
              Právním základem pro toto zpracování je:
            </p>
            <ul>
              <li><strong>Plnění smlouvy / opatření před uzavřením smlouvy</strong> podle čl. 6 odst. 1 písm. b) GDPR (zpracování je nezbytné pro vyřízení poptávky a jednání o nabídce služeb).</li>
              <li><strong>Oprávněný zájem</strong> podle čl. 6 odst. 1 písm. f) GDPR (zpracování za účelem zajištění bezpečnosti webu a obrany v případě právních sporů).</li>
            </ul>

            <h4>3. Doba uchovávání osobních údajů</h4>
            <p>
              Vaše osobní údaje budou uchovávány po dobu nezbytnou k vyřízení vaší poptávky nebo po dobu trvání jednání o smlouvě. Nedojde-li k uzavření smlouvy, osobní údaje budou smazány nejpozději do 3 let od ukončení poslední komunikace, ledaže by právní předpisy vyžadovaly delší uchovávání nebo by to bylo nezbytné pro ochranu práv Správce.
            </p>

            <h4>4. Příjemci osobních údajů</h4>
            <p>
              Vaše osobní údaje jsou uchovávány v bezpečí a jsou přístupné pouze oprávněným zaměstnancům a partnerům Správce. Pro zajištění chodu webu využívá Správce spolehlivé subdodavatele (poskytovatel webhostingu, IT infrastruktury), kteří vystupují jako zpracovatelé osobních údajů a plní veškeré bezpečnostní standardy. Osobní údaje nejsou předávány do třetích zemí mimo EU.
            </p>

            <h4>5. Vaše práva podle GDPR</h4>
            <p>
              Jako subjekt údajů máte následující práva, která můžete u Správce kdykoliv uplatnit:
            </p>
            <ul>
              <li><strong>Právo na přístup:</strong> Máte právo získat informace o tom, jaké vaše osobní údaje zpracováváme.</li>
              <li><strong>Právo na opravu:</strong> Máte právo požadovat opravu nepřesných nebo neúplných osobních údajů.</li>
              <li><strong>Právo na výmaz („právo být zapomenut“):</strong> Máte právo požadovat smazání svých osobních údajů, pokud pominul účel zpracování nebo uplatníte námitku a neexistují převažující oprávněné důvody pro zpracování.</li>
              <li><strong>Právo na omezení zpracování:</strong> Máte právo požadovat omezení zpracování v zákonem stanovených případech.</li>
              <li><strong>Právo na přenositelnost:</strong> Máte právo získat své osobní údaje ve strukturovaném, běžně používaném a strojově čitelném formátu.</li>
              <li><strong>Právo vznést námitku:</strong> Máte právo vznést námitku proti zpracování založeném na oprávněném zájmu Správce.</li>
              <li><strong>Právo podat stížnost:</strong> Pokud se domníváte, že zpracováním vašich osobních údajů dochází k porušení GDPR, máte právo podat stížnost u Úřadu pro ochranu osobních údajů (ÚOOÚ) na adrese Pplk. Sochora 27, 170 00 Praha 7 (www.uoou.cz).</li>
            </ul>
            <p>
              Pro uplatnění svých práv nebo v případě jakýchkoliv dotazů nás kontaktujte na e-mailové adrese <strong>info@evolvica.cz</strong>.
            </p>

            <button onClick={() => setShowGdprModal(false)} className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
              Rozumím a zavřít
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
