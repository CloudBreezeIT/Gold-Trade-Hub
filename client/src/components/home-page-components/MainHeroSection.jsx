import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative w-full h-[50vh] bg-cover bg-center mt-24 border-4 border-transparent"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/256643/pexels-photo-256643.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-wide mb-4 animate-fadeInDown">
            Find Your Perfect Jewelry
          </h1>
          <p className="text-sm sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto mb-8 animate-fadeInUp">
            Discover and sell exclusive jewelry pieces, whether new or vintage.  
          </p>

          {/* CTA Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/user-dashboard/manage-product/add-product"
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-yellow-500 hover:text-black transition duration-300 transform"
            >
              Sell Your Jewelry Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
