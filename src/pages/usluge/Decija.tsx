import React, { useEffect } from "react";
import "./Decija.css";
import img from "../../pictures/decija.jpg";
import { useLanguage } from "../../Context/LanguageContext";

const Decija: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⬇️ Uzimamo globalni jezik
  const { language } = useLanguage();

  // ⬇️ Funkcija za prevod
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <main className="decija-page">
      {/* HERO BLOK – DEČIJA STOMATOLOGIJA */}
      <section className="decija-hero">
        <div className="decija-hero-top">
          <div className="decija-hero-text">
            <p className="decija-tag">
              {t(
                "Dečija i preventivna stomatologija",
                "Pediatric & preventive dentistry"
              )}
            </p>
            <h1>
              {t(
                "Zdrav osmeh od najranijeg detinjstva",
                "Healthy smile from early childhood"
              )}
            </h1>

            <p>
              {t(
                "Dečija stomatologija posvećena je zdravlju zuba dece od najranijeg uzrasta do adolescencije. Prvi pregledi bi trebalo da počnu već sa pojavom prvih mlečnih zuba, kako bi dete steklo naviku odlaska kod stomatologa i razvilo poverenje bez straha.",
                "Pediatric dentistry is dedicated to the dental health of children from infancy through adolescence. Initial check-ups should begin with the eruption of the first baby teeth so a child develops the habit of visiting the dentist and feels comfortable."
              )}
            </p>
            <p>
              {t(
                "Mlečni zubi su važni jer čuvaju prostor za stalne zube, omogućavaju pravilno žvakanje i normalan razvoj govora. Zato ih je potrebno negovati i lečiti isto kao i stalne zube.",
                "Primary teeth are important because they hold space for permanent teeth, enable proper chewing, and support normal speech development. They should be cared for and treated just like permanent teeth."
              )}
            </p>
          </div>

          <div className="decija-hero-image">
            <img
              src={img}
              alt={t("Dečija stomatologija", "Pediatric dentistry")}
            />
          </div>
        </div>

        <div className="decija-hero-bottom">
          <div className="decija-list-wrapper">
            <h2>
              {t(
                "Šta obuhvata dečija stomatologija?",
                "What does pediatric dentistry include?"
              )}
            </h2>
            <ul className="decija-list">
              <li>
                {t(
                  "preglede i praćenje rasta i razvoja vilica,",
                  "examinations and monitoring of jaw growth and development,"
                )}
              </li>
              <li>
                {t(
                  "sanaciju karijesa mlečnih i stalnih zuba,",
                  "treatment of cavities in primary and permanent teeth,"
                )}
              </li>
              <li>
                {t("lečenje pulpe kod dece,", "pulp therapy for children,")}
              </li>
              <li>
                {t(
                  "edukaciju o pravilnoj oralnoj higijeni,",
                  "education on proper oral hygiene,"
                )}
              </li>
              <li>
                {t(
                  "stvaranje pozitivnih navika kroz igru i razgovor.",
                  "building positive habits through play and conversation."
                )}
              </li>
            </ul>
            <p className="decija-note">
              {t(
                "Naš cilj je da dete od malih nogu stekne zdrave navike, razume važnost redovnih pregleda i održi zdrav osmeh tokom celog života.",
                "Our goal is for children to develop healthy habits from an early age, understand the importance of regular check-ups, and maintain a healthy smile throughout life."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* DRUGI HERO BLOK – PREVENTIVNA STOMATOLOGIJA */}
      <section className="decija-hero decija-hero-secondary">
        <div className="decija-hero-text">
          <h2>{t("Preventivna stomatologija", "Preventive dentistry")}</h2>

          <p>
            {t(
              "Preventivna stomatologija je osnova očuvanja zdravih zuba i desni tokom celog života. Ona podrazumeva redovne kontrole, profesionalno čišćenje zuba, uklanjanje kamenca i mekih naslaga, kao i poliranje zubnih površina.",
              "Preventive dentistry is the foundation for keeping teeth and gums healthy throughout life. It includes regular check-ups, professional cleanings, removal of tartar and soft deposits, and polishing of tooth surfaces."
            )}
          </p>

          <p>
            {t(
              "Kod dece se primenjuju dodatne preventivne mere poput zalivanja fisura – zaštite dubokih fisura na stalnim zubima od karijesa, kao i fluoridacije koja jača gleđ i povećava otpornost zuba.",
              "For children, additional preventive measures are used such as fissure sealing—a protection for deep grooves on permanent teeth against cavities—and fluoride treatments that strengthen enamel and increase tooth resistance."
            )}
          </p>

          <p className="decija-note">
            {t(
              "Redovni pregledi, pravilna oralna higijena i edukacija o pravilnim navikama najbolji su način da se spreče ozbiljniji problemi, a lečenje svede na minimum.",
              "Regular check-ups, proper oral hygiene, and education on good habits are the best ways to prevent more serious problems and minimize the need for treatment."
            )}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Decija;
