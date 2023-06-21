import React from "react";

const CountryCard = ({ country, onCountryClick }) => {
  const { name, population, region, capital, flag } = country;
  // eslint-disable-next-line no-unused-vars
  const { borders } = country;

  return (
    <div className="country-card" onClick={() => onCountryClick(country)}>
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
    </div>
  );
};

export default CountryCard;
