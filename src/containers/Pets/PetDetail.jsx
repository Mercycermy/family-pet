import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PetDetail = ({ pet, onBack, dogBreeds }) => {
  if (!pet) return null;

  const images = [pet.imgUrl, ...(pet.imgGallery || [])].filter(Boolean).slice(0, 4);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = right, -1 = left

  useEffect(() => {
    setSelectedIndex(0); // Reset to first image when pet changes
  }, [pet]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setSelectedIndex((prevIndex) =>
      (prevIndex + newDirection + images.length) % images.length
    );
  };

  const selectedImage = images[selectedIndex];

  const breedDetails = dogBreeds
    ? dogBreeds.find((breed) => breed.name === pet.title)
    : null;

  return (
    <div className="pet-detail-wrapper">
      <div className="pet-detail-header">
        <button onClick={onBack} className="back-button">⬅ Back</button>
      </div>

      <div className="pet-detail-card">
        <div className="pet-image-section">
          <div className="image-slider">
            <button onClick={() => paginate(-1)} className="arrow-button left">⬅</button>

            <div className="main-image-wrapper">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={selectedImage}
                  src={selectedImage}
                  alt={pet.title}
                  className="main-image"
                  custom={direction}
                  initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>

            <button onClick={() => paginate(1)} className="arrow-button right">➡</button>
          </div>

          <div className="thumbnail-row">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                onClick={() => {
                  if (i !== selectedIndex) {
                    setDirection(i > selectedIndex ? 1 : -1);
                    setSelectedIndex(i);
                  }
                }}
              />
            ))}
          </div>
        </div>

        <div className="pet-info-section">
          <h2 className="pet-title">{pet.title}</h2>
          <p className="pet-description">{pet.description}</p>
          <p><strong>Price:</strong> {pet.price}</p>

          {pet.breedDetails && (
            <div className="breed-detail-section">
              <h3 className="breed-title">Breed Details</h3>
              <p><strong>Name:</strong> {pet.breedDetails.name}</p>
              <p><strong>Origin:</strong> {pet.breedDetails.origin}</p>
              <p><strong>Size:</strong> {pet.breedDetails.size}</p>
              <p><strong>Appearance:</strong> {pet.breedDetails.appearance}</p>
              <p><strong>Temperament:</strong> {pet.breedDetails.temperament}</p>
              <p><strong>Lifespan:</strong> {pet.breedDetails.lifespan}</p>
            </div>
          )}

          <div className="contact-action">
                    <button className="contact-button" onClick={() => window.location.href = "tel:+251913823747"}>
            📞 Contact
          </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
