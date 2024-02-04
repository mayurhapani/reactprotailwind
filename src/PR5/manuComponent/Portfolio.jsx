import React from "react";
import Style from "../css/ManuComponent/Portfolio.module.css";

import Img11 from "../public/thumbs/1-1.jpg";
import PortImg1 from "../public/portfolio/1.jpg";
import PortImg2 from "../public/portfolio/2.jpg";
import PortImg3 from "../public/portfolio/3.jpg";
import PortImg6 from "../public/portfolio/6.jpg";
import PortImg7 from "../public/portfolio/7.jpg";
import PortImg8 from "../public/portfolio/8.jpg";

import PortSvgY from "../public/social/youtube-2.svg";
import PortSvgV from "../public/social/vimeo.svg";
import PortSvgS from "../public/social/soundcloud.svg";
import PortSvgT from "../public/svg/text.svg";

export default function Portfolio() {
  return (
    <div id="portfolio" className={Style.main_section}>
      <div className={Style.portfolioMain}>
        <div className={Style.main_title}>
          <span>Portfoloi</span>
          <h3>My works that I did for clients</h3>
        </div>
        <div className={Style.portfolio_filter}>
          <ul>
            <li>
              <a href="#" className={Style.current} data-filter="*">
                All
              </a>
            </li>
            <li>
              <a href="#" data-filter=".vimeo">
                Vimeo
              </a>
            </li>
            <li>
              <a href="#" data-filter=".youtube">
                Youtube
              </a>
            </li>
            <li>
              <a href="#" data-filter=".soundcloud">
                Soundcloud
              </a>
            </li>
            <li>
              <a href="#" data-filter=".detail">
                Detail
              </a>
            </li>
          </ul>
        </div>
        <div className={Style.portfolio_list}>
          <ul className="gallery_zoom">
            <li className="vimeo">
              <div className={Style.list_inner}>
                <div className={Style.list_inner_image}>
                  <img src={Img11} alt />
                  <div className={Style.list_inner_image_main} data-img-url={PortImg1}></div>
                </div>
                <div className={Style.overlay}></div>
                <img className={Style.portfolio_list_svg} src={PortSvgV} alt />
                <div className={Style.portfolio_list_details}>
                  <span>Vimeo</span>
                  <h3>Aumeo Audio</h3>
                </div>
                {/* <a className="iknow_tm_full_link popup-vimeo" href="https://vimeo.com/337293658"></a> */}
              </div>
            </li>
            <li className="youtube">
              <div className={Style.list_inner}>
                <div className={Style.list_inner_image}>
                  <img src={Img11} alt />
                  <div className={Style.list_inner_image_main} data-img-url={PortImg2}></div>
                </div>
                <div className={Style.overlay}></div>
                <img className={Style.portfolio_list_svg} src={PortSvgY} alt />
                <div className={Style.portfolio_list_details}>
                  <span>Youtube</span>
                  <h3>Bicker &amp; Jenna</h3>
                </div>
                {/* <a className="iknow_tm_full_link popup-youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas"></a> */}
              </div>
            </li>
            <li className="soundcloud">
              <div className={Style.list_inner}>
                <div className={Style.list_inner_image}>
                  <img src={Img11} alt />
                  <div className={Style.list_inner_image_main} data-img-url={PortImg3}></div>
                </div>
                <div className={Style.overlay}></div>
                <img className={Style.portfolio_list_svg} src={PortSvgS} alt />
                <div className={Style.portfolio_list_details}>
                  <span>Soundcloud</span>
                  <h3>Botanical Escape</h3>
                </div>
                {/* <a
                  className="iknow_tm_full_link soundcloude_link mfp-iframe audio"
                  href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                ></a> */}
              </div>
            </li>
            <li className="youtube">
              <div className={Style.list_inner}>
                <div className={Style.list_inner_image}>
                  <img src={Img11} alt />
                  <div className={Style.list_inner_image_main} data-img-url={PortImg6}></div>
                </div>
                <div className={Style.overlay}></div>
                <img className={Style.portfolio_list_svg} src={PortSvgY} alt />
                <div className={Style.portfolio_list_details}>
                  <span>Youtube</span>
                  <h3>Model Car</h3>
                </div>
                {/* <a className="iknow_tm_full_link popup-youtube" href="https://www.youtube.com/watch?v=l-epKcOA7RQ"></a> */}
              </div>
            </li>
            <li className="vimeo">
              <div className={Style.list_inner}>
                <div className={Style.list_inner_image}>
                  <img src={Img11} alt />
                  <div className={Style.list_inner_image_main} data-img-url={PortImg7}></div>
                </div>
                <div className={Style.overlay}></div>
                <img className={Style.portfolio_list_svg} src={PortSvgV} alt />
                <div className={Style.portfolio_list_details}>
                  <span>Vimeo</span>
                  <h3>Smart Watch</h3>
                </div>
                {/* <a className="iknow_tm_full_link popup-vimeo" href="https://vimeo.com/337292310"></a> */}
              </div>
            </li>
            <li className="detail">
              <div className={Style.list_inner}>
                <div className={Style.list_inner_image}>
                  <img src={Img11} alt />
                  <div className={Style.list_inner_image_main} data-img-url={PortImg8}></div>
                </div>
                <div className={Style.overlay}></div>
                <img className={Style.portfolio_list_svg} src={PortSvgT} alt />
                <div className={Style.portfolio_list_details}>
                  <span>Detail</span>
                  <h3>Teresa Melbig</h3>
                </div>
                {/* <a className="iknow_tm_full_link portfolio_popup" href="#"></a> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
