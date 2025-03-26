import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.css";


const About = () => {
  const [abouts, setAbouts] = useState([
    {
      imgUrl: images.PetsforAdoption,
      title: "Pets for Adoption",
      description: "We offer a variety of well-cared-for pets including dogs, birds, and fish. Each one is raised in a clean, healthy environment and is ready to become a part of your family.",
    },
    {
      imgUrl: images.PetAccessories,
      title: "Pet Accessories",
      description: "From cozy beds and stylish collars to chew toys, grooming kits, bird cages, and aquariums—our collection ensures your pet is safe, comfortable, and entertained.",
    },
    {
      imgUrl: images.PremiumPetFood,
      title: "Premium Pet Food",
      description: "We stock quality food options tailored for different species and breeds, supporting every stage of your pet’s growth and health.",
    },
    {
      imgUrl: images.ConsultationSupport,
      title: "Consultation & Support",
      description: "Have questions about pet care, nutrition, or choosing the right pet? We provide one-on-one consultation to guide you in making the best decisions.",
    },
    {
      imgUrl:images.Training,
      title: "Training Services",
      description: "Need help with obedience or behavior? Our expert trainers offer personalized training sessions that make your pet easier to manage and more connected to you.",
    },
    // Add more static abouts data as needed
  ]);
  const [aboutMe, setAboutMe] = useState({
    description: "At Family Pet Shop, we believe pets are more than animals they’re family. That’s why we offer healthy, well-cared-for pets, quality products, and expert support to help you give them the best life.Whether you're adopting a furry friend or shopping for supplies, our team is here to guide you with care and knowledge every step of the way.At Family Pet Shop, you deserve one more family."
  });
  

  const viewResumeHandler = () => {
    window.open(aboutMe.resumeUrl, "_blank");
  };

  return (
    <>
     <h2 className="head-text">
  About Family Pet Shop
</h2>

<div className="app__about-context app__flex">
  {/* Description on the left */}
  <div className="app__about-data app__flex">
    <p className="p-text">{aboutMe.description}</p>
  </div>

  {/* Image on the right */}
  <div className="app__about-img app__flex">
    <div>
      <img src={images.about}
      alt="About Family Pet Shop" />
    </div>
  </div>
</div>

                <h2 className="head-text">What We Provide</h2>

      <div className="app__profiles">
        
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
