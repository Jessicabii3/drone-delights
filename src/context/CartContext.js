import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const userId = user?.id || "guest";

  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await fetch(`http://localhost:3001/cart?userId=${userId}`);
      const data = await res.json();
      setCartItems(data);
    } catch (err) {
      console.error("Kunde inte hämta varukorgen:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [userId]);

  const addToCart = async (product) => {
    const { id, ...rest } = product;
    const alreadyExists = cartItems.find(p => Number(p.productId) === Number(id));

    if (alreadyExists) {
      await updateQuantity(alreadyExists.id, alreadyExists.quantity + 1);
    } else {
      await fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...rest,
          userId,
          productId: Number(id), 
          quantity: 1,
        }),
      });
    }

    fetchCart();
  };

  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity <= 0) {
      await fetch(`http://localhost:3001/cart/${id}`, {
        method: "DELETE",
      });
    } else {
      await fetch(`http://localhost:3001/cart/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: newQuantity }),
      });
    }

    fetchCart();
  };

  const removeFromCart = async (id) => {
    await fetch(`http://localhost:3001/cart/${id}`, {
      method: "DELETE",
    });
    fetchCart();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
