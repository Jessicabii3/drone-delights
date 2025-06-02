import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./MenuPage.css";
import MealCard from "../components/MenuMealCard";
import HeroSearch from "../components/HeroSearch";
import CategoryCard from "../components/CategoryCard";
import FilterTag from "../components/FilterTag";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { useSearchParams } from "react-router-dom";
const categories = [
  { name: "Pizza", image: "PizzaMenu.png" },
  { name: "Dessert", image: "halloncheese.jpg" },
  { name: "Pasta", image: "AlfredoPastaMenu.png" },
  { name: "Burger", image: "CheeseburgerMenu.png" },
  { name: "Sides", image: "fries.jpg" },
];
const filterTags = [
  "All Items",
  "Dinner",
  "Non-Vegetarian",
  "Breakfast",
  "Dessert",
  "Snack",
  "Vegan",
];

const MenuPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { saveFavorite } = useFavorites();
  const [searchParams] = useSearchParams();

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState("All Items");
  const [selectedCity, setSelectedCity] = useState("");
  const [products, setProducts] = useState([]);
  const handleSaveMeal = (meal) => {
    saveFavorite(meal);
  };
  useEffect(() => {
    const tagFromUrl = searchParams.get("tag");
    if (tagFromUrl) {
      setSelectedTag(tagFromUrl);
      setSelectedCategory(null); 
    }
  }, [searchParams]);

  // Fetch products from backend
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchText
      ? product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.restaurant.toLowerCase().includes(searchText.toLowerCase())
      : true;

    const matchesTag =
      selectedTag === "All Items" ? true : product.type === selectedTag;

    const matchesCity = selectedCity ? product.city === selectedCity : true;
    const matchesCategory = selectedCategory
      ? product.name.toLowerCase().includes(selectedCategory.toLowerCase())
      : true;

    return matchesSearch && matchesCategory && matchesTag && matchesCity;
  });

  return (
    <div className="menu-page">
      <HeroSearch
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <h2 className="category-title">Search by Food</h2>

      <div className="category-list">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.name}
            name={cat.name}
            image={cat.image}
            active={selectedCategory === cat.name}
            onClick={setSelectedCategory}
          />
        ))}
      </div>

      <div className="filter-tags">
        {filterTags.map((tag) => (
          <FilterTag
            key={tag}
            label={tag}
            active={selectedTag === tag}
            onClick={(tag) => {
              setSelectedTag(tag);
              setSelectedCategory(null);
            }}
          />
        ))}
      </div>

      <div className="meal-grid-wrapper">
        <div className="meal-grid">
          {filteredProducts.length === 0 ? (
            <p className="no-results">
              No meals found for your search. Try adjusting your filters.
            </p>
          ) : (
            filteredProducts.map((meal) => (
              <MealCard
                key={meal.id}
                {...meal}
                onAddToCart={() => addToCart(meal)}
                onSaveMeal={() => handleSaveMeal(meal)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
