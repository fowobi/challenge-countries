

import React from "react";

const Search = ({ searchText, onSearchChange }) => {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <input className="country-search"
      type="text"
      placeholder="Search countries..."
      value={searchText}
      onChange={handleSearchChange}
    />
  );
};

export default Search;
