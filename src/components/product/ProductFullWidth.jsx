import React from "react";
import Sidebar from "../category/Sidebar";
import ProductDetails from "./ProductDetails";

const ProductFullWidth = () => {
  return (
    <div className="w-[92%] mx-auto flex flex-col mytablet:flex-row gap-5 my-5 py-5">
      <div className="w-full">
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductFullWidth;
