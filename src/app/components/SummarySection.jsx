import React from "react";

// components/SummarySection.js
const SummarySection = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-gray-700 font-bold">Stock Inventory</h2>
        <div className="mt-2 text-xl">
          Stock Value: <span className="font-bold">Rs 1,000.00</span>
        </div>
        <div className="mt-1 text-sm text-red-500">Low Stocks: Loha -99</div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-gray-700 font-bold">Cash & Bank</h2>
        <div className="mt-2 text-xl">
          Cash In hand: <span className="font-bold">Rs 950.00</span>
        </div>
        <div className="mt-1 text-sm">Bank Accounts: Rs 0.00</div>
        <div className="mt-1 text-sm">Loan Accounts: Rs 0.00</div>
      </div>
      {/* Add more summaries here */}
    </div>
  );
};

export default SummarySection;
