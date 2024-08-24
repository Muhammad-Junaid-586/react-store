import React from "react";
import { FaStar } from "react-icons/fa";
import { GiCash, GiCardboardBox, GiWallet } from "react-icons/gi";
import fruit from "../../assets/fruit.jpg";
import snack from "../../assets/snack.jpg";
import SideBar from "./SideBar";
import BlogContent from "./BlogContent";

let productsArr = [
  {
    id: 1,
    quantity: 1,
    name: "Snack",
    image: snack,
    text: "Best snack with hazelnut pack 200gm",
    newPrice: 145.05,
    oldPrice: 150.05,
    type: "Snacks",
    rate: 4.5,
  },
  {
    id: 2,
    quantity: 1,
    name: "Apple",
    image: fruit,
    text: "Best Organic apple of 1kg Simla marming",
    newPrice: 125.5,
    oldPrice: 128.3,
    type: "Fruits",
    rate: 4.0,
  },
];

const RightSideBar = () => {
  return (
    <div className="flex flex-col md:flex-row w-[92%] gap-5 mx-auto py-6">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="md:w-3/4  space-y-6">
        {/* New Customer Section */}
        <BlogContent cols={1} post={3} />
        {/* Billing Details Section */}
      </div>

      <div className="md:w-1/4">
        {/* Summary Section */}
        <SideBar />
      </div>
    </div>
  );
};

export default RightSideBar;
