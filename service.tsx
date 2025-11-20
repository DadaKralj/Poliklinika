import React from 'react';
import './service.css';

// Glavna komponenta za prikaz usluga - ovo je stranica/sekcija sa svim uslugama
const Services: React.FC = () => {
  // Niz sa podacima o svim uslugama - svaka usluga ima naziv, opis i ikonicu
  const servicesData = [
    {
      id: 1, // Jedinstveni ID za svaku uslugu
      name: 'Opšta medicina', // Naziv usluge
      description: 'Preventivni pregledi i lečenje opštih bolesti', // Detaljan opis
      icon: '🏥', // Emoji ikonica
    },
    // ...existing data items...
  ];

  return (
    // Glavna sekcija - koristi CSS klasu .services za stilizovanje
    <section className="services">
      
      {/* Naslov glavne sekcije */}
      <h1 className="services-title">Naše Usluge</h1>

      {/* Kontejner koji sadrži sve kartice sa uslugama */}
      <div className="services-container">
        
        {/* Map funkcija - prolazi kroz niz servicesData i pravi karticu za svaku uslugu */}
        {servicesData.map((service) => (
          // Individualna kartica - koristi .service-card klasu
          <div key={service.id} className="service-card">
            
            {/* Ikonica unutar kartice */}
            <div className="service-icon">{service.icon}</div>

            {/* Naziv usluge */}
            <h2 className="service-name">{service.name}</h2>

            {/* Opis usluge */}
            <p className="service-description">{service.description}</p>

            {/* Dugme/link sa "Više informacija" - navigira na detaljnu stranicu */}
            <a href={`/service/${service.id}`} className="service-link">
              Više informacija
            </a>
          </div>
        ))}
      </div>

      {/* Sekcija sa posebno istaknutim uslugama */}
      <div className="featured-services">
        
        {/* Naslov za istaknute usluge */}
        <h2 className="featured-title">Zašto odabrati nas?</h2>

        {/* Lista sa prednostima - koristi .featured-list klasu */}
        <ul className="featured-list">
          
          {/* Individualne stavke sa prednostima */}
          <li className="featured-item">✓ Iskusni lekari sa godinama prakse</li>
          <li className="featured-item">✓ Moderna medicinska oprema</li>
          <li className="featured-item">✓ Brzo i efikasno lečenje</li>
          <li className="featured-item">✓ Pristupačne cene usluga</li>
        </ul>
      </div>
    </section>
  );
};

// Izvozimo komponentu kako bi je mogli koristiti drugde u aplikaciji
export default Services;
