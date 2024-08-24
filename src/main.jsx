import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/Layout.jsx";
import Home from "./components/home/Home.jsx";
import BlogPost from "./components/BlogPost.jsx";
import ProductLeft from "./components/product/ProductLeft.jsx";
import ProductRight from "./components/product/ProductRight.jsx";
import ShopLeft from "./components/category/ShopLeft.jsx";
import ShopRight from "./components/category/ShopRight.jsx";
import ShopFullWidth from "./components/category/ShopFullWidth.jsx";
import ProductDetails from "./components/product/ProductDetails.jsx";
import Description from "./components/product/Description.jsx";
import Information from "./components/product/Information.jsx";
import Reviews from "./components/product/Reviews.jsx";
import ProductFullWidth from "./components/product/ProductFullWidth.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Cart from "./components/pages/Cart.jsx";
import Checkout from "./components/pages/Checkout.jsx";
import TrackOrder from "./components/pages/TrackOrder.jsx";
import WishList from "./components/pages/WishList.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import Forgotten from "./components/pages/Forgotten.jsx";
import Register from "./components/pages/Register.jsx";
import LeftSideBar from "./components/blog/LeftSideBar.jsx";
import RightSideBar from "./components/blog/RightSideBar.jsx";
import BlogFullWidth from "./components/blog/BlogFullWidth.jsx";
import Button from "./components/element/Button.jsx";
import Typography from "./components/element/Typography.jsx";
import Product from "./components/element/Product.jsx";

// Define the router with all routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="blog/:id" element={<BlogPost />} /> {/* Dynamic route */}
      {/* Shop routes */}
      <Route path="shop-left-sidebar" element={<ShopLeft />} />
      <Route path="shop-right-sidebar" element={<ShopRight />} />
      <Route path="full-width" element={<ShopFullWidth />} />
      <Route path="product-full-width" element={<ProductFullWidth />} />
      {/* Product routes */}
      <Route path="product-left-sidebar" element={<ProductLeft />}>
        {/* Nested routes under product */}
        <Route index element={<ProductDetails />} /> {/* Default child route */}
        <Route path="description" element={<Description />} />
        <Route path="information" element={<Information />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="product-right-sidebar" element={<ProductRight />}>
        {/* Nested routes under product */}
        <Route index element={<ProductDetails />} /> {/* Default child route */}
        <Route path="description" element={<Description />} />
        <Route path="information" element={<Information />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="about-us" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="track-order" element={<TrackOrder />} />
      <Route path="wishlist" element={<WishList />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="forgot" element={<Forgotten />} />
      <Route path="register" element={<Register />} />
      <Route path="blog-left-sidebar" element={<LeftSideBar />} />
      <Route path="blog-right-sidebar" element={<RightSideBar />} />
      <Route path="blog-full-width" element={<BlogFullWidth />} />
      <Route path="buttons" element={<Button />} />
      <Route path="typography" element={<Typography />} />
      <Route path="product" element={<Product />} />
      {/* Add a fallback route for handling 404 errors */}
      <Route
        path="*"
        element={
          <div className="text-center text-bold text-5xl my-10">
            404 Not Found
          </div>
        }
      />
    </Route>
  )
);

// Render the router provider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
