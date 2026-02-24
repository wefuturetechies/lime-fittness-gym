import React from "react";
import "./global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Membership from "./components/Membership";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Membership />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;