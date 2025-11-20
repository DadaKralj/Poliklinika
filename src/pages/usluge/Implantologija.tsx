import React, { useEffect } from "react";
import "./Implantologija.css";
import implantImg from "../../pictures/services_prosthetics_implants_smile.png"; // promeni po potrebi
import { useLanguage } from "../../Context/LanguageContext";

const Implantologija: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⬇️ Uzimamo globalni jezik
  const { language } = useLanguage();

  // ⬇️ Funkcija za prevod
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <main className="impl-page">
      {/* HERO BLOK – IMPLANTOLOGIJA */}
      <section className="impl-hero">
        <div className="impl-hero-text">
          <p className="impl-tag">{t("Implantologija", "Implantology")}</p>
          <h1>
            {t(
              "Trajno i prirodno rešenje za nedostatak zuba",
              "Permanent and natural solution for missing teeth"
            )}
          </h1>

          <p>
            {t(
              "Implantologija je grana stomatologije koja se bavi nadoknadom izgubljenih zuba pomoću dentalnih implantata. Implantat je mali titanijumski šraf koji se hirurški postavlja u kost vilice i preuzima ulogu prirodnog korena zuba. Nakon perioda srastanja implantata sa kosti, na njega se postavlja nadogradnja i krunica, čime se postiže potpuno prirodan izgled i funkcija zuba.",
              "Implantology is the branch of dentistry that replaces missing teeth using dental implants. An implant is a small titanium screw surgically placed into the jawbone acting as a natural tooth root. After osseointegration, an abutment and crown are attached, restoring a natural appearance and function."
            )}
          </p>

          <p>
            {t(
              "Ugradnja implantata omogućava trajno i stabilno rešenje u slučajevima kada nedostaje jedan, više ili svi zubi. Za razliku od mostova, implanti ne zahtevaju brušenje susednih zuba i pružaju osećaj kao da su u pitanju sopstveni zubi.",
              "Implant placement provides a permanent and stable solution when one, several or all teeth are missing. Unlike bridges, implants do not require preparation of adjacent teeth and feel like natural teeth."
            )}
          </p>

          <p className="impl-note">
            {t(
              "Osim estetske uloge, implantati čuvaju strukturu vilice i pravilnu funkciju žvakanja.",
              "Besides aesthetics, implants preserve jaw structure and proper chewing function."
            )}
          </p>
        </div>

        <div className="impl-hero-image">
          <img
            src={implantImg}
            alt={t("Dentalni implantati", "Dental implants")}
          />
        </div>
      </section>

      {/* DRUGI BLOK – ALL-ON-4 */}
      <section className="impl-hero impl-hero-secondary">
        <div className="impl-hero-text">
          <h2>
            {t(
              "All-on-4 – kompletan osmeh na samo četiri implanta",
              "All-on-4 – a full smile on only four implants"
            )}
          </h2>

          <p>
            {t(
              "Jedan od najmodernijih i najefikasnijih načina potpune rekonstrukcije zuba kod potpuno bezubih pacijenata jeste sistem All-on-4. Kod ove metode cela proteza jedne vilice oslanja se na samo četiri strateški postavljena implantata.",
              "One of the most modern and effective full-arch reconstruction methods for completely edentulous patients is the All-on-4 system. In this method, a full-arch prosthesis is supported by just four strategically placed implants."
            )}
          </p>

          <p>
            {t(
              "Zbog posebnog položaja implantata, zahvat je minimalno invazivan, često bez potrebe za dodatnim koštanim intervencijama, a pacijent u kratkom roku dobija fiksan, stabilan i funkcionalan osmeh.",
              "Thanks to the implant positioning, the procedure is minimally invasive, often avoiding bone grafting, and the patient receives a fixed, stable and functional smile in a short time."
            )}
          </p>
        </div>
      </section>

      {/* GRID KARTICE – NAŠA TERAPIJA + ALL-ON-4 */}
      <section className="impl-grid">
        <article className="impl-card">
          <h2>{t("Zašto izabrati implantate?", "Why choose implants?")}</h2>
          <ul className="impl-list">
            <li>
              {t(
                "ne zahtevaju brušenje susednih zuba,",
                "do not require preparation of adjacent teeth,"
              )}
            </li>
            <li>
              {t(
                "sprečavaju gubitak kosti vilice,",
                "prevent jawbone loss,"
              )}
            </li>
            <li>
              {t(
                "izuzetna stabilnost i osećaj prirodnih zuba,",
                "excellent stability and natural feel,"
              )}
            </li>
            <li>
              {t(
                "dugoročna i estetski superiorna nadoknada.",
                "long-term and aesthetically superior restoration."
              )}
            </li>
          </ul>
          <p className="impl-paragraph">
            {t(
              "Implantati su danas zlatni standard u nadoknadi izgubljenih zuba zbog trajnosti i funkcionalnosti koje pružaju.",
              "Today implants are the gold standard for tooth replacement due to their durability and functionality."
            )}
          </p>
        </article>

        <article className="impl-card impl-card-accent">
          <h2>
            {t(
              "Naš pristup implantološkoj terapiji",
              "Our approach to implant treatment"
            )}
          </h2>
          <p>
            {t(
              "U našoj ordinaciji svaka implantološka terapija planira se individualno, uz detaljan pregled, analizu rendgenskog snimka i procenu kvaliteta kosti. Koristimo savremene materijale i tehnike koje omogućavaju bezbolan i siguran zahvat.",
              "In our clinic every implant treatment is planned individually with a detailed examination, radiographic analysis and bone quality assessment. We use modern materials and techniques for safe and comfortable procedures."
            )}
          </p>
          <p>
            {t(
              "Cilj nam je dugoročan, stabilan i prirodan rezultat koji vraća sigurnost, funkciju i samopouzdanje.",
              "Our goal is a long-lasting, stable and natural result that restores confidence, function and self-esteem."
            )}
          </p>
        </article>
      </section>
    </main>
  );
};

export default Implantologija;
