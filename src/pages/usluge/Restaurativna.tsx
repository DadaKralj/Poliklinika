import React, { useEffect } from "react";
import "./Restaurativna.css";
import restaurativnaSlika from "../../pictures/rest.jpeg"; // prilagodi naziv ako je drugačiji
import { useLanguage } from "../../Context/LanguageContext";

const Restaurativna: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⬇️ Uzimamo globalni jezik
  const { language } = useLanguage();

  // ⬇️ Funkcija za prevod
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  return (
    <main className="rest-page">
      {/* HERO BLOK – RESTAURATIVNA STOMATOLOGIJA */}
      <section className="rest-hero">
        <div className="rest-hero-top">
          <div className="rest-hero-text">
          <p className="rest-tag">
            {t("Restaurativna stomatologija i endodoncija", "Restorative dentistry & endodontics")}
          </p>
          <h1>
            {t(
              "Očuvanje prirodnog zuba – od plombe do lečenja kanala",
              "Preserving the natural tooth — from fillings to root canal therapy"
            )}
          </h1>

          <p>
            {t(
              "Restaurativna stomatologija obuhvata sve postupke kojima se oštećeni zubi obnavljaju i vraćaju u prirodnu funkciju i izgled. Najčešći razlog za ove intervencije je karijes, ali i mehanička oštećenja zuba poput pukotina ili istrošenih površina.",
              "Restorative dentistry covers procedures that restore damaged teeth to their natural function and appearance. The most common cause is decay, but mechanical damage such as cracks or worn surfaces also requires treatment."
            )}
          </p>
          <p>
            {t(
              "Cilj terapije je da se očuva što više zdravog zubnog tkiva i spreči dalje propadanje. Nakon uklanjanja karijesa, oštećeni deo zuba nadoknađuje se ispunom (plombom) od savremenih estetskih materijala koji u potpunosti imitiraju prirodnu boju i oblik zuba.",
              "The goal is to preserve as much healthy tooth tissue as possible and prevent further deterioration. After removing decay, the damaged area is restored with fillings made of modern aesthetic materials that mimic natural tooth color and shape."
            )}
          </p>
          </div>

          <div className="rest-hero-image">
            <img
              src={restaurativnaSlika}
              alt={t("Restaurativna stomatologija i endodoncija", "Restorative dentistry & endodontics")}
            />
          </div>
        </div>

        <div className="rest-hero-bottom">
          <div className="rest-list-wrapper">
            <h2>{t("Kada je vreme za restaurativni tretman?", "When is it time for restorative treatment?")}</h2>
            <ul className="rest-list">
              <li>{t("pojava karijesa, tamnih ili belih mrlja na zubu,", "the appearance of cavities, dark or white spots on a tooth,")}</li>
              <li>{t("pukotine, naprsline ili istrošene žvačne površine,", "cracks, fractures or worn chewing surfaces,")}</li>
              <li>{t("osetljivost na hladno, toplo ili slatko,", "sensitivity to cold, heat or sweets,")}</li>
              <li>{t("želja da se popravi oblik i estetika zuba uz minimalno brušenje.", "desire to improve tooth shape and aesthetics with minimal preparation.")}</li>
            </ul>
            <p className="rest-paragraph">
              {t(
                "Ovaj vid lečenja primenjuje se dok je zub vitalan, tj. kada je „živac“ zdrav i nije došlo do upale. Redovne kontrole i pravovremena sanacija karijesa omogućavaju da se zub sačuva bez potrebe za složenijim zahvatima.",
                "This treatment is applied while the tooth is vital, i.e. when the pulp is healthy and not inflamed. Regular check-ups and timely treatment of decay allow the tooth to be preserved without the need for more complex procedures."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* DRUGI HERO BLOK – ENDODONCIJA */}
      <section className="rest-hero rest-hero-secondary">
        <div className="rest-hero-text">
          <h2>{t("Endodoncija (lečenje zuba)", "Endodontics (root canal treatment)")}</h2>

          <p>
            {t(
              "Kada karijes ili povreda prodru dublje i zahvate zubnu pulpu („živac“), dolazi do upale koja izaziva bol, osetljivost i otok. U tim slučajevima neophodno je sprovesti endodontsku terapiju – lečenje kanala korena zuba.",
              "When decay or trauma reaches the dental pulp, inflammation occurs causing pain, sensitivity and swelling. In these cases endodontic therapy — root canal treatment — is necessary."
            )}
          </p>
          <p>
            {t(
              "Tokom zahvata uklanja se upaljeno tkivo iz unutrašnjosti zuba, kanali se pažljivo čiste, dezinfikuju i zatvaraju specijalnim materijalom koji sprečava ponovnu infekciju. Lečen zub se zatim obnavlja ispunom ili krunicom, u zavisnosti od stepena oštećenja.",
              "During the procedure the inflamed tissue is removed from inside the tooth, canals are carefully cleaned, disinfected and sealed with special material to prevent reinfection. The treated tooth is then restored with a filling or crown depending on the extent of damage."
            )}
          </p>
          <p>
            {t(
              "Cilj endodontske terapije je da se zub sačuva u vilici što duže, bez bola i upale, i da se izbegne vađenje.",
              "The aim of endodontic therapy is to preserve the tooth in the jaw as long as possible, free from pain and inflammation, and to avoid extraction."
            )}
          </p>
        </div>
      </section>

      {/* GRID – DVE KARTICE JEDNA PORED DRUGE */}
      <section className="rest-grid">
        {/* ZAŠTO SAČUVATI SOPSTVENI ZUB */}
        <article className="rest-card">
          <h2>{t("Zašto je važno sačuvati sopstveni zub?", "Why is it important to save your natural tooth?")}</h2>
          <ul className="rest-list">
            <li>{t("prirodna funkcija žvakanja i govora,", "natural chewing and speaking function,")}</li>
            <li>{t("stabilnost zagriza bez dodatnih nadoknada,", "bite stability without additional restorations,")}</li>
            <li>{t("čuvanje kosti oko korena zuba,", "preservation of bone around the tooth root,")}</li>
            <li>{t("bolja osećajnost pri žvakanju u odnosu na veštačke nadoknade.", "better chewing sensitivity compared to artificial restorations.")}</li>
          </ul>
          <p className="rest-paragraph">
            {t(
              "Ništa ne može u potpunosti zameniti zdrav, sopstveni zub – zato je cilj svake terapije da ga sačuva kad god je to moguće.",
              "Nothing can fully replace a healthy natural tooth — therefore the goal of every treatment is to preserve it whenever possible."
            )}
          </p>
        </article>

        {/* NAŠ PRISTUP */}
        <article className="rest-card rest-card-accent">
          <h2>{t("Naš pristup u Stomatološkoj poliklinici Papić", "Our approach at Stomatološka poliklinika Papić")}</h2>
          <p>
            {t(
              "Svaka intervencija se planira individualno, uz upotrebu savremene dijagnostike, bezbolne anestezije i preciznih tehnika rada. Kombinujemo restaurativne i endodontske procedure kako bismo očuvali vitalnost i strukturu zuba kad god je to moguće.",
              "Each intervention is planned individually using modern diagnostics, painless anesthesia and precise techniques. We combine restorative and endodontic procedures to preserve tooth vitality and structure whenever possible."
            )}
          </p>
          <p>
            {t(
              "Naš pristup je uvek usmeren na očuvanje prirodnog zuba – jer ništa ne može u potpunosti zameniti zdrav, sopstveni zub.",
              "Our approach is always focused on preserving the natural tooth — because nothing can fully replace a healthy natural tooth."
            )}
          </p>
        </article>
      </section>
    </main>
  );
};

export default Restaurativna;
