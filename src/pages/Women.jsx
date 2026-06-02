import React from "react";
import { Womens_1 } from "../components/Womens_1";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Women_2 } from "../components/Women_2";
export const Women = () => {
  return (
    <div>
      <Navbar />
      <Womens_1 />
      <Women_2/>
      <Footer />
    </div>
  );
};
