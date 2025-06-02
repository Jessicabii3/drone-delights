import React, { useEffect, useState } from "react";
import "./HeroSearch.css";

const HeroSearch = ({ selectedCity, setSelectedCity, searchText, setSearchText }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cities")
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => console.error("Failed to load cities", err));
  }, []);

  return (
    <section className="hero-search">
      <div className="hero-boxs">
        <h1>Treat your cravings with delicious foods</h1>
        <div className="hero-inputs">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value=""disabled hidden>Select your area</option>
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search by meal or restaurant..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
