import React from 'react';
import Slider from 'react-slick';
import { FiCoffee, FiWatch, FiHeart, FiStar } from 'react-icons/fi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const categories = [
  {
    title: 'Rings',
    icon: <FiStar size={50} className="text-yellow-500" />,
  },
  {
    title: 'Necklaces',
    icon: <FiHeart size={50} className="text-pink-500" />,
  },
  {
    title: 'Bracelets',
    icon: <FiWatch size={50} className="text-blue-500" />,
  },
  {
    title: 'Earrings',
    icon: <FiCoffee size={50} className="text-green-500" />,
  },
];

const CategoriesSection = () => {
  const sliderRef = React.useRef(null);

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2, // Change to 2 to show more cards at once
    autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, // Adjust as needed for larger screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Adjust as needed for smaller screens
        },
      },
    ],
    arrows: false,
  };

  return (
    <section className="relative py-12 bg-gray-50">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Browse Categories</h2>
          <p className="mt-2 text-gray-600">Explore a wide range of jewelry items.</p>
        </div>

        {/* Custom Previous Button */}
        <button
          className="absolute left-4 top-2/3 transform -translate-y-1/2 bg-mstheme text-black p-3 rounded-full shadow-lg hover:bg-mstheme_hover z-10 border border-black"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Category Slider */}
        <Slider ref={sliderRef} {...sliderSettings}>
          {categories.map((category, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden text-center p-3 hover:shadow-lg transition-shadow duration-300">
                {/* Category Icon */}
                <div className="flex justify-center items-center mb-4">
                  {category.icon}
                </div>

                {/* Category Title */}
                <h3 className="text-lg font-bold text-gray-700">{category.title}</h3>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Next Button */}
        <button
          className="absolute right-4 top-2/3 transform -translate-y-1/2 bg-mstheme text-black p-3 rounded-full shadow-lg hover:bg-mstheme_hover z-10 border border-black"
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CategoriesSection;
