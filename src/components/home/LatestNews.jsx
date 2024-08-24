import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";

const LatestNews = ({ latestNewsArr }) => {
  const navigate = useNavigate();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleLearnMoreClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="my-10 py-5 w-11/12 mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-gray-900 my-3">Latest News</h2>
        <p className="text-gray-600">
          Stay up to date with the latest news and updates
        </p>
      </div>
      <Slider {...settings}>
        {latestNewsArr.map((news) => (
          <div key={news.id} className="p-4">
            <div className="bg-white rounded-lg overflow-hidden flex flex-col justify-between h-full relative border">
              <div className="p-5">
                <div className="text-sm text-gray-500 mb-2">
                  By Admin | {news.type}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {news.title}
                </h3>
                <button
                  onClick={() => handleLearnMoreClick(news.id)}
                  className="flex items-center text-[#73BBA0] font-semibold hover:text-[#73BBA0]"
                >
                  Learn More
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
              <div className="relative">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full object-cover transition-transform duration-300 transform hover:scale-105"
                />
                <div className="absolute bottom-[20px] right-[20px] rounded-[6px] bg-[rgba(0,0,0,0.5)]  text-white text-center text-sm px-4 py-4">
                  <p className="font-black text-[18px] ">{news.date}</p>
                  <p>{news.month}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LatestNews;
