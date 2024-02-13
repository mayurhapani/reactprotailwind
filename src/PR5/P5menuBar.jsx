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
        {/* <Link  /> */}
        <P5smallManu src={AboutImg} manuName={"About Me"} />
        <P5smallManu src={ResumeImg} manuName={"Resume"} />
        <P5smallManu src={PortfolioImg} manuName={"Portfolio"} />
        <P5smallManu src={ServicesImg} manuName={"Service"} />
        <P5smallManu src={TestimonialImg} manuName={"Testimonial"} />
        <P5smallManu src={BlogImg} manuName={"Blog"} />
        <P5smallManu src={ContactImg} manuName={"Contact"} />
      </ul>
    </div>
  );
}
