import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={visited ? "country-visited" : "country"}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>
        Name: {country.name.common} (Capital is {country.capital.capital})
      </h3>
      <p>Population: {country.population.population} citizens</p>
      <p>
        Area: {country.area.area} km2{" "}
        {country.area.area > 300000 ? "(large country)" : "(small country )"}
      </p>
      <p>Region: {country.region.region}</p>
      <p>In the continent of {country.continents.continents}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
