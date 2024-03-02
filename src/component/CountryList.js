import React, { useEffect, useState } from "react";
import "./CountryList.css";
import countriesData from "./CountriesAll.json"; 
import Search from "./Search"; 
import RegionSelect from "./RegionSelect"; 
import CountryCard from "./CountryCard"; 
import CountryDetails from "./CountryDetails";
import ColorSchemePicker from "./ColorSchemePicker";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  const handleSearchChange = (query) => {
    setSearchText(query);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleBackClick = () => {
    setSelectedCountry(null);
  };

  const handleColorSchemeChange = (selectedColorScheme) => {
    setColorScheme(selectedColorScheme);
  };

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name.toLowerCase();
    const capitalName = country.capital.toLowerCase();
    const searchQuery = searchText.toLowerCase();
    const countryRegion = country.region.toLowerCase();

    const isMatchingSearch =
      countryName.includes(searchQuery) || capitalName.includes(searchQuery);
    const isMatchingRegion =
      selectedRegion === "" || countryRegion === selectedRegion.toLowerCase();

    return isMatchingSearch && isMatchingRegion;
  });

  const regions = [...new Set(countries.map((country) => country.region))];

  return (
    <div className={`country-list-container ${colorScheme}`}>
      <div className="color-scheme-picker">
        <ColorSchemePicker onColorSchemeChange={handleColorSchemeChange} />
      </div>
      {selectedCountry ? (
        <CountryDetails
          country={selectedCountry}
          onBackClick={handleBackClick}
          onCountryClick={handleCountryClick}
          getCountryByCode={(code) =>
            countries.find((country) => country.alpha3Code === code)
          }
          getCountryNameByCode={(code) => {
            const country = countries.find(
              (country) => country.alpha3Code === code
            );
            return country ? country.name : "";
          }}
        />
      ) : (
        <>
          <div>
            <Search
              searchText={searchText}
              onSearchChange={handleSearchChange}
            />
            <RegionSelect
              regions={regions}
              selectedRegion={selectedRegion}
              onRegionChange={handleRegionChange}
            />
          </div>
          <div className="country-list">
            {filteredCountries.map((country) => (
              <CountryCard
                key={country.alpha3Code}
                country={country}
                onCountryClick={handleCountryClick}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CountryList;




