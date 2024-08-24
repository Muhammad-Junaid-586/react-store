import React from "react";

// Utility functions to generate random colors and animations
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const animations = [
  "scale(1.1)",
  "rotate(10deg)",
  "translateX(10px)",
  "skewX(10deg)",
  "rotate(360deg)",
];

const borders = [
  "2px solid #FF5733", // Red border
  "2px solid #33FF57", // Green border
  "2px dashed #5733FF", // Blue dashed border
  "2px dotted #FFC300", // Yellow dotted border
];

const getRandomAnimation = () => {
  return animations[Math.floor(Math.random() * animations.length)];
};

const getRandomBorder = () => {
  return borders[Math.floor(Math.random() * borders.length)];
};

const Button = () => {
  return (
    <div className="space-y-8 w-[92%] mx-auto py-5 my-[60px]">
      {/* First div with static background colors */}
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <button
            key={index}
            style={{ backgroundColor: getRandomColor() }}
            className="text-white py-2 px-4 rounded-lg"
          >
            Button {index + 1}
          </button>
        ))}
      </div>

      {/* Second div with hover animations and border effects */}
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <button
            key={index}
            style={{
              backgroundColor: "#64B496",
              transition: "all 0.3s ease",
              transformOrigin: "center",
              border: "2px solid transparent", // Default border
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = getRandomAnimation();
              e.currentTarget.style.backgroundColor = getRandomColor();
              e.currentTarget.style.border = getRandomBorder();
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.backgroundColor = "#64B496";
              e.currentTarget.style.border = "2px solid transparent"; // Reset to default
            }}
            className="text-white py-2 px-4 rounded-lg"
          >
            Hover {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Button;
