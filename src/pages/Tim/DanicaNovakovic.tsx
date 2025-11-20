import React, { useEffect } from "react";
import "./Zaposleni.css";
import PersonImg from "../../pictures/anonimus.jpg";
import { useLanguage } from "../../Context/LanguageContext";

const DanicaNovakovic: React.FC = () => {
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
                <img src={PersonImg} alt={t("Dr Danica Novaković", "Dr Danica Novaković")} />
              </div>
            </div>

            <div className="bio-content">
              <p className="bio-tag">{t("Tim Stomatološke poliklinike Papić", "Team of Stomatološka Poliklinika Papić")}</p>

              <h1>{t("Dr Danica Novaković", "Dr Danica Novaković")}</h1>
              <h2>{t("Specijalista oralne hirurgije i implantologije", "Specialist in oral surgery and implantology")}</h2>

              <p className="bio-text">
                {t(
                  "Dr Danica Novaković, specijalista oralne hirurgije i implantologije, član je tima naše poliklinike. Stručno i precizno izvodi intervencije iz oblasti oralne i parodontalne hirurgije, uz primenu savremenih tehnologija, uključujući rad laserom. Posebno je istaknuta po svojoj veštini u ugradnji implantata.",
                  "Dr Danica Novaković, a specialist in oral surgery and implantology, is a member of our clinic's team. She performs oral and periodontal surgical procedures with precision using modern technologies, including laser. She is particularly noted for her expertise in implant placement."
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DanicaNovakovic;
