// components/Sidebar.js
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white  w-64 flex flex-col">
      <div className="px-6 py-4">
        <img
          src="/path/to/logo.png"
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
        <h1 className="text-xl font-bold mt-4">My Company</h1>
      </div>
      <nav className="flex flex-col mt-6">
        <Link href="/dashboard" className="py-2 px-6 hover:bg-gray-700">
          Home
        </Link>
        <Link href="/dashboard/parties" className="py-2 px-6 hover:bg-gray-700">
          Parties
        </Link>
        <Link href="/dashboard/items" className="py-2 px-6 hover:bg-gray-700">
          Items
        </Link>
        {/* Add more links here */}
      </nav>
    </div>
  );
};

export default Sidebar;
