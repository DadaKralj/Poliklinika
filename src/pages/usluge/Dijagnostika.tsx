import React, { useEffect } from "react";
import "./Dijagnostika.css";
import dijagnostikaImg from "../../pictures/restaurativna stomatologija.png"; // Promeni na realnu sliku kada budeš imao
import { useLanguage } from "../../Context/LanguageContext";

const Dijagnostika: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⬇️ Uzimamo globalni jezik
  const { language } = useLanguage();

  // ⬇️ Funkcija za prevod
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <main className="dijag-page">
      <section className="dijag-hero">
        <div className="dijag-hero-text">
          <p className="dijag-tag">{t("Dijagnostika", "Diagnostics")}</p>
          <h1>{t("Temelj svake uspešne stomatološke terapije", "The foundation of every successful dental therapy")}</h1>

          <p>
            {t(
              "Precizna dijagnostika je osnova svake uspešne stomatološke terapije. Pravilno postavljena dijagnoza omogućava da se odredi najbolji način lečenja, spreče komplikacije i očuva zdravlje zuba, desni i vilica.",
              "Accurate diagnostics is the basis of every successful dental treatment. A correct diagnosis enables determination of the best treatment approach, prevents complications and preserves the health of teeth, gums and jaws."
            )}
          </p>

          <p>
            {t(
              "Proces dijagnostike počinje razgovorom sa pacijentom, kako bismo prikupili sve važne informacije o njegovim tegobama, navikama i prethodnim terapijama. Nakon toga sledi detaljan klinički pregled koji omogućava procenu stanja zuba, desni i vilica.",
              "The diagnostic process begins with a conversation with the patient to gather important information about symptoms, habits and previous treatments. This is followed by a thorough clinical examination to assess the condition of teeth, gums and jaws."
            )}
          </p>

          <p>
            {t(
              "Često je neophodna i analiza rendgenskih snimaka i drugih dijagnostičkih podataka, kako bi se dobila potpuna slika i precizno planirala terapija.",
              "Analysis of X-rays and other diagnostic data is often necessary to obtain a complete picture and plan therapy precisely."
            )}
          </p>

          <p className="dijag-note">
            {t(
              "Saradnja specijalista iz različitih oblasti stomatologije omogućava nam da za svaki slučaj osmislimo najefikasnije i najsigurnije rešenje.",
              "Collaboration of specialists from different dental fields allows us to devise the most effective and safest solution for each case."
            )}
          </p>
        </div>

        <div className="dijag-hero-image">
          <img src={dijagnostikaImg} alt={t("Dijagnostika", "Diagnostics")} />
        </div>
      </section>
    </main>
  );
};

export default Dijagnostika;
