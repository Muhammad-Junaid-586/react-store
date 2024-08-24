import React from "react";

const Description = ({ description, packagingAndDelivery }) => {
  return (
    <div>
      <p className="mb-4">{description}</p>
      <h3 className="text-xl font-semibold pb-3 border-b ">
        Packaging and Delivery
      </h3>
      <p>{packagingAndDelivery}</p>
      <p className="my-4">{description}</p>
    </div>
  );
};

export default Description;
