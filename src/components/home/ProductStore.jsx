import React from "react";
import ProductCardCarousel from "./ProductCardCarousel";
import { FaArrowRight } from "react-icons/fa";
import lemon from "../../assets/lemon.jpg";
import fruit2 from "../../assets/fruit2.jpg";
import fruit from "../../assets/fruit.jpg";
import snack from "../../assets/snack.jpg";
import snack2 from "../../assets/snack2.jpg";
import snack3 from "../../assets/snack3.jpg";
import bakery from "../../assets/bakery.jpg";
import productRightView from "../../assets/products-rightview.jpg";

let buttonsArr = [
  {
    details: [
      {
        name: "snack",
        image: snack,
        text: "Best snack with hazelnut pack 200gm",
        newPrice: 145.05,
        oldPrice: 150.05,
        type: "Snacks",
        rate: 4.5,
      },
      {
        name: "Apple",
        image: fruit,
        text: "Best Organic apple of 1kg Simla marming",
        newPrice: 125.5,
        oldPrice: 128.3,
        type: "Fruits",
        rate: 4.0,
      },
      {
        name: "snacks",
        image: snack2,
        text: "Fresh Organic Villa farm Lemon 500gm pack",
        newPrice: 120,
        oldPrice: 123,
        type: "Snacks",
        rate: 4.7,
      },
      {
        name: "Lemon",
        image: lemon,
        text: "Fresh Organic Villa farm Lemon 500gm pack",
        newPrice: 120,
        oldPrice: 123,
        type: "Vegetable",
        rate: 3.0,
      },
      {
        name: "Fruit",
        image: fruit2,
        text: "Fresh Organic Villa farm Lemon 500gm pack",
        newPrice: 120,
        oldPrice: 123,
        type: "Fruits",
        rate: 4.2,
      },
      {
        name: "Bakery",
        image: bakery,
        text: "Delicious White baked  and fresh toast",
        newPrice: 20,
        oldPrice: 23,
        type: "Bakery",
        rate: 3.0,
      },
    ],
  },
];

const ProductStore = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 w-[98%] sm:w-[90%] mx-auto my-5 py-5">
      <div className="lg:w-1/2">
        {buttonsArr.map((category, index) => (
          <div key={index} className="mb-8">
            {/* <h2 className="text-xl font-semibold mb-4">{category.name}</h2> */}
            <ProductCardCarousel products={category.details} />
          </div>
        ))}
      </div>

      <div
        className="w-full  h-[440px] bg-cover bg-center rounded-[6px] flex justify-end  items-center"
        style={{ backgroundImage: `url(${productRightView})` }}
      >
        <div className=" text-end pr-4 text-[#2B2B2D]">
          <h2 className="text-[27px] mb-5  md:text-[25px] lg:text-[30px] font-black ">
            Organic & <br /> Healthy <br />
            Vegetables
          </h2>
          <p className="text-2xl font-black py-3 my-3">
            25% <span className="text-sm font-medium ml-1">OFF</span>
          </p>
          <button className="bg-[#64B496] rounded-[6px] text-[white] hover:bg-black hover:text-white font-semibold mt-2 py-[8px] px-[16px]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductStore;
