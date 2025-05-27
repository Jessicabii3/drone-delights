import React from 'react';
import "./Mealcard.css";
import Vector from "../assets/icons/Vector.svg";
import locationPin from "../assets/icons/locationPin.svg";
import bookmarkLine from "../assets/icons/bookmark-line.svg";
import cartIcon from "../assets/icons/shopping-cart-line.svg";
export default function MealCard({ image, status, rating, type, name, location, time, price }) {
  return (
    <div className="meal-card">
      <div className="meal-card-img">
        <img src={image} alt={name} />
        <div className={`status-badge ${status.toLowerCase().replace(" ", "-")}`}>
          <span className="circle" /> {status}
        </div>
      </div>

      <div className="card-content">
        <div className="rating-type">
          <span className="rating">
            <img src={Vector} alt="star" className="rating-icon"/>
             {rating}</span>
          <span className="type">{type}</span>
        </div>

        <h3 className="meal-name">{name}</h3>
        <p className="location">
            <img src={locationPin} alt="location" className="location-icon"/>
             {location}</p>
        <p className="delivery-time">Est. Delivery Time: {time}</p>
        <p className="price">{price} SEK</p>

        <div className="button-group">
          <button className="save-button">
            <img src={bookmarkLine} alt="Save" className="save-icon" />
             Save for later</button>
          <button className="cart-button">
            <img src={cartIcon} alt="Add to cart" className="cart-icon" />
             Add to cart</button>
        </div>
      </div>
    </div>
  );
}
