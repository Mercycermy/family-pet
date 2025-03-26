import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Testimonial.css";

const Testimonial = () => {
const [testimonials, setTestimonials] = useState([
  {
    name: "Happy Customer",
    feedback: "Great experience at Family Pet Shop! The staff was friendly and helped me find the perfect pup.",
    company: "Family Pet Shop",
    imgUrl: "https://i.pravatar.cc/150?img=25", // example avatar
  },
  {
    name: "Satisfied Pet Parent",
    feedback: "Highly recommend Family Pet Shop! Their pet care tips and healthy food options are amazing.",
    company: "Family Pet Shop",
    imgUrl: "https://i.pravatar.cc/150?img=15", // example avatar
  },
  {
    name: "Regular Visitor",
    feedback: "I always get my pet supplies here. Affordable prices and lovely service!",
    company: "Family Pet Shop",
    imgUrl: "https://i.pravatar.cc/150?img=45", // example avatar
  },
]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <h2 className="head-text">
        See what <span>Others</span> say about us!
      </h2>
      {testimonials.length > 0 && (
        <>
       <motion.div
  className="app__testimonial-carousel app__flex"
  key={currentIndex}
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -100 }}
  transition={{ duration: 0.4 }}
>
  
  <div className="app__testimonial-avatar">
    <img
      src={currentTestimonial.imgUrl}
      alt={currentTestimonial.name}
      className="testimonial-avatar"
    />
  </div>
  <div className="app__testimonial-content">
    <p className="p-text">{currentTestimonial.feedback}</p>
    <div>
      <h4 className="bold-text">{currentTestimonial.name}</h4>
      <h5 className="p-text">{currentTestimonial.company}</h5>
    </div>
  </div>

</motion.div>

          <div className="app__testimonials-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

     
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
