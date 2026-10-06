import React from "react";
import "./Hero.css";
import heroBg from "../../pictures/masa1.jpeg";
import heroBgMobile from "../../pictures/masatelefon.jpg";

// ⬇️ Global language context
import { useLanguage } from "../../Context/LanguageContext";

const Hero: React.FC = () => {
  // ⬇️ Uzimamo globalni jezik
  const { language } = useLanguage();

  // ⬇️ Funkcija za prevod
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <section
      id="pocetna"
      className="hero-section"
    >
      {/* Desktop slika */}
      <div 
        className="hero-bg hero-bg-desktop"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Mobilna slika */}
      <div 
        className="hero-bg hero-bg-mobile"
        style={{ backgroundImage: `url(${heroBgMobile})` }}
      />

      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-eyebrow">
            {t("STOMATOLOŠKA POLIKLINIKA PAPIĆ", "PAPIC DENTAL CLINIC")}
          </span>

          <h1>
            <strong>
              {t("Poverenje", "Trust")}
            </strong>
            {t(" gradjeno", " built")}<br />
            {t("decenijama", "over decades")}
          </h1>

          <p>
            {t(
              "Mesto gde se znanje i briga spajaju u savršen osmeh.",
              "Where knowledge and care come together to create the perfect smile."
            )}
          </p>

          <a href="#kontakt" className="hero-cta">
            {t("Zakaži pregled", "Book an appointment")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
