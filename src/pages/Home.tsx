import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import faceImage from '../pictures/face.jpg';
import protetikaIcon from '../pictures/protetika.png';
import hirurgijaIcon from '../pictures/protetika.png';
import ortodoncijaIcon from '../pictures/ortodoncija.jpg';
import restauracijaIcon from '../pictures/protetika.png';
import slikaPoliklinike from '../pictures/slikaPoliklinike.jpg';

const Home: React.FC = () => {
  return (
    <div className="home-wrapper">
      <section id="pocetna" className="hero-section">
        <div className="text-section">
          <h1>Stomatološka poliklinika Papić</h1>
          <p>Kombinujemo najsavremenije metode stomatologije sa pažnjom prema svakom detalju – jer vaš osmeh zaslužuje najbolje.</p>
        </div>
        <div className="image-section">
          <img src={faceImage} alt="Stomatološka poliklinika Papić" />
        </div>
      </section>

      <section id="usluge" className="glavne-usluge">
        <h2>Glavne usluge</h2>
        <div className="ikone">
          <Link to="/usluge" className="ikona-link">
            <img src={protetikaIcon} alt="Protetika" />
            <p>Protetika</p>
          </Link>
          <Link to="/usluge" className="ikona-link">
            <img src={hirurgijaIcon} alt="Hirurgija" />
            <p>Hirurgija</p>
          </Link>
          <Link to="/usluge" className="ikona-link">
            <div 
              className="ikona" 
              style={{ backgroundImage: `url(${ortodoncijaIcon})` }}
            >
              <p>Ortodoncija</p>
            </div>
          </Link>
          <Link to="/usluge" className="ikona-link">
            <img src={restauracijaIcon} alt="Restauracija" />
            <p>Restaurativna stomatologija</p>
          </Link>
        </div>
        
        <div className="sve-usluge-btn-wrapper">
          <Link to="/usluge" className="sve-usluge-btn">
            Pogledajte sve usluge
          </Link> 
        </div>
      </section>

      <section id="onama" className="onama">
        <h2>O nama</h2>
        <div className="onama-content">
          <div className="onama-text">
            <h3>OSNIVANJE</h3>
            <p>Stomatološka Poliklinika Papić je osnovana 1992. godine kao prva privatna stomatološka poliklinika u Novom Sadu.</p>
            <p>Posle 27 godina uspešnog rada, sa puno elana dočekujemo nove izazove, značajno ojačani kadrovski, organizaciono i tehnički.</p>
            <p>Najvećim uspehom smatramo preko 100.000 uspešno saniranih i zadovoljnih pacijenata, bez i jednog spora i bez i jednog negativnog nalaza ili primedbe na rad Poliklinike od inspekcijskih nadzora. Želimo da naglasimo da nije bilo ni jedne primedbe inostranih komisija na radove rađene za osiguranike u inostranstvu.</p>
            <p>Stomatologija ide krupnim korakom napred. Da bi pratili struku i nauku i nastavili da radimo uspešno i u narednom periodu, napravili smo sve potrebne kadrovske i organizacione promene u cilju poboljšanja i proširenja usluga.</p>
            <h3>LOKACIJA I PROSTOR</h3>
            <p>Poliklinika se nalazi na atraktivnoj lokaciji, u sopstvenom poslovnom prostoru površine 200m2, namenski građenom za zdravstvenu ustanovu i opremljenom po najvišim standardima.</p>
          </div>
          <div className="onama-image">
            <img src={slikaPoliklinike} alt="Poliklinika Papić" />
          </div>
        </div>
      </section>




      <section id="kontakt" className="kontakt">
        <h2>Kontakt</h2>
        <div className="kontakt-item">📍 Bulevar Cara Lazara 7a, Novi Sad</div>
        <div className="kontakt-item">☎️ +381 21 6350 388</div>
        <div className="kontakt-item">📱 +381 65 3350 388</div>
        <div className="kontakt-item">✉️ office@sp-papic.rs</div>
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
