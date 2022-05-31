import React from "react";
import blog1 from "../../../../assets/images/blog/blog1.jpg";
import Duy from "../../../../assets/images/testimonial/Duy.jpg";
import Minh from "../../../../assets/images/testimonial/Minh.jpg";
import icon from "../../../../assets/images/icon.png";

export default function BlogMain() {
  return (
    <div className="blog-main-area">
      <div className="container container-default custom-area">
        <div className="row">
          <div className="col-12 col-custom widget-mt">
            {/* Blog Details wrapper Area Start */}
            <div className="blog-post-details">
              <figure className="blog-post-thumb mb-5">
                <img src={blog1} />
              </figure>
              <section className="blog-post-wrapper product-summery">
                <div className="section-content section-title">
                  <h2 className="section-title-2 mb-3">DND FLOWER SHOP BLOG</h2>
                  <p className="mb-4">
                    Hoa là món quà vô giá mà thiên nhiên đã dành tặng cho con
                    người. Mỗi loài hoa mang một vẻ đẹp và sắc thái riêng, chính
                    vì vậy mà người thưởng hoa có thể gởi gắm tâm tư tình cảm
                    của mình vào chậu hoa một cách tinh tế, ý nhị.
                  </p>
                  <blockquote className="blockquote mb-4">
                    <p>
                      Shop Hoa DND sẽ là cầu nối để kết nối những tình cảm thân
                      yêu của bạn, làm vững bền mối thâm giao bằng hữu tạo dựng
                      đẳng cấp và phong cách khác biệt trong cuộc sống và công
                      việc hay để chia ngọt sẻ bùi, gửi gắm tâm tư ...
                    </p>
                  </blockquote>
                  <p className="mb-5">
                    Hãy liên hệ với chúng tôi, vạn sẽ hoàn toàn yên tâm để chúng
                    tôi có thể thay bạn mang đến niềm vui cho những người thân
                    yêu, bạn bè, đối tác,…của bạn. Cũng chỉ một thao tác bạn đã
                    có một bó hoa đầy màu sắc cùng những thông điệp ngọt ngào
                    dành tặng người thân, những người đặc biệt. Đến với chúng
                    tôi bạn sẽ thật sự an tâm với thái độ phục vụ nhiệt tình của
                    đội ngũ nhân viên năng động, nhiệt tình và nhiều năm kinh
                    nghiệm trong ngành, họ sẽ tư vấn cho quý khách hàng những bó
                    hoa, những món quà phù hợp và ý nghĩa. - Dịch vụ tốt. - Hoa
                    luôn tươi mới - Thẩm mỹ, sáng tạo. - Mang tính nghệ thuật
                    độc đáo Hướng đến sự chuyên nghiệp trong tất cả các quy
                    trình là công việc mà chúng tôi đặt lên hàng đầu nhằm đem
                    lại sự hài lòng tốt nhất cho bạn.
                  </p>
                </div>
                <div className="share-article">
                  <span className="left-side">
                    <a href="#">
                      {" "}
                      <i className="fa fa-long-arrow-left" /> Older Post
                    </a>
                  </span>
                  <h6 className="text-uppercase">Share this article</h6>
                  <span className="right-side">
                    <a href="#">
                      Newer Post <i className="fa fa-long-arrow-right" />
                    </a>
                  </span>
                </div>
                <div className="social-share">
                  <a href="#">
                    <i className="fa fa-facebook-square facebook-color" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter-square twitter-color" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin-square linkedin-color" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest-square pinterest-color" />
                  </a>
                </div>
                <div className="comment-area-wrapper mt-5">
                  <div className="comments-view-area">
                    <h3 className="mb-5">3 Comments</h3>
                    <div className="single-comment-wrap mb-4 d-flex">
                      <figure className="author-thumb">
                        <a href="#">
                          <img src={Duy} alt="Author" />
                        </a>
                      </figure>
                      <div className="comments-info">
                        <p className="mb-2">
                          Những chàng trai này đã hoàn toàn xuất sắc. Chủ đề
                          hoàn hảo và tốt nhất là bạn có nhiều tùy chọn để chọn!
                          Nhóm hỗ trợ tốt nhất từ ​​trước đến nay! Phản hồi rất
                          nhanh! Cám ơn rất nhiều! Tôi khuyên bạn nên chọn nơi
                          này và những con người ở đây!
                        </p>
                        <div className="comment-footer d-flex justify-content-between">
                          <a href="#" className="author">
                            <strong>Duy</strong> - July 30, 2022
                          </a>
                          <a href="#" className="btn-reply">
                            <i className="fa fa-reply" /> Reply
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-comment-wrap mb-4 comment-reply d-flex">
                      <figure className="author-thumb">
                        <a href="#">
                          <img src={icon} alt="Author" />
                        </a>
                      </figure>
                      <div className="comments-info">
                        <p className="mb-2">
                          Chân Thành cảm ơn những góp ý bổ ý của bạn. Shop chắc
                          chắn sẽ ngày càng hoàn thiện hơn nữa.
                        </p>
                        <div className="comment-footer d-flex justify-content-between">
                          <a href="#" className="author">
                            <strong>Jack</strong> - July 30, 2022
                          </a>{" "}
                          <a href="#" className="btn-reply">
                            <i className="fa fa-reply" /> Reply
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-comment-wrap mb-4 d-flex">
                      <figure className="author-thumb">
                        <a href="#">
                          <img src={Minh} alt="Author" />
                        </a>
                      </figure>
                      <div className="comments-info">
                        <p className="mb-2">
                          Mình đã mua hoa ở đây hơn 4 năm rồi. Từ trang trí đến
                          độ tươi của hoa chưa bao giờ shop làm mình thất vọng.
                          Cám ơn các bạn đã luôn đem đến dịch vụ tốt cho khách
                          hàng! Mình sẽ tiếp tục ủng hộ các bạn!
                        </p>
                        <div className="comment-footer d-flex justify-content-between">
                          <a href="#" className="author">
                            <strong>Minh</strong> - July 30, 2022
                          </a>
                          <a href="#" className="btn-reply">
                            <i className="fa fa-reply" /> Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* Blog Details Wrapper Area End */}
            {/* Blog Comments Area Start Here */}
            <form action="#">
              <div className="comment-box mb-5">
                <h3>Leave A Comment</h3>
                <div className="row">
                  <div className="col-12 col-custom">
                    <div className="input-item mt-4 mb-4">
                      <textarea
                        cols={30}
                        rows={5}
                        name="comment"
                        className="border rounded-0 w-100 custom-textarea input-area"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-custom">
                    <div className="input-item mb-4">
                      <input
                        className="border rounded-0 w-100 input-area name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-custom">
                    <div className="input-item mb-4">
                      <input
                        className="border rounded-0 w-100 input-area email"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-custom mt-40">
                    <button
                      type="submit"
                      className="btn flosun-button primary-btn rounded-0 w-100"
                    >
                      Post comment
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {/* Blog Comments Area End Here */}
          </div>
        </div>
      </div>
    </div>
  );
}
