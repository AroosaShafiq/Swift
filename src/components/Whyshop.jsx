import React from "react";

export const Whyshop = () => {
  return (
    <div className="p-3 sm:p-5">
      <h1 className="font-bold p-5 text-center text-2xl md:text-3xl text-[#FF6347]">
        Why Shop With Us
      </h1>
      <p className="text-center px-4 max-w-xl mx-auto">
        Experience fast delivery, trusted quality, and 24/7 customer support
        that truly cares.
      </p>

      <div className="p-4 sm:p-8 flex flex-col md:flex-row gap-6 justify-center">
        <div className="bg-[#FFFEFF] border border-gray-300 rounded-xl p-6 sm:p-8 shadow-xl shadow-gray-300 transition-all duration-300 ease-out hover:-translate-y-3 flex-1">
          <div className="flex gap-3 p-5 items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="h-8 w-8 "
            >
              <path
                fill="#FF6347"
                d="M64 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L621.3 192c12 12 18.7 28.3 18.7 45.3L640 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-3.3 0c-35.3 0-64-28.7-64-64l0-48-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 144c-13.3 0-24-10.7-24-24S10.7 96 24 96l40 0zM576 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM256 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
              />
            </svg>
            <h1 className="font-bold text-lg">Fast Delivery</h1>
          </div>
          <p className="text-center md:text-left text-gray-500">
            Nationwide shipping with real-time tracking to get your order to
            your door fast.
          </p>
        </div>

        <div className="bg-[#FFFEFF] border border-gray-300 rounded-xl p-6 sm:p-8 shadow-xl shadow-gray-300 transition-all duration-300 ease-in-out hover:-translate-y-3 flex-1">
          <div className="flex gap-3 p-5 items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-8 w-8"
            >
              <path
                fill="#FF6347"
                d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"
              />
            </svg>
            <h1 className="font-bold text-lg">Premium Quality</h1>
          </div>
          <p className="text-center md:text-left text-gray-500">
            Our products undergo strict quality checks to ensure you receive
            nothing but the best.
          </p>
        </div>

        <div className="bg-[#FFFEFF] border border-gray-300 rounded-xl p-6 sm:p-8 shadow-xl shadow-gray-300 transition-all duration-300 ease-in-out hover:-translate-y-3 flex-1">
          <div className="flex gap-3 p-5 items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-8 w-8"
            >
              <path
                fill="#FF6347"
                d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z"
              />
            </svg>
            <h1 className="font-bold text-lg">24/7 Support</h1>
          </div>
          <p className="text-center md:text-left text-gray-500">
            Our dedicated support team is always available online to help you
            with your queries anytime.
          </p>
        </div>
      </div>
    </div>
  );
};
