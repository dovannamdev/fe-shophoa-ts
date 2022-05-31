import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import FooterHome from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";
import RegisterItem from "./RegisterItem";

export default function Register() {
  return (
    <div>
      <NavbarHome />
      <BreadCrumb />
      <RegisterItem />
      <FooterHome />
    </div>
  );
}
