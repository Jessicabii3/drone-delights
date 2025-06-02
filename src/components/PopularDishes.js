import React from "react";
import "./PopularDishes.css";
import { useNavigate } from "react-router-dom";

export default function PopularDishes() {
  const navigate = useNavigate();

  const handleClick = (tag) => {
    navigate(`/menu?tag=${encodeURIComponent(tag)}`);
  };
  return (
    <section className="popular-section">
      <div className="dish-wrapper">
        <h2>Popular categories</h2>
        <div className="card-container">
          <div
            className="dish-card"
            style={{ backgroundImage: `url("/images/Vegan.jpg")` }}
            onClick={() => handleClick("Vegan")}
          >
            <div className="card-overlay">
              <h3>Vegan</h3>
              <p>Plant-based delights for ethical and compassionate dining.</p>
            </div>
          </div>
          <div
            className="dish-card"
            style={{ backgroundImage: `url("/images/Vegetarian.jpg")` }}
            onClick={() => handleClick("Vegetarian")}
          >
            <div className="card-overlay">
              <h3>Vegetarian</h3>
              <p>Wholesome and flavorful vegetarian options for all.</p>
            </div>
          </div>
          <div
            className="dish-card"
            style={{ backgroundImage: `url("/images/NonVeg.jpg")` }}
            onClick={() => handleClick("Non-Vegetarian")}
          >
            <div className="card-overlay">
              <h3>Non- Vegetarian</h3>
              <p>
                Savor the finest non-vegetarian selections, crafted to
                perfection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
