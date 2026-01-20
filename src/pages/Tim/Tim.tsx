// src/pages/Tim/Tim.tsx
import React from "react";
import "./Tim.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Context/LanguageContext";
import Jelena from "../../pictures/image4.jpeg";
import Nada from "../../pictures/image0.jpeg";
import JelenaStojanov from "../../pictures/image2.jpeg";
import Djordje from "../../pictures/image7.jpeg";
import Danica from "../../pictures/image8.jpeg";
import Mirjana from "../../pictures/image3.jpeg";
import Momirka from "../../pictures/image1.jpeg";
import Dragana from "../../pictures/image6.jpeg";
import Gordana from "../../pictures/image5.jpeg";

const tim = [
  {
    ime: "Dr Jelena Stojanov",
    titula: "Specijalista dečije i preventivne stomatologije",
    opis: "Osnivač poliklinike Papić od 2022. ",
    opis_en: "Founder of Poliklinika Papić since 2022.",
    slika: JelenaStojanov,
    path: "/tim/jelena-stojanov",
  },
  {
    ime: "Dr Jelena Gudelj Petrović",
    titula: "Specijalista stomatološke protetike",
    slika: Jelena,
    path: "/tim/jelena-gudelj",
  },
  {
    ime: "Dr Nada Jelača",
    titula: "Specijalista oralne hirurgije",
    slika: Nada,
    path: "/tim/nada-jelaca",
  },
  {
    ime: "Prof. dr sci. Đorđe Petrović",
    titula: "Specijalista ortopedije vilica",
    slika: Djordje,
    path: "/tim/djordje-petrovic",
  },
  {
    ime: "Dr Danica Novaković",
    titula: "Specijalista oralne hirurgije i implantologije",
    slika: Danica,
    path: "/tim/danica-novakovic",
  },
  {
    ime: "Mirjana Skakić",
    titula: "Stomatološka sestra",
    slika: Mirjana,
    path: "/tim/mirjana-skakic",
  },
  {
    ime: "Momirka Nedeljkov",
    titula: "Stomatološka sestra",
    slika: Momirka,
    path: "/tim/momirka-nedeljkov",
  },
  {
    ime: "Dragana Malbaša",
    titula: "Stomatološka sestra",
    slika: Dragana,
    path: "/tim/dragana-malbasa",
  },
  {
    ime: "Gordana Papić",
    titula: "zubni tehničar",
    slika: Gordana,
    path: "/tim/gordana-papic",
  },
];

const Tim: React.FC = () => {
  // Uzmi globalni jezik i helper za prevod
  const { language } = useLanguage();
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <main className="tim-stranica">
      <section className="tim-header">
        <h1>{t("Naš tim", "Our team")}</h1>
        <p>{t("Stručnjaci posvećeni vašem osmehu", "Professionals dedicated to your smile")}</p>
      </section>

      <section className="tim-grid">
        {tim.map((doktor, index) => (
          <div key={index} className="tim-kartica">
            {doktor.path ? (
              <Link to={doktor.path}>
                <img src={doktor.slika} alt={doktor.ime} />
              </Link>
            ) : (
              <img src={doktor.slika} alt={doktor.ime} />
            )}

            <div className="tim-tekst">
              <h3>{doktor.ime}</h3>
              <h4>{doktor.titula}</h4>
              {doktor.opis && (
                <p>
                  {doktor.ime === "Dr Jelena Stojanov" ? (
                    <strong>{t(doktor.opis, (doktor as any).opis_en ?? doktor.opis)}</strong>
                  ) : (
                    t(doktor.opis, (doktor as any).opis_en ?? doktor.opis)
                  )}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Tim;
