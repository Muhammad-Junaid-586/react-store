import React, { useState } from "react";
import { FaStar, FaRegStar, FaHeart, FaRegEye } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

const ProductCard = ({ product }) => {
  const [favorite, setFavorite] = useState(false);
  const [lockActive, setLockActive] = useState(false);

  const handleFavoriteClick = () => {
    setFavorite((prev) => !prev);
  };

  const handleLockClick = () => {
    setLockActive((prev) => !prev);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < rating ? (
          <FaStar key={i} className="text-[#FFD700] text-[18px]" />
        ) : (
          <FaRegStar key={i} className="text-[#FFD700] text-[18px]" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center h-fit overflow-hidden relative group">
      {/* Favorite and View Icons */}
      <div className="absolute top-[40px] right-[20px] flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 z-[8] transition-opacity">
        <FaHeart
          className={`cursor-pointer text-xl ${
            favorite ? "text-red-500" : "text-gray-500"
          }`}
          onClick={handleFavoriteClick}
        />
        <FaRegEye
          className="cursor-pointer text-xl text-gray-500"
          onClick={() => {
            // Navigate to the single product page
          }}
        />
      </div>

      {/* Product Image */}
      <div className="relative w-full">
        <div className="overflow-hidden w-full h-[250px] lg:h-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full lg:h-[250px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-150"
          />
        </div>
        {/* Lock Icon */}
        <div
          className={`absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 border p-3 rounded-full  cursor-pointer ${
            lockActive ? "bg-[#64B496]" : "bg-white"
          }`}
          onClick={handleLockClick}
        >
          <CiLock
            className={`text-[20px] ${
              lockActive ? "text-white" : "text-[#64B496]"
            }`}
          />
        </div>
      </div>

      <h3 className="text-[1rem] font-semibold mt-5 mb-3">{product.type}</h3>

      <div className="flex items-center my-2">
        {renderStars(Math.round(product.rate))}
      </div>

      <p className="text-gray-600 text-sm font-semibold mb-2 text-center">
        {product.text}
      </p>

      <div className="flex items-center gap-3">
        <span className="font-semibold text-lg text-[#64B496]">
          ${product.newPrice ? product.newPrice.toFixed(2) : "0.00"}
        </span>
        <span className="text-sm text-gray-500 line-through">
          ${product.oldPrice ? product.oldPrice.toFixed(2) : "0.00"}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
