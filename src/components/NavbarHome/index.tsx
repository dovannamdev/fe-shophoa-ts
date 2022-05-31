import React from "react";
import logo from "../../assets/images/logo/logo.jpg";
import { Link, NavLink } from "react-router-dom";

export default function NavbarHome() {
  return (
    <header className="main-header-area">
      {/* Main Header Area Start */}
      <div className="main-header header-transparent header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-2 col-xl-2 col-md-6 col-6 col-custom">
              <div className="header-logo d-flex align-items-center">
                <Link to="/">
                  <img className="img-full" src={logo} alt={"Header Logo"} />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-flex justify-content-center col-custom">
              <nav className="main-nav d-none d-lg-flex">
                <ul className="nav">
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      // className="active"
                      to="/"
                    >
                      <span className="menu-text"> Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to="/shop"
                    >
                      <span className="menu-text">Shop</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to="/blog"
                    >
                      <span className="menu-text"> Blog</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to="/faq"
                    >
                      <span className="menu-text"> Pages</span>
                      <i className="fa fa-angle-down" />
                    </NavLink>
                    <ul className="dropdown-submenu dropdown-hover">
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          to="/faq"
                        >
                          FAQ
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          to="/login"
                        >
                          Login
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          to="/register"
                        >
                          Register
                        </NavLink>
                      </li>
                      <li>
                        <a href="register.html">Admin</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to="/about-us"
                    >
                      <span className="menu-text"> About Us</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) => (isActive ? "active" : "")}
                      to="/contact-us"
                    >
                      <span className="menu-text">Contact Us</span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2 col-md-6 col-6 col-custom">
              <div className="header-right-area main-nav">
                <ul className="nav">
                  <li className="minicart-wrap">
                    <a href="#" className="minicart-btn toolbar-btn">
                      <i className="fa fa-shopping-cart" />
                      {/* <span className="cart-item_count">3</span> */}
                    </a>
                    <div className="cart-item-wrapper dropdown-sidemenu dropdown-hover-2">
                      <div className="single-cart-item">
                        <div className="cart-img">
                          <a href="cart.html">
                            <img src="assets/images/cart/1.jpg" alt={"123"} />
                          </a>
                        </div>
                        <div className="cart-text">
                          <h5 className="title">
                            <a href="cart.html">Odio tortor consequat</a>
                          </h5>
                          <div className="cart-text-btn">
                            <div className="cart-qty">
                              <span>1×</span>
                              <span className="cart-price">$98.00</span>
                            </div>
                            <button title="123" type="button">
                              <i className="ion-trash-b" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="single-cart-item">
                        <div className="cart-img">
                          <a href="cart.html">
                            <img src="assets/images/cart/2.jpg" alt={"123"} />
                          </a>
                        </div>
                        <div className="cart-text">
                          <h5 className="title">
                            <a href="cart.html">Integer eget augue</a>
                          </h5>
                          <div className="cart-text-btn">
                            <div className="cart-qty">
                              <span>1×</span>
                              <span className="cart-price">$98.00</span>
                            </div>
                            <button title="123" type="button">
                              <i className="ion-trash-b" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="single-cart-item">
                        <div className="cart-img">
                          <a href="cart.html">
                            <img src="assets/images/cart/3.jpg" alt={"123"} />
                          </a>
                        </div>
                        <div className="cart-text">
                          <h5 className="title">
                            <a href="cart.html">Eleifend quam</a>
                          </h5>
                          <div className="cart-text-btn">
                            <div className="cart-qty">
                              <span>1×</span>
                              <span className="cart-price">$98.00</span>
                            </div>
                            <button title="123" type="button">
                              <i className="ion-trash-b" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="cart-price-total d-flex justify-content-between">
                        <h5>Total :</h5>
                        <h5>$166.00</h5>
                      </div>
                      <div className="cart-links d-flex justify-content-between">
                        <a
                          className="btn product-cart button-icon flosun-button dark-btn"
                          href="cart.html"
                        >
                          View cart
                        </a>
                        <a
                          className="btn flosun-button secondary-btn rounded-0"
                          href="checkout.html"
                        >
                          Checkout
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="sidemenu-wrap">
                    <a href="#">
                      <i className="fa fa-search" />{" "}
                    </a>
                    <ul className="dropdown-sidemenu dropdown-hover-2 dropdown-search">
                      <li>
                        <form action="#">
                          <input
                            name="search"
                            id="search"
                            placeholder="Search"
                            type="text"
                          />
                          <button title="123" type="submit">
                            <i className="fa fa-search" />
                          </button>
                        </form>
                      </li>
                    </ul>
                  </li>
                  <li className="account-menu-wrap d-none d-lg-flex">
                    <a title="123" href="/" className="off-canvas-menu-btn">
                      <i className="fa fa-bars" />
                    </a>
                  </li>
                  <li className="mobile-menu-btn d-lg-none">
                    <a title="123" className="off-canvas-btn" href="/">
                      <i className="fa fa-bars" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header Area End */}
      {/* off-canvas menu start */}
      <aside className="off-canvas-wrapper" id="mobileMenu">
        <div className="off-canvas-overlay" />
        <div className="off-canvas-inner-content">
          <div className="btn-close-off-canvas">
            <i className="fa fa-times" />
          </div>
          <div className="off-canvas-inner">
            <div className="search-box-offcanvas">
              <form>
                <input type="text" placeholder="Search product..." />
                <button title="123" className="search-btn">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
            {/* mobile menu start */}
            <div className="mobile-navigation">
              {/* mobile menu navigation start */}
              <nav>
                <ul className="mobile-menu">
                  <li className="menu-item-has-children">
                    <a href="#">Home</a>
                    <ul className="dropdown">
                      <li>
                        <a href="index.html">Home Page 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Page 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Page 3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home Page 4</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Shop</a>
                    <ul className="megamenu dropdown">
                      <li className="mega-title has-children">
                        <a href="#">Shop Layouts</a>
                        <ul className="dropdown">
                          <li>
                            <a href="shop.html">Shop Left Sidebar</a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar.html">
                              Shop Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-left.html">
                              Shop List Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-right.html">
                              Shop List Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-fullwidth.html">Shop Full Width</a>
                          </li>
                        </ul>
                      </li>
                      <li className="mega-title has-children">
                        <a href="#">Product Details</a>
                        <ul className="dropdown">
                          <li>
                            <a href="product-details.html">
                              Single Product Details
                            </a>
                          </li>
                          <li>
                            <a href="variable-product-details.html">
                              Variable Product Details
                            </a>
                          </li>
                          <li>
                            <a href="external-product-details.html">
                              External Product Details
                            </a>
                          </li>
                          <li>
                            <a href="gallery-product-details.html">
                              Gallery Product Details
                            </a>
                          </li>
                          <li>
                            <a href="countdown-product-details.html">
                              Countdown Product Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="mega-title has-children">
                        <a href="#">Others</a>
                        <ul className="dropdown">
                          <li>
                            <a href="error404.html">Error 404</a>
                          </li>
                          <li>
                            <a href="compare.html">Compare Page</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart Page</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout Page</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wish List Page</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children ">
                    <a href="#">Blog</a>
                    <ul className="dropdown">
                      <li>
                        <a href="blog.html">Blog Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-list-right-sidebar.html">
                          Blog List Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-list-fullwidth.html">
                          Blog List Fullwidth
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Blog Grid Page</a>
                      </li>
                      <li>
                        <a href="blog-grid-right-sidebar.html">
                          Blog Grid Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid-fullwidth.html">
                          Blog Grid Fullwidth
                        </a>
                      </li>
                      <li>
                        <a href="blog-details-sidebar.html">
                          Blog Details Sidebar Page
                        </a>
                      </li>
                      <li>
                        <a href="blog-details-fullwidth.html">
                          Blog Details Fullwidth Page
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children ">
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li>
                        <a href="frequently-questions.html">FAQ</a>
                      </li>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="login-register.html">login &amp; register</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact</a>
                  </li>
                </ul>
              </nav>
              {/* mobile menu navigation end */}
            </div>
            {/* mobile menu end */}
            <div className="offcanvas-widget-area">
              <div className="switcher">
                <div className="language">
                  <span className="switcher-title">Language: </span>
                  <div className="switcher-menu">
                    <ul>
                      <li>
                        <a href="#">English</a>
                        <ul className="switcher-dropdown">
                          <li>
                            <a href="#">German</a>
                          </li>
                          <li>
                            <a href="#">French</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="currency">
                  <span className="switcher-title">Currency: </span>
                  <div className="switcher-menu">
                    <ul>
                      <li>
                        <a href="#">$ USD</a>
                        <ul className="switcher-dropdown">
                          <li>
                            <a href="#">€ EUR</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="top-info-wrap text-left text-black">
                <ul className="address-info">
                  <li>
                    <i className="fa fa-phone" />
                    <a href="info@yourdomain.com">(1245) 2456 012</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <a href="info@yourdomain.com">info@yourdomain.com</a>
                  </li>
                </ul>
                <div className="widget-social">
                  <a className="facebook-color-bg" title="Facebook-f" href="#">
                    <i className="fa fa-facebook-f" />
                  </a>
                  <a className="twitter-color-bg" title="Twitter" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a className="linkedin-color-bg" title="Linkedin" href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a className="youtube-color-bg" title="Youtube" href="#">
                    <i className="fa fa-youtube" />
                  </a>
                  <a className="vimeo-color-bg" title="Vimeo" href="#">
                    <i className="fa fa-vimeo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/* off-canvas menu end */}
      {/* off-canvas menu start */}
      <aside className="off-canvas-menu-wrapper" id="sideMenu">
        <div className="off-canvas-overlay" />
        <div className="off-canvas-inner-content">
          <div className="off-canvas-inner">
            <div className="btn-close-off-canvas">
              <i className="fa fa-times" />
            </div>
            {/* offcanvas widget area start */}
            <div className="offcanvas-widget-area">
              <ul className="menu-top-menu">
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
              </ul>
              <p className="desc-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                <br /> Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />{" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <div className="switcher">
                <div className="language">
                  <span className="switcher-title">Language: </span>
                  <div className="switcher-menu">
                    <ul>
                      <li>
                        <a href="#">English</a>
                        <ul className="switcher-dropdown">
                          <li>
                            <a href="#">German</a>
                          </li>
                          <li>
                            <a href="#">French</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="currency">
                  <span className="switcher-title">Currency: </span>
                  <div className="switcher-menu">
                    <ul>
                      <li>
                        <a href="#">$ USD</a>
                        <ul className="switcher-dropdown">
                          <li>
                            <a href="#">€ EUR</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="top-info-wrap text-left text-black">
                <ul className="address-info">
                  <li>
                    <i className="fa fa-phone" />
                    <a href="info@yourdomain.com">(1245) 2456 012</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <a href="info@yourdomain.com">info@yourdomain.com</a>
                  </li>
                </ul>
                <div className="widget-social">
                  <a className="facebook-color-bg" title="Facebook-f" href="#">
                    <i className="fa fa-facebook-f" />
                  </a>
                  <a className="twitter-color-bg" title="Twitter" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a className="linkedin-color-bg" title="Linkedin" href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a className="youtube-color-bg" title="Youtube" href="#">
                    <i className="fa fa-youtube" />
                  </a>
                  <a className="vimeo-color-bg" title="Vimeo" href="#">
                    <i className="fa fa-vimeo" />
                  </a>
                </div>
              </div>
            </div>
            {/* offcanvas widget area end */}
          </div>
        </div>
      </aside>
      {/* off-canvas menu end */}
    </header>
  );
}
