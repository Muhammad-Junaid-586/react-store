// ShopLeft.js
import React from "react";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";
import productsArr from "./productArr"; // Assuming you export productsArr from a separate file

const ShopLeft = () => {
  return (
    <div className="w-[92%] mx-auto flex flex-col mytablet:flex-row gap-5 my-5 py-5">
      <div className="w-[90%] mx-auto mytablet:w-[48%] myMd:w-[25%]">
        <Sidebar />
      </div>
      <div className="w-[98%] mx-auto myMd:w-[72%]">
        <ProductGrid productsArr={productsArr} cols={3} />
      </div>
    </div>
  );
};

export default ShopLeft;
