import React from 'react'

export default function SingleProduct() {
  return (
    <div className="single-product-main-area">
  <div className="container container-default custom-area">
    <div className="row">
      <div className="col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-custom">
        <div className="product-details-img">
          <div className="single-product-img swiper-container gallery-top popup-gallery">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a className="w-100" href="assets/images/product/large-size/1.jpg">
                  <img className="w-100" src="assets/images/product/large-size/1.jpg" alt="Product" />
                </a>
              </div>
              <div className="swiper-slide">
                <a className="w-100" href="assets/images/product/large-size/2.jpg">
                  <img className="w-100" src="assets/images/product/large-size/2.jpg" alt="Product" />
                </a>
              </div>
              <div className="swiper-slide">
                <a className="w-100" href="assets/images/product/large-size/3.jpg">
                  <img className="w-100" src="assets/images/product/large-size/3.jpg" alt="Product" />
                </a>
              </div>
              <div className="swiper-slide">
                <a className="w-100" href="assets/images/product/large-size/4.jpg">
                  <img className="w-100" src="assets/images/product/large-size/4.jpg" alt="Product" />
                </a>
              </div>
              <div className="swiper-slide">
                <a className="w-100" href="assets/images/product/large-size/5.jpg">
                  <img className="w-100" src="assets/images/product/large-size/5.jpg" alt="Product" />
                </a>
              </div>
              <div className="swiper-slide">
                <a className="w-100" href="assets/images/product/large-size/6.jpg">
                  <img className="w-100" src="assets/images/product/large-size/6.jpg" alt="Product" />
                </a>
              </div>
            </div>
          </div>
          <div className="single-product-thumb swiper-container gallery-thumbs">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="assets/images/product/small-size/1.jpg" alt="Product" />
              </div>
              <div className="swiper-slide">
                <img src="assets/images/product/small-size/2.jpg" alt="Product" />
              </div>
              <div className="swiper-slide">
                <img src="assets/images/product/small-size/3.jpg" alt="Product" />
              </div>
              <div className="swiper-slide">
                <img src="assets/images/product/small-size/4.jpg" alt="Product" />
              </div>
              <div className="swiper-slide">
                <img src="assets/images/product/small-size/5.jpg" alt="Product" />
              </div>
              <div className="swiper-slide">
                <img src="assets/images/product/small-size/6.jpg" alt="Product" />
              </div>
            </div>
            {/* Add Arrows */}
            <div className="swiper-button-next swiper-button-white"><i className="lnr lnr-arrow-right" /></div>
            <div className="swiper-button-prev swiper-button-white"><i className="lnr lnr-arrow-left" /></div>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-custom">
        <div className="product-summery position-relative">
          <div className="product-head mb-3">
            <h2 className="product-title">Sample product</h2>
          </div>
          <div className="price-box mb-2">
            <span className="regular-price">$80.00</span>
            <span className="old-price"><del>$90.00</del></span>
          </div>
          <div className="product-rating mb-3">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-o" />
            <i className="fa fa-star-o" />
          </div>
          <div className="sku mb-3">
            <span>SKU: 12345</span>
          </div>
          <p className="desc-content mb-5">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
          <div className="quantity-with_btn mb-5">
            <div className="quantity">
              <div className="cart-plus-minus">
                <input className="cart-plus-minus-box" defaultValue={0} type="text" />
                <div className="dec qtybutton">-</div>
                <div className="inc qtybutton">+</div>
              </div>
            </div>
            <div className="add-to_cart">
              <a className="btn product-cart button-icon flosun-button dark-btn" href="cart.html">Add to cart</a>
              <a className="btn flosun-button secondary-btn secondary-border rounded-0" href="wishlist.html">Add to wishlist</a>
            </div>
          </div>
          <div className="social-share mb-4">
            <span>Share :</span>
            <a href="#"><i className="fa fa-facebook-square facebook-color" /></a>
            <a href="#"><i className="fa fa-twitter-square twitter-color" /></a>
            <a href="#"><i className="fa fa-linkedin-square linkedin-color" /></a>
            <a href="#"><i className="fa fa-pinterest-square pinterest-color" /></a>
          </div>
          <div className="payment">
            <a href="#"><img className="border" src="assets/images/payment/payment-icon.png" alt="Payment" /></a>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

  )
}
