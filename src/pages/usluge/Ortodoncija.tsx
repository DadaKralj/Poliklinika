import img from '../../pictures/tica.jpeg';
import React, { useEffect } from "react";
import "./Ortodoncija.css";
import { useLanguage } from "../../Context/LanguageContext";


const Ortodoncija: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⬇️ Uzimamo globalni jezik
  const { language } = useLanguage();

  // ⬇️ Funkcija za prevod
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <main className="orto-page">
      {/* HERO BLOK */}
      <section className="orto-hero">
        <div className="orto-hero-text">
          <p className="orto-tag">{t("Ortodoncija", "Orthodontics")}</p>
          <h1>{t("Napredna ortodonska rešenja za besprekorno poravnan osmeh", "Advanced orthodontic solutions for a perfectly aligned smile")}</h1>

          <p>
            {t(
              "Ortopedija vilica, poznatija kao ortodoncija, bavi se ispravljanjem nepravilnog položaja zuba i vilica. Cilj ortodontske terapije nije samo lep osmeh, već i pravilna funkcija zagriza, lakše održavanje oralne higijene i dugoročno očuvanje zdravlja zuba i desni.",
              "Jaw orthopedics, known as orthodontics, focuses on correcting misaligned teeth and jaws. The goal of orthodontic treatment is not only an attractive smile but also proper bite function, easier oral hygiene maintenance and long-term preservation of teeth and gums."
            )}
          </p>

          <div className="orto-list-wrapper">
            <h2>{t("Zašto je ortodontska terapija važna?", "Why is orthodontic treatment important?")}</h2>

            <p className="orto-paragraph">
              {t(
                "Nepravilno postavljeni zubi i vilice mogu dovesti do niza funkcionalnih i estetskih problema koji utiču na svakodnevni život. Najčešće posledice su:",
                "Misaligned teeth and jaws can lead to a range of functional and aesthetic problems that affect daily life. Common consequences include:"
              )}
            </p>

            <ul className="orto-list">
              <li>{t("Otežano žvakanje i nepravilan kontakt između zuba", "Difficulty chewing and improper tooth contacts")}</li>
              <li>{t("Nepravilno trošenje zuba, što dugoročno može dovesti do oštećenja gleđi", "Abnormal tooth wear, which can lead to enamel damage over time")}</li>
              <li>{t("Bolovi u zglobu vilice i napetost žvačnih mišića", "Jaw joint pain and tension in the masticatory muscles")}</li>
              <li>{t("Estetska nesigurnost i smanjeno samopouzdanje pri osmehu", "Aesthetic insecurity and reduced confidence when smiling")}</li>
              <li>{t("Veći rizik od nastanka karijesa i bolesti desni zbog otezanog održavanja oralne higijene ", "Increased risk of cavities and gum disease due to more difficult oral hygiene")}</li>
            </ul>
          </div>
        </div>

        <div className="orto-hero-image">
          <img src={img} alt={t("Ortodoncija", "Orthodontics")} />
        </div>
      </section>

      {/* TEKSTUALNI GRID BLOK */}
      <section className="orto-grid">
        <article className="orto-card">
          <h2>{t("Ortodoncija za sve uzraste", "Orthodontics for all ages")}</h2>
          <p>
            {t(
              "U našoj poliklinici sprovodimo ortodontske terapije za decu, adolescente i odrasle. Terapija se zasniva na korišćenju mobilnih i fiksnih aparata, pažljivo prilagođenih svakom pacijentu, koji postepeno pomeraju zube u pravilan položaj.",
              "At our clinic we provide orthodontic treatments for children, adolescents and adults. Treatment is based on removable and fixed appliances, carefully tailored to each patient, gradually moving teeth into correct positions."
            )}
          </p>
        </article>

        <article className="orto-card">
          <h2>{t("Individualni pristup terapiji", "Individual treatment approach")}</h2>
          <p>
            {t(
              "Svaki plan terapije izrađuje se individualno, uz analizu rendgenskih snimaka, otisaka i fotografija lica i zuba. Na ovaj način obezbeđujemo maksimalnu preciznost i predvidljive rezultate.",
              "Each treatment plan is created individually with radiographic analysis, impressions and facial and dental photographs. This ensures maximum precision and predictable results."
            )}
          </p>
        </article>

        <article className="orto-card orto-card-accent">
          <h2>{t("Naš cilj", "Our goal")}</h2>
          <p>
            {t(
              "Težimo savršenom skladu između funkcije i estetike – zdrav, prirodan i pravilan osmeh koji traje celog života. Tokom terapije pažljivo pratimo napredak i uvek se trudimo da pacijent oseća sigurnost, poverenje i zadovoljstvo.",
              "We strive for perfect harmony between function and aesthetics – a healthy, natural and correct smile that lasts a lifetime. During treatment we closely monitor progress and ensure the patient feels secure, confident and satisfied."
            )}
          </p>
        </article>
      </section>
    </main>
  );
};

export default Ortodoncija;
