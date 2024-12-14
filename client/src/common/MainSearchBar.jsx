import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function MainSearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    // if (location.pathname === "/search") {
    //   // If already on the Search Page, trigger the onSearch callback
    //   onSearch(searchQuery);
    // } else {
      // Navigate to the Search Page with the query
      navigate(`/search?q=${searchQuery}`);
    // }
  };

  return (
    <div className="bg-white fixed left-0 right-0 top-[60px] z-40">
      <div className="w-[50%] mx-auto my-4 flex items-center bg-white shadow-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search for jewelry..."
          className="flex-grow px-4 py-3 text-gray-700 outline-none border-2 border-yellow-400 rounded-l-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="rounded-r-md px-6 py-[14px] bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
}
