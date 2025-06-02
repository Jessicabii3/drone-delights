import React from "react";
import "./FilterTag.css";

const FilterTag = ({ label, active, onClick }) => {
  return (
    <button
      className={`filter-tag ${active ? "active" : ""}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default FilterTag;
