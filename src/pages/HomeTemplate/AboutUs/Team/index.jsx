import React from "react";
import Nam from "../../../../assets/images/team/Nam.jpg";
import Dai from "../../../../assets/images/team/Dai.jpg";
import Doan from "../../../../assets/images/team/Doan.jpg";
import Cuong from "../../../../assets/images/team/Cuong.jpg";

export default function Team() {
  return (
    <div className="team-member-wrapper mt-text-3">
      <div className="container custom-area">
        <div className="row">
          <div className="col-lg-12 col-custom">
            <div className="section-title text-center">
              <span className="section-title-1">
                The guys behind the curtains
              </span>
              <h2 className="section-title-2">A TEAM OF DNDC FLOWER SHOP</h2>
            </div>
          </div>
        </div>
        <div className="row ht-team-member-style-two pt-40">
          <div className="col-lg-3 col-md-3 col-custom">
            <div className="grid-item">
              <div className="ht-team-member">
                <div className="team-image">
                  <img className="img-fluid" src={Doan} alt />
                  <div className="social-networks">
                    <div className="inner">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h5 className="name">Nguyễn Minh Đoan</h5>
                  {/* <div className="position">Marketing</div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-custom">
            <div className="grid-item">
              <div className="ht-team-member">
                <div className="team-image">
                  <img className="img-fluid" src={Nam} alt />
                  <div className="social-networks">
                    <div className="inner">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h5 className="name">Đỗ Văn Nam</h5>
                  {/* <div className="position">President &amp; CEO</div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-custom">
            <div className="grid-item">
              <div className="ht-team-member">
                <div className="team-image">
                  <img className="img-fluid" src={Dai} alt />
                  <div className="social-networks">
                    <div className="inner">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h5 className="name">Lương Ngọc Đại</h5>
                  {/* <div className="position">Financial Services</div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-custom">
            <div className="grid-item">
              <div className="ht-team-member">
                <div className="team-image">
                  <img className="img-fluid" src={Cuong} alt />
                  <div className="social-networks">
                    <div className="inner">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h5 className="name">Ngô Mạnh Cường</h5>
                  {/* <div className="position">Financial Services</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
