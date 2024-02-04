import React from "react";
import Style from "../css/ManuComponent/Blog.module.css";

import Img3727 from "../public/thumbs/37-27.jpg";
import BlogImg1 from "../public/news/1.jpg";
import BlogImg2 from "../public/news/2.jpg";
import BlogImg3 from "../public/news/3.jpg";

export default function Blog() {
  return (
    <div id="news" className={Style.main_section}>
      <div className={Style.BlogMain}>
        <div className={Style.main_title}>
          <span>Blog</span>
          <h3>Latest tips, tricks &amp; Updates</h3>
        </div>
        <div className={Style.news_list}>
          <ul>
            <li>
              <div className={Style.news_list_inner}>
                <div className={Style.news_list_image}>
                  <img src={Img3727} alt />
                  <div className={Style.news_list_image_main} data-img-url={BlogImg1}></div>
                  <a className={Style.full_link} href="#"></a>
                </div>
                <div className={Style.news_list_details}>
                  <span className={Style.news_list_category}>
                    <a href="#">Web Design</a>
                  </span>
                  <h3 className={Style.news_list_title}>
                    <a href="#">How to create a website using WordPress</a>
                  </h3>
                </div>
                {/* <div className="hidden_content">
                  <div className="news_informations">
                    <div className="text">
                      <p>
                        iKnow is a leading web design agency with an award-winning design team that creates innovative, effective websites
                        that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and
                        achieve your goals.
                      </p>
                      <p>
                        In today’s digital world, your website is the first interaction consumers have with your business. That's why almost
                        95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense
                        impact on your company’s bottom line.
                      </p>
                      <p>
                        That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web
                        design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under
                        our belt, we're confident we can design a custom website that drives sales for your unique business.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </li>
            <li>
              <div className={Style.news_list_inner}>
                <div className={Style.news_list_image}>
                  <img src={Img3727} alt />
                  <div className={Style.news_list_image_main} data-img-url={BlogImg2}></div>
                  <a className={Style.full_link} href="#"></a>
                </div>
                <div className={Style.news_list_details}>
                  <span className={Style.news_list_category}>
                    <a href="#">Branding</a>
                  </span>
                  <h3 className={Style.news_list_title}>
                    <a href="#">Angular team streamlines requests</a>
                  </h3>
                </div>
                {/* <div className="hidden_content">
                  <div className="news_informations">
                    <div className="text">
                      <p>
                        iKnow is a leading web design agency with an award-winning design team that creates innovative, effective websites
                        that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and
                        achieve your goals.
                      </p>
                      <p>
                        In today’s digital world, your website is the first interaction consumers have with your business. That's why almost
                        95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense
                        impact on your company’s bottom line.
                      </p>
                      <p>
                        That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web
                        design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under
                        our belt, we're confident we can design a custom website that drives sales for your unique business.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </li>
            <li>
              <div className={Style.news_list_inner}>
                <div className={Style.news_list_image}>
                  <img src={Img3727} alt />
                  <div className={Style.news_list_image_main} data-img-url={BlogImg3}></div>
                  <a className={Style.full_link} href="#"></a>
                </div>
                <div className={Style.news_list_details}>
                  <span className={Style.news_list_category}>
                    <a href="#">UI Design</a>
                  </span>
                  <h3 className={Style.news_list_title}>
                    <a href="#">How to handle errors in React Javascript</a>
                  </h3>
                </div>
                {/* <div className="hidden_content">
                  <div className="news_informations">
                    <div className="text">
                      <p>
                        iKnow is a leading web design agency with an award-winning design team that creates innovative, effective websites
                        that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and
                        achieve your goals.
                      </p>
                      <p>
                        In today’s digital world, your website is the first interaction consumers have with your business. That's why almost
                        95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense
                        impact on your company’s bottom line.
                      </p>
                      <p>
                        That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web
                        design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under
                        our belt, we're confident we can design a custom website that drives sales for your unique business.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
