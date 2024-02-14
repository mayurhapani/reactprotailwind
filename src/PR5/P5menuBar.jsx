import React from "react";
import P5smallManu from "./P5smallManu";
import Style from "./css/P5menuBar.module.css";

import AboutImg from "./public/svg/archive.svg";
import ResumeImg from "./public/svg/contacs.svg";
import PortfolioImg from "./public/svg/briefcase.svg";
import ServicesImg from "./public/svg/gear.svg";
import TestimonialImg from "./public/svg/message.svg";
import BlogImg from "./public/svg/writing.svg";
import ContactImg from "./public/svg/letter.svg";
import { BrowserRouter, Link } from "react-router-dom";

export default function P5menuBar() {
  return (
    <div className={`${Style.main_menu} pb-10`}>
      {/* <ul className="flex gap-2"> */}
      <ul className={Style.mainMenuUl}>
        <Link to={"/pr5/about"}>
          <P5smallManu src={AboutImg} manuName={"About Me"} />
        </Link>

        <Link to={"/pr5/resume"}>
          <P5smallManu src={ResumeImg} manuName={"Resume"} />
        </Link>

        <Link to={"/pr5/portfolio"}>
          <P5smallManu src={PortfolioImg} manuName={"Portfolio"} />
        </Link>

        <Link to={"/pr5/services"}>
          <P5smallManu src={ServicesImg} manuName={"Service"} />
        </Link>

        <Link to={"/pr5/testimonials"}>
          <P5smallManu src={TestimonialImg} manuName={"Testimonial"} />
        </Link>

        <Link to={"/pr5/blog"}>
          <P5smallManu src={BlogImg} manuName={"Blog"} />
        </Link>

        <Link to={"/pr5/contect"}>
          <P5smallManu src={ContactImg} manuName={"Contact"} />
        </Link>
      </ul>
    </div>
  );
}
