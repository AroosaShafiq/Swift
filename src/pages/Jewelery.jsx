import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Jewelerys_1 } from "../components/Jewelerys_1";
import { Jewelerys_2 } from "../components/Jewelerys_2";

export const Jewelery = () => {
  return (
    <div>
      <Navbar />
      <Jewelerys_1 />
      <Jewelerys_2 />
      <Footer />
    </div>
  );
};
