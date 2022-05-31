import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import FooterHome from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";
import ProductArea from "../../../components/ProductArea";

export default function Shop() {
  return (
    <div>
      <NavbarHome />
      <BreadCrumb />
      <ProductArea />
      <FooterHome />
    </div>
  );
}
