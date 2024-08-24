import React, { useState } from "react";
import ProductCard from "../home/ProductCard";
import Slider from "react-slick";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsArr from "../category/productArr";

const WishList = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[90%] mx-auto my-10">
      {/* Popular Products */}
      <div className="my-10">
        <Slider {...settings}>
          {productsArr.map((product) => (
            <div key={product.id} className="p-4">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WishList;
