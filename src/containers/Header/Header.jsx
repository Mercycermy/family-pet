import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.css";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

const headerSkillVariants = {
  visible: {
    rotate: [-120, 0],
    y: -10,
    x: 10,
    transition: {
      rotate: { delay: 0.5, duration: 0.3, ease: "easeOut" },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeOut",
      },
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 5,
        ease: "easeOut",
      },
    },
  },
  hover: {
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      {/* Header Info Section */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <h1>Welcome to Family Pet Shop!</h1>
        <p>Where healthy, happy pets and top-quality care meet. Adopt your new furry friend, find premium pet food, or book expert training. Your pet’s perfect match is just a click away.
          <samp>At Family Pet Shop, you deserve one more family.</samp>
        </p>
        <a href="tel:+1234567890" className="contact-btn">
          Contact Us
        </a>
      </motion.div>

      {/* Circle Section */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        <motion.div
          variants={headerSkillVariants}
          whileInView="visible"
          whileHover="hover"
          drag
          dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
          dragElastic={0.1}
          className="circle-cmp app__flex"
        >
          <img src={images.pethero} alt="circle" />
        </motion.div>
      </motion.div>

      {/* Down Arrow at the Bottom of the Header Section */}
      <motion.a
        href="#about"
        className="down-arrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <span className="arrow">&#8595;</span>
      </motion.a>
    </div>
  );
};

export default AppWrap(Header, "home");
