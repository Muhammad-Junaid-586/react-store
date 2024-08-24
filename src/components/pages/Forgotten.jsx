import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
const Forgotten = () => {
  const navigate = useNavigate();

  // Handle navigation to the signup page
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="w-[92%] sm:w-[35%] mx-auto border px-5 py-10 rounded-[6px] my-10">
      {/* <h3 className="text-4xl font-bold text-center">Sign Up</h3> */}
      <img src={logo} alt="" className="mx-auto" />
      <form className="space-y-4 mt-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col space-y-2 w-full md:w-[calc(950%-8px)]">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="flex items-center justify-between w-full">
            <button className="bg-[#73BBA0] text-white py-2 px-4 rounded hover:bg-[#328c6b]">
              Submit
            </button>
            <button
              onClick={handleSignup}
              className="text-blue-400 py-2 px-4 rounded "
            >
              SignUp
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forgotten;
