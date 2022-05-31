import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import FooterHome from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";
import LoginItem from "./LoginItem/index";

export default function Login() {
  return (
    <div>
      <NavbarHome />
      <BreadCrumb />
      <LoginItem />
      <FooterHome />
    </div>
  );
}
