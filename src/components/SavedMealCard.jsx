import React from "react";
import "./SavedMealCard.css";

const SavedMealCard = ({ meal, onAdd }) => {
  const { image, name, restaurant, quantity, price } = meal;
  return (
    <div className="saved-meal-card">
      <img src={`/images/${image}`} alt={name} />
      <div>
        <p className="meal-name">{name}</p>
        <p className="meal-meta">Restaurant: {restaurant}</p>
        <p className="meal-price">
          Qty: {quantity} • {price} kr
        </p>
      </div>
      <div className="meal-price-info">
        {onAdd ? (
          <button className="add-btn" onClick={() => onAdd(meal)}>
            + Add to cart
          </button>
           ) : (
          <p className="info-text">Logga in för att lägga till i varukorgen</p>
        )}
      </div>
    </div>
  );
};

export default SavedMealCard;
