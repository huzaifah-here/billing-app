import React from "react";
import ItemList from "../../components/ItemList";
import TableData from "../../components/TableData";

const Items = () => {
  const parties = [
    { name: "Ali", amount: 0.0 },
    { name: "Aslam", amount: 0.0 },
  ];
  const columns = [
    { label: "Type", accessor: "type" },
    { label: "Number", accessor: "number" },
    { label: "Date", accessor: "date" },
    { label: "Total", accessor: "total" },
    { label: "Balance", accessor: "balance" },
  ];

  const data = [
    {
      type: "Sale",
      number: 1,
      date: "25/08/2024",
      total: "Rs 500.00",
      balance: "Rs 0.00",
    },
    {
      type: "Sale",
      number: 2,
      date: "25/08/2024",
      total: "Rs 200.00",
      balance: "Rs 0.00",
    },
  ];
  return (
    <div className="flex shadow gap-5 h-screen p-5 rounded">
      <div className="w-[40%] ">
        <ItemList heading={["Item", "Quantity"]} parties={parties} />
      </div>
      <div className="bg-white shadow w-full py-10 ">
        <TableData columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Items;
