import React from "react";

export const Mens_1 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-20 bg-[#FFF7ED] gap-8">
      <div className="w-full lg:w-2/3 text-center lg:text-left">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
          A byte <span className="text-[#FF6900]">Stylish</span> and trending
          look
        </h1>
        <p className="text-gray-500 mt-4 text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 binds">
          One for all and all for one. Wardrobes are always ready. One for all
          and you feeling wonderful.
        </p>
      </div>

      <div className="w-full lg:w-auto flex justify-center">
        <div className="bg-[#FFF7ED] rounded-lg shadow-lg shadow-gray-300 w-60 overflow-hidden">
          <img
            className="w-full h-auto object-cover"
            src="https://surfshark.com/wp-content/uploads/2024/10/the-best-vpn-for-keeping-multiple-devices-safe-at-all-times-671f51fc23e65.webp"
            alt="Mens Fashion"
          />
        </div>
      </div>
    </div>
  );
};
