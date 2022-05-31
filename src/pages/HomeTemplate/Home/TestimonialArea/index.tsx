import React from "react";
import Duy from "../../../../assets/images/testimonial/Duy.jpg";
import Minh from "../../../../assets/images/testimonial/Minh.jpg";
import icon from "../../../../assets/images/icon/icon.png";
import author from "../../../../assets/images/icon/author.png";
import Slider from "react-slick";

export default function TestimonialArea() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div
        style={{
          // backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "20px" }}> {dots} </ul>
      </div>
    ),
  };

  const settingsVertical = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };
  return (
    <div className="testimonial-area-2 mt-text-2">
      <div className="container custom-area">
        <div className="row">
          <div className="col-lg-6 col-custom">
            {/*Section Title Start*/}
            <div className="section-title text-center mb-30">
              <span className="section-title-1">We love our clients</span>
              <h3 className="section-title-3">What They’re Saying</h3>
            </div>
            {/*Section Title End*/}
            <div className="testimonial-carousel swiper-container intro11-carousel-wrap arrow-style-2">
              <div className="swiper-wrapper-edit">
                <Slider {...settings}>
                  <div className="single-item swiper-slide">
                    {/*Single Testimonial Start*/}
                    <div className="single-testimonial text-center pb-4">
                      <div className="testimonial-img">
                        <img src={Duy} alt="123" />
                      </div>
                      <div className="testimonial-content">
                        <p>
                          Những chàng trai này đã hoàn toàn xuất sắc. Chủ đề
                          hoàn hảo và tốt nhất là bạn có nhiều tùy chọn để chọn!
                          Nhóm hỗ trợ tốt nhất từ ​​trước đến nay! Phản hồi rất
                          nhanh! Cám ơn rất nhiều! Tôi khuyên bạn nên chọn nơi
                          này và những con người ở đây!
                        </p>
                        <div className="testimonial-author">
                          <h6>
                            Nguyễn Thế Duy <span>Customer</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    {/*Single Testimonial End*/}
                  </div>
                  <div className="single-item swiper-slide">
                    {/*Single Testimonial Start*/}
                    <div className="single-testimonial text-center">
                      <div className="testimonial-img">
                        <img src={Minh} alt="132" />
                      </div>
                      <div className="testimonial-content">
                        <p>
                          Mình đã mua hoa ở đây hơn 4 năm rồi. Từ trang trí đến
                          độ tươi của hoa chưa bao giờ shop làm mình thất vọng.
                          Cám ơn các bạn đã luôn đem đến dịch vụ tốt cho khách
                          hàng! Mình sẽ tiếp tục ủng hộ các bạn!
                        </p>
                        <div className="testimonial-author">
                          <h6>
                            Phạm Văn Minh <span>Customer</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    {/*Single Testimonial End*/}
                  </div>
                </Slider>
              </div>
              {/* Slider Navigation */}
              {/* <div className="home1-slider-prev swiper-button-prev main-slider-nav">
                <i className="lnr lnr-arrow-left" />
              </div>
              <div className="home1-slider-next swiper-button-next main-slider-nav">
                <i className="lnr lnr-arrow-right" />
              </div> */}
              {/* Slider pagination */}
              <div className="swiper-pagination default-pagination" />
            </div>
          </div>

          <div className="col-lg-6 col-custom">
            {/*Section Title Start*/}
            <div className="section-title text-center mb-30">
              <span className="section-title-1">From The Blogs</span>
              <h3 className="section-title-3">Our Latest Post</h3>
            </div>
            {/*Section Title End*/}

            <div className="latest-post-carousel swiper-container intro11-carousel-wrap">
              <div className="swiper-wrapper-edit">
                <Slider {...settingsVertical}>
                  <div className="single-item swiper-slide">
                    {/*Single Blog List Start*/}
                    <div className="blog-list-vertical">
                      <div className="post-date">07/04/2022</div>
                      <h3 className="post-title">
                        <div>Post with Gallery</div>
                      </h3>
                      <p className="post-author">
                        <img src={icon} alt="123" /> <span>Posted by </span>
                        <div>admin </div>
                      </p>
                    </div>
                    {/*Single Blog list End*/}
                  </div>
                  <div className="single-item swiper-slide">
                    {/*Single Blog List Start*/}
                    <div className="blog-list-vertical">
                      <div className="post-date">07/05/2022</div>
                      <h3 className="post-title">
                        <div>Post with Video</div>
                      </h3>
                      <p className="post-author">
                        <img src={author} alt="23" /> <span>Posted by </span>
                        <div>admin </div>
                      </p>
                    </div>
                    {/*Single Blog list End*/}
                  </div>
                  <div className="single-item swiper-slide">
                    {/*Single Blog List Start*/}
                    <div className="blog-list-vertical">
                      <div className="post-date">07/06/2022</div>
                      <h3 className="post-title">
                        <div>Post with Audio</div>
                      </h3>
                      <p className="post-author">
                        <img src={icon} alt="123" /> <span>Posted by </span>
                        <a>admin </a>
                      </p>
                    </div>
                    {/*Single Blog list End*/}
                  </div>
                  <div className="single-item swiper-slide">
                    {/*Single Blog List Start*/}
                    <div className="blog-list-vertical">
                      <div className="post-date">07/09/2020</div>
                      <h3 className="post-title">
                        <a>Standard Blog Post</a>
                      </h3>
                      <p className="post-author">
                        <img src={author} alt="23" /> <span>Posted by </span>
                        <a>admin </a>
                      </p>
                    </div>
                    {/*Single Blog list End*/}
                  </div>
                </Slider>
              </div>

              {/* Slider pagination */}
              {/* <div className="swiper-pagination default-pagination" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
