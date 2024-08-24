import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const ProductCardCarousel = ({ products }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640, // Tailwind's 'sm' breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
      <style>
        {`
          .slick-next {
            display: none !important;
          }
        `}
      </style>
    </div>
  );
};

export default ProductCardCarousel;
