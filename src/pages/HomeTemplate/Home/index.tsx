import React from "react";
import FooterHome from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";
import BannerArea from "./BannerArea";
import BlogArea from "./BlogArea";
import BrandLogoArea from "./BrandLogoArea";
import Collection from "./Collection";
import ProductArea from "../../../components/ProductArea";
import Slider from "./Slider";
import TestimonialArea from "./TestimonialArea";

export default function Home() {
  return (
    <div>
      <NavbarHome />
      <Slider />
      <Collection />
      <ProductArea />
      <BannerArea />
      <TestimonialArea />
      <BlogArea />
      {/* <BrandLogoArea /> */}
      <FooterHome />
    </div>
  );
}
