import React, { useEffect } from "react";
import "./Zaposleni.css";
import PersonImg from "../../pictures/anonimus.jpg";
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
              <h2>{t("Član tima", "Team member")}</h2>

              <p className="bio-text">
                {t(
                  "Detalji o stručnoj biografiji uskoro.",
                  "Biography details coming soon."
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
