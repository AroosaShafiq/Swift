import React, { useState, useEffect } from "react";
import { Buttons } from "./Buttons";

export const Women_2 = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);
      });
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6347] text-center p-6 md:p-10">
        <h1>Women Wears</h1>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col justify-between p-5 bg-white rounded-xl shadow-xl shadow-gray-400/40 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-full h-48 flex items-center justify-center mb-4 bg-transparent">
                <img
                  className="w-full h-full object-contain"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="font-bold p-1 text-gray-800 text-sm sm:text-base line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-[#FF6347] font-semibold p-1 text-base sm:text-lg">
                    ${item.price}
                  </p>
                </div>

                <div className="mt-4">
                  <Buttons
                    name="View product"
                    style="hover:bg-[#F54900] bg-[#FF6347] text-white font-semibold text-center rounded-lg px-4 p-2 w-full transition-colors duration-200"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
  