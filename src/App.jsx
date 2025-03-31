import React from "react";

import {
  About,
  Contact,
  Header,
  Testimonial,
  Pets,
  Faq,
} from "./containers";
import TelegramIcon from './components/ScrollToTop/Telegramicon';

import { Navbar, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Pets />
      <Faq />
      <Testimonial />
      <Contact />
      <Footer />
       <TelegramIcon />
    </div>
  );
};

export default App;
