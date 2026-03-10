// import React from "react";
// import "./global.css";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Programs from "./components/Programs";
// import Membership from "./components/Membership";
// import Gallery from "./components/Gallery";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Programs />
//       <Membership />
//       <Gallery />
//       <Contact />
//       <Footer />
     
//     </>
//   );
// }

// export default App;
import React from "react";
import "./global.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Membership from "./components/Membership";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ProgramDetails from "./components/ProgramDetails";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Membership />
      <Gallery />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program/:id" element={<ProgramDetails />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;