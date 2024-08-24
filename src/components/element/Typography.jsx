import React from "react";

const Typography = () => {
  return (
    <div className="space-y-12 w-[92%] mx-auto py-5 my-[60px]">
      {/* First Section: Four Columns with "Heading 1" */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center bg-[#64B496] text-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">Heading 1</h1>
          <h1 className="text-3xl font-bold">Heading 2</h1>
          <h1 className="text-3xl font-bold">Heading 3</h1>
        </div>
        <div className="text-left bg-gray-200 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-extrabold text-[#333]">Heading 1</h1>
          <h1 className="text-2xl font-extrabold text-[#333]">Heading 2</h1>
          <h1 className="text-2xl font-extrabold text-[#333]">Heading 3</h1>
        </div>
        <div className="text-right bg-gradient-to-r from-blue-400 to-purple-600 text-white p-6 rounded-lg shadow-sm">
          <h1 className="text-4xl italic">Heading 1</h1>
          <h1 className="text-4xl italic">Heading 2</h1>
          <h1 className="text-4xl italic">Heading 3</h1>
        </div>
        <div className="text-center border-4 border-dashed border-[#FF5733] p-6 rounded-lg">
          <h1 className="text-3xl font-light text-[#FF5733]">Heading 1</h1>
          <h1 className="text-3xl font-light text-[#FF5733]">Heading 2</h1>
          <h1 className="text-3xl font-light text-[#FF5733]">Heading 3</h1>
        </div>
      </div>

      {/* Second Section: Two Columns with Heading and Paragraph */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#64B496]">Heading 2</h2>
          <p className="text-gray-600 mt-3">
            This is the first column with a unique style. The paragraph has a
            simple and clean appearance.
          </p>
        </div>
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-extrabold text-yellow-400">Heading 2</h2>
          <p className="mt-3">
            This is the second column with a contrasting dark theme. The text
            color is light to ensure readability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Typography;
