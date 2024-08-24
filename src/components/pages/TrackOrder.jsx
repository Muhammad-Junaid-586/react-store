import React from "react";
import { FaCheckCircle, FaShippingFast } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { FaTruckPickup } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { BsShieldCheck } from "react-icons/bs";

const TrackOrder = () => {
  return (
    <div className="space-y-6 p-4 w-[92%] mx-auto my-16">
      {/* First Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Column */}
        <div className="p-4 border rounded-lg text-center bg-[#F7F7F8]">
          <h2 className="text-lg font-semibold">Order</h2>
          <p className="mt-2">#9983</p>
        </div>
        {/* Second Column */}
        <div className="p-4 border rounded-lg text-center bg-[#F7F7F8]">
          <h2 className="text-lg font-semibold">Grasshoppers</h2>
          <p className="mt-2">M254HT</p>
        </div>
        {/* Third Column */}
        <div className="p-4 border rounded-lg text-center bg-[#F7F7F8]">
          <h2 className="text-lg font-semibold">Expected Date</h2>
          <p className="mt-2">Feb 17, 2025</p>
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 rounded-[5px]">
        {/* First Status */}
        <div className="relative bg-[#F7F7F8] p-4 border border-gray-300 flex flex-col justify-center items-center rounded-t-[5px]">
          <div className="flex justify-end w-full">
            {" "}
            <FaCheckCircle className="text-green-500  text-2xl  rounded-full" />
          </div>
          <BsShieldCheck className="text-[22px]" />
          <span className="font-bold mt-2 text-center">
            Order <br /> Confirmed
          </span>
        </div>
        {/* Second Status */}
        <div className="relative bg-[#F7F7F8] p-4 border border-gray-300 flex flex-col justify-center items-center">
          <div className="flex justify-end w-full">
            {" "}
            <FaCheckCircle className="text-green-500  text-2xl  rounded-full" />
          </div>
          <IoSettingsOutline className="text-[22px]" />
          <span className="font-bold mt-2 text-center">
            Processing <br /> Order
          </span>
        </div>
        {/* Third Status */}
        <div className="relative p-4 border border-gray-300 flex flex-col justify-center items-center">
          <GoGift className="text-[22px]" />
          <span className="font-bold mt-2 text-center">
            Quality <br /> Check
          </span>
        </div>
        {/* Fourth Status */}
        <div className="relative p-4 border border-gray-300 flex flex-col justify-center items-center">
          <FaTruckPickup className="text-[22px]" />
          <span className="font-bold mt-2 text-center">
            Product <br /> Dispatched
          </span>
        </div>
        {/* Fifth Status */}
        <div className="relative p-4 border border-gray-300 flex flex-col justify-center items-center rounded-b-[5px]">
          <CiHome className="text-[22px]" />
          <span className="font-bold mt-2 text-center">
            Product <br /> Delivered
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
