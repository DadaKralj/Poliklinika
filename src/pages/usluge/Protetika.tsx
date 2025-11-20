// src/pages/usluge/Protetika.tsx
import React, { useEffect } from "react";
import "./Protetika.css";
import heroImg from "../../pictures/services_prosthetics_implants_smile.png";
import { useLanguage } from "../../Context/LanguageContext";

const Protetika: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⬇️ Uzimamo globalni jezik
  const { language } = useLanguage();

  // ⬇️ Funkcija za prevod
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <main className="protetika-page">
      {/* HERO */}
      <section className="protetika-hero">
        <h1>{t("Stomatološka protetika", "Dental prosthetics")}</h1>
        <p>
          {t(
            "Stomatološka protetika se bavi nadoknadom izgubljenih zuba ili delova zuba, sa ciljem da se povrate funkcija žvakanja, jasnoća govora i estetika osmeha. Uz najsavremenije laboratorije i vrhunske materijale vraćamo osmeh po najvišim standardima protetske rehabilitacije.",
            "Dental prosthetics deals with replacing missing teeth or parts of teeth to restore chewing function, clear speech and smile aesthetics. With modern labs and premium materials we restore smiles to the highest standards of prosthetic rehabilitation."
          )}
        </p>
      </section>

      {/* UVOD + CTA */}
      <section className="protetika-body">
        <div className="protetika-body-text">
          <h2 className="protetika-accent">{t("Zašto je protetika važna?", "Why is prosthetics important?")}</h2>
          <p>
            {t(
              "Nedostatak jednog ili više zuba može dovesti do promena u mekim i čvrstim tkivima vilice, poremećaja zagrižaja i preopterećenja preostalih zuba, što vremenom narušava oralno zdravlje. Pored funkcije, protetske nadoknade vraćaju i prirodan izgled zuba, doprinose samopouzdanju i kvalitetu života.",
              "The loss of one or more teeth can lead to changes in the soft and hard tissues of the jaw, bite disturbances and overload of remaining teeth, which over time harms oral health. Besides function, prosthetic restorations restore natural tooth appearance, boosting confidence and quality of life."
            )}
          </p>
          <a className="protetika-cta" href="tel:+381653350388">
            {t("Zakažite pregled", "Book an appointment")}
          </a>
        </div>
        <img
          className="protetika-body-image"
          src={heroImg}
          alt={t("Protetika – nadoknade i osmeh", "Prosthetics – restorations and smile")}
        />
      </section>

      {/* VRSTE NADOKNADA */}
      <section className="protetika-block">
        <h2 className="protetika-accent">{t("Vrste protetskih nadoknada", "Types of prosthetic restorations")}</h2>
        <div className="protetika-grid">
          <article className="protetika-card">
            <h3>{t("Krunice", "Crowns")}</h3>
            <p>
              {t(
                "Individualno izrađene navlake koje prekrivaju oštećen ili brušen zub, štite ga i vraćaju oblik i boju.",
                "Custom-made coverings that protect a damaged or prepared tooth, restoring shape and color."
              )}
            </p>
          </article>
          <article className="protetika-card">
            <h3>{t("Mostovi", "Bridges")}</h3>
            <p>
              {t(
                "Niz spojenih krunica koji nadoknađuje jedan ili više uzastopno izgubljenih zuba.",
                "A series of connected crowns that replace one or more consecutively missing teeth."
              )}
            </p>
          </article>
          <article className="protetika-card">
            <h3>{t("Proteze", "Dentures")}</h3>
            <p>
              {t(
                "Mobilna rešenja za nadoknadu većeg broja zuba ili kompletne bezubosti.",
                "Removable solutions for replacing multiple teeth or complete edentulism."
              )}
            </p>
          </article>
          <article className="protetika-card">
            <h3>{t("Rad na implantima", "Implant-supported restorations")}</h3>
            <p>
              {t(
                "Krunice ili mostovi postavljeni na implant (veštački koren zuba) – trajno i stabilno rešenje.",
                "Crowns or bridges placed on an implant (artificial tooth root) — a permanent and stable solution."
              )}
            </p>
          </article>
        </div>
        <p className="protetika-muted">
          {t(
            "Nadoknade mogu biti ",
            "Restorations can be "
          )}
          <strong>{t("fiksne", "fixed")}</strong>
          {t(" (cementirane ili pričvršćene šrafovima kod implanata) ili ", " (cemented or screw-retained on implants) or ")}
          <strong>{t("mobilne", "removable")}</strong>
          {t(
            ", a izrađuju se od keramike, metalkeramike, cirkonijuma, akrilata ili kompozita – u zavisnosti od indikacija i vaših želja.",
            ", and are made from ceramics, metal-ceramics, zirconia, acrylics or composites depending on indications and your preferences."
          )}
        </p>
      </section>

      {/* PROCES */}
      <section className="protetika-block">
        <h2 className="protetika-accent">{t("Proces izrade", "Fabrication process")}</h2>
        <ul className="protetika-list">
          <li>
            <strong>{t("Pregled i konsultacije:", "Examination and consultations:")}</strong> {t("analiza, RTG snimak i plan terapije.", "analysis, X-ray imaging and treatment plan.")}
          </li>
          <li>
            <strong>{t("Priprema zuba / implanata:", "Tooth / implant preparation:")}</strong> {t("brušenje, otisci ili digitalno skeniranje.", "preparation, impressions or digital scanning.")}
          </li>
          <li>
            <strong>{t("Privremena nadoknada:", "Temporary restoration:")}</strong> {t("zaštita zuba do postavljanja trajne.", "protects the tooth until the permanent restoration is placed.")}
          </li>
          <li>
            <strong>{t("Izrada u laboratoriji:", "Laboratory fabrication:")}</strong> {t("klasično ili CAD/CAM za maksimalnu preciznost.", "traditional or CAD/CAM for maximum precision.")}
          </li>
          <li>
            <strong>{t("Proba i korekcije:", "Try-in and adjustments:")}</strong> {t("prilagođavanje boje, oblika i veličine.", "color, shape and size adjustments.")}
          </li>
          <li>
            <strong>{t("Postavljanje trajne nadoknade:", "Placement of the permanent restoration:")}</strong> {t("cementiranje ili pričvršćivanje na implant.", "cementation or screw-retention on an implant.")}
          </li>
        </ul>
        <p className="protetika-muted">
          {t(
            "Vreme izrade može trajati od nekoliko dana (klasične krunice) do nekoliko meseci (implantologija – faza oseointegracije).",
            "Fabrication time can range from several days (traditional crowns) to several months (implantology — osseointegration phase)."
          )}
        </p>
      </section>

      {/* VRSTE KRUNICA */}
      <section className="protetika-block">
        <h2 className="protetika-accent">{t("Vrste krunica i mostova", "Types of crowns and bridges")}</h2>
        <div className="protetika-compare">
          <article className="protetika-compare-card">
            <div className="protetika-compare-head">
              <h3>{t("Bezmetalne (cirkonijumske)", "Metal-free (zirconia)")}</h3>
              <span className="protetika-pill primary">{t("top estetika", "top aesthetics")}</span>
            </div>
            <ul className="protetika-list">
              <li>
                <strong>{t("Izgled:", "Appearance:")}</strong> {t("potpuno bele; verno imitiraju prirodan zub zahvaljujući prelamanju svetlosti.", "completely white; closely mimic natural teeth thanks to light refraction.")}
              </li>
              <li>
                <strong>{t("Prednosti:", "Advantages:")}</strong> {t("vrhunska estetika, biokompatibilne (bez alergija), izuzetna čvrstoća i trajnost.", "excellent aesthetics, biocompatible (no allergies), exceptional strength and durability.")}
              </li>
              <li>
                <strong>{t("Mane:", "Drawbacks:")}</strong> {t("viša cena u odnosu na metalkeramiku.", "higher cost compared to metal-ceramics.")}
              </li>
              <li>
                <strong>{t("Indikacije:", "Indications:")}</strong> {t("idealne za prednje zube i pacijente sa visokim estetskim zahtevima.", "ideal for anterior teeth and patients with high aesthetic demands.")}
              </li>
            </ul>
          </article>

          <article className="protetika-compare-card">
            <div className="protetika-compare-head">
              <h3>{t("Metalkeramičke", "Metal-ceramic")}</h3>
              <span className="protetika-pill">{t("čvrsto & povoljno", "strong & affordable")}</span>
            </div>
            <ul className="protetika-list">
              <li>
                <strong>{t("Izgled:", "Appearance:")}</strong> {t("keramički sloj spolja, metalno jezgro iznutra za čvrstoću.", "ceramic outer layer with a metal core inside for strength.")}
              </li>
              <li>
                <strong>{t("Prednosti:", "Advantages:")}</strong> {t("velika otpornost na opterećenja, dugotrajnost, povoljnija cena.", "high load resistance, durability, more affordable price.")}
              </li>
              <li>
                <strong>{t("Mane:", "Drawbacks:")}</strong> {t("pri povlačenju desni može se videti tamna ivica metala; estetika slabija od bezmetalnih.", "a dark metal margin may appear with gum recession; aesthetics inferior to metal-free options.")}
              </li>
              <li>
                <strong>{t("Indikacije:", "Indications:")}</strong> {t("pogodne za prednje i zadnje zube, naročito kod jačeg zagrižaja.", "suitable for anterior and posterior teeth, especially with strong occlusion.")}
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* PREDNOSTI MOSTOVA */}
      <section className="protetika-block">
        <h2 className="protetika-accent">{t("Prednosti mostova u odnosu na proteze", "Advantages of bridges over dentures")}</h2>
        <ul className="protetika-list">
          <li>{t("Fiksirani su – nema pomeranja tokom govora ili jela.", "They are fixed – no movement during speech or eating.")}</li>
          <li>{t("Ne prekrivaju nepce – zadržan ukus i prirodan govor.", "They do not cover the palate – taste and natural speech preserved.")}</li>
          <li>{t("Sprečavaju pomeranje susednih zuba i gubitak koštane mase.", "Prevent shifting of adjacent teeth and loss of bone volume.")}</li>
          <li>{t("Brza adaptacija i visok komfor – osećaj “sopstvenih zuba”.", "Quick adaptation and high comfort – feels like your own teeth.")}</li>
          <li>{t("Dug vek trajanja uz pravilnu higijenu.", "Long lifespan with proper hygiene.")}</li>
        </ul>
      </section>

      {/* TEHNOLOGIJA */}
      <section className="protetika-block">
        <h2 className="protetika-accent">{t("Naša tehnologija i pristup", "Our technology and approach")}</h2>
        <p>
          {t(
            "Koristimo savremenu ",
            "We use modern "
          )}
          <strong>CAD/CAM</strong>
          {t(
            " tehnologiju za digitalno planiranje i izradu nadoknada u kratkom roku, uz visoku preciznost i odličnu estetiku. Cilj nam je prirodan izgled, funkcionalnost i trajnost – da se bez zadrške osmehujete.",
            " technology for digital planning and fabrication of restorations quickly, with high precision and excellent aesthetics. Our goal is natural appearance, functionality and durability — so you can smile without hesitation."
          )}
        </p>
      </section>

      {/* CTA */}
      <section className="protetika-cta-bar">
        <div>
          <h3>{t("Spremni za zdrav, prirodan osmeh?", "Ready for a healthy, natural smile?")}</h3>
          <p>{t("Dođite na pregled i izradu plana terapije po meri.", "Come for an examination and a personalized treatment plan.")}</p>
        </div>
        <a className="protetika-cta" href="tel:+381653350388">
          {t("Pozovite nas", "Call us")}
        </a>
      </section>
    </main>
  );
};

export default Protetika;
