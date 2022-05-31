import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import FooterHome from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";
import FAQ_Question from "./FAQ_Question";

export default function FAQ() {
  return (
    <div>
      <NavbarHome />
      <BreadCrumb />
      <FAQ_Question />
      <FooterHome />
    </div>
  );
}
