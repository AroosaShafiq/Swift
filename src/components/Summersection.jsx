import React from "react";
import { Buttons } from "./Buttons";

export const Summersection = () => {
  return (
    <div className="mt-10 w-full h-[400px] sm:h-[500px] flex items-center justify-center bg-[url('https://thumbs.dreamstime.com/z/fashion-flat-lay-composition-place-your-text-frame-made-women-s-cosmetics-accessories-peach-background-169245650.jpg')] bg-cover bg-center p-4 sm:p-0">
      <div className="rounded-xl bg-[#F8CFB2] p-6 sm:p-10 w-full max-w-md">
        <div className="rounded-xl bg-white text-center p-5 shadow-lg shadow-gray-400">
          <p>🎉 25% Discount</p>
          <h1 className="font-bold text-2xl">Summer Collection</h1>
          <p>Starting from just $10</p>
          <Buttons
            name="SHOP NOW"
            style="text-white bg-[#FF7961] rounded-full px-8 p-2 m-3 transition-colors duration-200 hover:bg-[#e05e47]"
          />
        </div>
      </div>
    </div>
  );
};
