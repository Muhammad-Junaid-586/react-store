import React from "react";
import footer1 from "../../assets/footer1.jpg";
import footer2 from "../../assets/footer2.jpg";
import footer3 from "../../assets/footer3.jpg";
import news1 from "../../assets/fishMeat.jpg";

// Sample product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$20",
    image: footer1,
  },
  {
    id: 2,
    name: "Product 2",
    price: "$30",
    image: footer2,
  },
  {
    id: 3,
    name: "Product 3",
    price: "$40",
    image: footer3,
  },
  {
    id: 4,
    name: "Product 4",
    price: "$50",
    image: news1,
  },
];

const Product = () => {
  return (
    <div className="space-y-16 w-[92%] mx-auto py-10 my-[60px]">
      {/* First Product Div: Glassmorphism Style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 text-center shadow-lg transform transition-transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-6 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              {product.name}
            </h3>
            <p className="text-black text-2xl font-bold">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Second Product Div: 3D Card with Depth */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl p-6 shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-6 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-[#FF5733] text-2xl font-bold">{product.price}</p>
            <button className="mt-4 bg-[#64B496] text-white py-2 px-6 rounded-full shadow-lg hover:bg-[#519b7b] transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Third Product Div: Neumorphism Style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-6 rounded-2xl bg-[#E0E5EC] text-center shadow-inner hover:shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-6 rounded-xl border-b-4 border-[#64B496]"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-[#64B496] text-2xl font-bold">{product.price}</p>
            <button className="mt-4 bg-[#64B496] text-white py-2 px-6 rounded-full hover:bg-[#519b7b] transition-colors duration-300">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
