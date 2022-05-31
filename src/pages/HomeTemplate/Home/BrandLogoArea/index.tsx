import React from "react";
import brand1 from "../../../../assets/images/brand/1.png";
import brand2 from "../../../../assets/images/brand/2.png";
import brand3 from "../../../../assets/images/brand/3.png";
import brand4 from "../../../../assets/images/brand/4.png";
import brand5 from "../../../../assets/images/brand/5.png";
import Slider from "react-slick";

export default function BrandLogoArea() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    // dots: true,
    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       borderRadius: "10px",
    //       padding: "70px",
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
  };
  return (
    <div className="brand-logo-area gray-bg pt-no-text pb-no-text mt-text-5">
      <div className="container custom-area">
        <div className="row">
          <div className="col-12 col-custom">
            <div className="brand-logo-carousel swiper-container intro11-carousel-wrap arrow-style-3">
              <div className="swiper-wrapper-edit">
                <Slider {...settings}>
                  <div className="single-brand swiper-slide">
                    <a href="#">
                      <img src={brand1} alt="Brand Logo" />
                    </a>
                  </div>
                  <div className="single-brand swiper-slide">
                    <a href="#">
                      <img src={brand2} alt="Brand Logo" />
                    </a>
                  </div>
                  <div className="single-brand swiper-slide">
                    <a href="#">
                      <img src={brand3} alt="Brand Logo" />
                    </a>
                  </div>
                  <div className="single-brand swiper-slide">
                    <a href="#">
                      <img src={brand4} alt="Brand Logo" />
                    </a>
                  </div>
                  <div className="single-brand swiper-slide">
                    <a href="#">
                      <img src={brand5} alt="Brand Logo" />
                    </a>
                  </div>
                </Slider>
              </div>
              {/* Slider Navigation */}
              <div className="home1-slider-prev swiper-button-prev main-slider-nav">
                <i className="lnr lnr-arrow-left" />
              </div>
              <div className="home1-slider-next swiper-button-next main-slider-nav">
                <i className="lnr lnr-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
