import React from "react";
import logo from "../assets/logo.svg";

const Headers = () => {
  return (
    <div className=" bg-black flex justify-between py-[12px] px-4">
      <div className="w-[152px]">
        <img src={logo} alt="" className="w-full h-full" />
      </div>
      <button className="bg-[#7AA93C] p-[4px] px-[18px] text-white rounded-md">
        Buy now
      </button>
    </div>
  );
};

export default Headers;
