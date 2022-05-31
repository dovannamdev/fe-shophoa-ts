import React from "react";
import blog1 from "../../../../assets/images/blog/blog1.jpg";
import blog2 from "../../../../assets/images/blog/blog2.jpg";
import blog3 from "../../../../assets/images/blog/blog3.jpg";

export default function BlogArea() {
  return (
    <div className="blog-post-area mt-text-3">
      <div className="container custom-area">
        <div className="row">
          {/*Section Title Start*/}
          <div className="col-12">
            <div className="section-title text-center mb-30">
              <span className="section-title-1">From The Blogs</span>
              <h3 className="section-title-3">Our Latest Posts</h3>
            </div>
          </div>
          {/*Section Title End*/}
        </div>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 col-custom mb-30">
            <div className="blog-lst">
              <div className="single-blog">
                <div className="blog-image">
                  <a className="d-block" href="blog-details-fullwidth.html">
                    <img src={blog1} alt="Blog Image" className="w-100" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-text">
                    <h4>
                      <a href="blog-details-fullwidth.html">
                        Standard blog post one
                      </a>
                    </h4>
                    <div className="blog-post-info">
                      <span>
                        <a href="#">By admin</a>
                      </span>
                      <span>December 18, 202</span>
                    </div>
                    <p>
                      Hoa là món quà vô giá mà thiên nhiên đã dành tặng cho con
                      người. Mỗi loài hoa mang một vẻ đẹp và sắc thái riêng,
                      chính vì vậy mà người thưởng hoa có thể gởi gắm tâm tư
                      tình cảm của mình vào chậu hoa một cách tinh tế, ý nhị.
                    </p>
                    <a href="blog-details-fullwidth.html" className="readmore">
                      Read More <i className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 col-custom mb-30">
            <div className="blog-lst">
              <div className="single-blog">
                <div className="blog-image">
                  <a className="d-block" href="blog-details-fullwidth.html">
                    <img src={blog2} alt="Blog Image" className="w-100" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-text">
                    <h4>
                      <a href="blog-details-fullwidth.html">
                        Standard blog post two
                      </a>
                    </h4>
                    <div className="blog-post-info">
                      <span>
                        <a href="#">By admin</a>
                      </span>
                      <span>December 18, 2022</span>
                    </div>
                    <p>
                      Hoa là món quà vô giá mà thiên nhiên đã dành tặng cho con
                      người. Mỗi loài hoa mang một vẻ đẹp và sắc thái riêng,
                      chính vì vậy mà người thưởng hoa có thể gởi gắm tâm tư
                      tình cảm của mình vào chậu hoa một cách tinh tế, ý nhị.
                    </p>
                    <a href="blog-details-fullwidth.html" className="readmore">
                      Read More <i className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 col-custom mb-30">
            <div className="blog-lst">
              <div className="single-blog">
                <div className="blog-image">
                  <a className="d-block" href="blog-details-fullwidth.html">
                    <img src={blog3} alt="Blog Image" className="w-100" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-text">
                    <h4>
                      <a href="blog-details-fullwidth.html">
                        Standard blog post three
                      </a>
                    </h4>
                    <div className="blog-post-info">
                      <span>
                        <a href="#">By admin</a>
                      </span>
                      <span>December 18, 2022</span>
                    </div>
                    <p>
                      Hoa là món quà vô giá mà thiên nhiên đã dành tặng cho con
                      người. Mỗi loài hoa mang một vẻ đẹp và sắc thái riêng,
                      chính vì vậy mà người thưởng hoa có thể gởi gắm tâm tư
                      tình cảm của mình vào chậu hoa một cách tinh tế, ý nhị.
                    </p>
                    <a href="blog-details-fullwidth.html" className="readmore">
                      Read More <i className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
