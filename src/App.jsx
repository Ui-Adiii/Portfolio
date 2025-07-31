import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Experience from "./pages/Experience";
import React from "react";

const App = () => {

  return (
    <>
      <NavBar />
      <div className="px-5 md:px-10 lg:px-20 ">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
