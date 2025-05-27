import React from "react";
import "./HomePage.css";
import Hero_Index from "../assets/images/Hero_index.jpg";
import searchIcon from "../assets/icons/search-line.svg";
import PopularDishes from "../components/PopularDishes";
import PopularMeals from "../components/PopularMeals";
import AppPromo from "../components/AppPromo";
import LoyaltyProgram from "../components/LoyaltyProgram";
import SatisfySection from "../components/SatisfySection";

export default function HomePage() {
  return (
    <>
      <div className="hero" style={{ backgroundImage: `url(${Hero_Index})` }}>
        <div className="hero-content">
          <div className="hero-box">
            <h1>Treat your cravings with delicious foods</h1>

            <div className="search-wrapper">
              <div className="search-bar">
                <img src={searchIcon} alt="Search" />
                <input
                  type="text"
                  placeholder="Search for restaurants or items in your area..."
                />
              </div>
              <button className="search-button">Search</button>
            </div>
          </div>

          <PopularDishes />
        </div>
      </div>
      <PopularMeals />
      <AppPromo />
      <LoyaltyProgram />
      <SatisfySection />
      
    </>
  );
}
