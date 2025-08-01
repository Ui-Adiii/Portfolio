import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Experience from "./pages/Experience";
import React from "react";
import SmoothScroll from "./components/SmoothScroll";
import ScrollTop from "./components/ScrollTop";


const App = () => {

  return (
    <>
      <NavBar />
      <ScrollTop/>
      <SmoothScroll>

      <div className="px-5 md:px-10 lg:px-20 ">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Experience />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
            </SmoothScroll>

    </>
  );
};

export default App;
