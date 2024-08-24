import React from "react";

const Information = ({ information }) => {
  return (
    <div>
      <p>{information.information}</p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatibus
        illo sint rerum officia veniam impedit quae recusandae natus quaerat,
        earum deleniti odit atque ut minima, quis itaque. Ratione, illum?
      </p>

      <ul className="py-5">
        <li className="flex">
          <div className="w-28 font-semibold">Brand</div>
          <div>: {information.brand}</div>
        </li>
        <li className="flex">
          <div className="w-28 font-semibold">Flavour</div>
          <div>: {information.flavour}</div>
        </li>
        <li className="flex">
          <div className="w-28 font-semibold">Diet Type</div>
          <div>: {information.dietType}</div>
        </li>
        <li className="flex">
          <div className="w-28 font-semibold">Speciality</div>
          <div>: {information.speciality}</div>
        </li>
        <li className="flex">
          <div className="w-28 font-semibold">Item</div>
          <div>: {information.item}</div>
        </li>
      </ul>
    </div>
  );
};

export default Information;
