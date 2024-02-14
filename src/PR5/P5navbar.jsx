import React from "react";
import Logo from "./public/logo.png";
import Fb1 from "./public/social/facebook.svg";
import Tt1 from "./public/social/twitter.svg";
import Yt1 from "./public/social/youtube.svg";
import Ig1 from "./public/social/instagram.svg";
import Style from "./css/P5navbar.module.css";
import { Link } from "react-router-dom";

export default function P5navbar() {
  return (
    <div className={`${Style.headerOuter} flex justify-between items-center`}>
      <div>
        <Link to={"/pr5"}>
          <img className={Style.logoImg} src={Logo} alt="" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className={Style.icon}>
            <a href="#">
              <img className={`${Style.svgSize}`} src={Fb1} alt="" />
            </a>
          </li>
          <li className={Style.icon}>
            <a href="#">
              <img className={`${Style.svgSize}`} src={Tt1} alt="" />
            </a>
          </li>
          <li className={Style.icon}>
            <a href="#">
              <img className={`${Style.svgSize}`} src={Yt1} alt="" />
            </a>
          </li>
          <li className={Style.icon}>
            <a href="#">
              <img className={`${Style.svgSize}`} src={Ig1} alt="" />
            </a>
          </li>
        </ul>
        <div className={Style.headerBtn}>
          <a id="send_message" href="#">
            DOWNLODE CV
          </a>
        </div>
      </div>
    </div>
  );
}
