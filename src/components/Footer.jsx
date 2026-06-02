import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#101828] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-6 sm:p-10 gap-8 md:gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-white font-bold text-2xl">Swift Cart</h1>

        <p className="text-gray-400 text-sm max-w-xs">
          Elevating your shopping experience with speed, quality, and care.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-white mb-1">Explore</h1>
        <a
          href="#home"
          className="text-gray-400 text-sm hover:text-[#FF6347] transition-colors duration-200"
        >
          Home
        </a>
        <a
          href="#shop"
          className="text-gray-400 text-sm hover:text-[#FF6347] transition-colors duration-200"
        >
          Shop
        </a>
        <a
          href="#about"
          className="text-gray-400 text-sm hover:text-[#FF6347] transition-colors duration-200"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-gray-400 text-sm hover:text-[#FF6347] transition-colors duration-200"
        >
          Contact
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-white mb-1">Help Center</h1>
        <a
          href="#faqs"
          className="text-gray-400 text-sm hover:text-[#FF6347] transition-colors duration-200"
        >
          FAQ's
        </a>
        <a
          href="#shipping"
          className="text-gray-400 text-sm hover:text-[#FF6347] transition-colors duration-200"
        >
          Shipping
        </a>
        <a
          href="#returns"
          className="text-gray-400 text-sm hover:text-[#FF6347] transition-colors duration-200"
        >
          Returns
        </a>
        <a
          href="#track"
          className="text-gray-400 text-sm hover:text-[#FF6347] transition-colors duration-200"
        >
          Track order
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-white mb-1">Connect</h1>
        <a
          href="mailto:support@swiftcart.com"
          className="text-gray-400 text-sm hover:text-[#FF6347] transition-colors duration-200 break-words"
        >
          📧 support@swiftcart.com
        </a>
        <a
          href="tel:+921234567890"
          className="text-gray-400 text-sm hover:text-[#FF6347] transition-colors duration-200"
        >
          📞 +92 123 4567890
        </a>
        <p className="text-gray-400 text-sm">📍 Lahore, Pakistan</p>
      </div>
    </div>
  );
};
