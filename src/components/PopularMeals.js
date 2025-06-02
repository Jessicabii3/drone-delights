import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MealCard from "./MealCard";
import "./PopularMeals.css";

const PopularMeals = ({ onAddToCart, onSaveMeal }) => {
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        const popular = data
          .filter((meal) => meal.status === "Open")
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4);
        setMeals(popular);
      });
  }, []);

  return (
    <section className="meals-section">
      <div className="meals-header">
        <h2>Popular Meals</h2>
        <button className="explore-button" onClick={() => navigate("/menu")}>
          Explore more combos →
        </button>
      </div>
      <div className="card-grid">
        {meals.map((meal) => (
          <MealCard
            key={meal.id}
            {...meal}
            onAddToCart={() => onAddToCart(meal)}
            onSaveMeal={() => onSaveMeal(meal)}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularMeals;
