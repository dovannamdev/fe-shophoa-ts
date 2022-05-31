import React from "react";
import img1 from "../../../../assets/images/collection/1-1.jpg";
import img2 from "../../../../assets/images/collection/1-2.jpg";

export default function Collection() {
  return (
    <div className="shop-collection-area gray-bg pt-no-text pb-no-text">
      <div className="container custom-area">
        <div className="row mb-30">
          <div className="col-md-6 col-custom">
            <div className="collection-content">
              <div className="section-title text-left">
                <span className="section-title-1">Flowers for the</span>
                <h3 className="section-title-3 pb-0">Birthday &amp; Gifts</h3>
              </div>
              <div className="desc-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <a
                href="shop.html"
                className="btn flosun-button secondary-btn rounded-0"
              >
                Shop Collection
              </a>
            </div>
          </div>
          <div className="col-md-6 col-custom">
            {/*Single Banner Area Start*/}
            <div className="single-banner hover-style">
              <div className="banner-img">
                <a href="#">
                  <img src={img1} alt={"123"} />
                  <div className="overlay-1" />
                </a>
              </div>
            </div>
            {/*Single Banner Area End*/}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-custom order-2 order-md-1">
            {/*Single Banner Area Start*/}
            <div className="single-banner hover-style">
              <div className="banner-img">
                <a href="#">
                  <img src={img2} alt={"123"} />
                  <div className="overlay-1" />
                </a>
              </div>
            </div>
            {/*Single Banner Area End*/}
          </div>
          <div className="col-md-6 col-custom order-1 order-md-2">
            <div className="collection-content">
              <div className="section-title text-left">
                <span className="section-title-1">Flowers for the</span>
                <h3 className="section-title-3 pb-0">Wedding day</h3>
              </div>
              <div className="desc-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <a
                href="shop.html"
                className="btn flosun-button secondary-btn rounded-0"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
