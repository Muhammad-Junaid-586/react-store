import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const LoginPage = () => {
  const navigate = useNavigate();

  // Handle navigation to the signup page
  const handleSignup = () => {
    navigate("/signup");
  };

  // Handle navigation to the forgotten password page
  const handleForgottenPassword = () => {
    navigate("/forgot");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2> */}
        <img src={logo} alt="" className="mx-auto" />

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-2 rounded mt-2"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-2 rounded mt-2"
          />
        </div>

        {/* Remind Me & Forgot Password */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input type="checkbox" id="remindMe" className="mr-2" />
            <label htmlFor="remindMe" className="text-gray-700">
              Remind me
            </label>
          </div>
          <a
            href="#"
            onClick={handleForgottenPassword}
            className="text-blue-500 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Login & Signup Buttons */}
        <div className="flex items-center justify-between">
          <button className="bg-[#73BBA0] text-white py-2 px-4 rounded hover:bg-[#319771]">
            Login
          </button>
          <button
            onClick={handleSignup}
            className="text-blue-400 py-2 px-4 rounded "
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
