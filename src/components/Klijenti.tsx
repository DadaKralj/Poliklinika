import React, { useState, useEffect } from 'react';
import './Klijenti.css';
import bgImage from '../pictures/office.png';

const komentari = [
  {
    tekst: 'Dugo sam tražila ordinaciju kojoj mogu verovati. U Polikliniku Papić sam došla na preporuku koleginice i oduševila se profesionalnošću i pristupom doktorke Katarine. Sve pohvale!',
    ime: 'Ivana Petrović',
  },
  {
    tekst: 'Imala sam veliki strah od zubara, ali zahvaljujući smirenosti i stručnosti doktorke Katarine, moj strah je nestao. Ordinacija je savremeno opremljena i veoma čista. Preporučujem svima!',
    ime: 'Maja Lukić',
  },
  {
    tekst: 'Cela moja porodica ide u Polikliniku Papić. Doktorka Katarina i njen tim su izuzetno ljubazni i posvećeni. Posebno cenim detaljna objašnjenja i pažnju prema svakom pacijentu.',
    ime: 'Miloš Jovanović',
  },
  {
    tekst: 'Poliklinika Papić me je prijatno iznenadila – odlična organizacija, prijatno osoblje i odlična komunikacija. Osećala sam se sigurno i zbrinuto tokom celog procesa.',
    ime: 'Jelena Stanković',
  },
];

const Klijenti: React.FC = () => {
  // 🔢 Pamti indeks "centralne" (trenutno prikazane) kartice
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🎞️ Omogućava ili onemogućava CSS tranziciju
  // Kad je false, postavljamo translateX bez animacije (npr. reset pozicije)
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // ↔️ Pamti smer animacije ('left' znači sledeće kartice dolaze s desne strane)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  // ⏩ Funkcija za klik na desnu strelicu (sledeće kartice)
  const sledeci = () => {
    setSlideDirection('left');          // Idemo ulevo → nove kartice dolaze s desne strane
    setTransitionEnabled(true);         // Omogući tranziciju jer želimo animaciju
    setCurrentIndex((prev) => (prev + 1) % komentari.length); // Pomeri indeks napred (ciklični)
  };

  // ⏪ Funkcija za klik na levu strelicu (prethodne kartice)
  const prethodni = () => {
    setSlideDirection('right');         // Idemo udesno → nove kartice dolaze s leve strane
    setTransitionEnabled(true);         // Omogući tranziciju
    setCurrentIndex((prev) => (prev - 1 + komentari.length) % komentari.length); // Pomeri unazad (sa ciklusom)
  };

  // 🔁 Funkcija koja daje indeks kartice sa određenim offsetom u odnosu na currentIndex
  // Npr: offset -1 → prethodna, 0 → trenutna, +1 → sledeća
  const getIndex = (offset: number) =>
    (currentIndex + offset + komentari.length) % komentari.length;

useEffect(() => {
  // ⛔ Ako nije postavljen pravac klizanja, ništa ne radi
  if (slideDirection === null) return;

  // 🎯 Nađi element trake (track) u DOM-u
  const track = document.querySelector('.carousel-track') as HTMLElement;
  if (!track) return;

  // 🚫 Isključi animaciju (da bi postavio početnu poziciju bez prelaza)
  track.style.transition = 'none';

  // 🎬 Postavi početnu poziciju:
  // Ako idemo ulevo (sledeći), pomeraj traku udesno (da kartice izgledaju kao da dolaze s desne strane)
  // Ako idemo udesno (prethodni), pomeraj traku ulevo (da kartice dolaze s leve strane)
  track.style.transform = `translateX(${slideDirection === 'left' ? '50%' : '-50%'})`;

  // 🕐 U sledećem frame-u (posle jedne repaint faze) animiraj traku nazad na sredinu
  // Ovo pravi efekat klizanja iz desna/levog pravca
  requestAnimationFrame(() => {
    track.style.transition = 'transform 1.5s ease'; // Animacija 0.9s
    track.style.transform = 'translateX(0%)';       // Klizi nazad na centar (0%)
  });
}, [currentIndex]); // ⚠️ Ova linija je uzrok tvog problema!



  return (
      // Glavni odeljak sekcije za prikaz zadovoljnih klijenata
    <section
      className="klijenti"
      style={{
              // Postavlja kombinaciju providnog belog sloja (35%) i pozadinske slike
        backgroundImage: `linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255,0.35)), url(${bgImage})`,
      }}
    >
      <h2>Zadovoljni klijenti</h2>
          {/* Omotač za carousel komponentu: strelice + prikaz komentara */}
      <div className="carousel">
              {/* Leva strelica za kretanje udesno (prethodni komentar) */}
        <button className="arrow" onClick={prethodni}>
          &#8592;
        </button>
              {/* Viewport: prikazuje samo vidljive kartice; višak sadržaja je sakriven */}
        <div className="carousel-viewport">
                  {/* Glavni horizontalni kontejner koji sadrži sve kartice i pomera se levo/desno */}
          <div
            className="carousel-track"
            style={{
                          // Transformacija: trenutno pozicioniran na početnoj poziciji (centar)
              transform: `translateX(0%)`,
                          // Dodajemo animaciju pomeranja samo ako je `transitionEnabled` = true
              transition: transitionEnabled ? 'transform 0.6s ease' : 'none',
            }}
          >   {/* Generišemo 2 kartice (trenutnu i sledeću) pomoću map funkcije */}
            {[0, 1].map((offset) => {
               // Izračunaj tačan indeks na osnovu currentIndex i offseta
              const index = getIndex(offset)
              // Dohvati komentar iz niza komentara
              const komentar = komentari[index];
              return (
                // Prikaz jedne klijentske kartice
                <div className="klijent-kartica" key={`${index}-${offset}`}>
                  <div className="zvezdice">★★★★★</div>
                  <p className="tekst">{komentar.tekst}</p>
                  <p className="ime">{komentar.ime}</p>
                </div>
              );
            })}
          </div>
        </div>
      {/* Desna strelica za kretanje ulevo (sledeći komentar) */}
        <button className="arrow" onClick={sledeci}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Klijenti;
