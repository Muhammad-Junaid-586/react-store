import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card1 from "../../assets/card1.jpg";

const cards = [
  {
    image: card2,
    title: "Fresh & Healthy Organic Fruits",
    description: "35%",
  },
  {
    image: card1,
    title: "Healthy Bakery Product",
    description: "25%",
  },
  {
    image: card3,
    title: "Fresh Snacks & Sweets",
    description: "15%",
  },
  {
    image: card2,
    title: "Fresh & Healthy Organic Fruits",
    description: "35%",
  },
  {
    image: card1,
    title: "Healthy Bakery Product",
    description: "25%",
  },
];

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const OffersCard = () => {
  return (
    <div className="my-5 py-5 w-[90%] mx-auto overflow-hidden">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="pr-[10px]">
            <div
              className="h-[200px] rounded-lg shadow-md bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="p-4 pt-5 w-[55%] sm:w-[60%] laptop:w-[58%] rounded-lg h-full flex flex-col">
                <h3 className="text-lg font-bold text-black">{card.title}</h3>
                <div className="my-3">
                  <span className="text-[#64B496] font-black text-[17px]">
                    {card.description}
                  </span>
                  <span> Off</span>
                  <span className="hidden md:inline-block">
                    {" "}
                    on first order
                  </span>
                </div>
                <button className="bg-[#64B496] rounded-[6px] text-[white] hover:bg-black hover:text-white font-semibold py-[8px]  px-0">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OffersCard;
