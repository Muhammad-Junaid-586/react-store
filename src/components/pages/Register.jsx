import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Register = () => {
  const navigate = useNavigate();

  // Handle navigation to the signup page
  const handleSignup = () => {
    navigate("/login");
  };
  return (
    <div className="w-[92%] sm:w-[50%] mx-auto border px-5 py-10 rounded-[6px] my-10">
      {/* <h3 className="text-4xl font-bold text-center">Register</h3> */}
      <img src={logo} alt="" className="mx-auto" />
      <form className="space-y-4 mt-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col space-y-2 w-full md:w-[calc(50%-8px)]">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex flex-col space-y-2 w-full md:w-[calc(50%-8px)]">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Address"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>

          <div className="flex flex-col space-y-2 w-full md:w-[calc(50%-8px)]">
            <label htmlFor="city">City</label>
            <select id="city" className="border border-gray-300 p-2 rounded">
              <option value="newyork">New York</option>
              <option value="losangeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
              <option value="phoenix">Phoenix</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2 w-full md:w-[calc(50%-8px)]">
            <label htmlFor="postcode">Postcode</label>
            <input
              type="text"
              id="postcode"
              placeholder="Postcode"
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex flex-col space-y-2 w-full md:w-[calc(50%-8px)]">
            <label htmlFor="country">Country</label>
            <select id="country" className="border border-gray-300 p-2 rounded">
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="australia">Australia</option>
              <option value="germany">Germany</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2 w-full md:w-[calc(50%-8px)]">
            <label htmlFor="state">State</label>
            <select id="state" className="border border-gray-300 p-2 rounded">
              <option value="california">California</option>
              <option value="texas">Texas</option>
              <option value="florida">Florida</option>
              <option value="newyork">New York</option>
              <option value="illinois">Illinois</option>
            </select>
          </div>

          <div className="flex items-center justify-between w-full">
            <button className="bg-[#73BBA0] text-white py-2 px-4 rounded hover:bg-[#2f8b69]">
              SignUp
            </button>
            <button
              onClick={handleSignup}
              className=" text-blue-400 py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
