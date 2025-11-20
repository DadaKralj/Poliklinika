// src/pages/Home/OnamaSekcija.tsx
import React from "react";
import "./OnamaSekcija.css";

import SavoPapic from "../../pictures/savo-papic.jpg";
import OlgaPapic from "../../pictures/olga-papic.jpg";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Context/LanguageContext";

type Props = {
  slikaPoliklinike: string;
  slikaDoktora: string;
};

const OnamaSekcija: React.FC<Props> = ({ slikaPoliklinike, slikaDoktora }) => {
  // Uzmi globalni jezik iz konteksta i helper za prevod
  const { language } = useLanguage();
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <section id="onama" className="onama">
      <h2>{t("O nama", "About us")}</h2>

      <div className="onama-content">
        {/* RED 1: Slika poliklinike levo, tekst desno */}
        <div className="onama-row">
          <div className="onama-image">
            <img src={slikaPoliklinike} alt={t("Poliklinika Papić - objekat", "Poliklinika Papić - facility")} />
          </div>

          <div className="onama-text">
            <p>{t(
              "Stomatološka Poliklinika Papić je osnovana 1992. godine kao prva privatna stomatološka poliklinika u Novom Sadu. Od samog početka, naš cilj je bio jasan — da pružimo vrhunsku stomatološku negu zasnovanu na znanju, iskustvu i poverenju.",
              "Stomatološka Poliklinika Papić was founded in 1992 as the first private dental clinic in Novi Sad. From the beginning our goal was clear — to provide top dental care based on knowledge, experience and trust."
            )}</p>
            <p>{t(
              "Tokom više od tri decenije rada, preko 150.000 zadovoljnih pacijenata poklonilo nam je svoje poverenje. Na to smo posebno ponosni, jer naš najveći uspeh nisu samo brojevi, već zdravlje i osmeh svake osobe koja izađe iz naše ordinacije.",
              "Over more than three decades, over 150,000 satisfied patients have entrusted us with their care. We are proud of this — our greatest success is not the numbers, but the health and smile of every person who leaves our clinic."
            )}</p>
            <p>{t(
              "Poliklinika se nalazi na atraktivnoj lokaciji u modernom, namenski građenom prostoru, koji u potpunosti ispunjava sve zahteve savremene stomatologije. Najnovija tehnologija i pažljivo odabrani materijali čine osnovu pristupa svakom pacijentu, a naš stručni tim redovno se usavršava kako bi svaka terapija bila u skladu sa najvišim standardima.",
              "The clinic is located in an attractive area within a modern, purpose-built facility that fully meets the demands of contemporary dentistry. The latest technology and carefully selected materials form the basis of our patient care, and our expert team continuously trains to ensure treatments meet the highest standards."
            )}</p>
          </div>
        </div>

        {/* RED 2: Slike osnivača levo, tekst osnivača desno */}
        <div className="onama-row reverse">
          <div className="onama-founders-images">
            <img src={SavoPapic} alt="Savo Papić" />
            <img src={OlgaPapic} alt="Olga Papić" />
          </div>

          <div className="onama-founders-text">
            <h3>{t("OSNIVAČI", "FOUNDERS")}</h3>
            <p>{t(
              "Osnivači poliklinike su Prof. dr sci. Savo Papić, specijalista stomatološke protetike, doktor nauka i redovni profesor Univerziteta, i dr stom. Olga Papić, specijalista ortopedije vilica i zuba.",
              "The clinic founders are Prof. Dr. Savo Papić, specialist in dental prosthetics, PhD and full university professor, and Dr. Olga Papić, specialist in maxillofacial orthopedics."
            )}</p>
            <p>{t(
              "Njihovo dugogodišnje iskustvo, predanost i profesionalizam postavili su temelje po kojima je Poliklinika Papić i danas prepoznatljiva — po vrhunskoj stručnosti, odgovornosti i pažnji prema svakom pacijentu.",
              "Their long-standing experience, dedication and professionalism have laid the foundations for Poliklinika Papić's reputation — outstanding expertise, responsibility and care for every patient."
            )}</p>
          </div>
        </div>

        {/* RED 3: Slika tima levo, opis tima desno */}
        <div className="onama-row">
          <div className="onama-team-image">
            <img src={slikaDoktora} alt={t("Tim doktora Poliklinike Papić", "Poliklinika Papić medical team")} />
          </div>

          <div className="onama-team-text">
            <h3>{t("NAŠ TIM DOKTORA", "OUR TEAM OF DOCTORS")}</h3>
            <p>{t(
              "Naš tim čine iskusni stomatolozi različitih specijalnosti koji rade po savremenim protokolima i koriste proverene materijale i tehnologije. Kontinuirano ulažemo u stručno usavršavanje, kako bismo obezbedili bezbedan, komforan i pouzdan tretman za svakog pacijenta.",
              "Our team consists of experienced dentists across various specialties who follow modern protocols and use proven materials and technologies. We continuously invest in professional development to ensure safe, comfortable and reliable treatment for every patient."
            )}</p>
            <p>{t(
              "Verujemo u detaljnu dijagnostiku, jasno objašnjenje plana terapije i individualni pristup. Naš cilj je da svaka poseta bude brza, efikasna i sa maksimalnim estetskim i funkcionalnim rezultatom.",
              "We believe in thorough diagnostics, clear explanation of the treatment plan and an individual approach. Our goal is for every visit to be quick, efficient and deliver the best aesthetic and functional result."
            )}</p>
            <Link to="/tim" className="onama-btn">{t("Upoznaj naš tim", "Meet our team")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnamaSekcija;
