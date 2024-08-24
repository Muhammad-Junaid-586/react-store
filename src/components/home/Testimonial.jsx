import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css"; // Add custom styles here
import client1 from "../../assets/client1.jpg";
import client2 from "../../assets/client2.jpg";
import client3 from "../../assets/client3.jpg";

const testimonials = [
  {
    image: client2, // Replace with actual image paths
    name: "Muhammad Mudasir",
    role: "Flutter Developer",
    rating: 5,
    review:
      "This service is outstanding! I've been extremely satisfied with the results.",
  },
  {
    image: client1,
    name: "Inam Ullah",
    role: "Product Manager",
    rating: 4,
    review: "Very good experience overall. Would recommend to others.",
  },
  {
    image: client3,
    name: "Fida Ullah",
    role: "UX Designer",
    rating: 5,
    review: "Fantastic design and attention to detail. Highly impressed!",
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

const Testimonial = () => {
  return (
    <div>
      <div className="w-[60%] mx-auto text-center">
        <h2 className="text-[36px] font-semibold ">Great Words From People</h2>
        <p className="text-[#828282] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum hic
          id, iste dicta consectetur a tenetur alias at fugit laboriosam
          molestiae, repellendus nobis impedit sint.
        </p>
      </div>
      <div className="my-5 py-5 w-[90%] mx-auto overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className=" bg-[#F7F7F8] p-8 rounded-lg  text-center carddiv">
                <div className="w-[80px] h-[80px] mx-auto ">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full mx-auto rounded-full"
                  />
                </div>
                <h3 className="text-lg font-bold mt-4">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                <div className="testimonial-rating mb-3">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="text-gray-700">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
