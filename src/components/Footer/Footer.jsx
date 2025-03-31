import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md"; // You can use a map link or an address
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const parentVariant = {
    view: {
      opacity: [0, 1],
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const childSocialVariant = {
    view: {
      y: [-300, 0],
      opacity: [0, 1],
      transition: {
        opacity: {
          duration: 0.6,
        },
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const childCopyVariant = {
    view: {
      y: [-100, 0],
      opacity: [0, 1],
      transition: {
        opacity: {
          duration: 0.6,
        },
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="app__flex app__footer">
      <motion.div
        className="app__footer-contacts app__flex"
        variants={parentVariant}
        whileInView="view"
      >
        {[{
            href: "https://t.me/familypetshoporg",
            icon: <BsTelegram />,
          },
          {
            href: "https://www.tiktok.com/@familypetsorg",
            icon: <FaTiktok />,
          },
          {
            href: "https://www.google.com/maps/place/Your+Store+Location", // You can replace with the actual store location
            icon: <MdLocationOn />,
          },
        ].map((social, index) => (
          <motion.div
            className="app__flex"
            key={index}
            variants={childSocialVariant}
            whileInView="view"
          >
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="app__flex"
            >
              {social.icon}
            </a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="app__footer-copyrights"
        variants={parentVariant}
        whileInView="view"
      >
        {["&copy; 2024 FAMILY PET SHOP", "ALL RIGHTS RESERVED"].map((text, index) => (
          <motion.p
            className="p-text"
            key={index}
            variants={childCopyVariant}
            whileInView="view"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Footer;
