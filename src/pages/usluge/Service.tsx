// src/pages/usluge/Service.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

import prostheticsImg from "../../pictures/protetika.jpeg";
import orthodonticsImg from "../../pictures/ortodoncija.jpeg";
import surgeryImg from "../../pictures/hirurgija.jpeg";
import restauracijaIcon from "../../pictures/restaurativna.jpeg";
import Decija from "../../pictures/decija.jpeg";
import estetika from "../../pictures/estetska.jpeg";
import dijagnostika from "../../pictures/dijagnostika.jpeg";
import implantologija from "../../pictures/implantologija.jpeg";

// ⬇️ Uvoz konteksta i funkcija za prevod
import { useLanguage } from "../../Context/LanguageContext";

export const UslugePreview: React.FC = () => {
  // ⬇️ Uzimamo globalni jezik
  const { language } = useLanguage();

  // ⬇️ Funkcija za prevod
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <section id="usluge" className="glavne-usluge">
      <h2>{t("Glavne usluge", "Main services")}</h2>

      <div className="ikone">
        <Link to="/usluge/protetika" className="ikona-link" aria-label={t("Protetika", "Prosthetics")}>
          <div className="ikona" style={{ backgroundImage: `url(${prostheticsImg})` }}>
            <p>{t("Protetika", "Prosthetics")}</p>
          </div>
        </Link>

        <Link to="/usluge/hirurgija" className="ikona-link" aria-label={t("Hirurgija", "Surgery")}>
          <div className="ikona" style={{ backgroundImage: `url(${surgeryImg})` }}>
            <p>{t("Hirurgija", "Surgery")}</p>
          </div>
        </Link>

        <Link to="/usluge/ortodoncija" className="ikona-link" aria-label={t("Ortodoncija", "Orthodontics")}>
          <div className="ikona" style={{ backgroundImage: `url(${orthodonticsImg})` }}>
            <p>{t("Ortodoncija", "Orthodontics")}</p>
          </div>
        </Link>

        <Link to="/usluge/restaurativna-endodoncija" className="ikona-link" aria-label={t("Restaurativna stomatologija i endodoncija", "Restorative dentistry & endodontics")}>
          <div className="ikona" style={{ backgroundImage: `url(${restauracijaIcon})` }}>
            <p>{t("Restaurativna stomatologija i endodoncija", "Restorative dentistry & endodontics")}</p>
          </div>
        </Link>

        <Link to="/usluge/decija" className="ikona-link" aria-label={t("Dečija i preventivna stomatologija", "Pediatric & preventive dentistry")}>
          <div className="ikona" style={{ backgroundImage: `url(${Decija})` }}>
            <p>{t("Dečija i preventivna stomatologija", "Pediatric & preventive dentistry")}</p>
          </div>
        </Link>

        <Link to="/usluge/implantologija" className="ikona-link" aria-label={t("Implantologija", "Implantology")}>
          <div className="ikona" style={{ backgroundImage: `url(${implantologija})` }}>
            <p>{t("Implantologija", "Implantology")}</p>
          </div>
        </Link>

        <Link to="/usluge/estetski-tretmani" className="ikona-link" aria-label={t("Estetski tretmani", "Aesthetic treatments")}>
          <div className="ikona" style={{ backgroundImage: `url(${estetika})` }}>
            <p>{t("Estetski tretmani", "Aesthetic treatments")}</p>
          </div>
        </Link>

        <Link to="/usluge/dijagnostika" className="ikona-link" aria-label={t("Dijagnostika", "Diagnostics")}>
          <div className="ikona" style={{ backgroundImage: `url(${dijagnostika})` }}>
            <p>{t("Dijagnostika", "Diagnostics")}</p>
          </div>
        </Link>
      </div>
    </section>
  );
};
