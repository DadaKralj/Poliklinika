import img from '../../pictures/galerija/slika8.jpg';
import React, { useEffect } from "react";
import "./Hirurgija.css";
import { useLanguage } from "../../Context/LanguageContext";


const Hirurgija: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⬇️ Uzimamo globalni jezik
  const { language } = useLanguage();

  // ⬇️ Funkcija za prevod
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <main className="hirurgija-page">
      {/* HERO SEKTOR */}
      <section className="hirurgija-hero">
        <div className="hirurgija-hero-text">
          <p className="hirurgija-tag">{t("Oralna hirurgija", "Oral surgery")}</p>
          <h1>{t("Bezbolni hirurški zahvati u službi zdravog osmeha", "Painless surgical procedures for a healthy smile")}</h1>
          <p>
            {t(
              "Oralna hirurgija se bavi različitim zahvatima na zubima, vilicama i mekim tkivima usne duplje. Iako reč „hirurgija“ mnogima zvuči ozbiljno, većina ovih zahvata je rutinska, brza i potpuno bezbolna zahvaljujući modernim tehnikama anestezije.",
              "Oral surgery deals with various procedures on teeth, jaws and the soft tissues of the oral cavity. Although the word “surgery” may sound serious, most of these procedures are routine, quick and completely painless thanks to modern anesthesia techniques."
            )}
          </p>

          <div className="hirurgija-list-wrapper">
            <h2>{t("Najčešći razlozi za hirurški pregled", "Most common reasons for surgical consultation")}</h2>
            <ul className="hirurgija-list">
              <li>{t("umnjaci koji ne mogu da izrastu pravilno (impaktirani umnjaci),", "wisdom teeth that cannot erupt properly (impacted wisdom teeth),")}</li>
              <li>{t("upaljeni ili oštećeni korenovi koji izazivaju bol ili otok,", "infected or damaged roots causing pain or swelling,")}</li>
              <li>{t("prisustvo cista ili granuloma na vrhu korena,", "presence of cysts or granulomas at the root tip,")}</li>
              <li>{t("potreba za pripremom vilice za protetske radove ili implantate.", "need to prepare the jaw for prosthetic work or implants.")}</li>
            </ul>
          </div>
        </div>

        <div className="hirurgija-hero-image">
          <img src={img} alt={t("Oralna hirurgija", "Oral surgery")} />
        </div>
      </section>

      {/* DVE KRATKE KARTICE – JASNO I SAŽETO */}
      <section className="hirurgija-grid">
        <article className="hirurgija-card">
          <h2>{t("Šta je cilj hirurškog zahvata?", "What is the goal of a surgical procedure?")}</h2>
          <p>
            {t(
              "U ovim situacijama cilj hirurškog zahvata je da se ukloni uzrok problema, spreči širenje infekcije i omogući zdrav oporavak tkiva. Većina intervencija traje kratko, a oporavak je brz uz pravilnu negu i uputstva koja pacijent dobija nakon zahvata.",
              "In these situations, the goal of surgery is to remove the cause of the problem, prevent the spread of infection and enable healthy tissue recovery. Most interventions are short and recovery is quick with proper care and instructions given to the patient after the procedure."
            )}
          </p>
        </article>

        <article className="hirurgija-card hirurgija-card-accent">
          <h2>{t("Kako izgleda iskustvo u našoj ordinaciji?", "What is the experience like in our clinic?")}</h2>
          <p>
            {t(
              "U Stomatološkoj poliklinici Papić sve procedure se obavljaju u prijatnom i bezbednom okruženju, uz savremenu opremu i posebnu pažnju posvećenu udobnosti pacijenta. Pre svake intervencije detaljno objašnjavamo postupak i tok oporavka, jer smatramo da je informisan pacijent – opušten pacijent. Naš cilj je da svaki zahvat prođe mirno, bez bola i sa sigurnim, dugotrajnim rezultatom.",
              "At Stomatološka poliklinika Papić all procedures are performed in a pleasant and safe environment, using modern equipment and with special attention to patient comfort. Before each intervention we explain the procedure and recovery in detail — an informed patient is a relaxed patient. Our goal is for each procedure to be calm, painless and to deliver safe, long-lasting results."
            )}
          </p>
        </article>
      </section>
    </main>
  );
};

export default Hirurgija;
