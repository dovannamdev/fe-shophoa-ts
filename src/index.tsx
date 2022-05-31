import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/vendor/font.awesome.min.css";
import "./assets/css/vendor/linearicons.min.css";
import "./assets/css/plugins/swiper-bundle.min.css";
import "./assets/css/plugins/animate.min.css";
import "./assets/css/plugins/jquery-ui.min.css";
import "./assets/css/plugins/nice-select.min.css";
import "./assets/css/plugins/magnific-popup.css";
import "./assets/css/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
