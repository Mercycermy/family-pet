import React from "react";

import {
  About,
  Contact,
  Header,
  Testimonial,
  Pets,
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
      <Testimonial />
      <Contact />
      <Footer />
       <TelegramIcon />
    </div>
  );
};

export default App;
