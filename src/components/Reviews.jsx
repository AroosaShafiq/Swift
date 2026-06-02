import React from "react";

export const Reviews = () => {
  const svgicon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className="h-5 w-5"
    >
      <path
        fill="#F0B100"
        d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"
      />
    </svg>
  );

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-[#FF6347] text-center text-2xl md:text-4xl font-bold p-3 md:p-5">
        Reviews that speak volumes.
      </h1>
      <p className="text-center text-gray-500 text-base md:text-xl max-w-2xl mx-auto mb-6">
        Don’t just take our word for it, hear what people have to say about us.
      </p>

      <div className="flex flex-col md:flex-row p-2 md:p-10 gap-6 justify-center">
        <div className="rounded-xl p-6 bg-[#DBEAFE] flex-1 shadow-md">
          <p className="italic text-gray-800">
            “It was so easy working with you! I appreciated the speed and
            attention to detail with the assets I needed. Especially, on short
            notice. The work went smoothly and I feel taken care of.”
          </p>
          <div className="flex py-3 gap-1">
            {svgicon} {svgicon} {svgicon} {svgicon} {svgicon}
          </div>
          <div className="flex gap-4 items-center">
            <img
              src="https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt="user"
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <div>
              <h1 className="font-bold">Max Kabanuk</h1>
              <p className="text-gray-500 text-sm">Evolving Sanctuary</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl p-6 bg-[#FEF9C2] flex-1 shadow-md">
          <p className="italic text-gray-800">
            “Super fast delivery and the packaging was excellent! The quality of
            the products exceeded my expectations. Will definitely shop from
            SwiftCart again very soon.”
          </p>
          <div className="flex py-3 gap-1">
            {svgicon} {svgicon} {svgicon} {svgicon} {svgicon}
          </div>
          <div className="flex gap-4 items-center">
            <img
              src="https://media.istockphoto.com/id/1437047112/photo/volunteer-friends-gardening-at-sunset-taking-a-selfie.jpg?s=612x612&w=0&k=20&c=0Qp1W9TjUH_iVgGJOoyELBDIzmrwtIbe22x8xdBwV9M="
              alt="user"
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <div>
              <h1 className="font-bold">Sarah Ahmed</h1>
              <p className="text-gray-500 text-sm">TrendSetter Media</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl p-6 bg-[#FFE4E6] flex-1 shadow-md">
          <p className="italic text-gray-800">
            “The customer support team is amazing! They helped me exchange my
            size within 24 hours. Very professional and highly recommended for
            safe shopping.”
          </p>
          <div className="flex py-3 gap-1">
            {svgicon} {svgicon} {svgicon} {svgicon} {svgicon}
          </div>
          <div className="flex gap-4 items-center">
            <img
              src="https://spratx.com/wp-content/uploads/2018/01/Testimonial-Man-147986_500x675.jpg"
              alt="user"
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <div>
              <h1 className="font-bold">John Doe</h1>
              <p className="text-gray-500 text-sm">Apex Logistics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
