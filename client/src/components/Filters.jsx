import React from "react";
import FilterButton from "./FilterButton";

const Filters = ({ active, setActive }) => {
  const filters = [
    { label: "All", value: "all" },
    { label: "Interview", value: "interview" },
    { label: "Pending", value: "pending" },
    { label: "Declined", value: "declined" },
  ];

  return (
    <div className="w-full flex items-center justify-center my-4">
      <h2 className="text-xl font-semibold mr-4">Filter by:</h2>
      <div className="flex gap-4">
        {filters.map((filter) => (
          <FilterButton
            key={filter.value}
            label={filter.label}
            value={filter.value}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;
