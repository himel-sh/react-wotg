import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = visitedCountries.filter(
      (visCountry) => visCountry.name.common !== country.name.common
    );
    if (newVisitedCountries.length === visitedCountries.length) {
      newVisitedCountries.push(country);
    }
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedflag = (flag) => {
    const newVisitedflags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedflags);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h2>In the Countries: {countries.length}</h2>
      <h3>Total countries visited: {visitedCountries.length}</h3>
      <ol>
        {visitedCountries.map((county) => (
          <li>{county.name.common}</li>
        ))}
      </ol>
      <div className="visited-flags-container">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag} alt="" />
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedflag={handleVisitedflag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
