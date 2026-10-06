// @ts-ignore
import { HashLink } from 'react-router-hash-link';
import React, { useState } from 'react';
import './Navbar.css';
import logoImg from '../pictures/LOGO.png';

// ⬇️ Uvozimo globalni language context
import { useLanguage } from "../Context/LanguageContext";

const Navbar: React.FC = () => {
  // ⬇️ Više NEMA lokalnog language state-a
  const { language, setLanguage } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);

  // ⬇️ Funkcija za prevođenje
  const t = (sr: string, en: string) => (language === 'sr' ? sr : en);
  const closeMenu = () => setMenuOpen(false);

  // ⬇️ Custom scroll sa offsetom za mobilne uređaje
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = window.innerWidth <= 768 ? 300 : 80; // Više offseta na mobilnim
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImg} alt="Poliklinika Papić Logo" className="logo-img" />
      </div>

      {/* Burger dugme */}
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <HashLink smooth to="/#pocetna" className="nav-item" onClick={closeMenu}>
          {t('Početna', 'Home')}
        </HashLink>

        <HashLink smooth to="/#onama" className="nav-item" onClick={closeMenu}>
          {t('O nama', 'About us')}
        </HashLink>

        <HashLink smooth to="/tim" className="nav-item" onClick={closeMenu}>
          {t('Stručni tim', 'Our Team')}
        </HashLink>

        <HashLink smooth to="/#usluge" className="nav-item" onClick={closeMenu}>
          {t('Usluge', 'Services')}
        </HashLink>

        <HashLink smooth to="/galerija" className="nav-item" onClick={closeMenu}>
          {t('Galerija', 'Gallery')}
        </HashLink>

        <HashLink 
          smooth 
          to="/#kontakt" 
          scroll={scrollWithOffset}
          className="kontakt-dugme" 
          onClick={closeMenu}
        >
          {t('Kontakt', 'Contact')}
        </HashLink>

        {/* Selektor jezika — sada globalni */}
        <div className="language-selector">
          <button
            onClick={() => setLanguage('sr')}
            className={language === 'sr' ? 'active' : ''}
          >
            SR
          </button>
          <span>|</span>
          <button
            onClick={() => setLanguage('en')}
            className={language === 'en' ? 'active' : ''}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
