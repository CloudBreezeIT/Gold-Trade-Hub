import React, { useState } from "react";
import { formatNumber, stringConcat } from "../functions/helperFuntions";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi"; // Import wishlist icon from react-icons
import { toast } from "react-toastify";
import { postRequest } from "../Requests/Request"; // Import postRequest from Request.js

export default function ProductCard({ item }) {
  const [isWishlisted, setIsWishlisted] = useState(false); // Track wishlist state
  const [cartResponse, setCartResponse] = useState(null);

  const handleAddToWishlist = async (id) => {
    try {
      const response = await postRequest("/product/add-to-cart", {
        productId: id,
      });
      console.log("add to wishlist response", response);
      setCartResponse(response);
      setIsWishlisted(!isWishlisted); // Toggle wishlist state
      toast.success(response?.message);
    } catch (error) {
      toast.error("Failed to add item to wishlist");
      console.error("Error adding to wishlist:", error);
    }
  };

  return (
    <>
      <div className="relative border w-[140px] md:w-[180px] xl:w-[220px] shadow-md transition-shadow hover:shadow-lg overflow-hidden">
        {/* Wishlist Icon - Positioned in the top-right corner */}
        <div className="absolute top-2 right-2 z-10">
          <button
            onClick={() => handleAddToWishlist(item._id)}
            className="focus:outline-none"
          >
            <FiHeart
              className={`w-6 h-6 ${
                isWishlisted
                  ? "text-yellow-500 fill-yellow-500"
                  : "text-yellow-500"
              } cursor-pointer`}
            />
          </button>
        </div>

        <Link to={`/${item.slug}`}>
          <div className="relative overflow-hidden">
            {item?.images[0] && (
              <img
                src={item?.images[0] || `/assets/images/alt-img.webp`}
                className="w-full h-[140px] md:h-[170px] xl:h-[200px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                alt={item.name}
              />
            )}
          </div>
        </Link>

        <Link to={`/${item.slug}`} className="p-2 flex flex-col gap-1">
          <h2 className="font-normal text-[10px] md:text-xs xl:text-[14px] line-clamp-2 capitalize">
            {item.title}
          </h2>

          <div className="flex items-center justify-between text-[8px] md:text-[9px] xl:text-[10px] text-gray-500 space-x-1 mt-1">
            <div>
              <span className="bg-blue-100 text-blue-500 px-1 py-0.5 rounded">
                {item.category}
              </span>
            </div>
          </div>

          <div className="text-[8px] md:text-[9px] xl:text-[10px] text-gray-500">
            {item.location} {item.date ? "-" : ""} {item.date}
          </div>

          <div className="flex justify-between items-center mt-1">
            <div className="text-base md:text-lg font-normal text-yellow-500">
              Rs. {item.price > 100000 ? formatNumber(item.price) : item.price}
            </div>
            <div className="flex flex-col items-end text-[8px] md:text-[9px] xl:text-[10px] text-gray-600">
              <span className="font-medium">Condition: {item.condition}</span>
              <span>Weight: {item.weight}g</span>
            </div>
          </div>

          {item.description && (
            <p className="text-[8px] md:text-[9px] xl:text-[12px] text-gray-600 line-clamp-2 mt-1">
              {stringConcat(item.description, 40)}
            </p>
          )}
        </Link>
      </div>
    </>
  );
}
