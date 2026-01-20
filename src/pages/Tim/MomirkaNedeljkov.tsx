import React, { useEffect } from "react";
import "./Zaposleni.css";
import PersonImg from "../../pictures/image1.jpeg";
import { useLanguage } from "../../Context/LanguageContext";

const MomirkaNedeljkov: React.FC = () => {
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
                <img src={PersonImg} alt={t("Momirka Nedeljkov", "Momirka Nedeljkov")} />
              </div>
            </div>

            <div className="bio-content">
              <p className="bio-tag">{t("Tim Stomatološke poliklinike Papić", "Team of Stomatološka Poliklinika Papić")}</p>

              <h1>{t("Momirka Nedeljkov", "Momirka Nedeljkov")}</h1>
              <h2>{t("Stomatološka sestra", "Dental nurse")}</h2>

              <p className="bio-text">
                {t(
                  "Momirka Nedeljkov, stomatološka sestra, profesionalno i precizno obavlja sve zadatke svoje struke, pružajući podršku u polivalentnoj stomatologiji, kao i u protetskim, ortodontskim i hirurškim procedurama.",
                  "Momirka Nedeljkov, a dental nurse, performs her duties professionally and precisely, providing support in general dentistry as well as in prosthetic, orthodontic and surgical procedures."
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MomirkaNedeljkov;
