import React from "react";
import img1 from "../../../../assets/images/banner/1-1.jpg";
import img3 from "../../../../assets/images/banner/1-3.jpg";

export default function BannerArea() {
  return (
    <div className="banner-area mt-text-3">
      <div className="container custom-area">
        <div className="row">
          <div className="col-md-6 col-custom">
            {/*Single Banner Area Start*/}
            <div className="single-banner hover-style mb-30">
              <div className="banner-img">
                <a href="#">
                  <img src={img1} alt={"123"} />
                  <div className="overlay-1" />
                </a>
              </div>
            </div>
            {/*Single Banner Area End*/}
          </div>
          <div className="col-md-6 col-custom">
            {/*Single Banner Area Start*/}
            <div className="single-banner hover-style mb-30">
              <div className="banner-img">
                <a href="#">
                  <img src={img3} alt={"123"} />
                  <div className="overlay-1" />
                </a>
              </div>
            </div>
            {/*Single Banner Area End*/}
          </div>
        </div>
      </div>
    </div>
  );
}
