import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuMealCard.css";
import SaveIcon from "../assets/icons/bookmark-line.svg";
import CartIcon from "../assets/icons/shopping-cart-line.svg";
import RatingIcon from "../assets/icons/Vector.svg";
import locationPin from "../assets/icons/locationPin.svg";

const MealCard = ({
  id,
  name,
  price,
  rating,
  description,
  image,
  status,
  restaurant,
  onAddToCart,
  onSaveMeal
}) => {
  const navigate = useNavigate();

  return (
    <div className="meal-cards">
      <div className="meal-img-wrapper">
        <img src={`/images/${image}`} alt={name} className="meal-img" />
        <div
          className={`status-badge ${
            typeof status === "string"
              ? status.toLowerCase().replace(/\s/g, "-")
              : "unknown"
          }`}
        >
          <span className="circle" /> {status|| "Unknown"}
        </div>
      </div>

      <div className="meal-info">
        <div className="meal-top">
          <span className="meal-price">{price} SEK</span>
          <span className="meal-rating">
            <img src={RatingIcon} alt="Rating" /> {rating}
          </span>
        </div>

        <h3 className="meal-title">{name}</h3>
        <p className="location">
          <img src={locationPin} alt="location" className="location-icon" />
          {restaurant}
        </p>
        <p className="meal-description">{description}</p>

        <hr className="meal-divider" />

        <div className="meal-buttons">
          <button
            className="save-btn"
            onClick={onSaveMeal}
          >
            <img src={SaveIcon} alt="Save"  />
            Save for later
          </button>
          <button
            className="cart-btn"
            onClick={() =>
              onAddToCart({
                id,
                name,
                price,
                rating,
                description,
                image,
                status,
                restaurant,
              })
            }
          >
            <img src={CartIcon} alt="Cart" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
