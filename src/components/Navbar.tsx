import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState('sr');

  const t = (sr: string, en: string) => (language === 'sr' ? sr : en);

  return (
    <nav className="navbar">
      <div className="logo">Poliklinika</div>
      <div className="nav-links">
        <a href="#pocetna">{t('Početna', 'Home')}</a>
        <a href="#usluge">{t('Usluge', 'Services')}</a>
        <a href="#onama">{t('O nama', 'About us')}</a>

        {/* Kontakt kao dugme */}
        <a href="#kontakt" className="kontakt-dugme">
          {t('Kontakt', 'Contact')}
        </a>

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
