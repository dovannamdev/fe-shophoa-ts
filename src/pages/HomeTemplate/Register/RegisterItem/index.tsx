import React from "react";

export default function RegisterItem() {
  return (
    <div className="login-register-area mt-no-text">
      <div className="container container-default-2 custom-area">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-custom">
            <div className="login-register-wrapper">
              <div className="section-content text-center mb-5">
                <h2 className="title-4 mb-2">Create Account</h2>
                <p className="desc-content">
                  Please Register using account detail bellow.
                </p>
              </div>
              <form action="#" method="post">
                <div className="single-input-item mb-3">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="single-input-item mb-3">
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="single-input-item mb-3">
                  <input type="email" placeholder="Email or Username" />
                </div>
                <div className="single-input-item mb-3">
                  <input type="password" placeholder="Enter your Password" />
                </div>
                <div className="single-input-item mb-3">
                  <div className="login-reg-form-meta d-flex align-items-center justify-content-between">
                    <div className="remember-meta mb-3">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="rememberMe"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="rememberMe"
                        >
                          Subscribe Our Newsletter
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-input-item mb-3">
                  <button className="btn flosun-button secondary-btn theme-color rounded-0">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
