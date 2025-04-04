import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staticPets } from "../Pets/staticPets"; // Update path if needed
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import PetDetail from "../Pets/PetDetail";
import "./pets.css";

const Pets = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterPets, setFilterPets] = useState([]);
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    setPets(staticPets);
    setFilterPets(staticPets);
  }, []);

  const handleFilter = (type) => {
    setActiveFilter(type);
    setAnimateCard({ opacity: 0, scale: 0.5, y: -100 });

    setTimeout(() => {
      setAnimateCard({ opacity: 1, scale: 1, y: 0 });
      if (type === "All") {
        setFilterPets(pets);
      } else {
        setFilterPets(pets.filter((pet) => pet.tags.includes(type)));
      }
    }, 500);
  };

  // Handle back function to return to the list
  const handleBack = () => {
    setSelectedPet(null); // Clear selected pet to go back to the list view
  };

  return (
    <>
      <h2 className="head-text">
        Meet Our <span> Pets and product</span>
      </h2>

      {!selectedPet && (
        <>
          <div className="app__work-filter">
            {["All", "Cat", "Dog", "Bird", "Bunny", "Others", "Dog Accessories", "Pet Food"].map((type, index) => (
              <div
                key={index}
                onClick={() => handleFilter(type)}
                className={`app__work-filter-item app__flex p-text ${activeFilter === type ? "item-active" : ""}`}
              >
                {type}
              </div>
            ))}
          </div>

          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
          >
            {filterPets.map((pet, index) => (
              <motion.div
                className="app__work-item app__flex"
                key={index}
                onClick={() => setSelectedPet(pet)}
              >
                <div className="app__work-img app__flex">
                  <img src={pet.imgUrl} alt={pet.title} />
                </div>

                <div className="app__work-content app__flex">
                  <h4 className="bold-text" title={pet.title}>
                    {pet.title}
                  </h4>
                  <p className="p-text" style={{ marginTop: 10 }} title={pet.description}>
                    {pet.description}
                  </p>
                  <div className="app__work-tag app__flex">
                    <p className="p-text">{pet.tags[0]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {selectedPet && <PetDetail pet={selectedPet} onBack={handleBack} dogBreeds={staticPets} />}
    </>
  );
};

export default AppWrap(MotionWrap(Pets, "app__pets"), "pets", "app__primarybg");
