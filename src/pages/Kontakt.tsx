import React from 'react';
import './Kontakt.css';

const Kontakt: React.FC = () => {
  return (
    <div className="kontakt-container">
      <h2>Kontakt</h2>
      <p>Adresa: Bulevar Cara Lazara 7a, 21000 Novi Sad, Srbija</p>
      <p>Telefon: +381 (0)21 6350 388</p>
      <p>Mobilni: +381 (0)65 3350 388</p>
      <p>E-mail: <a href="mailto:office@sp-papic.rs">office@sp-papic.rs</a></p>

      <div className="mapa-container">
        <a
          href="https://www.google.com/maps/place/Bulevar+Cara+Lazara+7a,+Novi+Sad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=Bulevar+Cara+Lazara+7a,Novi+Sad&zoom=15&size=600x300&markers=color:red|Bulevar+Cara+Lazara+7a,Novi+Sad&key=YOUR_API_KEY"
            alt="Mapa lokacije"
          />
        </a>
      </div>
    </div>
  );
};

export default Kontakt;
