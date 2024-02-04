import React from "react";
import Style from "./css/P5hero.module.css";
import HeroImg from "./public/1.jpg";

import Img4760 from "./public/thumbs/47-60.jpg";

export default function P5hero() {
  return (
    <div className={`${Style.Hero} pt-16 pb-10`}>
      <div className="">
        <div className="row">
          <div className="w-7/12">
            <span className={Style.subTitle}>I'm</span>
            <h3 className={Style.name}>Mayur Hapani</h3>
            <span className={Style.text}> A passionate UI/UX Designer and Web Developer based In NYC, USA</span>
          </div>
          <div className="w-5/12">
            <div class={Style.heroImage}>
              <img src={Img4760} alt />
              <div className={Style.heroMain} data-img-url={HeroImg}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
