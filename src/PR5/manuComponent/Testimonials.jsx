import React from "react";
import Style from "../css/ManuComponent/Testimonials.module.css";
// import "../css/ManuComponent/extra.css";

import LeftQuote from "../public/svg/left-quote.svg";
import TestImg1 from "../public/testimonials/1.jpg";
import TestImg2 from "../public/testimonials/2.jpg";
import TestImg3 from "../public/testimonials/3.jpg";
import TestImg4 from "../public/testimonials/4.jpg";
import TestImg5 from "../public/testimonials/5.jpg";

export default function Testimonials() {
  return (
    <div id="testimonials" className={Style.main_section}>
      <div className={Style.testimonialsMain}>
        <div className={Style.main_title}>
          <span>Testimonials</span>
          <h3>What people say about me</h3>
        </div>
        {/* <div className={`${Style.testimonials_list}  owl-carousel owl-theme`}> */}
        <div className={`${Style.testimonials_list}`}>
          <div className={Style.list_inner}>
            <div className={Style.list_inner_in}>
              <div className={Style.list_inner_text}>
                <p>
                  These people really know what they are doing! Great customer support availability and supperb kindness. I am very happy
                  that I've purchased this liscense!!!
                </p>
              </div>
              <div className={Style.list_inner_details}>
                <div className={Style.testimonials_list_left}>
                  <div className={Style.testimonials_list_avatar}>
                    <div className={Style.testimonials_list_main} data-img-url={TestImg1}></div>
                  </div>
                  <div className={Style.testimonials_list_info}>
                    <h3>Jecob Oramson</h3>
                    <span>Designer</span>
                  </div>
                </div>
                <div className="right">
                  <img className={Style.testimonials_list_right_svg} src={LeftQuote} alt />
                </div>
              </div>
            </div>
          </div>
          <div className={Style.list_inner}>
            <div className={Style.list_inner_in}>
              <div className={Style.list_inner_text}>
                <p>
                  The design is elegant. The customer support on this product is also amazing. I would highly recommend you to purchase
                  templates from the Marketify team!
                </p>
              </div>
              <div className={Style.list_inner_details}>
                <div className={Style.testimonials_list_left}>
                  <div className={Style.testimonials_list_avatar}>
                    <div className={Style.testimonials_list_main} data-img-url={TestImg2}></div>
                  </div>
                  <div className={Style.testimonials_list_info}>
                    <h3>Kerry Hudson</h3>
                    <span>IBO. Corp</span>
                  </div>
                </div>
                <div className="right">
                  <img className={Style.testimonials_list_right_svg} src={LeftQuote} alt />
                </div>
              </div>
            </div>
          </div>
          {/* <div className={Style.list_inner}>
            <div className={Style.list_inner_in}>
              <div className={Style.list_inner_text}>
                <p>
                  Not only was customer support very fast, but the design is very professional. Will definitely be looking for new products
                  in the future from this author.
                </p>
              </div>
              <div className={Style.list_inner_details}>
                <div className={Style.testimonials_list_left}>
                  <div className={Style.testimonials_list_avatar}>
                    <div className={Style.testimonials_list_main} data-img-url={TestImg3}></div>
                  </div>
                  <div className={Style.testimonials_list_info}>
                    <h3>Albert Walker</h3>
                    <span>Singer</span>
                  </div>
                </div>
                <div className="right">
                  <img className={Style.testimonials_list_right_svg} src={LeftQuote} alt />
                </div>
              </div>
            </div>
          </div>
          <div className={Style.list_inner}>
            <div className={Style.list_inner_in}>
              <div className={Style.list_inner_text}>
                <p>
                  The Author had done a great job, it's clean and easy to understand the code. Comment blocks made it really easy to read
                  the code.
                </p>
              </div>
              <div className={Style.list_inner_details}>
                <div className={Style.testimonials_list_left}>
                  <div className={Style.testimonials_list_avatar}>
                    <div className={Style.testimonials_list_main} data-img-url={TestImg4}></div>
                  </div>
                  <div className={Style.testimonials_list_info}>
                    <h3>Arnold Hookins</h3>
                    <span>Photographer</span>
                  </div>
                </div>
                <div className="right">
                  <img className={Style.testimonials_list_right_svg} src={LeftQuote} alt />
                </div>
              </div>
            </div>
          </div>
          <div className={Style.list_inner}>
            <div className={Style.list_inner_in}>
              <div className={Style.list_inner_text}>
                <p>
                  I can't believe I got support and my problem resolved in minutes from posting my question. Simply amazing team and amazing
                  theme! Thank you!
                </p>
              </div>
              <div className={Style.list_inner_details}>
                <div className={Style.testimonials_list_left}>
                  <div className={Style.testimonials_list_avatar}>
                    <div className={Style.testimonials_list_main} data-img-url={TestImg5}></div>
                  </div>
                  <div className={Style.testimonials_list_info}>
                    <h3>Aura Brooklyn</h3>
                    <span>Fashion Model</span>
                  </div>
                </div>
                <div className="right">
                  <img className={Style.testimonials_list_right_svg} src={LeftQuote} alt />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
