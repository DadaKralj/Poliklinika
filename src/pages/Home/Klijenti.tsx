import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
import bgImage from '../../pictures/poliklinika.jpg';
import './Klijenti.css';
import { useLanguage } from "../../Context/LanguageContext";

const komentari = [
  {
    ime: 'Svetozar J.',
    tekst_sr:
      'Pacijent sam Poliklinike Papić više od četvrt veka. Pre 21 godinu urađena mi je keramika na mojim zubima. Umesto garantnog roka od 5, izdržala je 21 godinu. Upravo mi je postavljena nova keramika i oduševljen sam. Sve pohvale organizaciji rada i specijalističkom timu.',
    tekst_en:
      "I've been a patient at Poliklinika Papić for over a quarter of a century. Twenty-one years ago I received ceramic restorations. Instead of a 5-year warranty they lasted 21 years. I've just had new ceramic work done and I'm thrilled. Compliments to the organization and the specialist team.",
  },
  {
    ime: 'Petar O.',
    tekst_sr:
      'Sjajni osoblje, kako lekari i tako i sestre, usluga profesionalna i veoma kvalitetna sa vrhunskim materijalima, higijena na najvišem nivou. Zakazivanje funkcioniše odlično, nema čekanja. Sve pohvale i preporuke za Polikliniku i osoblje.',
    tekst_en:
      'Excellent staff — both doctors and nurses — professional service with top-quality materials and impeccable hygiene. Appointment scheduling works great, no waiting. Highly recommended.',
  },
  {
    ime: 'Jovana D.',
    tekst_sr:
      'Sve pohvale za izuzetnu profesionalnost stručnog tima Poliklinike! Sjajan tim stručnjaka specijalista i ljubaznog osoblja, koji se maksimalno i detaljno posvećuje svakom pacijentu! Raduje me sledeća kontrola!',
    tekst_en:
      'Kudos for the outstanding professionalism of the clinic team! Great specialists and friendly staff who dedicate themselves to each patient. Looking forward to the next check-up!',
  },
  {
    ime: 'Katarina P.',
    tekst_sr:
      'Sve pohvale za polikliniku i sve zaposlene. Odlazak kod stomatologa mi više nije bauk. Stomatolozi su veoma stručni, pedantni u svom poslu, trude se da svaka intervencija što lakše i bezbolnije prođe. Svakom bih preporučila.',
    tekst_en:
      'Compliments to the clinic and all employees. Visiting the dentist is no longer scary. The dentists are very skilled and meticulous, striving to make each procedure as easy and painless as possible. I would recommend them to everyone.',
  },
];

const TRANSITION_MS = 500;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

const Klijenti: React.FC = () => {
  const { language } = useLanguage();
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  const n = komentari.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const viewportRef = useRef<HTMLDivElement>(null);

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(2);
  const [stepPx, setStepPx] = useState<number | null>(null);
  //const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  // Mjerenje kartice i viewport-a (samo kada se komponenta montira ili resize)
  useLayoutEffect(() => {
    function measure() {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;

      const cards = cardsRef.current;
      const firstCard = cards[0];
      if (!firstCard) return;

      const cardRect = firstCard.getBoundingClientRect();
      const cardStyles = getComputedStyle(firstCard);
      const marginRight = parseFloat(cardStyles.marginRight || '0');
      const cardWidth = cardRect.width;
      const newStep = Math.round(cardWidth + marginRight);

      const vpWidth = viewport.clientWidth;
      let newCardsVisible = 2;
      if (vpWidth < 768) {
        newCardsVisible = 1;
      }

      setStepPx(newStep);
      setCardsVisible(newCardsVisible);
      //setViewportWidth(vpWidth);
    }

    // Malo čekanja da se DOM stabiliziraj
    const timer = setTimeout(() => {
      measure();
    }, 100);

    const ro = new ResizeObserver(() => {
      measure();
    });

    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener('resize', measure);

    return () => {
      clearTimeout(timer);
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  // Inicijalno pozicioniranje nakon što se stepPx odredi
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || stepPx === null) return;

    track.style.transition = 'none';
    track.style.transform = `translate3d(-${stepPx}px, 0, 0)`;
  }, [stepPx]);

  // Animacija prema DESNO (next)
  const slideNext = useCallback(() => {
    if (animating || stepPx === null) return;
    setAnimating(true);

    const track = trackRef.current!;
    const nextIdx = mod(current + 1, n);

    // 1) ODMAH ažuriraj state - kartice će se rendirati sa novim indexima
    setCurrent(nextIdx);

    // 2) Start animacije s x=0
    track.style.transition = 'none';
    track.style.transform = 'translate3d(0px, 0, 0)';

    // 3) Reflow - forsiraj browser da nacrtaj početno stanje
    track.offsetHeight;

    // 4) Uključi animaciju
    track.style.transition = `transform ${TRANSITION_MS}ms ease-in-out`;
    track.style.transform = `translate3d(-${stepPx}px, 0, 0)`;

    // 5) Nakon animacije, resetuj bez tranzicije
    const onEnd = () => {
      track.removeEventListener('transitionend', onEnd);
      track.style.transition = 'none';
      track.style.transform = `translate3d(-${stepPx}px, 0, 0)`;
      setAnimating(false);
    };

    track.addEventListener('transitionend', onEnd, { once: true });
  }, [current, n, stepPx, animating]);

  // Animacija prema LIJEVO (prev)
  const slidePrev = useCallback(() => {
    if (animating || stepPx === null) return;
    setAnimating(true);

    const track = trackRef.current!;
    const prevIdx = mod(current - 1, n);

    // 1) ODMAH ažuriraj state - kartice će se rendirati sa novim indexima
    setCurrent(prevIdx);

    // 2) Postavi početnu poziciju na -2*stepPx (jer smo dodali karticu sa leve strane)
    track.style.transition = 'none';
    track.style.transform = `translate3d(-${2 * stepPx}px, 0, 0)`;

    // 3) Forsiraj reflow - da browser primeni početno stanje
    track.offsetHeight;

    // 4) Uključi animaciju i animiraj do -stepPx (normalna pozicija)
    track.style.transition = `transform ${TRANSITION_MS}ms ease-in-out`;
    track.style.transform = `translate3d(-${stepPx}px, 0, 0)`;

    // 5) Nakon animacije, resetuj bez tranzicije
    const onEnd = () => {
      track.removeEventListener('transitionend', onEnd);
      track.style.transition = 'none';
      track.style.transform = `translate3d(-${stepPx}px, 0, 0)`;
      setAnimating(false);
    };

    track.addEventListener('transitionend', onEnd, { once: true });
  }, [current, n, stepPx, animating]);



  // Izračunam koje kartice trebam renderirati
  const getVisibleCards = () => {
    const cards = [];
    // 1 prije, 2+ trenutne, 1 nakon
    for (let i = -1; i < cardsVisible + 1; i++) {
      cards.push(mod(current + i, n));
    }
    return cards;
  };

  const visibleCardIndices = getVisibleCards();

  return (
    <section className="klijenti" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="subtitle">{t('UTISCI', 'REVIEWS')}</div>
      <h2>{t('ISKUSTVA I PREPORUKE PACIJENATA', 'PATIENT EXPERIENCES & RECOMMENDATIONS')}</h2>

      <div className="carousel">
        <button
          className="arrow"
          onClick={slidePrev}
          aria-label={t('Prethodni utisci', 'Previous reviews')}
          disabled={animating}
        >
          &#8592;
        </button>

        <div className="carousel-viewport" ref={viewportRef}>
          <div className="carousel-track" ref={trackRef}>
            {visibleCardIndices.map((idx, i) => {
              const k = komentari[idx];
              return (
                <div
                  className="klijent-kartica"
                  key={`k-${idx}-${i}`}
                  ref={(el) => {
                    if (cardsRef.current) cardsRef.current[i] = el;
                  }}
                >
                  <div className="ime">{k.ime}</div>
                  <div className="zvezdice" aria-hidden="true">★★★★★</div>
                  <div className="tekst">{t(k.tekst_sr, k.tekst_en)}</div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          className="arrow"
          onClick={slideNext}
          aria-label={t('Sledeći utisci', 'Next reviews')}
          disabled={animating}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Klijenti;


