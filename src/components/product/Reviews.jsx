import React from "react";
import client1 from "../../assets/client1.jpg";
import client2 from "../../assets/client2.jpg";

const Reviews = () => {
  // Initialize reviews with an empty array or fetch from props or state
  const reviews = [
    {
      name: "John Doe",
      date: "2024-08-20",
      message: "Great product!",
      image: client1,
    },
    {
      name: "Jane Smith",
      date: "2024-08-21",
      message: "Highly recommend!",
      image: client2,
    },
  ];

  // Check if reviews is an array and has at least one item
  if (!Array.isArray(reviews)) {
    console.error("Reviews should be an array");
    return <p>No reviews available.</p>;
  }

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className=" p-4 mb-4">
            <div className="flex items-center space-x-4 mb-2">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex justify-between items-start w-full">
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>

                <div className="flex ml-2 text-yellow-500">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
              </div>
            </div>
            <p>{review.message}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}

      <h3 className="text-xl font-semibold">Add a Review</h3>
      <div className="flex items-center mb-4">
        <span>Your Rating:</span>
        <div className="flex ml-2 text-yellow-500">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9734;</span>
        </div>
      </div>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border rounded w-full p-2"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="border rounded w-full p-2"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="block font-medium">
            Review
          </label>
          <textarea
            id="review"
            className="border rounded w-full p-2"
            rows="4"
            placeholder="Enter Your Comment"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Reviews;
