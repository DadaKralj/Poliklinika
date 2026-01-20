// src/pages/usluge/Protetika.tsx
import React, { useEffect } from "react";
import "./Protetika.css";
import heroImg from "../../pictures/mimaProtetika.jpeg";
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
      {/* HERO SEKTOR */}
      <section className="protetika-hero">
        <div className="protetika-hero-text">
          <p className="protetika-tag">{t("Stomatološka protetika", "Dental prosthetics")}</p>
          <h1>{t("Vraćamo funkciju i estetiku vašeg osmeha", "Restoring function and aesthetics of your smile")}</h1>
          <p>
            {t(
              "Stomatološka protetika se bavi nadoknadom izgubljenih zuba ili delova zuba, sa ciljem da se povrate funkcija žvakanja, jasnoća govora i estetika osmeha. Uz najsavremenije laboratorije i vrhunske materijale vraćamo osmeh po najvišim standardima protetske rehabilitacije.",
              "Dental prosthetics deals with replacing missing teeth or parts of teeth to restore chewing function, clear speech and smile aesthetics. With modern labs and premium materials we restore smiles to the highest standards of prosthetic rehabilitation."
            )}
          </p>

          <div className="protetika-list-wrapper">
            <h2>{t("Zašto je protetika važna?", "Why is prosthetics important?")}</h2>
            <ul className="protetika-list">
              <li>{t("nedostatak zuba dovodi do promena u vilici i poremećaja zagrižaja,", "tooth loss leads to jaw changes and bite disturbances,")}</li>
              <li>{t("preostali zubi bivaju preopterećeni, što narušava oralno zdravlje,", "remaining teeth become overloaded, harming oral health,")}</li>
              <li>{t("protetske nadoknade vraćaju funkciju, estetiku i samopouzdanje,", "prosthetic restorations restore function, aesthetics and confidence,")}</li>
              <li>{t("modernim materijalima postižemo prirodan izgled i trajnost.", "with modern materials we achieve natural appearance and durability.")}</li>
            </ul>
          </div>
        </div>

        <div className="protetika-hero-image">
          <img src={heroImg} alt={t("Protetika – nadoknade i osmeh", "Prosthetics – restorations and smile")} />
        </div>
      </section>

      {/* VRSTE NADOKNADA – GRID KARTICE */}
      <section className="protetika-grid">
        <article className="protetika-card protetika-card-accent">
          <h2>{t("Krunice", "Crowns")}</h2>
          <p>
            {t(
              "Individualno izrađene navlake koje prekrivaju oštećen ili brušen zub, štite ga i vraćaju oblik i boju. Idealne za restauraciju i zaštitu zuba.",
              "Custom-made coverings that protect a damaged or prepared tooth, restoring shape and color. Ideal for tooth restoration and protection."
            )}
          </p>
        </article>

        <article className="protetika-card protetika-card-accent">
          <h2>{t("Mostovi", "Bridges")}</h2>
          <p>
            {t(
              "Niz spojenih krunica koji nadoknađuje jedan ili više uzastopno izgubljenih zuba. Trajno rešenje koje se oslanja na susedne zube.",
              "A series of connected crowns that replace one or more consecutively missing teeth. A permanent solution supported by adjacent teeth."
            )}
          </p>
        </article>

        <article className="protetika-card protetika-card-accent">
          <h2>{t("Proteze", "Dentures")}</h2>
          <p>
            {t(
              "Mobilna rešenja za nadoknadu većeg broja zuba ili kompletne bezubosti. Udobne i prirodnog izgleda, vraćaju funkciju i estetiku.",
              "Removable solutions for replacing multiple teeth or complete edentulism. Comfortable and natural-looking, restoring function and aesthetics."
            )}
          </p>
        </article>

        <article className="protetika-card protetika-card-accent">
          <h2>{t("Rad na implantima", "Implant-supported restorations")}</h2>
          <p>
            {t(
              "Krunice ili mostovi postavljeni na implant (veštački koren zuba) – najstabilnije i najtrajanije rešenje koje se oseća kao prirodan zub.",
              "Crowns or bridges placed on an implant (artificial tooth root) — the most stable and durable solution that feels like a natural tooth."
            )}
          </p>
        </article>
      </section>

      {/* VRSTE KRUNICA */}
      <section className="protetika-grid protetika-grid-two">
        <article className="protetika-card protetika-card-detailed">
          <div className="protetika-card-header">
            <h2 style={{ color: '#059669' }}> {t("Bezmetalne (cirkonijumske) krunice", "Metal-free (zirconia) crowns")}</h2>
            <span className="protetika-pill">{t("top estetika", "top aesthetics")}</span>
          </div>
          
          <p style={{ marginBottom: '10px' }}>
            <strong>{t("Kako izgledaju:", "How they look:")}</strong> {t("potpuno bele, bez metalne osnove – svetlost prolazi kroz krunicu slično kao kroz prirodan zub, pa rezultat izgleda izuzetno prirodno.", "completely white, without metal base — light passes through the crown similar to a natural tooth, resulting in an exceptionally natural appearance.")}
          </p>
          <p style={{ marginBottom: '10px' }}>
            <strong>{t("Zašto ih pacijenti biraju:", "Why patients choose them:")}</strong> {t("vrhunska estetika, odlična biokompatibilnost (bez alergijskih reakcija) i visoka čvrstoća uprkos tankom profilu.", "excellent aesthetics, great biocompatibility (no allergic reactions) and high strength despite thin profile.")}
          </p>
          <p style={{ marginBottom: '10px' }}>
            <strong>{t("Šta treba znati:", "What you should know:")}</strong> {t("spadaju u savremenija rešenja i zato imaju višu cenu u odnosu na metalokeramiku.", "they are among modern solutions and therefore have a higher price compared to metal-ceramics.")}
          </p>
          <p style={{ marginBottom: '0' }}>
            <strong>{t("Kome se preporučuju:", "Who they are recommended for:")}</strong> {t("idealne za prednje zube i sve koji žele da osmeh izgleda što prirodnije i estetski savršeno.", "ideal for anterior teeth and all who want their smile to look as natural and aesthetically perfect as possible.")}
          </p>
        </article>

        <article className="protetika-card protetika-card-detailed">
          <div className="protetika-card-header">
            <h2 style={{ color: '#0369a1' }}> {t("Metalokeramičke krunice", "Metal-ceramic crowns")}</h2>
            <span className="protetika-pill protetika-pill-secondary">{t("čvrsto & povoljno", "strong & affordable")}</span>
          </div>
          
          <p style={{ marginBottom: '10px' }}>
            <strong>{t("Kako izgledaju:", "How they look:")}</strong> {t("spoljašnji keramički sloj daje prirodan izgled, dok metalna osnova iznutra obezbeđuje dodatnu stabilnost.", "outer ceramic layer provides natural appearance, while metal base inside ensures additional stability.")}
          </p>
          <p style={{ marginBottom: '10px' }}>
            <strong>{t("Zašto ih pacijenti biraju:", "Why patients choose them:")}</strong> {t("izuzetna izdržljivost, dug vek trajanja i povoljniji odnos cene i kvaliteta.", "exceptional durability, long lifespan and better price-to-quality ratio.")}
          </p>
          <p style={{ marginBottom: '10px' }}>
            <strong>{t("Šta treba znati:", "What you should know:")}</strong> {t("kod povlačenja desni može se pojaviti tamna linija metala, a estetika je nešto slabija u poređenju sa bezmetalnim krunicama.", "with gum recession a dark metal line may appear, and aesthetics are somewhat inferior compared to metal-free crowns.")}
          </p>
          <p style={{ marginBottom: '0' }}>
            <strong>{t("Kome se preporučuju:", "Who they are recommended for:")}</strong> {t("odličan izbor za bočne i zadnje zube, naročito kod jačeg zagriza i povećanog opterećenja.", "excellent choice for lateral and posterior teeth, especially with strong bite and increased load.")}
          </p>
        </article>
      </section>
    </main>
  );
};

export default Protetika;
