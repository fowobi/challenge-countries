import React from "react";

const RegionSelect = ({ regions, selectedRegion, onRegionChange }) => {
  const handleRegionChange = (event) => {
    onRegionChange(event.target.value);
  };

  return (
    <select className="country-select"value={selectedRegion} onChange={handleRegionChange}>
      <option value="">Filter by region</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default RegionSelect;
