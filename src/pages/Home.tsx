import React from 'react';
import './Home.css';

// slike za "O nama"
import slikaPoliklinike from '../pictures/slikaPoliklinike.jpg';
import slikaDoktora from '../pictures/tim_doktora.jpg';

// home-only komponente
import Hero from './Home/Hero';
import Klijenti from './Home/Klijenti';
import { UslugePreview } from './usluge/Service';
import OnamaSekcija from './Home/OnamaSekcija';
import { StatistikaSekcija } from './Home/StartCircle';
import MapaSekcija from './Home/MapaSekcija'; // ✅ nova komponenta za mapu

const Home: React.FC = () => {
  return (
    <div className="home-wrapper">
      {/* HERO sekcija */}
      <Hero />

      {/* Glavne usluge (preview kartice + dugme) */}
      <UslugePreview />

      {/* O nama sekcija */}
      <OnamaSekcija
        slikaPoliklinike={slikaPoliklinike}
        slikaDoktora={slikaDoktora}
      />

      {/* Statistika – iz StartCircle.tsx */}
      <StatistikaSekcija />

      {/* Iskustva klijenata */}
      <Klijenti />

      {/* Mapa sekcija (izdvojena u poseban fajl) */}
      <MapaSekcija />
    </div>
  );
};

export default Home;
