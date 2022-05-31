import React from "react";

export default function FAQ_Question() {
  return (
    <div className="faq-area">
      {/* Faq Content Start  */}
      <div className="faq_content_area mt-text-6">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="faq_content_wrapper">
                <h4>
                  Below are frequently asked questions, you may find the answer
                  for yourself
                </h4>
                <p>
                  Shop Hoa DND sẽ là cầu nối để kết nối những tình cảm thân yêu
                  của bạn, làm vững bền mối thâm giao bằng hữu tạo dựng đẳng cấp
                  và phong cách khác biệt trong cuộc sống và công việc hay để
                  chia ngọt sẻ bùi, gửi gắm tâm tư ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Faq Content End */}
      {/*Accordion area*/}
      <div className="accordion_area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="accordion" className="card__accordion">
                <div className="card card_dipult">
                  <div className="card-header card_accor" id="headingOne">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Làm sao để mua được sản phẩm từ DND Flower Shop?
                      <i className="fa fa-plus" />
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Quý khách có thể đặt hàng theo các cách sau: + Mua hàng
                        trực tiếp trên website. + Đặt hàng qua Hotline(24/24):
                        19001000 + Đặt hàng trực tiếp tại shop DND:
                        contact@dndshop.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card card_dipult">
                  <div className="card-header card_accor" id="headingTwo">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Thời gian đặt hàng trước khi giao hoa là bao nhiêu thì tốt
                      nhất?
                      <i className="fa fa-plus" />
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Trong tất cả trường hợp, chúng tôi đều khuyến khích bạn
                        nên đặt hoa trước 24h, điều này giúp chúng tôi có thể
                        giúp bạn được tốt hơn. Tuy nhiên, một số trường hợp đột
                        xuất quan trọng và những mẫu hoa đơn giản chúng tôi cũng
                        vẫn có thể chấp nhận các đơn hàng trước 1 đến 2 giờ.
                        Chúng tôi sẽ cố gắng hết sức trong khả năng cho phép để
                        có thể giúp bạn.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card card_dipult">
                  <div className="card-header card_accor" id="headingThree">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      DND sẽ xác nhận đơn hàng như thế nào?
                      <i className="fa fa-plus" />
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Khi đặt hàng thành công quý khách sẽ nhận được thông báo
                        Nội dung chi tiết đơn đặt hành thành công qua email quý
                        khách đã đăng kí trên website. Sau khi nhận được đơn đặt
                        hàng chúng tôi sẽ gọi điện thoại hoặc gửi email xác nhận
                        đơn đặt hàng với quý khách.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card card_dipult">
                  <div className="card-header card_accor" id="headingfour">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseeight"
                      aria-expanded="false"
                      aria-controls="collapseeight"
                    >
                      Sản phẩm của DND có đảm bảo chất lượng và đúng mẫu không?
                      <i className="fa fa-plus" />
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <div
                    id="collapseeight"
                    className="collapse"
                    aria-labelledby="headingfour"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Tất cả các đại lý và nhà cung cấp sản phẩm,dịch vụ đã
                        đươc chọn lọc và có cam kết với DND shop để phục vụ các
                        sản phẩm, dịch vụ tốt nhất đến quý khách. Bạn cứ yên tâm
                        nhé! Nếu có điều gì không hài lòng, bạn hãy phản hồi cho
                        chúng tôi tại tổng đài hoặc email: contact@dndflower.com
                        . Chúng tôi luôn lắng nghe và ghi nhận những ý kiến đóng
                        góp của khách hàng. Trong trường hợp thiếu nguyên liệu
                        về hoa, chúng tôi sẽ chủ động liên hệ với quý khách để
                        thông báo và tư vấn phương án thay thế tốt nhất.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card card_dipult">
                  <div className="card-header card_accor" id="headingfive">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseseven"
                      aria-expanded="false"
                      aria-controls="collapseseven"
                    >
                      Các đơn hàng ở tỉnh thì phí vận chuyển ( phí ship ) được
                      tính như thế nào ?
                      <i className="fa fa-plus" />
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <div
                    id="collapseseven"
                    className="collapse"
                    aria-labelledby="headingfive"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Đối với các đơn hàng ở tỉnh, nếu địa điểm giao hoa nằm
                        trong phạm vi bán kính 5km tính từ trung tâm của tỉnh
                        thì khách hàng sẽ không cần trả thêm phí ship. Đối với
                        các đơn hàng nằm ngoài phạm vi bán kính 5km, chúng tôi
                        nhờ chi nhánh xác nhận lại phí ship, thời gian giao hoa
                        cũng như chất lượng hoa trong quá trình giao nhận và sẽ
                        trả lời lại cho quý khách trong thời gian thường 15
                        phút.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card card_dipult">
                  <div className="card-header card_accor" id="headingsix">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapsefour"
                      aria-expanded="false"
                      aria-controls="collapsefour"
                    >
                      Tôi có nhất thiết phải đăng ký trở thành khách hàng của
                      DND mới được mua hàng hay không?
                      <i className="fa fa-plus" />
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <div
                    id="collapsefour"
                    className="collapse"
                    aria-labelledby="headingsix"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Tùy vào tính chất riêng tư bạn không cần phải đăng ký
                        (có thể nhờ người khác đăng ký). Tuy nhiên, việc đăng ký
                        giúp chúng tôi có những thông tin chăm sóc bạn tốt hơn
                        như: gửi chương trình khuyến mãi, tặng quà...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card card_dipult">
                  <div className="card-header card_accor" id="headingseven">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapsefive"
                      aria-expanded="false"
                      aria-controls="collapsefive"
                    >
                      Trường hợp bạn quên mật khẩu
                      <i className="fa fa-plus" />
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <div
                    id="collapsefive"
                    className="collapse"
                    aria-labelledby="headingseven"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Để lấy lại mật khẩu của mình bạn bấm Quên Mật Khẩu khi
                        đăng nhập và làm theo hướng dẫn
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card card_dipult">
                  <div className="card-header card_accor" id="headingeight">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapsesix"
                      aria-expanded="false"
                      aria-controls="collapsesix"
                    >
                      Tôi muốn giới thiệu bạn bè và người thân tham gia mua hàng
                      tại website của DND shop thì làm thế nào?
                      <i className="fa fa-plus" />
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <div
                    id="collapsesix"
                    className="collapse"
                    aria-labelledby="headingeight"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Bạn có thể gửi đường link website của chúng tôi cho họ
                        qua Email, Facebook, Yahoo hoặc các mạng xã hội khác.
                        Chúng tôi luôn trân trọng sự yêu mến và tin tưởng của
                        các bạn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Accordion area end*/}
    </div>
  );
}
