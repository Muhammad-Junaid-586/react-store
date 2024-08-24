import React, { useState } from "react";
import footer1 from "../../assets/footer1.jpg";
import footer2 from "../../assets/footer2.jpg";
import footer3 from "../../assets/footer3.jpg";
import news1 from "../../assets/new1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";

const BlogContent = ({ post, cols }) => {
  const posts = [
    {
      admin: "07 comments",
      title: "Best guide to Shopping for Organic ingredients.",
      description: "This is a short description of the first post.",
      image: footer1,
    },
    {
      admin: "07 comments",
      title: "Best guide to Shopping for Organic ingredients.",
      description: "This is a short description of the second post.",
      image: footer2,
    },
    {
      admin: "07 comments",
      title: "Best guide to Shopping for Organic ingredients.",
      description: "This is a short description of the third post.",
      image: footer3,
    },
    {
      admin: "08 comments",
      title: `Another post  about One Of The Best  Organic  ingredients.`,
      description: "This is a short description of the fourth post.",
      image: news1,
    },
    {
      admin: "09 comments",
      title: "Exploring Higly Demanded Organic ingredients.",
      description: "This is a short description of the fifth post.",
      image: news2,
    },
    {
      admin: "07 comments",
      title: "Best guide to Shopping for Organic ingredients.",
      description: "This is a short description of the third post.",
      image: news3,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = post;

  // Calculate the current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate the page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  let gridCount = `grid grid-cols-${cols} gap-5`;
  return (
    <div>
      <div className={gridCount}>
        {currentPosts.map((post, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-[6px]  overflow-hidden"
          >
            {/* Post Content */}
            <div className="p-4 py-5">
              <p className="text-gray-500 text-[12px] block mb-1">
                <span className="text-[#64B496]"> by Admin /</span> {post.admin}
              </p>
              <h2 className="text-[25px] font-bold mb-3">{post.title}</h2>
              <p className="text-[14px] mb-4">{post.description}</p>
              <button className="bg-[#64B496] text-white px-4 py-2 rounded-[6px]">
                Read More
              </button>
            </div>

            {/* Post Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}

        {/* Pagination */}
      </div>
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-[6px] ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Previous
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handleClick(number)}
            className={`px-3 py-1 rounded-[6px] ${
              currentPage === number
                ? "bg-[#64B496] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === pageNumbers.length}
          className={`px-3 py-1 rounded-[6px] ${
            currentPage === pageNumbers.length
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogContent;
