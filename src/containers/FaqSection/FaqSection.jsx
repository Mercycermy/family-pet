import React, { useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./FaqSection.css";

const faqData = [
  {
    question: "1. How can I adopt a pet?",
    answer:
      "Visit a local animal shelter or contact a rescue organization to check available pets. You'll need to fill out an application, possibly attend an interview, and pay an adoption fee. For pet adoption support in Ethiopia, call 0903190203 or 0913823747.",
  },
  {
    question: "2. What do I need before bringing a pet home?",
    answer:
      "Prepare essentials like food and water bowls, a comfortable bed, toys, a leash or carrier, and cleaning supplies. Schedule a vet visit in advance to make sure your new pet is healthy and up-to-date on vaccinations.",
  },
  {
    question: "3. How often should I feed my pet?",
    answer:
      "Feeding schedules vary by species and age. For most dogs and cats, 2–3 meals per day is standard. Puppies and kittens may need more frequent feedings. Ask your vet for a feeding guide based on your pet’s needs.",
  },
  {
    question: "4. How do I train my new pet?",
    answer:
      "Start with basic commands using consistent words like 'sit', 'stay', and 'no'. Use positive reinforcement like treats and praise. Avoid punishment. For serious training, consider hiring a certified pet trainer or behaviorist.",
  },
  {
    question: "5. Do I need to pet-proof my home?",
    answer:
      "Absolutely! Secure trash cans, remove toxic plants or foods, hide electrical cords, and store cleaning chemicals out of reach. Pets, especially young ones, are curious and might chew or eat unsafe items.",
  },
  {
    question: "6. What should I know before adopting a specific breed?",
    answer:
      "Research the breed's size, activity level, temperament, and potential health issues. Large breeds may need more space and exercise, while some breeds are prone to medical conditions. Knowing this helps you prepare better.",
  },
  {
    question: "7. How do I prepare my family for a new pet?",
    answer:
      "Create a daily care schedule: feeding, walking, playtime, grooming, etc. Assign tasks to each family member so everyone shares responsibility. This helps build routines and ensures the pet is cared for properly.",
  },
  {
    question: "8. What training vocabulary should I use?",
    answer:
      "Decide as a family which words to use for training. For example, use just 'leave it' instead of mixing with 'no' or 'stop'. Consistent language helps your pet learn faster and prevents confusion.",
  },
  {
    question: "9. How do I choose a good veterinarian?",
    answer:
      "Select a vet before bringing your pet home so you're ready in case of emergencies. Ask for local recommendations, check reviews, and confirm they treat your pet type. For help in Addis Ababa, call 0903190203 or 0913823747.",
  },
  {
    question: "10. How can I meet other pet owners?",
    answer:
      "Go for walks, visit local pet-friendly parks, or join online communities and Facebook groups for pet lovers. Talking to experienced pet owners can help you learn, get support, and even set up playdates.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="app__faq">
      <h2 className="head-text">
        Frequently Asked <span>Questions</span>
      </h2>
      <div className="faq__container">
        {faqData.map((faq, index) => (
          <motion.div
            className={`faq__item ${openIndex === index ? "open" : ""}`}
            key={index}
            onClick={() => toggleFaq(index)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="faq__question">
              <h4 className="bold-text">{faq.question}</h4>
              <span className="faq__icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <motion.p
                className="faq__answers p-text"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Faq, "app__faq"),
  "faq",
  "app__whitebg"
);
