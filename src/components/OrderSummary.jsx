// import React, { useState, useEffect } from "react";
// import SavedMealCard from "./SavedMealCard";
// import "./OrderSummary.css";
// import { useAuth } from "../context/AuthContext";
// import { useContext } from "react";
// import { useCart } from "../context/CartContext";
// const OrderSummary = () => {
//   const { user } = useAuth();
//   const { cartItems, updateQuantity, removeFromCart, addToCart, fetchCart } = useCart();
//   const isGuest = !user;
//   const userId = user?.id;

//   const [products, setProducts] = useState([]);
//   const [savedMeals, setSavedMeals] = useState([]);

//   // Hämta produkter för att kunna koppla productId  namn, pris, bild osv.
//   useEffect(() => {
//     fetch("http://localhost:3001/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);
//   // Hämta sparade måltider
//   useEffect(() => {
//     if (userId) {
//       fetch(`http://localhost:3001/favorites?userId=${userId}`)
//         .then((res) => res.json())
//         .then((data) => setSavedMeals(data))
//         .catch((err) =>
//           console.error("Kunde inte hämta sparade måltider:", err)
//         );
//     } else {
//       setSavedMeals([]);
//     }
//   }, [userId]);

  
//   //Hanter kvnitet
//   const increaseQuantity = async (item) => {
//     await fetch(`http://localhost:3001/cart/${item.id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ quantity: item.quantity + 1 }),
//     });

//     setCartItems((prev) =>
//       prev.map((p) =>
//         p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
//       )
//     );
//   };

//   const decreaseQuantity = async (item) => {
//     if (item.quantity <= 1) {
//       await fetch(`http://localhost:3001/cart/${item.id}`, {
//         method: "DELETE",
//       });

//       setCartItems((prev) => prev.filter((p) => p.id !== item.id));
//     } else {
//       await fetch(`http://localhost:3001/cart/${item.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ quantity: item.quantity - 1 }),
//       });

//       setCartItems((prev) =>
//         prev.map((p) =>
//           p.id === item.id ? { ...p, quantity: p.quantity - 1 } : p
//         )
//       );
//     }
//   };
//   const handleAddFromSaved = async (meal) => {
//     try {
//       await fetch("http://localhost:3001/cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...meal, quantity: 1 }),
//       });

//       // Ta bort från sparade
//       await fetch(`http://localhost:3001/favorites/${meal.id}`, {
//         method: "DELETE",
//       });

//       // Uppdatera listor
//       setCartItems((prev) => [...prev, { ...meal, quantity: 1 }]);
//       setSavedMeals((prev) => prev.filter((m) => m.id !== meal.id));
//     } catch (error) {
//       console.error("Fel vid tillägg från sparat:", error);
//     }
//   };

//   //Beräkningar för totalsummor
//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const shipping = 29;
//   const total = subtotal + shipping;
//   const moms = Math.round(total * 0.06);
//   return (
//     <div className="order-summary">
//       <h3>Order Summary</h3>

//       {/* Cart-produkter – endast för inloggad */}
//       {isGuest ? (
//         <p className="error-text">
//           Du måste vara inloggad för att se din varukorg.
//         </p>
//       ) : cartItems.length === 0 ? (
//         <p className="empty-text">Din varukorg är tom.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div className="cart-item" key={item.id}>
//             <img src={`/images/${item.image}`} alt={item.name} />
//             <div className="cart-item-info">
//               <p className="item-name">{item.name}</p>
//               <p className="item-desc">{item.description}</p>
//             </div>
//             <div className="cart-item-price-qty">
//               <span className="item-price">
//                 {item.price * item.quantity} KR
//               </span>
//               <div className="quantity-controls">
//                 <button onClick={() => decreaseQuantity(item)}>-</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => increaseQuantity(item)}>+</button>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//       {/* Rabattkod – visas alltid */}
//       <div className="discount-row">
//         <input type="text" placeholder="Gift or discount code" />
//         <button className="apply-btn">Apply</button>
//       </div>

//       {/* Totalsumma – visas alltid */}
//       <div className="totals">
//         <p>
//           Subtotal: <span>{subtotal} KR</span>
//         </p>
//         <p>
//           Shipping: <span>{shipping} KR</span>
//         </p>
//         <hr />
//         <p className="total">
//           Total: <span>{total} KR</span>
//         </p>
//         <small>Inclusive moms {moms} KR</small>
//       </div>

//       {/* Sparade måltider – alltid synliga */}
//       <div className="saved-meals-wrapper">
//         <h4 className="saved-heading">Don't forget your saved meals:</h4>
//         {savedMeals.length === 0 ? (
//           <p className="empty-text">Du har inga sparade måltider.</p>
//         ) : (
//           savedMeals.map((meal) => (
//             <SavedMealCard
//               key={meal.id}
//               meal={meal}
//               onAdd={!isGuest ? () => handleAddFromSaved(meal) : null}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;
import React, { useEffect, useState } from "react";
import SavedMealCard from "./SavedMealCard";
import "./OrderSummary.css";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const OrderSummary = () => {
  const { user } = useAuth();
  const { cartItems, updateQuantity, removeFromCart, addToCart, fetchCart } = useCart();
  const isGuest = !user;
  const userId = user?.id || "guest";

  const [products, setProducts] = useState([]);
  const [savedMeals, setSavedMeals] = useState([]);

  // Hämta produkter för att kunna koppla productId  namn, pris.
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Hämta sparade måltider
  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:3001/favorites?userId=${userId}`)
        .then((res) => res.json())
        .then((data) => setSavedMeals(data))
        .catch((err) =>
          console.error("Kunde inte hämta sparade måltider:", err)
        );
    } else {
      setSavedMeals([]);
    }
  }, [userId]);

  // Lägg till från sparade till varukorg
  const handleAddFromSaved = async (meal) => {
    await addToCart(meal);
    await fetch(`http://localhost:3001/favorites/${meal.id}`, {
      method: "DELETE",
    });
    fetchCart();
    setSavedMeals((prev) => prev.filter((m) => m.id !== meal.id));
  };

  // Koppla produktinfo till varje cartItem
  const enrichedCart = cartItems.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return {
      ...product,
      ...item,
    };
  });

  // Beräkna totalsumma
  const subtotal = enrichedCart.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );
  const shipping = 29;
  const total = subtotal + shipping;
  const moms = Math.round(total * 0.06);

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>

      {/* Cart-produkter */}
     <div className="cart-section">
      {isGuest ? (
        <p className="error-text">Du måste vara inloggad för att se din varukorg.</p>
      ) : enrichedCart.length === 0 ? (
        <p className="empty-text">Din varukorg är tom.</p>
      ) : (
        enrichedCart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={`/images/${item.image}`} alt={item.name} />
            <div className="cart-item-info">
              <p className="item-name">{item.name}</p>
              <p className="item-desc">{item.description}</p>
            </div>
            <div className="cart-item-price-qty">
              <span className="item-price">{item.price * item.quantity} KR</span>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}
      </div>

      {/* Rabattkod – alltid synlig */}
      <div className="discount-row">
        <input type="text" placeholder="Gift or discount code" />
        <button className="apply-btn">Apply</button>
      </div>

      {/* Totalsumma */}
      <div className="totals">
        <p>Subtotal: <span>{subtotal} KR</span></p>
        <p>Shipping: <span>{shipping} KR</span></p>
        <hr />
        <p className="total">Total: <span>{total} KR</span></p>
        <small>Inclusive moms {moms} KR</small>
      </div>

      {/* Sparade måltider */}
      <div className="saved-meals-wrapper">
        <h4 className="saved-heading">Don't forget your saved meals:</h4>
        {savedMeals.length === 0 ? (
          <p className="empty-text">Du har inga sparade måltider.</p>
        ) : (
          savedMeals.map((meal) => (
            <SavedMealCard
              key={meal.id}
              meal={meal}
              onAdd={!isGuest ? () => handleAddFromSaved(meal) : null}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default OrderSummary;

