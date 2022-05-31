import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import FooterHome from "../../../components/Footer";
import NavbarHome from "../../../components/NavbarHome";

import OurHistory from "./OurHistory";
import Team from "./Team";

export default function AboutUs() {
  return (
    <div>
      <NavbarHome />
      <BreadCrumb />
      <OurHistory />
      <Team />
      <FooterHome />
    </div>
  );
}
