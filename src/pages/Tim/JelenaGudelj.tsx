import React, { useEffect } from "react";
import "./Zaposleni.css";
import PersonImg from "../../pictures/anonimus.jpg";
import { useLanguage } from "../../Context/LanguageContext";

const JelenaGudelj: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language } = useLanguage();
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <main className="bio-page">
      <div className="bio-full-background">
        <section className="bio-card">
          <div className="bio-card-inner">
            <div className="bio-image-wrapper">
              <div className="bio-image-ring">
                <img src={PersonImg} alt={t("Dr Jelena Gudelj Petrović", "Dr Jelena Gudelj Petrović")} />
              </div>
            </div>

            <div className="bio-content">
              <p className="bio-tag">{t("Tim Stomatološke poliklinike Papić", "Team of Stomatološka Poliklinika Papić")}</p>

              <h1>{t("Dr Jelena Gudelj Petrović", "Dr Jelena Gudelj Petrović")}</h1>
              <h2>{t("Specijalista stomatološke protetike", "Specialist in dental prosthetics")}</h2>

              <p className="bio-text">
                {t(
                  "Dr Jelena Gudelj Petrović, specijalista stomatološke protetike, deo je konstitutivnog tima naše poliklinike. Dugogodišnje kliničko iskustvo u kombinaciji sa bliskom stručnom saradnjom sa Prof. Papićem omogućavaju joj da pacijentima pruži vrhunsku protetsku terapiju zasnovanu na savremenim standardima stomatologije.",
                  "Dr Jelena Gudelj Petrović, a specialist in dental prosthetics, is part of our clinic's core team. Her long clinical experience combined with close professional collaboration with Prof. Papić enables her to provide patients with top-level prosthetic therapy based on modern dental standards."
                )}
              </p>

              <p className="bio-text bio-text-emphasis">
                {t(
                  "U svom radu primenjuje savremene principe protetike — od mobilnih i fiksnih nadoknada do kompleksnih radova na implantatima, uz podršku CAD/CAM tehnologije.",
                  "In her practice she applies modern prosthetic principles — from removable and fixed restorations to complex implant-supported work, supported by CAD/CAM technology."
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default JelenaGudelj;
