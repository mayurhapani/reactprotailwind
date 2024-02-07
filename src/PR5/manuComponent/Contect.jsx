import React from "react";
import Style from "../css/ManuComponent/Contect.module.css";

import smartphone from "../public/svg/smartphone.svg";
import letter from "../public/svg/letterC.svg";
import placeholder from "../public/svg/placeholder.svg";

export default function Contect() {
  return (
    <div id="contact" className={Style.main_section}>
      <div className={Style.ContectMain}>
        <div className={Style.main_title}>
          <span>Contact Me</span>
          <h3>Contact me to get your work done</h3>
        </div>
        <div className={Style.contact_wrapper}>
          <div className={Style.contact_wrapper_left}>
            <ul>
              <li>
                <div className={Style.contact_list_inner}>
                  <span className={Style.contact_list_inner_icon}>
                    <img className={Style.contact_list_inner_svg} src={smartphone} alt />
                  </span>
                  <div className={Style.contact_list_inner_short}>
                    <h3>Call Me</h3>
                    <span>+91 9426706070</span>
                  </div>
                </div>
              </li>
              <li>
                <div className={Style.contact_list_inner}>
                  <span className={Style.contact_list_inner_icon}>
                    <img className={Style.contact_list_inner_svg} src={letter} alt />
                  </span>
                  <div className={Style.contact_list_inner_short}>
                    <h3>Email Us</h3>
                    <span>
                      <a href="#">
                        <span className="__cf_email__" data-cfemail="4028252c2c2f00292b2e2f376e232f2d">
                          hapanimayur@gmail.com
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className={Style.contact_list_inner}>
                  <span className={Style.contact_list_inner_icon}>
                    <img className={Style.contact_list_inner_svg} src={placeholder} alt />
                  </span>
                  <div className={Style.contact_list_inner_short}>
                    <h3>Address</h3>
                    <span>20, Bardeshi, Amin Bazar</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={Style.contact_wrapper_right}>
            <div className={Style.contact_wrapper_right_fields}>
              <form action="/" method="post" className="contact_form" id="contact_form" autocomplete="off">
                <div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                <div className={Style.contact_empty_notice}>
                  <span>Please Fill Required Fields</span>
                </div>
                <div className={Style.contact_input_list}>
                  <ul>
                    <li>
                      <input id="name" type="text" placeholder="Your Name" />
                    </li>
                    <li>
                      <input id="email" type="text" placeholder="Your Email" />
                    </li>
                    <li>
                      <input id="phone" type="number" placeholder="Your Phone" />
                    </li>
                    <li>
                      <input id="subject" type="text" placeholder="Subject" />
                    </li>
                  </ul>
                </div>
                <div className={Style.contact_message_area}>
                  <textarea id="message" placeholder="Your message here"></textarea>
                </div>
                <div className={Style.submit_button}>
                  <a id="send_message" href="#">
                    Submit Now
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
