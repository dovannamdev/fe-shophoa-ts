import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

export default function Sliders() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    dots: true,
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "50px",
          padding: "70px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="intro11-slider-wrap section-2">
      <div className="intro11-slider swiper-container">
        <div className="swiper-wrapper-edit">
          <Slider {...settings}>
            <div className="intro11-section swiper-slide slide-5 slide-bg-1 bg-position">
              {/* Intro Content Start */}
              <div className="intro11-content-2 text-center">
                <h1 className="different-title">Quality</h1>
                <h2 className="title text-white">The Gift of Flowers</h2>
                <a
                  href="product-details.html"
                  className="btn flosun-button  secondary-btn theme-color rounded-0"
                >
                  Shop Collection
                </a>
              </div>
              {/* Intro Content End */}
            </div>
            <div className="intro11-section swiper-slide slide-6 slide-bg-1 bg-position">
              {/* Intro Content Start */}
              <div className="intro11-content-2 text-center">
                <h1 className="different-title">Welcome</h1>
                <h2 className="title">2020 Flower Trend</h2>
                <NavLink
                  to="shop"
                  className="btn flosun-button  secondary-btn theme-color rounded-0"
                >
                  Shop Collection
                </NavLink>
              </div>
              {/* Intro Content End */}
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
