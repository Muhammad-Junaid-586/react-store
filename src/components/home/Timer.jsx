import React, { useState, useEffect } from "react";
import banner from "../../assets/bg-deal.jpg";

const Timer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31T23:59:59") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div
      className="w-full h-[500px] bg-center bg-cover  mt-4 mobile:mt-0 lg:mt-4 md:pt-4 rounded-[6px] flex items-center justify-center md:justify-start"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="bg-[#F3DDCD] w-[80%] sm:w-[70%] lg:w-[45%] opacity-65 p-5 md:translate-x-12">
        <h3 className="text-[#64B496] font-bold text-3xl text-center sm:text-left">
          35% <span className="text-gray-500 font-normal text-[20px]">OFF</span>
        </h3>
        <h2 className="text-[23px] mytablet:text-[27px] text-center sm:text-left font-bold py-3">
          Great Deal With Organic Food
        </h2>
        <p className="text-gray-600 text-center sm:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sit omnis
          laboriosam, et nostrum molestiae ratione. Harum est quos, voluptates
          animi, eos, natus pariatur voluptatum facere officiis non ipsa earum.
        </p>

        <div className="mt-4 flex space-x-4 border-gray-500 border-[1px] p-3 justify-center w-fit mx-auto md:mx-0">
          <div className="text-center">
            <span className="block text-2 xl mytablet:text-4xl font-bold">
              {timeLeft.d} :
            </span>
            <span className="block text-gray-700 text-sm">Days</span>
          </div>
          <div className="text-center">
            <span className="block text-2 xl mytablet:text-4xl font-bold">
              {timeLeft.h} :
            </span>
            <span className="block text-gray-700 text-sm">Hours</span>
          </div>
          <div className="text-center">
            <span className="block text-2 xl mytablet:text-4xl font-bold">
              {timeLeft.m} :
            </span>
            <span className="block text-gray-700 text-sm">Minutes</span>
          </div>
          <div className="text-center">
            <span className="block text-2 xl mytablet:text-4xl font-bold">
              {timeLeft.s}{" "}
            </span>
            <span className="block text-gray-700 text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
