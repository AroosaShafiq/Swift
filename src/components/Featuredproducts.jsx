import React, { useState, useEffect } from "react";
import { Buttons } from "./Buttons";

export const Featuredproducts = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data);
      });
  }, []);
  return (
    <div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6347] text-center p-6 md:p-10">
        <h1>Featured Products</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-2 md:p-0">
        {product.slice(0, 6).map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col justify-between m-3 sm:m-5 p-5 bg-white rounded-xl shadow-xl shadow-gray-500"
            >
              <img
                className="w-full h-48 object-contain mb-4"
                src={item.image}
                alt={item.title}
              />
              <h2 className="font-bold p-1">{item.title}</h2>
              <p className="text-[#FF6347]  font-semibold p-1 ">
                ${item.price}
              </p>

              <Buttons
                name="View product"
                style="hover:bg-[#F54900] bg-[#FF6347]  text-white font-semibold text-center rounded-lg px-10 p-2 w-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
