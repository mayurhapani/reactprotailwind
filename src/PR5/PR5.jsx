import React from "react";
import "./css/plugins.css";
import "./css/dark.css";
import "./css/style.css";

import P5navbar from "./P5navbar";
import P5hero from "./P5hero";
import P5menuBar from "./P5menuBar";
import Shaps from "./Shaps";
import P5fullMenu from "./P5fullMenu";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import About from "./manuComponent/About";
import Resume from "./manuComponent/Resume";
import Portfolio from "./manuComponent/Portfolio";
import Services from "./manuComponent/Services";
import Testimonials from "./manuComponent/Testimonials";
import Blog from "./manuComponent/Blog";
import Contect from "./manuComponent/Contect";

export default function PR5() {
  return (
    <div className="dark pt-16">
      {/* <div id="preloader">
        <div className="loader_line"></div>
      </div> */}
      <div className="iknow_tm_all_wrap bg-[#1d1b1b]" data-magic-cursor="show">
        <div className="iknow_tm_hero bg-[#1d1b1b] ">
          <div className="background_shape"></div>
          <div className={`flex`}>
            <div className="container z-50">
              <P5navbar />
              <P5hero />
              <P5menuBar />
            </div>
          </div>
          <Shaps />
        </div>

        <div className="iknow_tm_hero bg-[#1d1b1b] ">
          <Routes>
            <Route path="/about" element={<About />} />
            {/* <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contect" element={<Contect />} /> */}
          </Routes>

          {/* <About /> */}
          {/* <Routes>
            <Route path="/about" element={<About />} />
          </Routes> */}
          {/* <P5fullMenu /> */}
        </div>

        {/* <div className="iknow_tm_hero bg-[#1d1b1b] ">
          <P5fullMenu />
        </div> */}

        <div className="mouse-cursor cursor-outer"></div>
        <div className="mouse-cursor cursor-inner"></div>
      </div>
    </div>
  );
}
