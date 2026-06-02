import React from "react";

export const Productss_1 = () => {
  return (
    <div className="bg-[#FFF7ED] flex flex-col lg:flex-row items-center justify-between p-6 sm:p-12 lg:p-20 gap-10">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-4 lg:py-6 leading-tight text-gray-900">
          Introducing the Ultimate Product
        </h1>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed">
          Track your fitness, answer calls, and stay connected — all from your
          wrist.
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          className="w-full max-w-md lg:max-w-full h-auto max-h-[350px] lg:max-h-[450px] object-cover rounded-2xl shadow-lg"
          src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/cta-banner.jpg"
          alt="Smart Watch Features"
        />
      </div>
    </div>
  );
};
