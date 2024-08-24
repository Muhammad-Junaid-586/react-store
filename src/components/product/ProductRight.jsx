import React from "react";
import Sidebar from "../category/Sidebar";
import ProductDetails from "./ProductDetails";

const ProductRight = () => {
  return (
    <div className="w-[92%] mx-auto flex flex-col mytablet:flex-row gap-5 my-5 py-5">
      <div className="w-[98%] mx-auto myMd:w-[72%] ">
        <ProductDetails />
      </div>

      <div className="w-[92%] mx-auto mytablet:w-[48%] myMd:w-[25%]">
        <Sidebar />
      </div>
    </div>
  );
};

export default ProductRight;
