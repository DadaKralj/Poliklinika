import React from 'react';
import './Usluge.css';

const Usluge: React.FC = () => {
  return (
    <div className="usluge-container">
      <h1>Detaljne usluge</h1>
      <ul>
        <li>Dijagnostika</li>
        <li>Edukacija pacijenata</li>
        <li>Dečija i preventivna stomatologija</li>
        <li>Čišćenje kamenca, poliranje i beljenje zuba</li>
        <li>Obrada i sanacija kanala korena zuba</li>
        <li>Sanacija upale mekih tkiva</li>
        <li>Protetika</li>
        <li>Implantologija</li>
        <li>Ortopedija vilica i zuba – fiksna i mobilna</li>
        <li>Hirurgija</li>
      </ul>
    </div>
  );
};

export default Usluge;
