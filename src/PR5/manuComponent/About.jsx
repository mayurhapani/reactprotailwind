import React from "react";
import Style from "../css/ManuComponent/about.module.css";

import Img3540 from "../public/thumbs/35-44.jpg";
import aboutImg from "../public/about/1.jpg";

export default function About() {
  return (
    <div id="about" className={Style.main_section}>
      <div className={Style.aboutMain}>
        <div className={Style.left}>
          <div className={Style.left_inner}>
            <div className={Style.image}>
              <img src={Img3540} alt />
              <div className={Style.mainImg} data-img-url={aboutImg}></div>
            </div>
            <div className={Style.details}>
              <ul>
                <li>
                  <h3>Name</h3>
                  <span>Mayur Hapani</span>
                </li>
                <li>
                  <h3>Birthday</h3>
                  <span>August 21, 1990</span>
                </li>
                <li>
                  <h3>Mail</h3>
                  <span>
                    <a href="https://mail.google.com/mail/u/0/" className="" data-cfemail="hapanimayur@gmail.com">
                      [email&#160;protected]
                    </a>
                  </span>
                </li>
                <li>
                  <h3>Phone</h3>
                  <span>+91-9426706070</span>
                </li>
                <li>
                  <h3>Address</h3>
                  <span>Surat, Gujarat, Bharat</span>
                </li>
                <li>
                  <h3>Nationality</h3>
                  <span>Bhartiy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Style.right}>
          <div className={Style.right_main_title}>
            <span>About Me</span>
            <h3>World leading UI/UX designer</h3>
          </div>
          <div className={Style.bigger_text}>
            <p>A passionate UI/UX Designer and Web Developer based In NYC, USA</p>
          </div>
          <div className={Style.rightText}>
            <p>
              Hi! My name is Jessica Parker. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience
              as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
