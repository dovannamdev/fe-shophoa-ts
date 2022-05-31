import React from "react";

export default function Contact() {
  return (
    <div className="contact-us-area mt-no-text">
      <div className="container custom-area">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-custom">
            <div className="contact-info-item">
              <div className="con-info-icon">
                <i className="lnr lnr-map-marker" />
              </div>
              <div className="con-info-txt">
                <h4>Our Location</h4>
                <p>97 Man Thien Street, Thu Duc City Ho Chi Minh City</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-custom">
            <div className="contact-info-item">
              <div className="con-info-icon">
                <i className="lnr lnr-smartphone" />
              </div>
              <div className="con-info-txt">
                <h4>Contact us Anytime</h4>
                <p>
                  Mobile: 057 1405 128
                  <br />
                  Fax: 057 145 128
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-custom text-align-center">
            <div className="contact-info-item">
              <div className="con-info-icon">
                <i className="lnr lnr-envelope" />
              </div>
              <div className="con-info-txt">
                <h4>Support Overall</h4>
                <p>
                  dndflowershop@gmail.com
                  <br /> DNDC FLOWER SHOP 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-custom">
            <form
              method="post"
              action="http://whizthemes.com/mail-php/reza/flosun/mail.php"
              id="contact-form"
              acceptCharset="UTF-8"
              className="contact-form"
            >
              <div className="comment-box mt-5">
                <h5 className="text-uppercase">Get in Touch</h5>
                <div className="row mt-3">
                  <div className="col-md-6 col-custom">
                    <div className="input-item mb-4">
                      <input
                        className="border-0 rounded-0 w-100 input-area name gray-bg"
                        type="text"
                        name="con_name"
                        id="con_name"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-custom">
                    <div className="input-item mb-4">
                      <input
                        className="border-0 rounded-0 w-100 input-area email gray-bg"
                        type="email"
                        name="con_email"
                        id="con_email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-custom">
                    <div className="input-item mb-4">
                      <input
                        className="border-0 rounded-0 w-100 input-area email gray-bg"
                        type="text"
                        name="con_content"
                        id="con_content"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-custom">
                    <div className="input-item mb-4">
                      <textarea
                        cols={30}
                        rows={5}
                        className="border-0 rounded-0 w-100 custom-textarea input-area gray-bg"
                        name="con_message"
                        id="con_message"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-custom mt-40">
                    <button
                      type="submit"
                      id="submit"
                      name="submit"
                      className="btn flosun-button secondary-btn theme-color rounded-0"
                    >
                      Send A Message
                    </button>
                  </div>
                  <p className="col-8 col-custom form-message mb-0" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
