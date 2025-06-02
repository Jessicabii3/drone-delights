import React from "react";
import { useContext } from "react";
import "./HomePage.css";

import PopularDishes from "../components/PopularDishes";
import PopularMeals from "../components/PopularMeals";
import AppPromo from "../components/AppPromo";
import LoyaltyProgram from "../components/LoyaltyProgram";
import SatisfySection from "../components/SatisfySection";
import { useAuth } from "../context/AuthContext";

const Hero_Index = "/images/Hero_index.jpg";
const HomePage = () => {
  const { user } = useAuth();
  const userId = user?.id || "guest";

  const handleSaveMeal = async (meal) => {
    try {
      await fetch("http://localhost:3001/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...meal,
          userId: userId,
          productId: meal.id,
          quantity: 1,
        }),
      });
    } catch (error) {
      console.error("Kunde inte spara favorit:", error);
    }
  };
  const handleAddToCart = async (item) => {
    try {
      await fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...item, quantity: 1 }),
      });
    } catch (error) {
      console.error("Kunde inte lägga till i varukorg:", error);
    }
  };
  return (
    <>
      <div className="hero" style={{ backgroundImage: `url(${Hero_Index})` }}>
        <div className="hero-content">
          <div className="hero-box">
            <h1>Treat your cravings with delicious foods</h1>

            <p className="hero-description">
              Drone Delights is your go-to food delivery service 
              for ultra-fast delivery. Browse our delicious meals, save your
              favorites, and enjoy contactless service with speed and style!
            </p>
          </div>

          <PopularDishes />
        </div>
      </div>
      <PopularMeals onAddToCart={handleAddToCart} onSaveMeal={handleSaveMeal} />
      <AppPromo />
      <LoyaltyProgram />
      <SatisfySection />
    </>
  );
};
export default HomePage;
