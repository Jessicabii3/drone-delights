import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { user } = useAuth();
  const userId = user?.id || "guest";

  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    try {
      const res = await fetch(`http://localhost:3001/favorites?userId=${userId}`);
      const data = await res.json();
      setFavorites(data);
    } catch (err) {
      console.error("Kunde inte hämta favoriter:", err);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [userId]);

  const saveFavorite = async (meal) => {
    const alreadySaved = favorites.find(f => f.productId === meal.id);
    if (alreadySaved) return;

    await fetch("http://localhost:3001/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...meal,
        userId,
        productId: meal.id,
        quantity: 1,
      }),
    });

    fetchFavorites();
  };

  const removeFavorite = async (id) => {
    await fetch(`http://localhost:3001/favorites/${id}`, {
      method: "DELETE",
    });

    fetchFavorites();
  };

  return (
    <FavoritesContext.Provider value={{ favorites, saveFavorite, removeFavorite, fetchFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
