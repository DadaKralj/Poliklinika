import React from "react";

const MapaSekcija: React.FC = () => {
  return (
    <div className="mapa">
      <iframe
        title="Google mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.1439032598614!2d19.843985375571087!3d45.24488274804618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10125ef69107%3A0x6ab323de99b6943a!2z0KHRgtC-0LzQsNGC0L7Qu9C-0YjQutCwINCf0L7Qu9C40LrQu9C40L3QuNC60LAg0J_QsNC_0LjRmw!5e0!3m2!1ssr!2srs!4v1754914393735!5m2!1ssr!2srs"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapaSekcija;
