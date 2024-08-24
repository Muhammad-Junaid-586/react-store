import React from "react";
import aboutcarrot from "../../assets/aboutcarot.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row w-[90%] mx-auto my-10">
      {/* Left Section */}
      <div className="md:w-1/2 p-5">
        <h2 className="text-3xl font-bold mb-6">About the Carrot</h2>

        {/* Paragraphs */}
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          accumsan, mauris nec feugiat aliquam, eros dui facilisis tortor, nec
          elementum libero sapien eget justo.
        </p>
        <p className="mb-4">
          Sed sit amet suscipit dolor. Vivamus quis ipsum a est varius
          hendrerit. Etiam at felis ut purus cursus feugiat a at turpis.
        </p>
        <p className="mb-6">
          Integer nec dictum sapien. Ut lobortis dignissim leo, ut ultricies
          tortor interdum non. Curabitur laoreet fermentum urna vel tristique.
        </p>

        {/* Statistics */}
        <div className="flex justify-between text-center bg-[#F7F7F8]  px-10 py-7 rounded-[6px] ">
          <div>
            <div className="text-5xl text-[#64B496] font-bold py-2">
              1.2<span className="text-2xl text-black">K</span>
            </div>
            <div className="font-bold">Vendors</div>
          </div>
          <div>
            <div className="text-5xl text-[#64B496] font-bold py-2">
              43<span className="text-2xl text-black">K</span>
            </div>
            <div className="font-bold">Products</div>
          </div>
          <div>
            <div className="text-5xl text-[#64B496] font-bold py-2">
              410<span className="text-2xl text-black">K</span>
            </div>
            <div className="font-bold">Customers</div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex items-center justify-center p-5">
        <img
          src={aboutcarrot}
          alt="About the Carrot"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
