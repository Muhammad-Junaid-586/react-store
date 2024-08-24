// import { useState } from "react";
// import logoImg from "../assets/logo.png";
// import { IoMdPerson } from "react-icons/io";
// import { IoPersonOutline } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import { IoSearchOutline } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutlineLocalPhone } from "react-icons/md";
// import { IoIosArrowDown } from "react-icons/io";
// import "./Navbar.css";

// const Navbar = () => {
//   const buttons = [
//     {
//       label: "Dairy & Bakery",
//       data: [
//         ["Milk", "IceCream", "Cheeze", "Frozen Yogurd"],
//         ["Cake & Pastery", "Bread & Buns", "Chocolate", "Cream Roll"],
//       ],
//     },
//     {
//       label: "Fruits & Vegetables",
//       data: [
//         ["Apple", "Banana", "Orange", "Grapes"],
//         ["Carrot", "Broccoli", "Spinach", "Potato"],
//       ],
//     },
//     {
//       label: "Juice & Drinks",
//       data: [
//         ["Orange Juice", "Apple Juice", "Grape Juice", "Mango Juice"],
//         ["Cola", "Lemonade", "Iced Tea", "Sparkling Water"],
//       ],
//     },
//     {
//       label: "Snack & Spice",
//       data: [
//         ["Chips", "Popcorn", "Pretzels", "Nachos"],
//         ["Cumin", "Turmeric", "Paprika", "Cinnamon"],
//       ],
//     },
//   ];
//   const [selectedData, setSelectedData] = useState(buttons[0].data);
//   const [selectedLabel, setSelectedLabel] = useState(buttons[0].label);

//   // Remove '&' from label
//   const cleanLabel = (label) => label.replace(/&/g, "").trim();

//   // Split the cleaned label into two parts
//   const splitText = (text) => {
//     const cleanedText = cleanLabel(text);
//     const words = cleanedText.split(" ");
//     return [words[0], words.slice(1).join(" ")];
//   };

//   let toggleMenu = () => {
//     document.getElementById("navMenu").classList.toggle("hidden");
//   };

//   return (
//     <div className="mx-[40px]">
//       <div className="flex justify-between items-center flex-col md:flex-row p-4 border-b">
//         <div>
//           <img src={logoImg} alt="Logo" />
//         </div>

//         <div className="border border-[#64B496] rounded-[6px] flex items-center text-[16px] mt-3 lg-mt-0">
//           <div className="border-r-[#64B496] border-r px-2">
//             <input
//               type="text"
//               name="search"
//               placeholder="Search for items..."
//               className="focus:outline-none pl-[8px] p-[7px]"
//             />
//           </div>
//           <div className="pr-[3px]">
//             <select
//               name=""
//               id=""
//               className="focus:outline-none px-[14px] text-[13px] pt-[14px] pb-[14px]"
//             >
//               <option value="All Categories" selected className="px-5">
//                 All Categories
//               </option>
//               <option value="Men" className="px-5">
//                 Men
//               </option>
//               <option value="Women" className="px-5">
//                 Women
//               </option>
//               <option value="Electronics" className="px-5">
//                 Electronics
//               </option>
//             </select>
//           </div>

//           <div>
//             <button
//               className="bg-[#64B496] p-[16px] text-white text-[15px] font-semibold"
//               style={{ borderRadius: "0 6px 6px 0" }}
//             >
//               <IoSearchOutline />
//             </button>
//           </div>
//         </div>

//         <div className="lg:w-[28%] hidden lg:block">
//           <ul className="flex justify-between">
//             <li className="flex items-center text-[16px] font-bold cursor-pointer relative group">
//               <IoPersonOutline className="mr-[4px] size-[20px]" /> Account
//               {/* Dropdown List */}
//               <ul className="absolute left-0 top-[21px] mt-1 w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block z-20">
//                 <li className="px-4 py-2 text-[16px] font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer">
//                   Profile
//                 </li>
//                 <li className="px-4 py-2 text-[16px] font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer">
//                   Settings
//                 </li>
//                 <li className="px-4 py-2 text-[16px] font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer">
//                   Logout
//                 </li>
//               </ul>
//             </li>

//             <li className="flex items-center text-[16px] font-bold">
//               <FaRegHeart className="mr-[4px] size-[20px]" /> Wishlist
//             </li>
//             <li className="flex items-center text-[16px] font-bold">
//               <IoCartOutline className="mr-[4px] size-[20px]" /> Cart
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Menu Part */}
//       <div className="py-3 flex justify-between items-center flex-col lg:flex-row mx-[8px]">
//         <div className="flex justify-between lg:hidden w-full items-center">
//           <div
//             className="border p-3 rounded-[6px] lg:hidden "
//             onClick={toggleMenu}
//           >
//             <button className="">
//               <GiHamburgerMenu />
//             </button>
//           </div>

//           <div>
//             <div className="w-[50%] lg:hidden">
//               <ul className="flex justify-between  gap-[15px]">
//                 <li className="flex items-center text-[16px] font-bold cursor-pointer relative group">
//                   <IoPersonOutline className="mr-[4px] size-[20px]" />
//                   {/* Dropdown List */}
//                   <ul className="absolute left-0 top-[17px] mt-1 w-[130px] bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block">
//                     <li className="px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 cursor-pointer">
//                       Profile
//                     </li>
//                     <li className="px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 cursor-pointer">
//                       Settings
//                     </li>
//                     <li className="px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 cursor-pointer">
//                       Logout
//                     </li>
//                   </ul>
//                 </li>

//                 <li className="flex items-center text-[16px] font-bold">
//                   <FaRegHeart className="mr-[4px] size-[20px]" />
//                 </li>
//                 <li className="flex items-center text-[16px] font-bold">
//                   <IoCartOutline className="mr-[4px] size-[20px]" />
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="relative group hidden lg:block">
//           {/* Hamburger Icon */}
//           <div className="border p-3 rounded-[6px]">
//             <button className="hover-trigger">
//               <GiHamburgerMenu />
//             </button>
//           </div>

//           {/* Dropdown Content */}
//           <div className="hidden group-hover:flex absolute top-[53px] left-0 w-[500px] rounded-[6px] bg-white border border-gray-300 shadow-lg">
//             <div className="flex w-full">
//               {/* Left Side with Buttons */}
//               <ul className="w-1/3  border-r border-gray-300 p-2">
//                 {buttons.map((btn, index) => (
//                   <li key={index}>
//                     <button
//                       className={`w-full text-left p-3 rounded-[6px] text-sm font-semibold border my-2  ${
//                         selectedLabel === btn.label
//                           ? " border-[#64b496] text-[#64b496]"
//                           : ""
//                       }`}
//                       onClick={() => {
//                         setSelectedData(btn.data);
//                         setSelectedLabel(btn.label);
//                       }}
//                     >
//                       {btn.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>

//               {/* Right Side with Data */}
//               <div className="w-2/3 p-2 ">
//                 {/* Left div with first array data */}
//                 <div className="flex justify-between mx-3 gap-3">
//                   <div className="w-1/2">
//                     <h3 className="font-semibold text-[16px] mb-2 pb-2 text-[#64b496] border-b-[1px] border-gray-200">
//                       {splitText(selectedLabel)[0]}
//                     </h3>
//                     {selectedData[0].map((item, ind) => (
//                       <p className="py-3" key={ind}>
//                         {item}
//                       </p>
//                     ))}
//                   </div>

//                   {/* Right div with second array data */}
//                   <div className="w-1/2">
//                     <h3 className="font-semibold text-[16px] pb-2 mb-2 text-[#64b496] border-b-[1px] border-gray-200">
//                       {splitText(selectedLabel)[1]}
//                     </h3>
//                     {selectedData[1].map((item, ind) => (
//                       <p className="py-3" key={ind}>
//                         {item}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="w-[100%] lg:w-[60%] hidden lg:block z-10 transition-all duration-1000 ease-in-out"
//           id="navMenu"
//         >
//           <ul className="flex justify-between flex-col lg:flex-row p-4 gap-3 lg:gap-0">
//             {/* Home */}
//             <li className="relative group flex items-center text-[16px] font-semibold cursor-pointer">
//               Home
//               <IoIosArrowDown className="ml-2 mt-1" />
//               <ul className="absolute left-[40px] lg:left-0 top-[20px] mt-1 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block z-[9]">
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Grocery
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Fashion
//                 </li>
//               </ul>
//             </li>

//             {/* Category */}
//             <li className="relative group flex items-center text-[16px] font-semibold cursor-pointer">
//               Category
//               <IoIosArrowDown className="ml-2 mt-1" />
//               <ul className="absolute left-[40px] lg:left-0 top-[20px] mt-1 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block z-[9]">
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Shop Left SideBar
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Shop Right SideBar
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Full Width
//                 </li>
//               </ul>
//             </li>

//             {/* Products */}
//             <li className="relative group flex items-center text-[16px] font-semibold cursor-pointer">
//               Products
//               <IoIosArrowDown className="ml-2 mt-1" />
//               <ul className="absolute left-[40px] lg:left-0 top-[20px] mt-1 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block z-[9]">
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Product Left SideBar
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Product Right SideBar
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Product Full Width
//                 </li>
//               </ul>
//             </li>

//             {/* Pages */}
//             <li className="relative group flex items-center text-[16px] font-semibold cursor-pointer">
//               Pages
//               <IoIosArrowDown className="ml-2 mt-1" />
//               <ul className="absolute left-[40px] lg:left-0 top-[20px] mt-1 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block z-[9]">
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   About Us
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Contact Us
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Cart
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Checkout
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Track Order
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   WishList
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Faq
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Login
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Register
//                 </li>
//               </ul>
//             </li>

//             {/* Blog */}
//             <li className="relative group flex items-center text-[16px] font-semibold cursor-pointer">
//               Blog
//               <IoIosArrowDown className="ml-2 mt-1" />
//               <ul className="absolute left-[40px] lg:left-0 top-[20px] mt-1 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block z-[9]">
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Left SideBar
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Right SideBar
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Full Width
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Detail Left SideBar
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Detail Right SideBar
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Detail Full Width
//                 </li>
//               </ul>
//             </li>

//             {/* Elements */}
//             <li className="relative group flex items-center text-[16px] font-semibold cursor-pointer">
//               Elements
//               <IoIosArrowDown className="ml-2 mt-1" />
//               <ul className="absolute left-[40px] lg:left-0 top-[20px] mt-1 w-[200px] bg-white text-gray-700 border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-150 ease-in-out hidden group-hover:block z-[9]">
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Product
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Typography
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                   Buttons
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>

//         <div className="hidden lg:flex gap-[10px] font-bold items-center">
//           <MdOutlineLocalPhone className="size-[20px]" />
//           <p>+923322542428</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
