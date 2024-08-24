// ShopFullWidth.js
import React from "react";
import ProductGrid from "./ProductGrid";
import productsArr from "./productArr"; // Assuming you export productsArr from a separate file

const ShopFullWidth = () => {
  return (
    <div className="w-[92%] mx-auto my-5 py-5">
      {/* Simplified layout for testing */}
      <ProductGrid productsArr={productsArr} cols={3} />
    </div>
  );
};

export default ShopFullWidth;
