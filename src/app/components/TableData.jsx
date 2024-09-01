import React from 'react'

const TableData = ({ columns, data, emptyMessage }) => {
    return (
      <div className='w-full'>
        <table className='w-full'>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr className='text-center' key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <td key={colIndex}>{row[column.accessor]}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className='text-center'>
                <td colSpan={columns.length}>{emptyMessage || "No data available"}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
  
  // Default Props
  TableData.defaultProps = {
    emptyMessage: "No transactions to show",
  };

export default TableData