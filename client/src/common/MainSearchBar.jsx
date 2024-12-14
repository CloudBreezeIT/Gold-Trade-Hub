import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is installed for API requests
import { getRequest } from "../Requests/Request";

export default function MainSearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [trendingCategories, setTrendingCategories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); // Controls dropdown visibility
  const navigate = useNavigate();

  // Fetch trending categories when input is focused
  const fetchTrendingCategories = async () => {
    try {
      const response = await getRequest("category/trendingCategories"); // Replace with your API
      setTrendingCategories(response.body || []);
    } catch (error) {
      console.error("Error fetching trending categories:", error);
    }
  };

  // Fetch search results when user types
  const fetchSearchResults = async (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }
    try {
      const response = await getRequest(`/category/get-searched-items?q=${query}`); // Replace with your API
      setSearchResults(response.body || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSearch = () => {
    navigate(`/search?q=${searchQuery}`);
  };

  // Handle input changes and fetch search results
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    fetchSearchResults(value);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".search-bar-container")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white fixed left-0 right-0 top-[60px] z-40">
      <div className="w-[50%] mx-auto my-4 relative search-bar-container">
        {/* Search Input */}
        <div className="flex items-center bg-white shadow-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search for jewelry..."
            className="flex-grow px-4 py-3 text-gray-700 outline-none border-2 border-yellow-400 rounded-l-md"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => {
              fetchTrendingCategories();
              setShowDropdown(true);
            }}
          />
          <button
            onClick={handleSearch}
            className="rounded-r-md px-6 py-[14px] bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Search
          </button>
        </div>

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md mt-2 rounded-md z-50">
            {/* Show trending categories if no search query */}
            {searchQuery === "" && trendingCategories.length > 0 && (
              <div>
                <h3 className="px-4 py-2 text-gray-700 font-semibold border-b">
                  Trending Categories
                </h3>
                <ul>
                  {trendingCategories.map((category) => (
                    <li
                      key={category.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        navigate(`/search?q=${category.name}`);
                        setShowDropdown(false);
                        
                      }}
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Show search results if a query is typed */}
            {searchQuery !== "" && searchResults.length > 0 && (
              <div>
                <h3 className="px-4 py-2 text-gray-700 font-semibold border-b">
                  Search Results
                </h3>
                <ul>
                  {searchResults.map((result) => (
                    <li
                      key={result.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        navigate(`/search?q=${result.name}`);
                        setShowDropdown(false);
                      }}
                    >
                      {result.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Show "No Results" message if no results are found */}
            {searchQuery !== "" && searchResults.length === 0 && (
              <div className="px-4 py-2 text-gray-500">No results found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
