import React from "react";
import Slider from "react-slick";
// import img from "assets/images/product/large-size/1.jpg";

export default function ProductArea() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    // slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    dots: true,
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesPerRow: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesPerRow: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesPerRow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-area mt-text-3 mb-5">
      <div className="container custom-area-2 overflow-hidden">
        <div className="row">
          {/*Section Title Start*/}
          <div className="col-12 col-custom">
            <div className="section-title text-center mb-30">
              <span className="section-title-1">The Most Trendy</span>
              <h3 className="section-title-3">Featured Products</h3>
            </div>
          </div>
          {/*Section Title End*/}
        </div>
        <div className="row product-row">
          <div className="col-12 col-custom">
            <div className="product-slider swiper-container anime-element-multi">
              <div className="swiper-wrapper-edit">
                <Slider {...settings}>
                  {/*Single Product Start*/}
                  <div className="single-product position-relative mb-30">
                    <div className="product-image">
                      <a className="d-block" href="product-details.html">
                        <img
                          src={"123"}
                          alt="flower"
                          className="product-image-1 w-100"
                        />
                        <img
                          src="assets/images/product/2.jpg"
                          alt={"123"}
                          className="product-image-2 position-absolute w-100"
                        />
                      </a>
                      <span className="onsale">Sale!</span>
                      <div className="add-action d-flex flex-column position-absolute">
                        <a href="compare.html" title="Compare">
                          <i
                            className="lnr lnr-sync"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i
                            className="lnr lnr-heart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <i
                            className="lnr lnr-eye"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-title">
                        <h4 className="title-2">
                          {" "}
                          <a href="product-details.html">
                            Flowers daisy pink stick
                          </a>
                        </h4>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price-box">
                        <span className="regular-price ">$80.00</span>
                        <span className="old-price">
                          <del>$90.00</del>
                        </span>
                      </div>
                      <a href="cart.html" className="btn product-cart">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  {/*Single Product End*/}
                  {/*Single Product Start*/}
                  <div className="single-product position-relative mb-30">
                    <div className="product-image">
                      <a className="d-block" href="product-details.html">
                        <img
                          src="assets/images/product/3.jpg"
                          alt={"123"}
                          className="product-image-1 w-100"
                        />
                        <img
                          src="assets/images/product/4.jpg"
                          alt={"123"}
                          className="product-image-2 position-absolute w-100"
                        />
                      </a>
                      <div className="add-action d-flex flex-column position-absolute">
                        <a href="compare.html" title="Compare">
                          <i
                            className="lnr lnr-sync"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i
                            className="lnr lnr-heart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <i
                            className="lnr lnr-eye"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-title">
                        <h4 className="title-2">
                          {" "}
                          <a href="product-details.html">
                            Jasmine flowers white
                          </a>
                        </h4>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price-box">
                        <span className="regular-price ">$80.00</span>
                        <span className="old-price">
                          <del>$90.00</del>
                        </span>
                      </div>
                      <a href="cart.html" className="btn product-cart">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  {/*Single Product End*/}

                  {/*Single Product Start*/}
                  <div className="single-product position-relative mb-30">
                    <div className="product-image">
                      <a className="d-block" href="product-details.html">
                        <img
                          src="assets/images/product/5.jpg"
                          alt={"123"}
                          className="product-image-1 w-100"
                        />
                        <img
                          src="assets/images/product/6.jpg"
                          alt={"123"}
                          className="product-image-2 position-absolute w-100"
                        />
                      </a>
                      <div className="add-action d-flex flex-column position-absolute">
                        <a href="compare.html" title="Compare">
                          <i
                            className="lnr lnr-sync"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i
                            className="lnr lnr-heart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <i
                            className="lnr lnr-eye"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-title">
                        <h4 className="title-2">
                          {" "}
                          <a href="product-details.html">
                            Blossom bouquet flower
                          </a>
                        </h4>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price-box">
                        <span className="regular-price ">$80.00</span>
                        <span className="old-price">
                          <del>$90.00</del>
                        </span>
                      </div>
                      <a href="cart.html" className="btn product-cart">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  {/*Single Product End*/}
                  {/*Single Product Start*/}
                  <div className="single-product position-relative mb-30">
                    <div className="product-image">
                      <a className="d-block" href="product-details.html">
                        <img
                          src="assets/images/product/2.jpg"
                          alt={"123"}
                          className="product-image-1 w-100"
                        />
                        <img
                          src="assets/images/product/1.jpg"
                          alt={"123"}
                          className="product-image-2 position-absolute w-100"
                        />
                      </a>
                      <div className="add-action d-flex flex-column position-absolute">
                        <a href="compare.html" title="Compare">
                          <i
                            className="lnr lnr-sync"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i
                            className="lnr lnr-heart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <i
                            className="lnr lnr-eye"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-title">
                        <h4 className="title-2">
                          {" "}
                          <a href="product-details.html">
                            Orchid flower red stick
                          </a>
                        </h4>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price-box">
                        <span className="regular-price ">$80.00</span>
                        <span className="old-price">
                          <del>$90.00</del>
                        </span>
                      </div>
                      <a href="cart.html" className="btn product-cart">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  {/*Single Product End*/}

                  {/*Single Product Start*/}
                  <div className="single-product position-relative mb-30">
                    <div className="product-image">
                      <a className="d-block" href="product-details.html">
                        <img
                          src="assets/images/product/7.jpg"
                          alt={"123"}
                          className="product-image-1 w-100"
                        />
                        <img
                          src="assets/images/product/8.jpg"
                          alt={"123"}
                          className="product-image-2 position-absolute w-100"
                        />
                      </a>
                      <div className="add-action d-flex flex-column position-absolute">
                        <a href="compare.html" title="Compare">
                          <i
                            className="lnr lnr-sync"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i
                            className="lnr lnr-heart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <i
                            className="lnr lnr-eye"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-title">
                        <h4 className="title-2">
                          {" "}
                          <a href="product-details.html">Rose bouquet white</a>
                        </h4>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price-box">
                        <span className="regular-price ">$80.00</span>
                        <span className="old-price">
                          <del>$90.00</del>
                        </span>
                      </div>
                      <a href="cart.html" className="btn product-cart">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  {/*Single Product End*/}
                  {/*Single Product Start*/}
                  <div className="single-product position-relative mb-30">
                    <div className="product-image">
                      <a className="d-block" href="product-details.html">
                        <img
                          src="assets/images/product/9.jpg"
                          alt={"123"}
                          className="product-image-1 w-100"
                        />
                        <img
                          src="assets/images/product/2.jpg"
                          alt={"123"}
                          className="product-image-2 position-absolute w-100"
                        />
                      </a>
                      <div className="add-action d-flex flex-column position-absolute">
                        <a href="compare.html" title="Compare">
                          <i
                            className="lnr lnr-sync"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i
                            className="lnr lnr-heart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <i
                            className="lnr lnr-eye"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-title">
                        <h4 className="title-2">
                          {" "}
                          <a href="product-details.html">
                            Hyacinth white stick
                          </a>
                        </h4>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price-box">
                        <span className="regular-price ">$80.00</span>
                        <span className="old-price">
                          <del>$90.00</del>
                        </span>
                      </div>
                      <a href="cart.html" className="btn product-cart">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  {/*Single Product End*/}

                  {/*Single Product Start*/}
                  <div className="single-product position-relative mb-30">
                    <div className="product-image">
                      <a className="d-block" href="product-details.html">
                        <img
                          src="assets/images/product/3.jpg"
                          alt={"123"}
                          className="product-image-1 w-100"
                        />
                        <img
                          src="assets/images/product/4.jpg"
                          alt={"123"}
                          className="product-image-2 position-absolute w-100"
                        />
                      </a>
                      <div className="add-action d-flex flex-column position-absolute">
                        <a href="compare.html" title="Compare">
                          <i
                            className="lnr lnr-sync"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i
                            className="lnr lnr-heart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <i
                            className="lnr lnr-eye"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-title">
                        <h4 className="title-2">
                          {" "}
                          <a href="product-details.html">Glory of the Snow</a>
                        </h4>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price-box">
                        <span className="regular-price ">$80.00</span>
                        <span className="old-price">
                          <del>$90.00</del>
                        </span>
                      </div>
                      <a href="cart.html" className="btn product-cart">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  {/*Single Product End*/}
                  {/*Single Product Start*/}
                  <div className="single-product position-relative mb-30">
                    <div className="product-image">
                      <a className="d-block" href="product-details.html">
                        <img
                          src="assets/images/product/6.jpg"
                          alt={"123"}
                          className="product-image-1 w-100"
                        />
                        <img
                          src="assets/images/product/5.jpg"
                          alt={"123"}
                          className="product-image-2 position-absolute w-100"
                        />
                      </a>
                      <div className="add-action d-flex flex-column position-absolute">
                        <a href="compare.html" title="Compare">
                          <i
                            className="lnr lnr-sync"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i
                            className="lnr lnr-heart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <i
                            className="lnr lnr-eye"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-title">
                        <h4 className="title-2">
                          {" "}
                          <a href="product-details.html">Jack in the Pulpit</a>
                        </h4>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price-box">
                        <span className="regular-price ">$80.00</span>
                        <span className="old-price">
                          <del>$90.00</del>
                        </span>
                      </div>
                      <a href="cart.html" className="btn product-cart">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  {/*Single Product End*/}

                  {/*Single Product Start*/}
                  <div className="single-product position-relative mb-30">
                    <div className="product-image">
                      <a className="d-block" href="product-details.html">
                        <img
                          src="assets/images/product/8.jpg"
                          alt={"123"}
                          className="product-image-1 w-100"
                        />
                        <img
                          src="assets/images/product/7.jpg"
                          alt={"123"}
                          className="product-image-2 position-absolute w-100"
                        />
                      </a>
                      <div className="add-action d-flex flex-column position-absolute">
                        <a href="compare.html" title="Compare">
                          <i
                            className="lnr lnr-sync"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i
                            className="lnr lnr-heart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <i
                            className="lnr lnr-eye"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-title">
                        <h4 className="title-2">
                          {" "}
                          <a href="product-details.html">Pearly Everlasting</a>
                        </h4>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price-box">
                        <span className="regular-price ">$80.00</span>
                        <span className="old-price">
                          <del>$90.00</del>
                        </span>
                      </div>
                      <a href="cart.html" className="btn product-cart">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  {/*Single Product End*/}
                  {/*Single Product Start*/}
                  <div className="single-product position-relative mb-30">
                    <div className="product-image">
                      <a className="d-block" href="product-details.html">
                        <img
                          src="assets/images/product/9.jpg"
                          alt={"123"}
                          className="product-image-1 w-100"
                        />
                        <img
                          src="assets/images/product/8.jpg"
                          alt={"123"}
                          className="product-image-2 position-absolute w-100"
                        />
                      </a>
                      <div className="add-action d-flex flex-column position-absolute">
                        <a href="compare.html" title="Compare">
                          <i
                            className="lnr lnr-sync"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i
                            className="lnr lnr-heart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <i
                            className="lnr lnr-eye"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-title">
                        <h4 className="title-2">
                          {" "}
                          <a href="product-details.html">
                            Flowers daisy pink stick
                          </a>
                        </h4>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price-box">
                        <span className="regular-price ">$80.00</span>
                        <span className="old-price">
                          <del>$90.00</del>
                        </span>
                      </div>
                      <a href="cart.html" className="btn product-cart">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  {/*Single Product End*/}

                  {/*Single Product Start*/}
                  <div className="single-product position-relative mb-30">
                    <div className="product-image">
                      <a className="d-block" href="product-details.html">
                        <img
                          src="assets/images/product/2.jpg"
                          alt={"123"}
                          className="product-image-1 w-100"
                        />
                        <img
                          src="assets/images/product/1.jpg"
                          alt={"123"}
                          className="product-image-2 position-absolute w-100"
                        />
                      </a>
                      <div className="add-action d-flex flex-column position-absolute">
                        <a href="compare.html" title="Compare">
                          <i
                            className="lnr lnr-sync"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i
                            className="lnr lnr-heart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <i
                            className="lnr lnr-eye"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-title">
                        <h4 className="title-2">
                          {" "}
                          <a href="product-details.html">Flowers white</a>
                        </h4>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price-box">
                        <span className="regular-price ">$80.00</span>
                        <span className="old-price">
                          <del>$90.00</del>
                        </span>
                      </div>
                      <a href="cart.html" className="btn product-cart">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  {/*Single Product End*/}
                  {/*Single Product Start*/}
                  <div className="single-product position-relative mb-30">
                    <div className="product-image">
                      <a className="d-block" href="product-details.html">
                        <img
                          src="assets/images/product/9.jpg"
                          alt={"123"}
                          className="product-image-1 w-100"
                        />
                        <img
                          src="assets/images/product/3.jpg"
                          alt={"123"}
                          className="product-image-2 position-absolute w-100"
                        />
                      </a>
                      <div className="add-action d-flex flex-column position-absolute">
                        <a href="compare.html" title="Compare">
                          <i
                            className="lnr lnr-sync"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Compare"
                          />
                        </a>
                        <a href="wishlist.html" title="Add To Wishlist">
                          <i
                            className="lnr lnr-heart"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Wishlist"
                          />
                        </a>
                        <a
                          href="#exampleModalCenter"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <i
                            className="lnr lnr-eye"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="product-title">
                        <h4 className="title-2">
                          {" "}
                          <a href="product-details.html">Flower red stick</a>
                        </h4>
                      </div>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price-box">
                        <span className="regular-price ">$80.00</span>
                        <span className="old-price">
                          <del>$90.00</del>
                        </span>
                      </div>
                      <a href="cart.html" className="btn product-cart">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                  {/*Single Product End*/}
                </Slider>
              </div>
              {/* Slider pagination */}
              <div className="swiper-pagination default-pagination" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
