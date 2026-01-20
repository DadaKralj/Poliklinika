import React, { useEffect } from "react";
import "./Zaposleni.css";
import PersonImg from "../../pictures/image7.jpeg";
import { useLanguage } from "../../Context/LanguageContext";

const DjordjePetrovic: React.FC = () => {
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
                <img src={PersonImg} alt={t("Prof. dr sci. Đorđe Petrović", "Prof. Dr. Đorđe Petrović")} />
              </div>
            </div>

            <div className="bio-content">
              <p className="bio-tag">{t("Tim Stomatološke poliklinike Papić", "Team of Stomatološka Poliklinika Papić")}</p>

              <h1>{t("Prof. dr sci. Đorđe Petrović", "Prof. Dr. Đorđe Petrović")}</h1>
              <h2>{t("Specijalista ortopedije vilica", "Specialist in jaw orthopedics")}</h2>

              <p className="bio-text">
                {t(
                  "Prof. dr sci. Đorđe Petrović, specijalista ortopedije vilica, doktor nauka i redovni profesor Stomatološkog odseka Medicinskog fakulteta u Novom Sadu, stručni je saradnik naše poliklinike. Na poliklinici vodi ortodontske tretmane koristeći savremene metode fiksne i mobilne ortodoncije.",
                  "Prof. Dr. Đorđe Petrović, specialist in jaw orthopedics, PhD and full professor at the Dental Department of the Medical Faculty in Novi Sad, is an expert collaborator of our clinic. He leads orthodontic treatments using modern fixed and removable orthodontic methods."
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DjordjePetrovic;
