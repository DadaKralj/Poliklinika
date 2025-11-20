import React from 'react';
import './service.css'; // Koristi iste stilove kao service sekcija

// Komponenta za prikaz proteznih usluga - specifična strana za protezu
const Protetika: React.FC = () => {
  // Niz sa specifičnim proteznim uslugama
  const proteticsServices = [
    {
      id: 1, // Jedinstveni identifikator
      name: 'Parcijalna proteza', // Naziv vrste proteze
      description: 'Zamena oštećenih zuba parcijalnom protezom', // Detaljno objašnjenje
      icon: '🦷', // Ikonica zuba
    },
    // ...existing items...
  ];

  return (
    // Glavna sekcija - koristi istu .services klasu kao ostalih usluga
    <section className="services">
      
      {/* Naslov sekcije */}
      <h1 className="services-title">Protetske Usluge</h1>

      {/* Kratkno objašnjenje o protezama */}
      <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '600px', textAlign: 'center', marginBottom: '2rem' }}>
        Nudi se kompletan spektar protetskih usluga za poboljšanje funkcije i estetike zubiju
      </p>

      {/* Kontejner sa kartticama - koristi istu klasu kao service.tsx */}
      <div className="services-container">
        
        {/* Map funkcija - iterira kroz sve proteznee usluge */}
        {proteticsServices.map((service) => (
          // Individualna kartica - identicna strukturi kao service.tsx
          <div key={service.id} className="service-card">
            
            {/* Ikonica proteze */}
            <div className="service-icon">{service.icon}</div>

            {/* Naziv tipa proteze */}
            <h2 className="service-name">{service.name}</h2>

            {/* Detaljno objašnjenje usluge */}
            <p className="service-description">{service.description}</p>

            {/* Kontakt dugme - klanja se kliniku za konsultaciju */}
            <a href="/contact" className="service-link">
              Zakažite konsultaciju
            </a>
          </div>
        ))}
      </div>

      {/* Dodatna sekcija sa važnim informacijama o protezama */}
      <div className="featured-services">
        
        {/* Naslov sa informacijom */}
        <h2 className="featured-title">Važne informacije</h2>

        {/* Lista sa korisnim savjetima */}
        <ul className="featured-list">
          <li className="featured-item">ℹ️ Dijagnostika i planiranje za svaku osobu posebno</li>
          <li className="featured-item">ℹ️ Visoko kvalitetni materijali i tehnologije</li>
          <li className="featured-item">ℹ️ Garancija na sve protetske radove</li>
          <li className="featured-item">ℹ️ Besplatne dodatne provjere nakon instalacije</li>
        </ul>
      </div>
    </section>
  );
};

// Izvoz komponente za upotrebu na webu
export default Protetika;
