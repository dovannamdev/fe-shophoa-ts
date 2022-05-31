import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import FooterHome from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";
import ProductArea from "../../../components/ProductArea";
import SingleProduct from "./SingleProduct";

export default function Detail() {
  return (
    <div>
      <NavbarHome />
      <BreadCrumb />
      <SingleProduct />
      <ProductArea />
      <FooterHome />
    </div>
  );
}
