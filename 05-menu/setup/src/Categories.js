import React from "react";

const Categories = ({ filterHandler, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((b, i) => {
        return (
          <button
            type="button"
            onClick={() => filterHandler(b)}
            className="filter-btn"
            key={i}
          >
            {b}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
