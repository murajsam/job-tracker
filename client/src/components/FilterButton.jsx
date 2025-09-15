import React from "react";

const FilterButton = ({ label, value, active, setActive }) => {
  const isActive = active === value;
  const btnClass = isActive
    ? "bg-purple-700 text-white"
    : "bg-gray-300 text-gray-800";

  return (
    <button
      type="button"
      className={`font-medium px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white ${btnClass}`}
      onClick={() => setActive(value)}
    >
      {label}
    </button>
  );
};

export default FilterButton;
