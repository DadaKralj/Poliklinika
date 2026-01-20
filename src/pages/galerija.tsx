import React, { useState, useEffect } from "react";
import "./galerija.css";
import { useLanguage } from "../Context/LanguageContext";

// Importovanje svih slika iz galerija foldera
import slika1 from "../pictures/galerija/slika1_resize.jpg";
import slika2 from "../pictures/galerija/slika2.jpg";
import slika3 from "../pictures/galerija/slika3.jpg";
import slika4 from "../pictures/galerija/slika4.jpg";
import slika5 from "../pictures/galerija/slika5.jpg";
import slika6 from "../pictures/galerija/slika6.jpg";
import slika7 from "../pictures/galerija/slika7.jpg";
import slika8 from "../pictures/galerija/slika8.jpg";
import slika9 from "../pictures/galerija/slika9.jpg";
import slika10 from "../pictures/galerija/slika10.jpg";
import slika11 from "../pictures/galerija/slika11.jpg";
import slika12 from "../pictures/galerija/slika12.jpg";
import slika13 from "../pictures/galerija/slika13.jpg";
import slika14 from "../pictures/galerija/slika14.jpg";
import slika15 from "../pictures/galerija/slika15.jpg";
import tica from "../pictures/galerija/tica.jpeg";
import zgrada from "../pictures/galerija/zgradaPoliklinike.jpg";

// Lista svih slika
const slike = [
  slika1,
  slika2,
  slika3,
  slika4,
  slika5,
  slika6,
  slika7,
  slika8,
  slika9,
  slika10,
  slika11,
  slika12,
  slika13,
  slika14,
  slika15,
  tica,
  zgrada,
];

const Galerija: React.FC = () => {
  const { language } = useLanguage();
  const t = (sr: string, en: string) => (language === "sr" ? sr : en);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Zaključavanje skrola kada je modal otvoren
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const handleImageClick = (slika: string) => {
    setSelectedImage(slika);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = slike.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % slike.length;
      setSelectedImage(slike[nextIndex]);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = slike.indexOf(selectedImage);
      const prevIndex = (currentIndex - 1 + slike.length) % slike.length;
      setSelectedImage(slike[prevIndex]);
    }
  };

  // Navigacija tastaturom
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowRight") {
        const currentIndex = slike.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % slike.length;
        setSelectedImage(slike[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = slike.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + slike.length) % slike.length;
        setSelectedImage(slike[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <main className="galerija-page">
      <section className="galerija-hero">
        <h1>{t("Galerija", "Gallery")}</h1>
        <p>{t("Pogledajte našu polikliniku i naš tim u akciji", "Take a look at our clinic and our team in action")}</p>
      </section>

      <section className="galerija-grid">
        {slike.map((slika, index) => (
          <div
            key={index}
            className="galerija-item"
            onClick={() => handleImageClick(slika)}
          >
            <img src={slika} alt={`${t("Galerija slika", "Gallery image")} ${index + 1}`} />
            <div className="galerija-overlay">
              <span className="galerija-icon">🔍</span>
            </div>
          </div>
        ))}
      </section>

      {/* Modal za prikaz pune slike */}
      {selectedImage && (
        <div className="galerija-modal" onClick={handleClose}>
          <button className="galerija-close" onClick={handleClose} aria-label="Close">
            ✕
          </button>
          
          <button className="galerija-nav galerija-prev" onClick={handlePrev} aria-label="Previous">
            ‹
          </button>
          
          <div className="galerija-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt={t("Povećana slika", "Enlarged image")} />
          </div>
          
          <button className="galerija-nav galerija-next" onClick={handleNext} aria-label="Next">
            ›
          </button>

          <div className="galerija-counter">
            {slike.indexOf(selectedImage) + 1} / {slike.length}
          </div>
        </div>
      )}
    </main>
  );
};

export default Galerija;
