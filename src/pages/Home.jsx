import React from "react";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import Herosection from "../components/Herosection";
import { Featuredproducts } from "../components/Featuredproducts";
import { Summersection } from "../components/Summersection";
import { Who } from "../components/Who";
import { Mission } from "../components/Mission";
import { Whyshop } from "../components/Whyshop";
import { Reviews } from "../components/Reviews";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
export const Home = () => {
  return (
    <div>
      <Navbar />

      <Herosection />

      <Featuredproducts />
      <Summersection />
      <Who />
      <Mission />
      <Whyshop />
      <Reviews />
      <Footer />
    </div>
  );
};
