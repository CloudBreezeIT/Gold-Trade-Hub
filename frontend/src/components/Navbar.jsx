import React, { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Jewelry<span className="text-yellow-500">Shop</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition duration-300">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition duration-300">
              Shop
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition duration-300">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition duration-300">
              Contact
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-yellow-500 transition duration-300">
                Categories
              </button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition duration-300">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Rings
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Necklaces
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Bracelets
                </a>
              </div>
            </div>
          </div>

          {/* Cart and Login */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/user-dashboard" className="text-gray-700 hover:text-yellow-500 transition duration-300">
              Login
            </Link>
            <a href="#" className="relative text-gray-700 hover:text-yellow-500 transition duration-300">
              <FaShoppingCart size={20} />
              {/* Cart Count */}
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
          <a href="#" className="block py-2 text-gray-700 hover:text-yellow-500">
            Home
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-yellow-500">
            Shop
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-yellow-500">
            About
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-yellow-500">
            Contact
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-yellow-500">
            Login
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-yellow-500">
            Cart (3)
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
