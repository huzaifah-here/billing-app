import React from "react";

// components/DashboardCard.js
const DashboardCard = ({ title, amount, description, icon, growth }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-700 font-bold">{title}</h2>
        {icon && <img src={icon} alt={title} className="w-6 h-6" />}
      </div>
      <div className="mt-2 text-2xl font-bold">{amount}</div>
      <div className="text-sm text-gray-500">{description}</div>
      {growth && (
        <div
          className={`mt-2 text-xs ${
            growth > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {growth > 0 ? `↑ ${growth}%` : `↓ ${growth}%`} This Month Growth
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
