// @ts-ignore
import { HashLink } from 'react-router-hash-link';
import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState('sr');
  const [menuOpen, setMenuOpen] = useState(false); // Dodato za burger

  const t = (sr: string, en: string) => (language === 'sr' ? sr : en);

  const closeMenu = () => setMenuOpen(false); // Da zatvori meni kad klikneš na link

  return (
    <nav className="navbar">
      <div className="logo">Poliklinika</div>

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
        <HashLink smooth to="/#usluge" className="nav-item" onClick={closeMenu}>
          {t('Usluge', 'Services')}
        </HashLink>
        <HashLink smooth to="/#onama" className="nav-item" onClick={closeMenu}>
          {t('O nama', 'About us')}
        </HashLink>

        <HashLink smooth to="/#kontakt" className="kontakt-dugme" onClick={closeMenu}>
          {t('Kontakt', 'Contact')}
        </HashLink>

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
