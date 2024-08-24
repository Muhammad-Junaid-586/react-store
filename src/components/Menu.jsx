import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="w-full hidden lg:block">
        <ul className="flex justify-between flex-col lg:flex-row p-4 gap-3 lg:gap-0">
          {/* Home */}
          <li className="relative group flex items-center text-[16px] font-semibold cursor-pointer">
            <Link to="/">Home</Link>
            {/* <IoIosArrowDown className="ml-2 mt-1" />
            <ul className="absolute left-[40px] lg:left-0 top-[20px] mt-1 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block z-[9]">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/grocery">Grocery</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/fashion">Fashion</Link>
              </li>
            </ul> */}
          </li>

          {/* Category */}
          <li className="relative group flex items-center text-[16px] font-semibold cursor-pointer">
            <Link to="#">Category</Link>
            <IoIosArrowDown className="ml-2 mt-1" />
            <ul className="absolute left-[40px] lg:left-0 top-[20px] mt-1 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block z-[9]">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/shop-left-sidebar">Shop Left SideBar</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/shop-right-sidebar">Shop Right SideBar</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/full-width">Full Width</Link>
              </li>
            </ul>
          </li>

          {/* Products */}
          <li className="relative group flex items-center text-[16px] font-semibold cursor-pointer">
            <Link to="#">Products</Link>
            <IoIosArrowDown className="ml-2 mt-1" />
            <ul className="absolute left-[40px] lg:left-0 top-[20px] mt-1 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block z-[9]">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/product-left-sidebar">Product Left SideBar</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/product-right-sidebar">Product Right SideBar</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/product-full-width">Product Full Width</Link>
              </li>
            </ul>
          </li>

          {/* Pages */}
          <li className="relative group flex items-center text-[16px] font-semibold cursor-pointer">
            <Link to="#">Pages</Link>
            <IoIosArrowDown className="ml-2 mt-1" />
            <ul className="absolute left-[40px] lg:left-0 top-[20px] mt-1 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block z-[9]">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/checkout">Checkout</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/track-order">Track Order</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/wishlist">WishList</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/faq">Faq</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/login">Login</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </li>

          {/* Blog */}
          <li className="relative group flex items-center text-[16px] font-semibold cursor-pointer">
            <Link to="/blog">Blog</Link>
            <IoIosArrowDown className="ml-2 mt-1" />
            <ul className="absolute left-[40px] lg:left-0 top-[20px] mt-1 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block z-[9]">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/blog-left-sidebar">Left SideBar</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/blog-right-sidebar">Right SideBar</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/blog-full-width">Full Width</Link>
              </li>
              {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/blog-detail-left-sidebar">Detail Left SideBar</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/blog-detail-right-sidebar">
                  Detail Right SideBar
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/blog-detail-full-width">Detail Full Width</Link>
              </li> */}
            </ul>
          </li>

          {/* Elements */}
          <li className="relative group flex items-center text-[16px] font-semibold cursor-pointer">
            <Link to="/elements">Elements</Link>
            <IoIosArrowDown className="ml-2 mt-1" />
            <ul className="absolute left-[40px] lg:left-0 top-[20px] mt-1 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block z-[9]">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/product">Product</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/typography">Typography</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link to="/buttons">Buttons</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
