import React from "react";

const ItemList = ({ heading, parties }) => {
  // const parties = [
  //   { name: "Ali", amount: 0.0 },
  //   { name: "Aslam", amount: 0.0 },
  // ];

  return (
    <div className="bg-white text-black h-full">
      <div className="flex justify-between p-5">
        <button>Search</button>
        <button className="px-4 py-2 bg-orange-300 text-white rounded-xl">
          + Add
        </button>
      </div>
      <table className="w-full">
        <thead className="flex justify-between text-center">
          {heading.map((item, idx) => (
            <tr key={idx} className="w-full ">
              <th>{item}</th>
            </tr>
          ))}
        </thead>
        <tbody className="text-center">
          {parties.map((party, index) => (
            <tr key={index}>
              <td>{party.name}</td>
              <td>{party.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
