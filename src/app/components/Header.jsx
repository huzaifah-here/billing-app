import React from "react";

// components/Header.js
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <input
        type="text"
        placeholder="Enter Business Name"
        className="border border-gray-300 rounded px-4 py-2"
      />
      <div className="flex items-center space-x-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Add Sale
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Purchase
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          Add More
        </button>
      </div>
    </div>
  );
};

export default Header;
