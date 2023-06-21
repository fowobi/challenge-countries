// import React, { useEffect, useState } from "react";
// import "./CountryList.css";
// import countriesData from "./CountriesAll.json"; // Import the JSON data

// const CountryList = () => {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     setCountries(countriesData);
//   }, []);

//   return (
//     <div className="country-list">
//       {countries.map((country) => (
//         <div key={country.name} className="country-card">
//           <img src={country.flag} alt={country.name} className="country-flag" />
//           <h2 className="country-name">{country.name}</h2>
//           <p>
//             <strong>Population:</strong> {country.population.toLocaleString()}
//           </p>
//           <p>
//             <strong>Region:</strong> {country.region}
//           </p>
//           <p>
//             <strong>Capital:</strong> {country.capital}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CountryList;




// import React, { useEffect, useState } from "react";
// import "./CountryList.css";
// import countriesData from "./CountriesAll.json"; // Import the JSON data
// import Search from "./Search"; // Import the Search component

// const CountryList = () => {
//   const [countries, setCountries] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     setCountries(countriesData);
//   }, []);

//   const handleSearchChange = (query) => {
//     setSearchText(query);
//   };

//   const filteredCountries = countries.filter((country) => {
//     const countryName = country.name.toLowerCase();
//     const capitalName = country.capital.toLowerCase();
//     const searchQuery = searchText.toLowerCase();

//     return (
//       countryName.includes(searchQuery) || capitalName.includes(searchQuery)
//     );
//   });

//   return (
//     <div>
//       <Search searchText={searchText} onSearchChange={handleSearchChange} />
//       <div className="country-list">
//         {searchText !== ""
//           ? filteredCountries.map((country) => (
//               <div key={country.name} className="country-card">
//                 <img
//                   src={country.flag}
//                   alt={country.name}
//                   className="country-flag"
//                 />
//                 <h2 className="country-name">{country.name}</h2>
//                 <p>
//                   <strong>Population:</strong>{" "}
//                   {country.population.toLocaleString()}
//                 </p>
//                 <p>
//                   <strong>Region:</strong> {country.region}
//                 </p>
//                 <p>
//                   <strong>Capital:</strong> {country.capital}
//                 </p>
//               </div>
//             ))
//           : countries.map((country) => (
//               <div key={country.name} className="country-card">
//                 <img
//                   src={country.flag}
//                   alt={country.name}
//                   className="country-flag"
//                 />
//                 <h2 className="country-name">{country.name}</h2>
//                 <p>
//                   <strong>Population:</strong>{" "}
//                   {country.population.toLocaleString()}
//                 </p>
//                 <p>
//                   <strong>Region:</strong> {country.region}
//                 </p>
//                 <p>
//                   <strong>Capital:</strong> {country.capital}
//                 </p>
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// };

// export default CountryList;


// import React, { useEffect, useState } from "react";
// import "./CountryList.css";
// import countriesData from "./CountriesAll.json"; // Import the JSON data
// import Search from "./Search"; // Import the Search component
// import RegionSelect from "./RegionSelect"; // Import the RegionSelect component


// const CountryList = () => {
//   const [countries, setCountries] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [selectedRegion, setSelectedRegion] = useState("");

//   useEffect(() => {
//     setCountries(countriesData);
//   }, []);

//   const handleSearchChange = (query) => {
//     setSearchText(query);
//   };

//   const handleRegionChange = (region) => {
//     setSelectedRegion(region);
//   };

//   const filteredCountries = countries.filter((country) => {
//     const countryName = country.name.toLowerCase();
//     const capitalName = country.capital.toLowerCase();
//     const searchQuery = searchText.toLowerCase();
//     const countryRegion = country.region.toLowerCase();

//     const isMatchingSearch =
//       countryName.includes(searchQuery) || capitalName.includes(searchQuery);
//     const isMatchingRegion =
//       selectedRegion === "" || countryRegion === selectedRegion.toLowerCase();

//     return isMatchingSearch && isMatchingRegion;
//   });

//   const regions = [...new Set(countries.map((country) => country.region))];

//   return (
//     <div>
//       <div>
//         <Search searchText={searchText} onSearchChange={handleSearchChange} />
//         <RegionSelect
//           regions={regions}
//           selectedRegion={selectedRegion}
//           onRegionChange={handleRegionChange}
//         />
//       </div>
//       <div className="country-list">
//         {filteredCountries.map((country) => (
//           <div key={country.name} className="country-card">
//             <img
//               src={country.flag}
//               alt={country.name}
//               className="country-flag"
//             />
//             <h2 className="country-name">{country.name}</h2>
//             <p>
//               <strong>Population:</strong> {country.population.toLocaleString()}
//             </p>
//             <p>
//               <strong>Region:</strong> {country.region}
//             </p>
//             <p>
//               <strong>Capital:</strong> {country.capital}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CountryList;




// import React, { useEffect, useState } from "react";
// import "./CountryList.css";
// import countriesData from "./CountriesAll.json"; // Import the JSON data
// import Search from "./Search"; // Import the Search component
// import RegionSelect from "./RegionSelect"; // Import the RegionSelect component

// const CountryList = () => {
//   const [countries, setCountries] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [selectedRegion, setSelectedRegion] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   useEffect(() => {
//     setCountries(countriesData);
//   }, []);

//   const handleSearchChange = (query) => {
//     setSearchText(query);
//   };

//   const handleRegionChange = (region) => {
//     setSelectedRegion(region);
//   };

//   const handleCountryClick = (country) => {
//     setSelectedCountry(country);
//   };

//   const handleBackClick = () => {
//     setSelectedCountry(null);
//   };

//   const filteredCountries = countries.filter((country) => {
//     const countryName = country.name.toLowerCase();
//     const capitalName = country.capital.toLowerCase();
//     const searchQuery = searchText.toLowerCase();
//     const countryRegion = country.region.toLowerCase();

//     const isMatchingSearch =
//       countryName.includes(searchQuery) || capitalName.includes(searchQuery);
//     const isMatchingRegion =
//       selectedRegion === "" || countryRegion === selectedRegion.toLowerCase();

//     return isMatchingSearch && isMatchingRegion;
//   });

//   const regions = [...new Set(countries.map((country) => country.region))];

//   const getCountryByCode = (code) => {
//     return countries.find((country) => country.alpha3Code === code);
//   };

//   const getCountryNameByCode = (code) => {
//     const country = getCountryByCode(code);
//     return country ? country.name : "";
//   };

//   if (selectedCountry) {
//     const { name, population, region, capital, flag, borders } =
//       selectedCountry;

//     return (
//       <div>
//         <button onClick={handleBackClick}>Back</button>
//         <div className="country-details">
//           <img src={flag} alt={name} className="country-flag" />
//           <h2 className="country-name">{name}</h2>
//           <p>
//             <strong>Population:</strong> {population.toLocaleString()}
//           </p>
//           <p>
//             <strong>Region:</strong> {region}
//           </p>
//           <p>
//             <strong>Capital:</strong> {capital}
//           </p>
//           <p>
//             <strong>Borders:</strong>
//             {borders.map((border) => (
//               <button
//                 key={border}
//                 onClick={() => handleCountryClick(getCountryByCode(border))}
//               >
//                 {getCountryNameByCode(border)}
//               </button>
//             ))}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div>
//         <Search searchText={searchText} onSearchChange={handleSearchChange} />
//         <RegionSelect
//           regions={regions}
//           selectedRegion={selectedRegion}
//           onRegionChange={handleRegionChange}
//         />
//       </div>
//       <div className="country-list">
//         {filteredCountries.map((country) => (
//           <div
//             key={country.alpha3Code}
//             className="country-card"
//             onClick={() => handleCountryClick(country)}
//           >
//             <img
//               src={country.flag}
//               alt={country.name}
//               className="country-flag"
//             />
//             <h2 className="country-name">{country.name}</h2>
//             <p>
//               <strong>Population:</strong> {country.population.toLocaleString()}
//             </p>
//             <p>
//               <strong>Region:</strong> {country.region}
//             </p>
//             <p>
//               <strong>Capital:</strong> {country.capital}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CountryList;






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




