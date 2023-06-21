import React from "react";

const CountryDetails = ({
  country,
  onBackClick,
  onCountryClick,
  getCountryByCode,
  getCountryNameByCode,
}) => {
  const { name, population, region, capital, flag, borders } = country;

  return (
    <div>
      <button onClick={onBackClick}>Back</button>
      <div className="country-details">
        <img src={flag} alt={name} className="country-flag" />
        <h2 className="country-name">{name}</h2>
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
        <p>
          <strong>Borders:</strong>
          {borders.map((border) => (
            <button
              key={border}
              onClick={() => onCountryClick(getCountryByCode(border))}
            >
              {getCountryNameByCode(border)}
            </button>
          ))}
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;
