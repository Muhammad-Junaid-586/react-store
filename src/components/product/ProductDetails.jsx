import React, { useState } from "react";
import one from "../../assets/product/9.jpg";
import two from "../../assets/product/10.jpg";
import three from "../../assets/product/11.jpg";
import four from "../../assets/product/12.jpg";
import Description from "./Description";
import Information from "./Information";
import Reviews from "./Reviews";

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(one);
  const [selectedSize, setSelectedSize] = useState("50kg");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description"); // Default tab is "description"
  const [productData] = useState({
    title: "Seeds Of Change Oraganic Quinoa, Brown",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdebitis corporis, eaque dicta, repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.",
    rating: 4, // Out of 5
    reviews: 43,
    brand: "Esta Better Co",
    flavour: "Vanilla",
    dietType: "Gluten-Free",
    weightOptions: ["50kg", "40kg", "30kg"],
    speciality: "Organic",
    info: "Imported",
    item: "Powder",
    originalPrice: 100,
    discountedPrice: 80,
    images: [
      { src: one, thumbnail: one },
      { src: two, thumbnail: two },
      { src: three, thumbnail: three },
      { src: four, thumbnail: four },
    ],
    packagingAndDelivery:
      "Detailed information about packaging and delivery goes here.",
    information: "Detailed product information goes here.",
    clientReviews: [
      {
        name: "John Doe",
        date: "2024-08-15",
        message: "Great product! Really satisfied with the quality.",
        image: one,
      },
      {
        name: "Jane Smith",
        date: "2024-08-14",
        message: "The product arrived on time and exceeded my expectations.",
        image: two,
      },
    ],
  });

  const handleImageClick = (src) => {
    setMainImage(src);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleReviewSubmit = (review) => {
    const newReview = {
      ...review,
      date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
      image: one, // Default image for the review; replace with user's image if applicable
    };
    setProductData((prevData) => ({
      ...prevData,
      clientReviews: [...prevData.clientReviews, newReview],
      reviews: prevData.reviews + 1,
    }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return <Description description={productData.description} />;
      case "information":
        return <Information information={productData} />;
      case "reviews":
        return (
          <Reviews
            reviews={productData.clientReviews}
            onReviewSubmit={handleReviewSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Product Display Section */}
      <div className="flex flex-col myMd:flex-row gap-6">
        {/* First Div: Images */}
        <div className="w-full myMd:w-1/2">
          {/* Big Image */}
          <div className="border p-2">
            <img
              id="mainImage"
              src={mainImage}
              alt="Product Image"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 flex-wrap mt-4">
            {productData.images.map((image, index) => (
              <img
                key={index}
                onClick={() => handleImageClick(image.src)}
                src={image.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="cursor-pointer border p-1 w-[80px] h-[80px]"
              />
            ))}
          </div>
        </div>

        {/* Second Div: Product Details */}
        <div className="w-full myMd:w-1/2 space-y-4">
          {/* Title and Description */}
          <h2 className="text-3xl font-bold">{productData.title}</h2>
          <p className="text-gray-600">{productData.description}</p>

          {/* Rating and Reviews */}
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((star, i) => (
                <span key={i}>{i < productData.rating ? "★" : "☆"}</span>
              ))}
            </div>
            <span className="text-gray-500">
              ({productData.reviews} Reviews)
            </span>
          </div>

          {/* Product Details */}
          <ul className="space-y-2">
            <li className="flex">
              <div className="w-28 font-semibold">Brand</div>
              <div className="mr-2">:</div>
              <div>{productData.brand}</div>
            </li>
            <li className="flex">
              <div className="w-28 font-semibold">Flavour</div>
              <div className="mr-2">:</div>
              <div>{productData.flavour}</div>
            </li>
            <li className="flex">
              <div className="w-28 font-semibold">Diet Type</div>
              <div className="mr-2">:</div>
              <div>{productData.dietType}</div>
            </li>
            <li className="flex">
              <div className="w-28 font-semibold">Weight</div>
              <div className="mr-2">:</div>
              <div>{productData.weightOptions.join(", ")}</div>
            </li>
            <li className="flex">
              <div className="w-28 font-semibold">Speciality</div>
              <div className="mr-2">:</div>
              <div>{productData.speciality}</div>
            </li>
            <li className="flex">
              <div className="w-28 font-semibold">Info</div>
              <div className="mr-2">:</div>
              <div>{productData.info}</div>
            </li>
            <li className="flex">
              <div className="w-28 font-semibold">Item</div>
              <div className="mr-2">:</div>
              <div>{productData.item}</div>
            </li>
          </ul>

          {/* Pricing */}
          <div className="text-2xl font-bold">
            <span className=" text-[#64B496]">
              ${productData.discountedPrice.toFixed(2)}
            </span>

            <span className="ml-2 line-through text-gray-500">
              ${productData.originalPrice.toFixed(2)}
            </span>
          </div>

          {/* Size/Weight Selection */}
          <div className="flex space-x-2">
            {productData.weightOptions.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`py-2 px-4 border rounded ${
                  size === selectedSize ? "bg-[#64B496] text-white" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quantity Selection */}
          <div className="flex items-center space-x-2 mt-4">
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="border py-2 px-4"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increase")}
              className="border py-2 px-4"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-[#64B496] text-white py-2 px-6 rounded mt-4">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border p-[25px] my-5 rounded-[6px]">
        <div className="mt-6 border-b">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <button
                  onClick={() => setActiveTab("description")}
                  className={`${
                    activeTab === "description"
                      ? "text-[#64B496] border-b-[2px] border-[#64B496] "
                      : ""
                  } font-bold text-[18px] pb-3  hover:border-[#64B496] hover:border-b-[2px] `}
                >
                  Description
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("information")}
                  className={`${
                    activeTab === "information"
                      ? "text-[#64B496] border-b-[2px] border-[#64B496]"
                      : ""
                  } font-bold text-[18px] pb-3  hover:border-[#64B496] hover:border-b-[2px]`}
                >
                  Information
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`${
                    activeTab === "reviews"
                      ? "text-[#64B496] border-b-[2px] border-[#64B496]"
                      : ""
                  } font-bold text-[18px] pb-3  hover:border-[#64B496] hover:border-b-[2px] `}
                >
                  Reviews
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Render Tab Content */}
        <div className="mt-6">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default ProductDetails;
