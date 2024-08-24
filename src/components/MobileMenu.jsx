import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./navMenu.css"; // You may not need this if all styles are covered by Tailwind

const MobileMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const showMenu = () => {
    setMenuVisible(true);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="flex justify-between items-center lg:hidden">
      {/* Hamburger Icon */}
      <div className="p-4 z-50" onClick={showMenu}>
        <GiHamburgerMenu className="text-2xl" />
      </div>

      {/* Icons Section */}
      <div className="lg:hidden">
        <ul className="flex justify-between gap-[15px] z-50">
          <li className="flex items-center text-[16px] font-bold cursor-pointer relative group">
            <IoPersonOutline className="mr-[4px] size-[20px]" />
            <ul
              className={`absolute left-0 top-[21px] mt-1 w-[120px] bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out z-40`}
            >
              <li className="px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 cursor-pointer">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 cursor-pointer">
                <Link to="/settings">Settings</Link>
              </li>
              <li className="px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 cursor-pointer">
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </li>
          <li className="flex items-center text-[16px] font-bold z-40">
            <FaRegHeart className="mr-[4px] size-[20px]" />
          </li>
          <li className="flex items-center text-[16px] font-bold z-40">
            <IoCartOutline className="mr-[4px] size-[20px]" />
          </li>
        </ul>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full overflow-y-auto bg-gray-300 transform transition-transform duration-300 ${
          menuVisible ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {/* Cross Icon */}
        <div className="w-full flex justify-end p-4 z-60" onClick={hideMenu}>
          <RxCross2 className="text-2xl" />
        </div>

        {/* Menu Content */}
        <div className="p-4">
          <ul className="flex flex-col gap-3">
            {/* Home */}
            <li className="flex flex-col">
              <div
                className="relative flex items-center justify-between text-[16px] font-semibold cursor-pointer"
                onClick={() => handleDropdownClick(1)}
              >
                Home
                <IoIosArrowDown
                  className={`ml-2 mt-1 transform ${
                    openDropdown === 1 ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openDropdown === 1 && (
                <ul className="mt-2 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg z-40">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/grocery">Grocery</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/fashion">Fashion</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Category */}
            <li className="flex flex-col">
              <div
                className="relative flex items-center justify-between text-[16px] font-semibold cursor-pointer"
                onClick={() => handleDropdownClick(2)}
              >
                Category
                <IoIosArrowDown
                  className={`ml-2 mt-1 transform ${
                    openDropdown === 2 ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openDropdown === 2 && (
                <ul className="mt-2 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg z-40">
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
              )}
            </li>

            {/* Products */}
            <li className="flex flex-col">
              <div
                className="relative flex items-center justify-between text-[16px] font-semibold cursor-pointer"
                onClick={() => handleDropdownClick(3)}
              >
                Products
                <IoIosArrowDown
                  className={`ml-2 mt-1 transform ${
                    openDropdown === 3 ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openDropdown === 3 && (
                <ul className="mt-2 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg z-40">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/product-left-sidebar">Product Left SideBar</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/product-right-sidebar">
                      Product Right SideBar
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/product-full-width">Product Full Width</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Pages */}
            <li className="flex flex-col">
              <div
                className="relative flex items-center justify-between text-[16px] font-semibold cursor-pointer"
                onClick={() => handleDropdownClick(4)}
              >
                Pages
                <IoIosArrowDown
                  className={`ml-2 mt-1 transform ${
                    openDropdown === 4 ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openDropdown === 4 && (
                <ul className="mt-2 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg z-40">
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
                    <Link to="/faq">Faq</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/register">Register</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/404">404</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Blog */}
            <li className="flex flex-col">
              <div
                className="relative flex items-center justify-between text-[16px] font-semibold cursor-pointer"
                onClick={() => handleDropdownClick(5)}
              >
                Blog
                <IoIosArrowDown
                  className={`ml-2 mt-1 transform ${
                    openDropdown === 5 ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openDropdown === 5 && (
                <ul className="mt-2 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg z-40">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact */}
            <li className="flex flex-col">
              <div
                className="relative flex items-center justify-between text-[16px] font-semibold cursor-pointer"
                onClick={() => handleDropdownClick(6)}
              >
                Contact
                <IoIosArrowDown
                  className={`ml-2 mt-1 transform ${
                    openDropdown === 6 ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openDropdown === 6 && (
                <ul className="mt-2 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg z-40">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
