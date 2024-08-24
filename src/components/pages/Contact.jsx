import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      {/* Top Heading and Paragraph */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg">
          We'd love to hear from you. Reach out to us through any of the
          following methods.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 mysm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {/* Contact Card */}
        <div className="bg-white p-6 border rounded-lg text-center">
          <FaPhoneAlt className="text-4xl text-[#64B496] mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p className="text-md">Mobile: +123 456 7890</p>
          <p className="text-md">Mobile: +098 765 4321</p>
        </div>

        {/* Email & Website Card */}
        <div className="bg-white p-6 border rounded-lg text-center">
          <FaEnvelope className="text-4xl text-[#64B496] mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Email & Website</h3>
          <p className="text-md">Email: info@company.com</p>
          <p className="text-md">Website: www.company.com</p>
        </div>

        {/* Address Card */}
        <div className="bg-white p-6 border rounded-lg text-center">
          <FaMapMarkerAlt className="text-4xl text-[#64B496] mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-md">123 Main Street</p>
          <p className="text-md">Kahi, District Hangu</p>
        </div>
      </div>

      {/* Map and Contact Form Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Google Map */}
        <div className="md:w-1/2 h-[600] bg-gray-300 rounded-lg shadow-lg overflow-hidden">
          <iframe
            title="Kahi Hangu Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.198330146474!2d71.12155907521722!3d33.33823117102186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d92185f5a309e7%3A0x83e8b77cf144bd9f!2sKahi%2C%20Hangu!5e0!3m2!1sen!2s!4v1692921163847!5m2!1sen!2s"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-white p-6  rounded-lg">
          {/* <h3 className="text-2xl font-semibold mb-4">Contact Us</h3> */}
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#64B496]"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#64B496]"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#64B496]"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#64B496]"
                rows="5"
              ></textarea>
            </div>
            <button className="w-24 p-3 bg-[#64B496] text-white rounded-lg hover:bg-black">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
