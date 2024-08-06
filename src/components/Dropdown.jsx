import React from "react";

const Dropdown = ({ options, label, onChange, value }) => {
    return (
      <div className="mt-4">
        <label htmlFor="currency" className="block text-sm font-medium text-gray-700">{label}:</label>
        <div className="mt-1 relative">
          <select
            id="currency"
            className="w-full py-2 border border-gray-300 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
            onChange={onChange}
            value={value} 
          >
            {options.map((option, index) => (
              <option key={index} value={option.code}>{option.code}</option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  export default Dropdown;
  
