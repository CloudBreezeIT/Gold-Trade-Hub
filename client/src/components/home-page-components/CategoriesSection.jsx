import React, { useEffect } from "react";
import Slider from "react-slick";
import { FiCoffee, FiWatch, FiHeart, FiStar } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/frontendSlice";
import Loader from "../../common/Loader";
import { Link } from "react-router-dom";

const CategoriesSection = ({ data }) => {
  return (
    <section className="relative py-5  my-20">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-5">
          <h2 className="text-2xl text-gray-800 relative">
            Browse Categories
            <span className="absolute -bottom-2 left-0 w-[7%] h-[0.145rem] bg-yellow-500 rounded-full"></span>
          </h2>
          {/* <p className="mt-2 text-gray-600">
            Explore a wide range of jewelry items.
          </p> */}
        </div>
        <div className="grid grid-cols-8">
          {data &&
            data?.map((category, index) => (
              <>
                <Link to={`search?q=${category.label}`}>
                  <div
                    className="bg-white  p-6 border hover:border-white cursor-pointer  transform hover:shadow-catCardShadow transition duration-300 "
                    // style={{
                    //   boxShadow: "0 2px 4px 0 rgba(0,0,0,.25)",
                    //   hover: { boxShadow: "0 2px 4px 0 rgba(0,0,0,.25)" },
                    // }}
                  >
                    {/* Category Image */}
                    <div className="flex items-center justify-center mb-4">
                      <img
                        src={category.image}
                        alt={category.label}
                        className="w-16 h-16 object-cover "
                      />
                    </div>

                    {/* Category Label */}
                    <h3 className="text-center text-[14px] font-normal text-gray-700">
                      {category.label}
                    </h3>
                  </div>
                </Link>
              </>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
