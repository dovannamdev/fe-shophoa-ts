import React from 'react'

export default function NewsLetter() {
  return (
    <div className="news-letter-area gray-bg pt-no-text pb-no-text mt-text-3">
  <div className="container custom-area">
    <div className="row align-items-center">
      {/*Section Title Start*/}
      <div className="col-md-6 col-custom">
        <div className="section-title text-left mb-35">
          <h3 className="section-title-3">Send Newsletter</h3>
          <p className="desc-content mb-0">Enter Your Email Address For Our Mailing List To Keep Your Self Update</p>
        </div>
      </div>
      {/*Section Title End*/}
      <div className="col-md-6 col-custom">
        <div className="news-latter-box">
          <div className="newsletter-form-wrap text-center">
            <form id="mc-form" className="mc-form">
              <input type="email" id="mc-email" className="form-control email-box" placeholder="email@example.com" name="EMAIL" />
              <button id="mc-submit" className="btn rounded-0" type="submit">Subscribe</button>
            </form>
            {/* mailchimp-alerts Start */}
            <div className="mailchimp-alerts text-centre">
              <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
              <div className="mailchimp-success text-success" />{/* mailchimp-success end */}
              <div className="mailchimp-error text-danger" />{/* mailchimp-error end */}
            </div>
            {/* mailchimp-alerts end */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
