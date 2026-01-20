import React, { useEffect } from "react";
import "./Zaposleni.css";
import PersonImg from "../../pictures/image6.jpeg";
import { useLanguage } from "../../Context/LanguageContext";

const DraganaMalbasa: React.FC = () => {
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
                <img src={PersonImg} alt={t("Dragana Malbaša", "Dragana Malbaša")} />
              </div>
            </div>

            <div className="bio-content">
              <p className="bio-tag">{t("Tim Stomatološke poliklinike Papić", "Team of Stomatološka Poliklinika Papić")}</p>

              <h1>{t("Dragana Malbaša", "Dragana Malbaša")}</h1>
              <h2>{t("Stomatološka sestra", "Dental Assistant")}</h2>

              <p className="bio-text">
                {t(
                  "Uspešno obavlja poslove stomatološke sestre u okviru polivalentne stomatologije, sa aktivnim učešćem u pripremi i asistenciji tokom stomatoloških intervencija. U svakodnevnom radu vodi računa o organizaciji ordinacije i pravilnoj pripremi pacijenata.",
                  "Successfully performs the duties of a dental assistant within general dentistry, with active participation in preparation and assistance during dental interventions. In her daily work, she takes care of the organization of the office and proper preparation of patients."
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DraganaMalbasa;
