import React from "react";
import { Mens_1 } from "../components/Mens_1";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Mens_2 } from "../components/Mens_2";

export const Men = () => {
  return (
    <div>
      <Navbar />
      <Mens_1 />
      <Mens_2 />
      <Footer />
    </div>
  );
};
