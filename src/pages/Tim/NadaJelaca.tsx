import React, { useEffect } from "react";
import "./Zaposleni.css";
import PersonImg from "../../pictures/image0.jpeg";
import { useLanguage } from "../../Context/LanguageContext";

const NadaJelaca: React.FC = () => {
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
                <img src={PersonImg} alt={t("Dr Nada Jelača", "Dr Nada Jelača")} />
              </div>
            </div>

            <div className="bio-content">
              <p className="bio-tag">{t("Tim Stomatološke poliklinike Papić", "Team of Stomatološka Poliklinika Papić")}</p>

              <h1>{t("Dr Nada Jelača", "Dr Nada Jelača")}</h1>
              <h2>{t("Specijalista oralne hirurgije", "Oral Surgery Specialist")}</h2>

              <p className="bio-text">
                {t(
                  "Dr Nada Jelača – specijalista oralne hirurgije i član konstitucionog tima naše poliklinike. Diplomirala je na Medicinskom fakultetu u Novom Sadu 2005. godine, gde je potom i završila specijalizaciju iz oralne hirurgije. Redovno učestvuje na međunarodnim kongresima i simpozijumima iz oblasti oralne hirurgije, kontinuirano unapređujući svoje znanje i veštine. Završila je C-TECH, Mini Dental i Straumann implant kurseve. Aktivno koristi engleski jezik, što joj omogućava pristup najnovijim međunarodnim trendovima i tehnologijama u stomatologiji.",
                  "Dr Nada Jelača – oral surgery specialist and member of the founding team of our polyclinic. She graduated from the Medical Faculty in Novi Sad in 2005, where she subsequently completed her specialization in oral surgery. She regularly participates in international congresses and symposiums in the field of oral surgery, continuously advancing her knowledge and skills. She completed C-TECH, Mini Dental and Straumann implant courses. She actively uses English, which enables her access to the latest international trends and technologies in dentistry."
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NadaJelaca;
