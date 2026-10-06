import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import { HashLink } from "react-router-hash-link";
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
        {/* Brand */}
        <div className="kf-col brand">
          <div className="brand-title">
            <div className="brand-line">{t("Stomatološka", "Dental")}</div>
            <div className="brand-line">{t("poliklinika", "Clinic")}</div>
            <div className="brand-line brand-name">{t("Papić", "Papic")}</div>
          </div>
        </div>

        {/* Navigacija */}
        <nav className="kf-col nav" aria-label="Glavna navigacija">
          <h3>{t("NAVIGACIJA", "NAVIGATION")}</h3>
          <ul>
            <li>
              <HashLink smooth to="/#pocetna">
                {t("Početna", "Home")}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#onama">
                {t("O nama", "About us")}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#usluge">
                {t("Usluge", "Services")}
              </HashLink>
            </li>
            <li>
              <Link to="/galerija">
                {t("Galerija", "Gallery")}
              </Link>
            </li>
            <li>
              <HashLink smooth to="/#kontakt">
                {t("Kontakt", "Contact")}
              </HashLink>
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
            "Hosting i razvoj: Katarina Papić, Nikola Danilović i Luka Bukurov",
            "Hosted & developed by Katarina Papić, Nikola Danilović and Luka Bukurov"
          )}
        </div>

        <a 
          className="to-top" 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {t("Vratite se na početak", "Back to top")}
          <span className="to-top-icon" aria-hidden="true">↑</span>
        </a>
      </div>
    </section>
  );
};

export default Footer;
