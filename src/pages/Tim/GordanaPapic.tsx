import React, { useEffect } from "react";
import "./Zaposleni.css";
import PersonImg from "../../pictures/image5.jpeg";
import { useLanguage } from "../../Context/LanguageContext";

const GordanaPapic: React.FC = () => {
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
                <img src={PersonImg} alt={t("Gordana Papić", "Gordana Papić")} />
              </div>
            </div>

            <div className="bio-content">
              <p className="bio-tag">{t("Tim Stomatološke poliklinike Papić", "Team of Stomatološka Poliklinika Papić")}</p>

              <h1>{t("Gordana Papić", "Gordana Papić")}</h1>
              <h2>{t("Zubni tehničar", "Dental technician")}</h2>

              <p className="bio-text">
                {t(
                  "Gordana Papić, zubni tehničar, radi u zubnotehničkoj laboratoriji Stomatološke poliklinike Papić i kontinuirano unapređuje svoje veštine kroz stručnu edukaciju. Pored izrade protetskih radova, aktivno učestvuje u vođenju i organizaciji poslovanja poliklinike.",
                  "Gordana Papić, a dental technician, works in the dental laboratory of Stomatološka Poliklinika Papić and continuously improves her skills through professional training. In addition to fabricating prosthetic restorations, she actively participates in the clinic's management and organization."
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default GordanaPapic;
