import React from "react";

 const Herosection = () => {
  return (
    <div>
      <div className="w-full h-screen animate-hero-bg bg-cover bg-center pt-32 ps-6 sm:pt-40 sm:ps-12 lg:pt-50 lg:ps-20">
        <div className="animate-fade-in max-w-sm sm:max-w-md lg:max-w-lg">
          <h1 className="text-2xl md:text-3xl text-[#FF6347] font-bold">
            Electronics Deal
          </h1>
          <p className="text-lg md:text-xl font-bold pt-5">
            Latest fashion trend just dropped
          </p>
          <p className="mt-3 inline-block cursor-pointer hover:text-[#FF6347] font-semibold">
            Shop Now
          </p>
        </div>
      </div>
    </div>
  );
};
export default Herosection;