import React from "react";
import Navbar from "../components/Navbar";
import { Productss_1 } from "../components/Productss_1";
import { Footer } from "../components/Footer";
import { Productss_2 } from "../components/Productss_2";

export const Productspage = () => {
  return (
    <div>
      <Navbar />
      <Productss_1 />
      <Productss_2 />
      <Footer />
    </div>
  );
};
