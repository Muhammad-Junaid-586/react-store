import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // Replace with your logo path
import image from "../assets/footer1.jpg"; // Replace with your image path
import image2 from "../assets/footer2.jpg"; // Replace with your image path
import image3 from "../assets/footer3.jpg"; // Replace with your image path

const Footer = () => {
  const [isOpen, setIsOpen] = useState({
    contact: false,
    subscribe: false,
    menu: false,
    quickLinks: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className="bg-[#F7F7F8] text-black py-8">
      <div className="w-[90%] mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[30%_15%_15%_30%] gap-8">
          {/* Column 1: Logo and Contact Information */}
          <div>
            <img src={logo} alt="Logo" className="mb-4 w-32" />
            <p className="text-gray-400 mb-4">
              Your company description goes here. Provide information about your
              services and mission.
            </p>
            {/* Collapsible Contact Information */}
            <div className="md:hidden">
              <button
                onClick={() => toggleSection("contact")}
                className="flex items-center justify-between w-full text-gray-300 hover:text-[#73BBA0]"
              >
                <h3 className="text-lg font-bold">Contact</h3>
                {isOpen.contact ? (
                  <FaChevronUp className="text-2xl" />
                ) : (
                  <FaChevronDown className="text-2xl" />
                )}
              </button>
              {isOpen.contact && (
                <div className="mt-4">
                  <div className="flex flex-col">
                    <a
                      href="tel:+1234567890"
                      className="flex items-center mb-2 text-gray-400 hover:text-[#73BBA0]"
                    >
                      <FaPhoneAlt className="mr-2" /> +123 456 7890
                    </a>
                    <a
                      href="mailto:info@example.com"
                      className="flex items-center mb-2 text-gray-400 hover:text-[#73BBA0]"
                    >
                      <FaEnvelope className="mr-2" /> info@example.com
                    </a>
                    <a
                      href="#location"
                      className="flex items-center text-gray-400 hover:text-[#73BBA0]"
                    >
                      <FaMapMarkerAlt className="mr-2" /> 123 Street, City,
                      Country
                    </a>
                  </div>
                </div>
              )}
            </div>
            {/* Contact Information for Larger Screens */}
            <div className="hidden md:block">
              <div className="flex flex-col">
                <a
                  href="tel:+1234567890"
                  className="flex items-center mb-2 text-gray-400 hover:text-[#73BBA0]"
                >
                  <FaPhoneAlt className="mr-2" /> +123 456 7890
                </a>
                <a
                  href="mailto:info@example.com"
                  className="flex items-center mb-2 text-gray-400 hover:text-[#73BBA0]"
                >
                  <FaEnvelope className="mr-2" /> info@example.com
                </a>
                <a
                  href="#location"
                  className="flex items-center text-gray-400 hover:text-[#73BBA0]"
                >
                  <FaMapMarkerAlt className="mr-2" /> 123 Street, City, Country
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div>
            {/* Collapsible Menu */}
            <div className="md:hidden">
              <button
                onClick={() => toggleSection("menu")}
                className="flex items-center justify-between w-full text-gray-300 hover:text-[#73BBA0]"
              >
                <h3 className="text-lg font-bold">Menu</h3>
                {isOpen.menu ? (
                  <FaChevronUp className="text-2xl" />
                ) : (
                  <FaChevronDown className="text-2xl" />
                )}
              </button>
              {isOpen.menu && (
                <ul className="mt-4">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-400 hover:text-[#73BBA0]"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-[#73BBA0]"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-[#73BBA0]"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-400 hover:text-[#73BBA0]"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              )}
            </div>
            {/* Menu for Larger Screens */}
            <div className="hidden md:block">
              <h3 className="text-lg font-bold mb-4">Menu</h3>
              <ul>
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-[#73BBA0]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-[#73BBA0]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#73BBA0]"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-[#73BBA0]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            {/* Collapsible Quick Links */}
            <div className="md:hidden">
              <button
                onClick={() => toggleSection("quickLinks")}
                className="flex items-center justify-between w-full text-gray-300 hover:text-[#73BBA0]"
              >
                <h3 className="text-lg font-bold">Quick Links</h3>
                {isOpen.quickLinks ? (
                  <FaChevronUp className="text-2xl" />
                ) : (
                  <FaChevronDown className="text-2xl" />
                )}
              </button>
              {isOpen.quickLinks && (
                <ul className="mt-4">
                  <li>
                    <a
                      href="#privacy"
                      className="text-gray-400 hover:text-[#73BBA0]"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#terms"
                      className="text-gray-400 hover:text-[#73BBA0]"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#support"
                      className="text-gray-400 hover:text-[#73BBA0]"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="text-gray-400 hover:text-[#73BBA0]"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              )}
            </div>
            {/* Quick Links for Larger Screens */}
            <div className="hidden md:block">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <a
                    href="#privacy"
                    className="text-gray-400 hover:text-[#73BBA0]"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="text-gray-400 hover:text-[#73BBA0]"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#support"
                    className="text-gray-400 hover:text-[#73BBA0]"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-[#73BBA0]">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Subscribe */}
          <div>
            {/* Collapsible Subscribe Form */}
            <div className="md:hidden">
              <button
                onClick={() => toggleSection("subscribe")}
                className="flex items-center justify-between w-full text-gray-300 hover:text-[#73BBA0]"
              >
                <h3 className="text-lg font-bold">Subscribe</h3>
                {isOpen.subscribe ? (
                  <FaChevronUp className="text-2xl" />
                ) : (
                  <FaChevronDown className="text-2xl" />
                )}
              </button>
              {isOpen.subscribe && (
                <div className="mt-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full mb-2 px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none"
                  />
                  <div className="flex mb-4">
                    <a
                      href="#facebook"
                      className="text-gray-400 hover:text-[#73BBA0] mr-4"
                    >
                      <FaFacebook size={24} />
                    </a>
                    <a
                      href="#twitter"
                      className="text-gray-400 hover:text-[#73BBA0] mr-4"
                    >
                      <FaTwitter size={24} />
                    </a>
                    <a
                      href="#instagram"
                      className="text-gray-400 hover:text-[#73BBA0]"
                    >
                      <FaInstagram size={24} />
                    </a>
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
                    <img
                      src={image}
                      alt="Footer"
                      className="w-full h-[60px] rounded-[6px]"
                    />
                    <img
                      src={image}
                      alt="Footer"
                      className="w-full h-[60px] rounded-[6px]"
                    />
                    <img
                      src={image}
                      alt="Footer"
                      className="w-full h-[60px] rounded-[6px]"
                    />
                    <img
                      src={image}
                      alt="Footer"
                      className="w-full h-[60px] rounded-[6px]"
                    />
                  </div>
                </div>
              )}
            </div>
            {/* Subscribe Form for Larger Screens */}
            <div className="hidden md:block">
              <h3 className="text-lg font-bold mb-4">Subscribe</h3>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mb-2 px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none"
              />
              <div className="flex mb-4">
                <a
                  href="#facebook"
                  className="text-gray-400 hover:text-[#73BBA0] mr-4"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#twitter"
                  className="text-gray-400 hover:text-[#73BBA0] mr-4"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#instagram"
                  className="text-gray-400 hover:text-[#73BBA0]"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
                <img
                  src={image}
                  alt="Footer"
                  className="w-full h-[60px] rounded-[6px]"
                />
                <img
                  src={image2}
                  alt="Footer"
                  className="w-full h-[60px] rounded-[6px]"
                />
                <img
                  src={image3}
                  alt="Footer"
                  className="w-full h-[60px] rounded-[6px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm py-4">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
