import React, { useEffect } from "react";
import "./Estetika.css";
import estetskiImg from "../../pictures/restaurativna stomatologija.png"; // promeni sliku ako želiš
import { useLanguage } from "../../Context/LanguageContext";

const Estetika: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⬇️ Uzimamo globalni jezik
  const { language } = useLanguage();

  // ⬇️ Funkcija za prevod
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <main className="estet-page">
      {/* HERO BLOK – ESTETSKI TRETMANI */}
      <section className="estet-hero">
        <div className="estet-hero-text">
          <p className="estet-tag">{t("Estetski tretmani", "Aesthetic treatments")}</p>
          <h1>{t("Prirodan, svetliji i skladan osmeh", "Natural, brighter and harmonious smile")}</h1>

          <p>
            {t(
              "Estetska stomatologija ima za cilj da osmeh učini lepšim, prirodnijim i skladnijim, uz očuvanje zdravlja i funkcije zuba. Zahvaljujući savremenim materijalima i tehnikama, moguće je postići dugotrajan i potpuno prirodan rezultat, bez agresivnih zahvata.",
              "Aesthetic dentistry aims to make the smile more attractive, natural and harmonious while preserving the health and function of the teeth. Thanks to modern materials and techniques, it is possible to achieve lasting and completely natural results without aggressive procedures."
            )}
          </p>
        </div>

        <div className="estet-hero-image">
          <img src={estetskiImg} alt={t("Estetski tretmani", "Aesthetic treatments")} />
        </div>
      </section>

      {/* GRID KARTICE – POJEDINAČNI TRETMANI */}
      <section className="estet-grid">
        {/* IZBELJIVANJE ZUBA */}
        <article className="estet-card">
          <h2>{t("Izbeljivanje zuba", "Teeth whitening")}</h2>
          <p>
            {t(
              "Izbeljivanje zuba predstavlja najjednostavniji način da se osveži i ulepša osmeh. Postupak je bezbedan i efikasan, a izvodi se uz kontrolu stomatologa – u ordinaciji ili kod kuće uz specijalne udlage i gelove.",
              "Teeth whitening is the simplest way to refresh and enhance the smile. The procedure is safe and effective and is performed under dentist supervision — in-office or at home using special trays and gels."
            )}
          </p>
          <p>
            {t(
              "Uklanjaju se površinske i dublje pigmentacije, a zubi postaju vidno belji i sjajniji, bez oštećenja gleđi.",
              "Surface and deeper stains are removed, leaving teeth visibly whiter and shinier without damaging the enamel."
            )}
          </p>
        </article>

        {/* ZAMENA TAMNIH PLOMBI */}
        <article className="estet-card">
          <h2>{t("Zamena tamnih plombi", "Replacement of dark fillings")}</h2>
          <p>
            {t(
              "Zamena tamnih plombi estetskim materijalima omogućava da se stari amalgamski ispuni zamene savremenim kompozitima koji se potpuno stapaju sa prirodnom bojom zuba.",
              "Replacing dark fillings with aesthetic materials allows old amalgam restorations to be replaced with modern composites that blend seamlessly with the natural tooth color."
            )}
          </p>
          <p>
            {t(
              "Na taj način postiže se lepši izgled, ali i bolja zaštita zubne strukture, jer moderni materijali zahtevaju minimalno brušenje i savršeno prianjaju uz zub.",
              "This achieves an improved appearance and better protection of tooth structure, as modern materials require minimal preparation and bond excellently to the tooth."
            )}
          </p>
        </article>

        {/* KERAMIČKE KRUNICE I MOSTOVI */}
        <article className="estet-card estet-card-accent">
          <h2>{t("Keramičke krunice i mostovi", "Ceramic crowns and bridges")}</h2>
          <p>
            {t(
              "Keramičke krunice i mostovi predstavljaju idealno rešenje za oštećene, estetski narušene ili izgubljene zube. Bezmetalna keramika obezbeđuje prirodnu boju, prozirnost i sjaj, čime se postiže savršena harmonija sa ostalim zubima.",
              "Ceramic crowns and bridges are ideal solutions for damaged, aesthetically compromised or missing teeth. Metal-free ceramics provide natural color, translucency and shine for perfect harmony with adjacent teeth."
            )}
          </p>
          <p>
            {t(
              "Osim izuzetne estetike, keramičke nadoknade su i veoma izdržljive, što ih čini dugotrajnim i funkcionalnim rešenjem.",
              "In addition to excellent aesthetics, ceramic restorations are highly durable, making them a long-lasting and functional solution."
            )}
          </p>
        </article>
      </section>
    </main>
  );
};

export default Estetika;
