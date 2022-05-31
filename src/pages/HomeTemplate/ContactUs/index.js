import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import FooterHome from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";
import Contact from "./Contact";

export default function ContactUs() {
  return (
    <div>
      <NavbarHome />
      <BreadCrumb />
      <Contact />
      <FooterHome />
    </div>
  );
}
