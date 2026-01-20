import React, { useEffect } from "react";
import "./Zaposleni.css";
import JelenaImg from "../../pictures/image2.jpeg"; // zameni stvarnom slikom
import { useLanguage } from "../../Context/LanguageContext";

const JelenaStojanov: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Uzmi globalni jezik i helper za prevod
  const { language } = useLanguage();
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <main className="bio-page">

      {/* GRADIENT POZADINA — PREKRIVA CELU STRANICU */}
      <div className="bio-full-background">

        {/* CENTRIRANI BELI CARD */}
        <section className="bio-card">
          <div className="bio-card-inner">
            
            {/* PROFILNA SLIKA */}
            <div className="bio-image-wrapper">
              <div className="bio-image-ring">
                <img src={JelenaImg} alt={t("Dr Jelena Stojanov", "Dr Jelena Stojanov")} />
              </div>
            </div>

            {/* TEKST BIOGRAFIJE */}
            <div className="bio-content">
              <p className="bio-tag">{t("Tim Stomatološke poliklinike Papić", "Team of Stomatološka Poliklinika Papić")}</p>

              <h1>Dr stom. dr Jelena Stojanov</h1>
              <h2>{t("Specijalista preventivne i dečije stomatologije", "Specialist in preventive and pediatric dentistry")}</h2>

              <p className="bio-text">
                {t(
                  "Dr Stom. dr Jelena Stojanov je specijalista preventivne i dečije stomatologije i član konstitucionog tima Poliklinike Papić. Savremenim metodama i materijalima uspešno vodi kako dečiju i preventivnu, tako i polivalentnu stomatologiju kod odraslih.",
                  "Dr Jelena Stojanov is a specialist in preventive and pediatric dentistry and a member of Poliklinika Papić's core team. Using modern methods and materials, she successfully leads pediatric, preventive, and comprehensive dental care for adults."
                )}
              </p>

              <p className="bio-text">
                {t(
                  "U svom radu primenjuje enopilot za mašinski tretman kanala korena, laser i druga savremena pomagala koja omogućavaju preciznije i efikasnije tretmane uz maksimalan komfor pacijenata.",
                  "In her practice she uses an endomotor for mechanical root canal treatment, lasers and other modern aids that enable more precise and effective procedures with maximum patient comfort."
                )}
              </p>

              <p className="bio-text">
                {t(
                  "Menadžment je završila tokom rada u Galenici, što je dodatno unapredilo njene komunikacione i organizacione veštine i doprinelo boljoj saradnji sa pacijentima.",
                  "She completed management training while working at Galenika, which further enhanced her communication and organizational skills and improved patient relations."
                )}
              </p>

              <p className="bio-text bio-text-emphasis">
                {t(
                  "Aktivno učestvuje na naučnim i stručnim skupovima svoje specijalnosti, kontinuirano unapređujući znanje i prateći najnovije trendove u stomatologiji.",
                  "She actively participates in scientific and professional conferences in her specialty, continuously updating her knowledge and following the latest trends in dentistry."
                )}
              </p>

            </div>

          </div>
        </section>

      </div>
    </main>
  );
};

export default JelenaStojanov;
