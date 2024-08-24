import React from "react";
import bannerOne from "../../assets/banner.jpg";
import bannerTwo from "../../assets/banner-2.jpg";
import Carousel from "./Carousel";
import ButtonsProduct from "./ButtonsProduct";
import PopularProducts from "./PopularProducts";
import OffersCard from "./OffersCard";
import Timer from "./Timer";
import ProductStore from "./ProductStore";
import Testimonial from "./Testimonial";
import LatestNews from "./LatestNews";
import { organicSlides, anotherSlideSet, latestNewsArr } from "./SlideData";

const Home = () => {
  return (
    <div>
      <Carousel slides={organicSlides} />
      <ButtonsProduct />
      <PopularProducts />
      <OffersCard />
      <Timer />
      <ProductStore />
      <Testimonial />
      <LatestNews latestNewsArr={latestNewsArr} />
    </div>
  );
};

export default Home;
