import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export default function Header({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Úvod' },
    { id: 'proc-evolvica', label: 'Co děláme' },
    { id: 'okruhy', label: 'Vzdělávací okruhy' },
    { id: 'pro-koho', label: 'Pro koho' },
    { id: 'jak-pracujeme', label: 'Jak pracujeme' },
    { id: 'duveryhodnost', label: 'Důvěryhodnost' },
    { id: 'kontakt', label: 'Kontakt' }
  ];

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the sticky header
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
    <>
      <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo Placeholder */}
          <a href="#hero" className="logo-placeholder" onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }}>
            <Cpu className="logo-icon" />
            <span>Evolvica One</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
            <button onClick={() => handleLinkClick('kontakt')} className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
              Konzultace
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu - Rendered as a sibling to prevent stacking/clipping issues */}
      <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(item.id);
            }}
            className="nav-mobile-link"
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={() => handleLinkClick('kontakt')}
          className="btn btn-primary"
          style={{ marginTop: '1.5rem', width: '100%' }}
        >
          Domluvit konzultaci
        </button>
      </nav>
    </>
  );
}
