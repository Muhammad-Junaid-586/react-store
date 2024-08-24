import React from "react";
import { FaStar } from "react-icons/fa";
import { GiCash, GiCardboardBox, GiWallet } from "react-icons/gi";
import fruit from "../../assets/fruit.jpg";
import snack from "../../assets/snack.jpg";

let productsArr = [
  {
    id: 1,
    quantity: 1,
    name: "Snack",
    image: snack,
    text: "Best snack with hazelnut pack 200gm",
    newPrice: 145.05,
    oldPrice: 150.05,
    type: "Snacks",
    rate: 4.5,
  },
  {
    id: 2,
    quantity: 1,
    name: "Apple",
    image: fruit,
    text: "Best Organic apple of 1kg Simla marming",
    newPrice: 125.5,
    oldPrice: 128.3,
    type: "Fruits",
    rate: 4.0,
  },
];

const Checkout = () => {
  return (
    <div className="flex flex-col md:flex-row w-[92%] gap-5 mx-auto py-6">
      {/* Sidebar */}
      <div className="md:w-1/4  space-y-6">
        {/* Summary Section */}
        <div className="border rounded-[6px] px-5 py-4 ">
          <div className=" pb-1">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>$50.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Charges:</span>
              <span>$5.00</span>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Total Amount:</span>
              <span className="text-lg font-semibold">$55.00</span>
            </div>
          </div>

          {/* Products Section */}
          <div className=" pb-1">
            {/* <h2 className="text-xl font-semibold mb-2">Products</h2> */}
            {productsArr.map((item, ind) => {
              return (
                <div className="flex space-x-4 pb-4">
                  <img
                    src={item.image}
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-[6px]"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="font-bold pr-3 text-[#64B496]">
                        {item.newPrice}
                      </span>
                      <span className="line-through">{item.oldPrice}</span>{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Method Section */}
        <div className="border rounded-[6px] py-5 px-4 ">
          <div className=" pb-4">
            <h2 className="text-xl font-semibold mb-2">Delivery Method</h2>
            <p className="text-gray-600">
              Choose a delivery method for your order.
            </p>
            <div className="flex justify-between mt-4">
              <div className="flex-1">
                <h3 className="text-[16px] font-semibold pb-2">
                  Free Shipping
                </h3>
                <input type="radio" id="free-shipping" name="delivery-method" />
                <label className="pl-2" htmlFor="free-shipping">
                  Rate - $0.00
                </label>
              </div>
              <div className="flex-1 ">
                <h3 className="text-[16px] font-semibold pb-2">Flat Rate</h3>
                <input type="radio" id="flat-rate" name="delivery-method" />
                <label className="pl-2" htmlFor="flat-rate">
                  Rate - $5.00
                </label>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className=" pb-1">
            <h2 className="text-xl font-semibold mb-2">Add a Comment</h2>
            <textarea
              rows="4"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Add your comments here..."
            ></textarea>
          </div>
        </div>

        {/* Cash on Delivery Section */}
        <div className="border rounded-[6px] py-5 px-4 ">
          <div className=" pb-1">
            <h2 className="text-xl font-semibold mb-2">Cash on Delivery</h2>
            <p className="text-gray-600">Pay with cash upon delivery.</p>
            <div className="space-y-2 mt-2">
              <div className="flex items-center">
                <input type="radio" id="cash1" name="cash" />
                <label htmlFor="cash1" className="ml-2">
                  Cash On Delivery
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="cash2" name="cash" />
                <label htmlFor="cash2" className="ml-2">
                  UPI
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="cash3" name="cash" />
                <label htmlFor="cash3" className="ml-2">
                  Bank Transfer
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="border rounded-[6px] py-5 px-4 ">
          <div className=" pb-1">
            <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
            <div className="flex space-x-4">
              <GiCash className="text-3xl" />
              <GiWallet className="text-3xl" />
              <GiCardboardBox className="text-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:w-3/4  space-y-6">
        {/* New Customer Section */}
        <div className="border rounded-[6px] px-5  py-5 ">
          <div className=" pb-6">
            <h2 className="text-2xl font-semibold mb-2">New Customer</h2>
            <h3 className="text-xl font-semibold mb-4">Checkout</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="radio" id="register" name="account" />
                <label htmlFor="register" className="ml-2">
                  Register Account
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="guest" name="account" />
                <label htmlFor="guest" className="ml-2">
                  Guest Account
                </label>
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              By creating an account you will be able to shop faster, be up to
              date on an order's status, and keep track of the orders you have
              previously made.
            </p>
            <button className="bg-[#64B496] text-white px-6 py-2 rounded mt-4 hover:bg-black">
              Continue
            </button>
          </div>

          {/* Returning Customer Section */}
          <div className="pb-2">
            <h2 className="text-2xl font-semibold mb-2">Returning Customer</h2>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <button className="bg-[#64B496] text-white px-6 py-2 rounded hover:bg-black">
                Login
              </button>
              <button className="text-gray-700 mt-2 mx-3">
                Forgot Password?
              </button>
            </div>
          </div>
        </div>
        {/* Billing Details Section */}

        <div className="border rounded-[6px] px-5 py-4 ">
          <div className=" pb-2">
            <h2 className="text-2xl font-semibold mb-2">Billing Details</h2>
            <h3 className="text-xl font-semibold mb-4">Checkout Options</h3>
            <div className="space-y-4">
              <div className="flex gap-[0px]">
                <div className="flex items-center">
                  <input type="radio" id="existing-address" name="address" />
                  <label htmlFor="existing-address" className="ml-2">
                    I want to use an existing address
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="new-address" name="address" />
                  <label htmlFor="new-address" className="ml-2">
                    I want to use a new address
                  </label>
                </div>
              </div>

              <p className="text-[#7A7A7A] text-[14px] ">
                By creating an account you will be able to shop faster, be up to{" "}
                <br />
                date on an order's status, and keep track of the orders you have{" "}
                <br />
                previously made
              </p>
            </div>
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
                  <select
                    id="city"
                    className="border border-gray-300 p-2 rounded"
                  >
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
                  <select
                    id="country"
                    className="border border-gray-300 p-2 rounded"
                  >
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-2 w-full md:w-[calc(50%-8px)]">
                  <label htmlFor="state">State</label>
                  <select
                    id="state"
                    className="border border-gray-300 p-2 rounded"
                  >
                    <option value="california">California</option>
                    <option value="texas">Texas</option>
                    <option value="florida">Florida</option>
                    <option value="newyork">New York</option>
                    <option value="illinois">Illinois</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
        <button className="bg-[#64B496] text-white  px-6 py-2 rounded mt-4 hover:bg-black">
          Register
        </button>
      </div>
    </div>
  );
};

export default Checkout;
