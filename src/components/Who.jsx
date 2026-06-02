import React from "react";

export const Who = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="p-6 sm:p-12 lg:p-20 lg:w-1/2">
        <h1 className="font-bold text-[#FF6347] text-2xl md:text-3xl mb-4">
          Who We are
        </h1>
        <p className="text-gray-700 leading-relaxed">
          SwiftCart is a customer-first e-commerce store delivering the best
          products at unbeatable prices. From fashion to electronics, we bring
          convenience to your doorstep.
        </p>
      </div>

      <div className="p-6 sm:p-12 lg:p-20 lg:w-1/2 w-full">
        <img
          className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-md"
          src=" https://capturly.com/blog/wp-content/uploads/2018/01/eCommerce-website-search-customer-experience.jpg"
          alt="image"
        />
      </div>
    </div>
  );
};
