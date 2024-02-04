import React from "react";
import About from "./manuComponent/About";
import Resume from "./manuComponent/Resume";
import Portfolio from "./manuComponent/Portfolio";
import Services from "./manuComponent/Services";
import Testimonials from "./manuComponent/Testimonials";
import Blog from "./manuComponent/Blog";
import Contect from "./manuComponent/Contect";

export default function P5fullMenu() {
  return (
    <div className="container relative z-50">
      <div className="manuMainDiv">
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Blog />
        <Contect />
      </div>
    </div>
  );
}
