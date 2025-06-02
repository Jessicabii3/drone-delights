import React, { useState } from "react";
import "./PaymentForm.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const { user } = useAuth();
  const { cartItems, fetchCart } = useCart();
  const navigate = useNavigate();
  // Form state
  const [phonenumber, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [swishNumber, setSwishNumber] = useState("");

  const [fillInformation, setFillInformation] = useState("");
  const [searchParams] = useSearchParams();
  const totalPrice = searchParams.get("totalPrice");

  const handleClickPay = async () => {
    console.log("Knapp klickad!");
    const userCartItems = cartItems.filter(
      (item) => item.userId === (user?.id || "guest")
    );

    if (!firstName || !lastName || !email || !adress) {
      setFillInformation("Please fill in all fields");
      return;
    }

    if (paymentMethod === "card") {
      if (!cardNumber || !cardDate || !cardCVC) {
        setFillInformation("Please fill in all card details");
        return;
      }
    }

    //  Swish
    if (paymentMethod === "swish") {
      if (!swishNumber) {
        setFillInformation("Please enter your phone number");
        return;
      }
    }
    if (userCartItems.length === 0) {
      setFillInformation("Your cart is empty.");
      return;
    }

    // Skapa slumpmässigt ordernummer
    const orderId = Math.floor(Math.random() * 100000);

    const total = userCartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const newOrder = {
      orderId,
      userId: user?.id || "guest",
      name: `${firstName} ${lastName}`,
      email,
      address: adress,
      phone: phonenumber,
      paymentMethod,
      items: cartItems,
      total,
      createdAt: new Date().toISOString(),
    };
    console.log("POST skickas:", newOrder);
    try {
      // Spara till db.json/orders
      await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });
      for (const item of userCartItems) {
        await fetch(`http://localhost:3001/cart/${item.id}`, {
          method: "DELETE",
        });
      }
      if (typeof fetchCart === "function") {
        fetchCart();
      }

      //  Navigera till bekräftelse
      navigate(`/Confirmation?orderId=${orderId}`);
    } catch (error) {
      console.error("Kunde inte spara order:", error);
      setFillInformation("Något gick fel. Försök igen.");
    }
  };
  return (
    <div className="payment-form">
      <h3>Payment Method</h3>
      <div className="payment-method">
        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Card
        </label>
        <label>
          <input
            type="radio"
            value="swish"
            checked={paymentMethod === "swish"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Swish
        </label>
      </div>

      <div className="form-section">
        {paymentMethod === "card" ? (
          <>
            <input
              type="text"
              placeholder="Card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength="16"
              minLength="16"
              inputMode="numeric"
            />
            <div className="row">
              <input
                type="text"
                placeholder="MM/YY"
                value={cardDate}
                onChange={(e) => setCardDate(e.target.value)}
              />
              <input
                type="text"
                placeholder="CVV"
                value={cardCVC}
                onChange={(e) => setCardCVC(e.target.value)}
              />
            </div>
            <label>
              <input type="checkbox" /> Save card details
            </label>
          </>
        ) : (
          <>
            <input
              type="tel"
              placeholder="Phone number"
              value={swishNumber}
              onChange={(e) => setSwishNumber(e.target.value)}
            />
            <label>
              <input type="checkbox" /> Save phone number
            </label>
          </>
        )}

        <div className="row">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Delivery address"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="pay-btn" onClick={handleClickPay}>
          Pay
        </button>
        <p className="privacy-text">
          Your data will only be used to process your order and support your
          experience.
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;
