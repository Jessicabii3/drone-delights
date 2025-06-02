import React from 'react';
import PaymentForm from "../components/PaymentForm";
import OrderSummary from "../components/OrderSummary";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';




const CartPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const isGuest = !user;

  const handleAddToCart = async (meal) => {
    try {
      await fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...meal, quantity: 1 })
      });
      alert("Produkten lades till i varukorgen!");
    } catch (error) {
      console.error("Fel vid tillägg till varukorg:", error);
    }
  };
  return (
    <div className="cart-page">
      <div className="cart-layout">
        <div className="cart-left">
          <PaymentForm />
        </div>
        <div className="cart-right">
          <OrderSummary onAddToCart={handleAddToCart} isGuest={isGuest} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
