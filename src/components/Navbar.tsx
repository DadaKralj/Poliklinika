// @ts-ignore
import { HashLink } from 'react-router-hash-link';
import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState('sr');

  const t = (sr: string, en: string) => (language === 'sr' ? sr : en);

  return (
    <nav className="navbar">
      <div className="logo">Poliklinika</div>
      <div className="nav-links">
        <HashLink smooth to="/#pocetna" className="nav-item">
          {t('Početna', 'Home')}
        </HashLink>
        <HashLink smooth to="/#usluge" className="nav-item">
          {t('Usluge', 'Services')}
        </HashLink>
        <HashLink smooth to="/#onama" className="nav-item">
          {t('O nama', 'About us')}
        </HashLink>

        {/* Kontakt kao dugme */}
        <HashLink smooth to="/#kontakt" className="kontakt-dugme">
          {t('Kontakt', 'Contact')}
        </HashLink>

        {/* Jezički izbor */}
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
