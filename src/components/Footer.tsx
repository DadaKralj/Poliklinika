import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// ⬇️ Global language context
import { useLanguage } from "../Context/LanguageContext";

const Footer: React.FC = () => {
  // ⬇️ Uzimamo globalni jezik
  const { language } = useLanguage();

  // ⬇️ Funkcija za prevod
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <section id="kontakt" className="kontakt-footer">
      <div className="kontakt-top">
        {/* Brand + social */}
        <div className="kf-col brand">
          <div className="brand-title">
            {t("Stomatološka poliklinika Papić", "Papic Dental Clinic")}
          </div>
        </div>

        {/* Navigacija */}
        <nav className="kf-col nav" aria-label="Glavna navigacija">
          <h3>{t("NAVIGACIJA", "NAVIGATION")}</h3>
          <ul>
            <li>
              <a href="#pocetna">
                {t("Početna", "Home")}
              </a>
            </li>
            <li>
              <a href="#onama">
                {t("O nama", "About us")}
              </a>
            </li>
            <li>
              <Link to="/usluge">
                {t("Usluge", "Services")}
              </Link>
            </li>
            <li>
              <a href="#galerija">
                {t("Galerija", "Gallery")}
              </a>
            </li>
            <li>
              <a href="#kontakt">
                {t("Kontakt", "Contact")}
              </a>
            </li>
          </ul>
        </nav>

        {/* Lokacija + vreme + telefon + email */}
        <div className="kf-col lokacija">
          <h3>{t("LOKACIJA", "LOCATION")}</h3>
          <address>
            {t("Bulevar Cara Lazara 7a,", "Bulevar Cara Lazara 7a,")}
            <br />
            {t("Novi Sad", "Novi Sad")}
          </address>

          <div className="info-row">
            <span className="circle-icon" aria-hidden="true">⏰</span>
            <div>
              <div className="label">
                {t("Pon – Pet:", "Mon – Fri:")}
              </div>
              <div className="value">9:00 – 19:00</div>
            </div>
          </div>

          <div className="info-row">
            <span className="circle-icon" aria-hidden="true">🏠</span>
            <div>
              <div className="label">
                {t("Telefon", "Phone")}
              </div>
              <a className="value" href="tel:+381216350388">
                +381 21 6350 388
              </a>
            </div>
          </div>

          <div className="info-row">
            <span className="circle-icon" aria-hidden="true">📞</span>
            <div>
              <div className="label">
                {t("Telefon", "Phone")}
              </div>
              <a className="value" href="tel:+381653350388">
                +381 65 3350 388
              </a>
            </div>
          </div>

          <div className="info-row">
            <span className="circle-icon" aria-hidden="true">✉️</span>
            <div>
              <div className="label">
                {t("Email", "Email")}
              </div>
              <a className="value" href="mailto:office@sp-papic.rs">
                office@sp-papic.rs
              </a>
            </div>
          </div>
        </div>

        {/* CTA dugme */}
        <div className="kf-col cta-wrap">
          <a className="cta" href="tel:+381653350388">
            <span className="cta-icon" aria-hidden="true">📞</span>
            {t("ZAKAŽITE PREGLED", "BOOK AN APPOINTMENT")}
          </a>
        </div>
      </div>

      <hr className="divider" />

      <div className="kontakt-bottom">
        <div className="left">
          © {new Date().getFullYear()}{" "}
          {t("Sva prava zadržana", "All Rights Reserved")}
          <br />
          {t(
            "Hosting i razvoj: itsystem",
            "Hosted & developed by itsystem"
          )}
        </div>

        <a className="to-top" href="#pocetna">
          {t("Vratite se na početak", "Back to top")}
          <span className="to-top-icon" aria-hidden="true">↑</span>
        </a>
      </div>
    </section>
  );
};

export default Footer;
