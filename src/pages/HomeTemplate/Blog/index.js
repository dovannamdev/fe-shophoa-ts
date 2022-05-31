import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import FooterHome from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";
import BlogMain from "./BlogMain";

export default function Blog() {
  return (
    <>
      <NavbarHome />
      <BreadCrumb />
      <BlogMain />
      <FooterHome />
    </>
  );
}
