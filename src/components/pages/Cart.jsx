import React, { useState } from "react";
import ProductCard from "../home/ProductCard";
import Slider from "react-slick";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsArr from "../category/productArr";

const Cart = () => {
  const [products, setProducts] = useState(productsArr || []);

  const handleIncrement = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrement = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.newPrice * product.quantity,
    0
  );

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
      <div className="w-full mx-auto my-10">
        <div className="bg-[#F7F7F8] ">
          <div className="overflow-x-auto md:overflow-x-visible">
            <table className=" bg-[#F7F7F8] rounded-[6px] w-[800px] md:w-full">
              {/* Table Header */}
              <thead className="bg-[#E9E9E9] rounded-[6px]">
                <tr className="border-b-2 py-4 mb-4">
                  <th className="w-[30%] md:w-[40%] py-3 px-3 text-left font-semibold rounded-tl-[6px]">
                    Product
                  </th>
                  <th className=" w-[17.5%] md:w-[15%] py-3 px-3 text-center font-semibold">
                    Price
                  </th>
                  <th className=" w-[17.5%] md:w-[15%] py-3 px-3 text-center font-semibold">
                    Quantity
                  </th>
                  <th className="w-[17.5%] md:w-[15%] py-3 px-3 text-center font-semibold">
                    Total
                  </th>
                  <th className="w-[17.5%] md:w-[15%] py-3 px-3 text-center font-semibold rounded-tr-[6px]">
                    Action
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="rounded-[6px]">
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className="border-b py-4 last:rounded-b-[6px]"
                  >
                    <td className="flex items-center gap-4 w-[40%] px-3 py-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-[60px] h-[60px] rounded-[6px] object-cover border"
                      />
                      <span>{product.name}</span>
                    </td>
                    <td className="w-[17.5%] md:w-[15%] text-center px-3 py-2">
                      ${product.newPrice.toFixed(2)}
                    </td>
                    <td className="w-[17.5%] md:w-[15%] text-center px-3 py-2">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleDecrement(product.id)}
                          className="bg-gray-200 p-2 rounded"
                        >
                          <FaMinus />
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          onClick={() => handleIncrement(product.id)}
                          className="bg-gray-200 p-2 rounded"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td className="w-[17.5%] md:w-[15%] text-center px-3 py-2">
                      ${(product.newPrice * product.quantity).toFixed(2)}
                    </td>
                    <td className="w-[15%] text-center px-3 py-2">
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="hover:text-red-500"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-6 text-center">
        <div className="text-lg font-semibold mb-4">
          Total Price: ${totalPrice.toFixed(2)}
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Checkout
        </button>
      </div>

      {/* Popular Products */}
      <div className="my-10">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Popular Products
        </h2>
        <p className="mb-6 text-center">
          Explore our most popular products below.
        </p>
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

export default Cart;
