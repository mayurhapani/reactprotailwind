import React from "react";
import ImgDot from "./public/shapes/dot.svg";
import ImgDot2 from "./public/shapes/dot-2.svg";
import Img1 from "./public/shapes/1.svg";
import Img2 from "./public/shapes/2.svg";
import Img3 from "./public/shapes/3.svg";
import Img4 from "./public/shapes/4.svg";
import Img5 from "./public/shapes/5.svg";
import Img8 from "./public/shapes/8.svg";
import Img9 from "./public/shapes/9.svg";

export default function Shaps() {
  return (
    <div className="simple_shapes">
      <span className="one anim_scale">
        <img className="svg" src={Img9} alt />
      </span>
      <span className="two anim_moveLeft">
        <img className="svg" src={ImgDot} alt />
      </span>
      <span className="three anim_moveTop">
        <img className="svg" src={ImgDot2} alt />
      </span>
      <span className="four anim_circle">
        <img className="svg" src={Img1} alt />
      </span>
      <span className="five anim_circle">
        <img className="svg" src={Img8} alt />
      </span>
      <span className="six anim_circle">
        <img className="svg" src={Img3} alt />
      </span>
      <span className="seven anim_right">
        <img className="svg" src={Img4} alt />
      </span>
      <span className="eight anim_scale">
        <img className="svg" src={Img9} alt />
      </span>
      <span className="nine anim_circle">
        <img className="svg" src={Img3} alt />
      </span>
      <span className="ten anim_moveLeft">
        <img className="svg" src={Img4} alt />
      </span>
      <span className="eleven anim_scale">
        <img className="svg" src={Img9} alt />
      </span>
      <span className="twelve anim_extra">
        <img className="svg" src={Img2} alt />
      </span>
      <span className="thirteen anim_circle">
        <img className="svg" src={Img5} alt />
      </span>
      <span className="fourteen anim_scale">
        <img className="svg" src={Img9} alt />
      </span>
      <span className="fifteen anim_circle">
        <img className="svg" src={Img3} alt />
      </span>
      <span className="sixteen anim_scale">
        <img className="svg" src={Img9} alt />
      </span>
      <span className="seventeen anim_circle">
        <img className="svg" src={Img5} alt />
      </span>
      <span className="eighteen anim_scale">
        <img className="svg" src={Img9} alt />
      </span>
      <span className="nineteen anim_scale">
        <img className="svg" src={Img9} alt />
      </span>
      <span className="twenty anim_circle">
        <img className="svg" src={Img1} alt />
      </span>
    </div>
  );
}
