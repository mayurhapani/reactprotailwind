import React from "react";
import Style from "./css/P5menuBar.module.css";

export default function P5smallManu(props) {
  return (
    <li className={Style.mainMenuLi}>
      <img itemType="svg" className={Style.svg} src={props.src} alt />
      <span className={Style.menuName}>{props.manuName}</span>
      <a className={Style.iknow_tm_full_link}></a>
    </li>

    // <li className={`${Style.manuLi} relative`}>
    //   <img className={`${Style.manuSvgSize} absolute inset-2/4 -translate-x-1/2 -translate-y-1/2`} src={props.src} alt="" />
    //   <span>{props.manuName}</span>
    // </li>
  );
}
