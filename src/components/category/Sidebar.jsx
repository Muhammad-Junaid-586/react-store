import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
// import "./style.css";

const Sidebar = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedWeights, setSelectedWeights] = useState([]);
  const [price, setPrice] = useState(20);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };

  const handleColorSelect = (color) => {
    setSelectedColors((prevSelected) =>
      prevSelected.includes(color)
        ? prevSelected.filter((item) => item !== color)
        : [...prevSelected, color]
    );
  };

  const handleWeightSelect = (weight) => {
    setSelectedWeights((prevSelected) =>
      prevSelected.includes(weight)
        ? prevSelected.filter((item) => item !== weight)
        : [...prevSelected, weight]
    );
  };

  return (
    <div className="p-5 bg-[#F7F7F8] border rounded-lg shadow-md space-y-6">
      {/* Category Section */}
      <div>
        <h2 className="text-lg font-semibold">Category</h2>
        <div className="w-16 h-[2px] bg-[#64B496] mt-1 mb-4"></div>
        <ul className="space-y-3">
          {[
            { name: "Juice & Snacks", quantity: 20 },
            { name: "Dairy & Milk", quantity: 54 },
            { name: "Snack & Spice", quantity: 32 },
          ].map((category, index) => (
            <li
              key={index}
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleCategorySelect(category.name)}
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`relative w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedCategories.includes(category.name)
                      ? "bg-[#64B496] border-[#64B496]"
                      : "bg-white border-gray-400"
                  }`}
                >
                  {selectedCategories.includes(category.name) && (
                    <FaCheck className="text-white text-xs" />
                  )}
                </div>
                <span>{category.name}</span>
              </div>
              <span>{`[${category.quantity}]`}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Section */}
      <div>
        <h2 className="text-lg font-semibold">Price</h2>
        <div className="w-16 h-[2px] bg-[#64B496] mt-1 mb-4"></div>
        <input
          type="range"
          min="20"
          max="273"
          value={price}
          onChange={handlePriceChange}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-gray-500 text-sm">
          <span>${price}</span>
          <span>$273</span>
        </div>
      </div>

      {/* Filter Button */}
      <button className="w-full py-2 bg-[#64B496] text-white rounded-lg font-semibold">
        Filter
      </button>

      {/* Color Section */}
      <div>
        <h2 className="text-lg font-semibold">Color</h2>
        <div className="w-16 h-[2px] bg-[#64B496] mt-1 mb-4"></div>
        <ul className="space-y-3">
          {["Red", "Green", "Yellow"].map((color, index) => (
            <li
              key={index}
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleColorSelect(color)}
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`relative w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedColors.includes(color)
                      ? "bg-[#64B496] border-[#64B496]"
                      : "bg-white border-gray-400"
                  }`}
                >
                  {selectedColors.includes(color) && (
                    <FaCheck className="text-white text-xs" />
                  )}
                </div>
                <span>{color}</span>
              </div>
              <div
                className={`w-6 h-6 rounded-full border`}
                style={{
                  backgroundColor:
                    color === "Red"
                      ? "red"
                      : color === "Green"
                      ? "green"
                      : "yellow",
                }}
              ></div>
            </li>
          ))}
        </ul>
      </div>

      {/* Weight Section */}
      <div>
        <h2 className="text-lg font-semibold">Weight</h2>
        <div className="w-16 h-[2px] bg-[#64B496] mt-1 mb-4"></div>
        <ul className="space-y-3">
          {["500g", "1kg", "2kg"].map((weight, index) => (
            <li
              key={index}
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleWeightSelect(weight)}
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`relative w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedWeights.includes(weight)
                      ? "bg-[#64B496] border-[#64B496]"
                      : "bg-white border-gray-400"
                  }`}
                >
                  {selectedWeights.includes(weight) && (
                    <FaCheck className="text-white text-xs" />
                  )}
                </div>
                <span>{weight}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Tag Section */}
      <div>
        <h2 className="text-lg font-semibold">Tags</h2>
        <div className="w-16 h-[2px] bg-[#64B496] mt-1 mb-4"></div>
        <ul className="flex flex-wrap gap-2">
          {["Organic", "Fresh", "Discount", "New"].map((tag, index) => (
            <li
              key={index}
              className="bg-gray-200 px-3 py-1 rounded-md text-sm hover:bg-[#64B496] hover:text-white cursor-pointer transition"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
