import React from 'react';
import "./CategoryCard.css"

const CategoryCard = ({ name, image, active, onClick }) => {
  return (
    <div
      className={`category-card ${active ? "active" : ""}`}
      onClick={() => onClick(name)}
    >
      <img src={`/images/${image}`} alt={name} className='category-img' />
      <div className='category-overlay'>
      <span className="category-name">{name}</span>
      </div>
    </div>
  );
};

export default CategoryCard;