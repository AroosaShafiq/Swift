import React from "react";

export const Jewelerys_1 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-6 sm:p-12 lg:p-20 gap-10 items-center bg-white">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          It’s all About <span className="text-[#F54A00]"> New Year</span>
        </h1>
        <p className="text-gray-500 text-base sm:text-lg lg:text-xl mt-4 max-w-md mx-auto lg:mx-0">
          Discover your luxe style. Ethically sourced, consciously crafted.
        </p>
      </div>

      <div className="flex gap-4 sm:gap-5 justify-center items-end">
        <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover"
            src="https://i.pinimg.com/736x/1a/f3/b4/1af3b4212eae2c3104f277dc3978c631.jpg"
            alt="Jewelry Item 1"
          />
        </div>

        <div className="w-40 h-48 sm:w-56 sm:h-64 md:w-64 md:h-72 rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="https://i.pinimg.com/736x/66/4b/9a/664b9a97d072a3bf7e58f1064d5c76fc.jpg"
            alt="Jewelry Item 2"
          />
        </div>
      </div>
    </div>
  );
};
