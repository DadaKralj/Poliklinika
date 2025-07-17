import React from 'react';
import './Home.css';
import faceImage from '../pictures/face.jpg';
import protetikaIcon from '../pictures/protetika.png';
import hirurgijaIcon from '../pictures/protetika.png';
import ortodoncijaIcon from '../pictures/protetika.png';
import restauracijaIcon from '../pictures/protetika.png';

const Home: React.FC = () => {
  return (
    <div className="home-wrapper">
      <section id="pocetna" className="hero-section">
        <div className="text-section">
          <h1>Dobrodošli u Polikliniku</h1>
          <p>Zakazivanje pregleda, konsultacije i još mnogo toga.</p>
        </div>
        <div className="image-section">
          <img src={faceImage} alt="Poliklinika" />
        </div>
      </section>

      <section id="usluge" className="glavne-usluge">
        <h2>Glavne usluge</h2>
        <div className="ikone">
          <div className="ikona">
            <img src={protetikaIcon} alt="Protetika" />
            <p>Protetika</p>
          </div>
          <div className="ikona">
            <img src={hirurgijaIcon} alt="Hirurgija" />
            <p>Hirurgija</p>
          </div>
          <div className="ikona">
            <img src={ortodoncijaIcon} alt="Ortodoncija" />
            <p>Ortodoncija</p>
          </div>
          <div className="ikona">
            <img src={restauracijaIcon} alt="Restauracija" />
            <p>Restaurativna stomatologija</p>
          </div>
        </div>
      </section>

      <section id="onama" className="onama">
        <h2>O nama</h2>
        <p>Mi smo moderna poliklinika posvećena vašem zdravlju.</p>
      </section>

      <section id="kontakt" className="kontakt">
        <h2>Kontakt</h2>
        <p>Adresa: Bulevar Cara Lazara 7a, Novi Sad</p>
        <p>Telefon: +381 21 6350 388</p>
        <p>Mobilni: +381 65 3350 388</p>
        <p>Email: office@sp-papic.rs</p>
      </section>

       <div className="mapa">
        <iframe
          title="Google mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.4566423437486!2d19.84298421577414!3d45.251706479098915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b106b93d93835%3A0x3c4a4b7e98ab828b!2sBulevar%20Cara%20Lazara%207a%2C%20Novi%20Sad!5e0!3m2!1sen!2srs!4v1624182616699!5m2!1sen!2srs"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
