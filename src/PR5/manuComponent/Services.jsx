import React from "react";
import Style from "../css/ManuComponent/Services.module.css";

import squares from "../public/svg/squares.svg";
import physics from "../public/svg/physics.svg";
import web from "../public/svg/web.svg";
import user from "../public/svg/user.svg";
import briefcase from "../public/svg/briefcaseSer.svg";
import writing_2 from "../public/svg/writing_2.svg";

export default function Services() {
  return (
    <div id="service" className={Style.main_section}>
      <div className={Style.ServicesMain}>
        <div className={Style.main_title}>
          <span>Service</span>
          <h3>Never compromise with quality</h3>
        </div>
        <div className={Style.service_list}>
          <ul>
            <li>
              <div className={Style.list_inner}>
                <span className={Style.list_inner_icon}>
                  <img className={Style.list_inner_svg} src={squares} alt />
                </span>
                <h3 className={Style.list_inner_title}>Wireframing</h3>
                <p className="text">Web development is the building and maintenance of websites. it’s the work that...</p>
                <a className={Style.full_link} href="#"></a>
                {/* <div className="hidden_content">
                  <div className="service_informations">
                    <div className="image">
                      <img src="img/thumbs/4-2.jpg" alt />
                      <div className="main" data-img-url="img/service/1.jpg"></div>
                    </div>
                    <div className="description">
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
              <div className={Style.list_inner}>
                <span className={Style.list_inner_icon}>
                  <img className={Style.list_inner_svg} src={physics} alt />
                </span>
                <h3 className={Style.list_inner_title}>Prototype</h3>
                <p className="text">Web development is the building and maintenance of websites. it’s the work that...</p>
                <a className={Style.full_link} href="#"></a>
                {/* <div className="hidden_content">
                  <div className="service_informations">
                    <div className="image">
                      <img src="img/thumbs/4-2.jpg" alt />
                      <div className="main" data-img-url="img/service/2.jpg"></div>
                    </div>
                    <div className="description">
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
              <div className={Style.list_inner}>
                <span className={Style.list_inner_icon}>
                  <img className={Style.list_inner_svg} src={web} alt />
                </span>
                <h3 className={Style.list_inner_title}>UI Design</h3>
                <p className="text">Web development is the building and maintenance of websites. it’s the work that...</p>
                <a className={Style.full_link} href="#"></a>
                {/* <div className="hidden_content">
                  <div className="service_informations">
                    <div className="image">
                      <img src="img/thumbs/4-2.jpg" alt />
                      <div className="main" data-img-url="img/service/3.jpg"></div>
                    </div>
                    <div className="description">
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
              <div className={Style.list_inner}>
                <span className={Style.list_inner_icon}>
                  <img className={Style.list_inner_svg} src={user} alt />
                </span>
                <h3 className={Style.list_inner_title}>Personal Creation</h3>
                <p className="text">Web development is the building and maintenance of websites. it’s the work that...</p>
                <a className={Style.full_link} href="#"></a>
                {/* <div className="hidden_content">
                  <div className="service_informations">
                    <div className="image">
                      <img src="img/thumbs/4-2.jpg" alt />
                      <div className="main" data-img-url="img/service/4.jpg"></div>
                    </div>
                    <div className="description">
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
              <div className={Style.list_inner}>
                <span className={Style.list_inner_icon}>
                  <img className={Style.list_inner_svg} src={briefcase} alt />
                </span>
                <h3 className={Style.list_inner_title}>Case Study</h3>
                <p className="text">Web development is the building and maintenance of websites. it’s the work that...</p>
                <a className={Style.full_link} href="#"></a>
                {/* <div className="hidden_content">
                  <div className="service_informations">
                    <div className="image">
                      <img src="img/thumbs/4-2.jpg" alt />
                      <div className="main" data-img-url="img/service/5.jpg"></div>
                    </div>
                    <div className="description">
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
              <div className={Style.list_inner}>
                <span className={Style.list_inner_icon}>
                  <img className={Style.list_inner_svg} src={writing_2} alt />
                </span>
                <h3 className={Style.list_inner_title}>Experience Design</h3>
                <p className="text">Web development is the building and maintenance of websites. it’s the work that...</p>
                <a className={Style.full_link} href="#"></a>
                {/* <div className="hidden_content">
                  <div className="service_informations">
                    <div className="image">
                      <img src="img/thumbs/4-2.jpg" alt />
                      <div className="main" data-img-url="img/service/6.jpg"></div>
                    </div>
                    <div className="description">
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
