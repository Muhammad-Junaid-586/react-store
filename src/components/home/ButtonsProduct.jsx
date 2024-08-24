import React, { useState } from "react";
import cake from "../../assets/3.jpg";
import milk from "../../assets/4.jpg";
import fishMeat from "../../assets/fishMeat.jpg";
import freshMeat from "../../assets/2.jpg";
import coriander from "../../assets/5.jpg";
import brossoli from "../../assets/6.jpg";
import apple from "../../assets/7.jpg";
import mango from "../../assets/8.jpg";
import strabberry from "../../assets/9.jpg";
import strabberry2 from "../../assets/10.jpg";

let buttonsArr = [
  {
    name: "Cake & Milk",
    items: 25,
    images: { first: cake, second: milk },
    discount: { first: "45", second: "20" },
    nameText: { namef: "Cake", nameS: "Milk" },
  },
  {
    name: "Fresh Meat",
    items: 45,
    images: { first: fishMeat, second: freshMeat },
    discount: { first: "45", second: "20" },
    nameText: { namef: "Fish Meat", nameS: "Fresh Meat" },
  },
  {
    name: "Vegetables",
    items: 15,
    images: { first: coriander, second: brossoli },
    discount: { first: "45", second: "20" },
    nameText: { namef: "Coriander", nameS: "Broccoli" },
  },
  {
    name: "Apple & Mango",
    items: 21,
    images: { first: apple, second: mango },
    discount: { first: "45", second: "20" },
    nameText: { namef: "Apple", nameS: "Mango" },
  },
  {
    name: "Strawberry",
    items: 13,
    images: { first: strabberry, second: strabberry2 },
    discount: { first: "45", second: "20" },
    nameText: { namef: "Strawberry", nameS: "Strawberry" },
  },
  {
    name: "Organic Food",
    items: 13,
    images: { first: strabberry, second: strabberry2 },
    discount: { first: "45", second: "20" },
    nameText: { namef: "Coming Soon", nameS: "Comming Soon" },
  },
];

const ButtonsProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(buttonsArr[0]);

  return (
    <div className="w-[95%] mx-auto flex justify-center flex-col myMd:flex-row my-[40px]">
      {/* Buttons Section */}
      <div className="left w-[90%] lg:w-[32%] mx-auto">
        <div className="grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-1 gap-[8px]">
          {buttonsArr.map((item, indx) => (
            <div
              key={indx}
              className={`bg-[#F7F7F8] p-[10px] rounded-[6px] flex items-center justify-center flex-col border cursor-pointer ${
                selectedProduct.name === item.name
                  ? "border-[#64B496]"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedProduct(item)}
            >
              <h2
                className={`hover:text-[#64B496] font-semibold ${
                  selectedProduct.name === item.name
                    ? "text-[#64B496]"
                    : "border-transparent"
                }`}
              >
                {item.name}
              </h2>
              <p>{item.items} Items</p>
            </div>
          ))}
        </div>
      </div>

      {/* Display Section */}
      <div className="right w-[90%] lg:w-[62%] py-[10px] lg:py-[0px] mx-auto">
        <div className="grid grid-cols-1 mysm:grid-cols-2 gap-[8px] w-full ">
          <div
            className="h-[450px] bg-cover bg-center transition-transform duration-500 ease-in-out rounded-[6px] flex items-end justify-center relative group"
            style={{ backgroundImage: `url(${selectedProduct.images.first})` }}
          >
            <div className="absolute inset-0 flex overflow-hidden">
              <div className="absolute top-[-20px] hover:top-0 left-[-20px] hover:left-0 w-[130px] h-[130px] bg-black opacity-30 hover:opacity-30 rounded-full group-hover:w-full group-hover:h-full group-hover:rounded-[6px] transition-all duration-200 ease-in-out z-[1]"></div>
              <p className="text-white text-[45px] p-3 font-bold flex items-top  z-[2]">
                {selectedProduct.discount.first}
                <span className="text-[18px] mt-[32px] flex flex-col items-center">
                  <sup>%</sup>
                  <span className="ml-1">Off</span>
                </span>
              </p>
            </div>

            <div className="mb-[40px] text-center z-[2]">
              <h3 className="text-3xl text-white font-bold">
                {selectedProduct.nameText.namef}
              </h3>
              <button className="bg-[#64B496] text-white px-[20px] py-[8px] rounded-[6px] hover:bg-black hover:bg-opacity-50 hover:border-[1px] hover:border-white mt-2 font-semibold">
                Shop Now
              </button>
            </div>
          </div>

          <div
            className="h-[450px] bg-cover bg-center transition-transform duration-500 ease-in-out rounded-[6px] flex items-end justify-center relative group"
            style={{ backgroundImage: `url(${selectedProduct.images.second})` }}
          >
            <div className="absolute inset-0 flex overflow-hidden">
              <div className="absolute top-[-20px] hover:top-0  left-[-20px] hover:left-0 w-[130px] h-[130px] bg-black opacity-30 hover:opacity-30 rounded-full group-hover:w-full group-hover:h-full group-hover:rounded-[6px] transition-all duration-200 ease-in-out z-[1]"></div>
              <p className="text-white text-[45px] p-3 font-bold flex items-top z-[2]">
                {selectedProduct.discount.second}
                <span className="text-[18px] mt-[32px] flex flex-col items-center">
                  <sup>%</sup>
                  <span className="ml-1">Off</span>
                </span>
              </p>
            </div>

            <div className="mb-[40px] text-center z-[2]">
              <h3 className="text-3xl text-white font-bold">
                {selectedProduct.nameText.nameS}
              </h3>
              <button className="bg-[#64B496] text-white px-[20px] py-[8px] rounded-[6px] hover:bg-black hover:bg-opacity-50 hover:border-[1px] hover:border-white mt-2 font-semibold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsProduct;
