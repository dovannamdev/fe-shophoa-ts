import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Login = lazy(() => import("../pages/HomeTemplate/Login"));
const Home = lazy(() => import("../pages/HomeTemplate/Home"));
const Detail = lazy(() => import("../pages/HomeTemplate/Detail"));
const Blog = lazy(() => import("../pages/HomeTemplate/Blog"));
const AboutUs = lazy(() => import("../pages/HomeTemplate/AboutUs"));
const ContactUs = lazy(() => import("../pages/HomeTemplate/ContactUs"));
const Shop = lazy(() => import("../pages/HomeTemplate/Shop"));
const FAQ = lazy(() => import("../pages/HomeTemplate/FAQ"));
const Register = lazy(() => import("../pages/HomeTemplate/Register"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="shop" element={<Shop />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
