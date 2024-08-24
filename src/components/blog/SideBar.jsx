import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import lemon from "../../assets/lemon.jpg";
import fruit2 from "../../assets/fruit2.jpg";
import fruit from "../../assets/fruit.jpg";
import snack from "../../assets/snack.jpg";
import snack2 from "../../assets/snack2.jpg";
import snack3 from "../../assets/snack3.jpg";
import bakery from "../../assets/bakery.jpg";

const SideBar = () => {
  const categories = [
    { name: "Milk and Dairies", quantity: 12 },
    { name: "Sea Food", quantity: 8 },
    { name: "Fresh Food", quantity: 15 },
    { name: "Pet Food", quantity: 5 },
    { name: "Meat Food", quantity: 10 },
  ];

  const posts = [
    {
      image: fruit,
      date: "August 24, 2024",
      title: "Best Organic apple of 1kg Simla marming",
      description: "This is a short description of the post.",
    },
  ];

  const galleryImages = [fruit, snack2, lemon, fruit2, snack, bakery];

  const tags = ["Dairy", "Seafood", "Fresh", "Meat", "Pet Food"];

  return (
    <div className="px-3 py-5 w-full border rounded-[6px] ">
      {/* Search */}
      <div className="border border-[#64B496] rounded-[3px] flex items-center text-[16px] w-full mb-6">
        <input
          type="text"
          placeholder="Search...."
          className="border-none focus:outline-none py-3 px-4 w-full"
        />
        <button className="py-[14px] px-4 bg-[#64B496] text-white rounded-r-[3px]">
          <IoSearchOutline className="text-[20px]" />
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-[18px] font-bold mb-4">Categories</h2>
        {categories.map((category, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-[6px] p-4 flex justify-between items-center mb-3"
          >
            <span>{category.name}</span>
            <span>{category.quantity}</span>
          </div>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="mb-6 ">
        <h2 className="text-[18px] font-bold mb-4">Recent Posts</h2>
        {posts.map((post, index) => (
          <div
            key={index}
            className="mb-4 border p-2 py-3 rounded-[6px] text-center"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto mb-3 rounded-[6px]"
            />
            <span className="text-gray-500 text-[12px]">{post.date}</span>
            <h3 className="text-[16px] font-bold">{post.title}</h3>
            <p className="text-[14px] pb-2">{post.description}</p>
          </div>
        ))}
      </div>

      {/* Latest Gallery */}
      <div className="mb-6">
        <h2 className="text-[18px] font-bold mb-4">Latest Gallery</h2>
        <div className="grid grid-cols-3 gap-2">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto rounded-[6px]"
            />
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div>
        <h2 className="text-[18px] font-bold mb-4">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 border border-gray-300 rounded-[6px] cursor-pointer hover:bg-[#64B496] hover:text-white transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
