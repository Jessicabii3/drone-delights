import React from "react";
import "./Mealcard.css";
import Vector from "../assets/icons/Vector.svg";
import locationPin from "../assets/icons/locationPin.svg";
import bookmarkLine from "../assets/icons/bookmark-line.svg";
import cartIcon from "../assets/icons/shopping-cart-line.svg";
export default function MealCard({
  id,
  image,
  status,
  rating,
  type,
  name,
  restaurant,
  deliveryTime,
  price,
  onAddToCart,
  onSaveMeal
}) {
   if (typeof status !== "string") {
    console.warn("MealCard saknar giltig status:", status);
  }

  return (
    <div className="meal-card">
      <div className="meal-card-img">
        <img src={`/images/${image}`} alt={name} />
        <div
          className={`status-badge ${
            typeof status === "string" && status.toLowerCase
              ? status.toLowerCase().replace(/\s+/g, "-")
              : "unknown"
          }`}
        >
          <span className="circle" /> {status || "Unknown"}
        </div>
      </div>

      <div className="card-content">
        <div className="rating-type">
          <span className="rating">
            <img src={Vector} alt="star" className="rating-icon" />
            {rating}
          </span>
          <span className="type">{type}</span>
        </div>

        <h3 className="meal-name">{name}</h3>
        <p className="location">
          <img src={locationPin} alt="location" className="location-icon" />
          {restaurant}
        </p>
        <p className="delivery-time">Est. Delivery Time: {deliveryTime}</p>
        <p className="price">{price} SEK</p>

        <div className="button-group">
          <button className="save-button"onClick={onSaveMeal}>
            <img src={bookmarkLine} alt="Save" className="save-icon" />
            Save for later
          </button>
          <button className="cart-button" onClick={onAddToCart}>
            <img src={cartIcon} alt="Add to cart" className="cart-icon" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
