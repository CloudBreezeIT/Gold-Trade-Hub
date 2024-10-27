import React from "react";
import { stringConcat } from "../functions/helperFuntions";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <Link to={`${item.slug}`}>
      <div className="border w-[140px] md:w-[180px] xl:w-[220px] rounded-lg shadow-md transition-shadow hover:shadow-lg overflow-hidden">
        <div className="relative">
          {/* Consistent Image Display */}
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={item.images[0] || `/assets/images/alt-img.webp`}
              className="w-full h-[140px] md:h-[170px] xl:h-[200px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              alt={item.name}
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="p-2 flex flex-col gap-1">
          {/* Title */}
          <h2 className="font-semibold text-[10px] md:text-xs xl:text-sm line-clamp-1">
            {stringConcat(item.title, 18)}
          </h2>

          {/* Category and Subcategory */}
          <div className="flex items-center text-[8px] md:text-[9px] xl:text-[10px] text-gray-500 space-x-1">
            <span className="bg-blue-100 text-blue-500 px-1 py-0.5 rounded-full">
              {item.category}
            </span>
            <span className="bg-gray-100 text-gray-600 px-1 py-0.5 rounded-full">
              {item.subCategory}
            </span>
          </div>

          {/* Location and Date */}
          <div className="text-[8px] md:text-[9px] xl:text-[10px] text-gray-500">
            {item.location} - {item.date}
          </div>

          {/* Price, Condition, Weight */}
          <div className="flex justify-between items-center mt-1">
            {/* Price */}
            <div className="text-base md:text-lg xl:text-xl font-semibold text-black">
              ${item.price}
            </div>

            {/* Condition and Weight */}
            <div className="flex flex-col items-end text-[8px] md:text-[9px] xl:text-[10px] text-gray-600">
              <span className="font-medium">Condition: {item.condition}</span>
              <span>Weight: {item.weight}kg</span>
            </div>
          </div>

          {/* Optional: Short Description */}
          {item.description && (
            <p className="text-[8px] md:text-[9px] xl:text-[10px] text-gray-600 line-clamp-2 mt-1">
              {stringConcat(item.description, 40)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
