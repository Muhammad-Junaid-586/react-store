import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { FaArrowRight } from "react-icons/fa";

import lemon from "../../assets/lemon.jpg";
import fruit2 from "../../assets/fruit2.jpg";
import fruit from "../../assets/fruit.jpg";
import snack from "../../assets/snack.jpg";
import snack2 from "../../assets/snack2.jpg";
import snack3 from "../../assets/snack3.jpg";
import bakery from "../../assets/bakery.jpg";
import productBannerImg from "../../assets/product-banner.jpg";
// import { FaRegStar } from "react-icons/fa";

let buttonsArr = [
  {
    name: "All",
    icon: <FaArrowRight />,
    details: [
      {
        name: "snack",
        image: snack,
        text: "Best snack with hazzel nut pack 200gm",
        newPrice: 145.05,
        oldPrice: 150.05,
        type: "Snacks",
        rate: 4.5,
      },
      {
        name: "Apple",
        image: fruit,
        text: "Best Organic apple of 1kg simla marming",
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
        text: "Delicious White baked & fresh toast",
        newPrice: 20,
        oldPrice: 23,
        type: "Bakery",
        rate: 3.0,
      },
    ],
  },
  {
    name: "Snack",
    icon: <FaArrowRight />,
    details: [
      {
        name: "snack",
        image: snack,
        text: "Best snack with hazzel nut pack 200gm",
        newPrice: 145.05,
        oldPrice: 150.05,
        type: "Snacks",
        rate: 4.5,
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
        name: "snack",
        image: snack3,
        text: "Sweet Crunchi nutt max 250gm pack",
        newPrice: 20,
        oldPrice: 23,
        type: "Bakery",
        rate: 4.1,
      },
    ],
  },
  {
    name: "Vegetable",
    icon: <FaArrowRight />,
    details: [
      {
        name: "Lemon",
        image: lemon,
        text: "Fresh Organic Villa farm Lemon 500gm pack",
        newPrice: 120,
        oldPrice: 123,
        type: "Vegetable",
        rate: 3.8,
      },
    ],
  },
  {
    name: "Fruit",
    icon: <FaArrowRight />,
    details: [
      {
        name: "Apple",
        image: fruit,
        text: "Best Organic apple of 1kg simla marming",
        newPrice: 125.5,
        oldPrice: 128.3,
        type: "Fruits",
        rate: 4.0,
      },
      {
        name: "Bakery",
        image: fruit2,
        text: "Organic Best Valina farm watermelon 5kg ",
        newPrice: 50,
        oldPrice: 70,
        type: "Fruits",
        rate: 4.3,
      },
    ],
  },
  {
    name: "Bakery",
    icon: <FaArrowRight />,
    details: [
      {
        name: "Bakery",
        image: bakery,
        text: "Delicious White baked fresh toast",
        newPrice: 20,
        oldPrice: 23,
        type: "Bakery",
        rate: 4.0,
      },
    ],
  },
];

const PopularProducts = () => {
  const [selectedButton, setSelectedButton] = useState("All");

  const selectedProducts = buttonsArr.find(
    (button) => button.name === selectedButton
  )?.details;

  return (
    <div className="mb-5 pb-5">
      <div className="w-[98%] mobile:w-[80%]  md:w-[50%] mx-auto text-center">
        <h2 className="text-[37px] font-semibold my-3">Popular Products</h2>
        <p className="font-semibold text-[16px] text-gray-400 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          voluptates sint labore nemo iusto. Iure voluptatibus sed, repudiandae
          laborum architecto vero! Qui blanditiis laborum officiis illo! Minima,
          quisquam similique? Doloremque?
        </p>
      </div>

      <div className="w-[95%] mx-auto flex flex-col md:flex-row justify-evenly">
        {/* Left Column: Buttons */}
        <div className="w-[100%] md:w-[27%] flex flex-col mobile:flex-row  mobile:gap-4 md:flex-col">
          <div className="w-full">
            {buttonsArr.map((item, ind) => (
              <div
                key={ind}
                className={`w-full flex justify-between bg-[#F7F7F8] mb-2 py-3 px-3 font-semibold cursor-pointer rounded-[6px] ${
                  selectedButton === item.name
                    ? "text-[#65B597] border border-[#65B597]"
                    : ""
                }`}
                onClick={() => setSelectedButton(item.name)}
              >
                <button>{item.name}</button>
                <button>{item.icon}</button>
              </div>
            ))}
          </div>

          <div
            className="w-full h-[280px] sm:h-[600px] sm:bg-cover bg-cover mt-4 mobile:mt-0 lg:mt-4 md:pt-4 rounded-[6px] hidden mobile:block "
            style={{ backgroundImage: `url(${productBannerImg})` }}
          >
            <div className="text-white p-[60px] mobile:px-4 sm:p-[60px] pt-[20px] myMd:py-[60px] mytablet:px-[20px] my-5">
              <p className="text-[30px] font-semibold ">Juicy</p>
              <h2 className="text-[#F7E8AA] font-black text-[38px]">Fruits</h2>
              <p>100% Natural</p>
              <button className="bg-[#64B496] text-white px-[20px] py-[8px] rounded-[6px] hover:bg-black hover:bg-opacity-50 hover:border-[1px] hover:border-white mt-2 font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Product Cards */}
        <div className="w-full md:w-[65%] grid grid-cols-1 mysm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 md:mt-0">
          {selectedProducts?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
