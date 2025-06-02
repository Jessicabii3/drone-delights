
import React, { useState, useEffect } from "react";
import "./ConfirmationComp.css";
import { useSearchParams } from "react-router-dom";

const ConfirmationComp = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [order, setOrder] = useState(null);
  const [time, setTime] = useState(3000); 

  //  Starta timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Hämta order
  useEffect(() => {
    if (!orderId) return;

    fetch(`http://localhost:3001/orders?orderId=${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setOrder(data[0]);
        }
      })
      .catch((err) => {
        console.error("Kunde inte hämta ordern:", err);
      });
  }, [orderId]);

  //  Formatera tiden
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="confirmation-container">
  <div className="confirmation-box">
    <h1 className="confirmation-title">Order Confirmed</h1>
    <p className="confirmation-text">
      Thank you for your order. Your food is being prepared!
    </p>
    <p className="confirmation-text">Order ID: {orderId}</p>
    <p className="confirmation-countdown">
      Estimated delivery time: <strong>{formatTime(time)}</strong>
    </p>

    {order && (
      <div className="order-details">
        <h4>Name: {order.name}</h4>
       
        <h4>Items:</h4>
        <ul>
          {order.items.map((item) => (
            <li key={item.productId}>
              {item.name} x {item.quantity} – {item.price * item.quantity} KR
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</div>
  );
};

export default ConfirmationComp;
