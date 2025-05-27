import React from "react";
import "./AppPromo.css";
import phoneImage from "../assets/images/iPhone.png";
import burgerImage from "../assets/images/Hamburger-app.png";
import Android from "../assets/icons/google-play-fill.svg";
import Apple from "../assets/icons/Appstore.svg";

const AppPromo = () => {
  return (
    <section className="app-promo">
      <div className="app-promo-content">
        <div className="app-phone">
          <img src={phoneImage} alt="App in phone" />
        </div>
        <div className="app-text">
          <h2>Try our app now</h2>
          <p>
            Discover the utmost convenience in food ordering. Explore
            irresistible discounts and step into a world of delightful culinary
            delights.
          </p>
          <div className="app-buttons">
            <button className="store-btn">
              <img src={Android} alt="Google Play" className="store-icon" />
              Playstore
            </button>

            <button className="store-btn">
              <img src={Apple} alt="App Store" className="store-icon" />
              Appstore
            </button>
          </div>
        </div>
        <div className="app-burger">
            <img src={burgerImage} alt="burger" />
        </div>
      </div>
    </section>
  );
};
export default AppPromo;
