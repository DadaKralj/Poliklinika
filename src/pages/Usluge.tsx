import React from 'react';
import './Usluge.css';

const Usluge: React.FC = () => {
  return (
    <div className="usluge-container">
      <h2>Naše Usluge</h2>
      <div className="usluge-lista">
        <div className="usluga">
          <h3>Opšti pregledi</h3>
          <p>Redovni pregledi za očuvanje zdravlja.</p>
        </div>
        <div className="usluga">
          <h3>Laboratorijske analize</h3>
          <p>Krv, urin, biohemijske analize.</p>
        </div>
        <div className="usluga">
          <h3>Specijalistički pregledi</h3>
          <p>Kardiologija, ortopedija, dermatologija.</p>
        </div>
      </div>
    </div>
  );
};

export default Usluge;
