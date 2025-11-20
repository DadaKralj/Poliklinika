import React, { useEffect } from "react";
import "./Zaposleni.css";
import PersonImg from "../../pictures/anonimus.jpg";
import { useLanguage } from "../../Context/LanguageContext";

const MirjanaSkakic: React.FC = () => {
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
                <img src={PersonImg} alt={t("Mirjana Skakić", "Mirjana Skakić")} />
              </div>
            </div>

            <div className="bio-content">
              <p className="bio-tag">{t("Stomatološka sestra", "Dental nurse")}</p>

              <h1>{t("Mirjana Skakić", "Mirjana Skakić")}</h1>
              <h2>{t("Stomatološka sestra sa iskustvom", "Experienced dental nurse")}</h2>

              <p className="bio-text">
                {t(
                  "Mirjana Skakić, stomatološka sestra sa dugogodišnjim iskustvom, već više od 20 godina radi u Stomatološkoj poliklinici Papić. Aktivno učestvuje u edukaciji mlađih kadrova i prenosi svoje znanje pripravnicama i stažistima.",
                  "Mirjana Skakić, a dental nurse with long experience, has worked at Stomatološka Poliklinika Papić for over 20 years. She actively participates in training junior staff and shares her knowledge with trainees and interns."
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MirjanaSkakic;
