import React, { useState } from "react";
import { Buttons } from "./Buttons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const anchorstyle = "font-semibold hover:text-[#FF6347]    ";

  return (
    <nav className="flex p-5 bg-[#FFFFFF] items-center justify-between lg:justify-start lg:gap-14 xl:gap-20 relative">
      <div>
        {" "}
        <h1 className=" font-bold text-2xl text-[#FF6347] mr-7">SwiftCart</h1>
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#FF6347] focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex gap-8">
        <Link to="/Productspage" className={anchorstyle}>
          Product
        </Link>
        <Link to="/womenpage" className={anchorstyle}>
          Women
        </Link>
        <Link to="/menpage" className={anchorstyle}>
          Men
        </Link>
        <Link to="/jewelerypage" className={anchorstyle}>
          Jewelery
        </Link>
      </div>

      <div className="hidden lg:block rounded-full border-2 p-2 border-gray-300 focus-within:border-[#FF6347] w-100 ">
        <input
          type="text"
          placeholder="search for products"
          className="outline-0 "
        />
      </div>

      <div className="hidden lg:flex gap-2 ml-auto">
        <div>
          <p className="font-semibold">Hi,</p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="h-5 w-5"
          >
            <path
              fill="#FF6347"
              d="M331.8 440.4a45.8 45.8 0 1 1 91.5 .3 45.8 45.8 0 1 1 -91.5-.3zM169.4 394.9a45.7 45.7 0 1 0 .3 91.3 45.7 45.7 0 1 0 -.3-91.3zm291.7-270c-302.2 0-379.2-12.8-461.1-99.2 34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"
            />
          </svg>
        </div>
        <Buttons
          name="login"
          style="px-2   rounded-full text-[#FF6347] font-semibold border-2 border-[#FF6347] hover:text-white hover:bg-[#FF6347]"
        />
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t p-5 shadow-lg z-50 flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <Link
              to="/Productspage"
              className={anchorstyle}
              onClick={() => setIsOpen(false)}
            >
              Product
            </Link>
            <Link
              to="/womenpage"
              className={anchorstyle}
              onClick={() => setIsOpen(false)}
            >
              Women
            </Link>
            <Link
              to="/menpage"
              className={anchorstyle}
              onClick={() => setIsOpen(false)}
            >
              Men
            </Link>
            <Link
              to="/jewelerypage"
              className={anchorstyle}
              onClick={() => setIsOpen(false)}
            >
              Jewelery
            </Link>
          </div>

          <div className="rounded-full border-2 p-2 border-gray-300 focus-within:border-[#FF6347]">
            <input
              type="text"
              placeholder="search for products"
              className="outline-0 w-full"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <p className="font-semibold">Hi,</p>
            <Buttons
              name="login"
              style="px-2 rounded-full text-[#FF6347] font-semibold border-2 border-[#FF6347] hover:text-white hover:bg-[#FF6347]"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
