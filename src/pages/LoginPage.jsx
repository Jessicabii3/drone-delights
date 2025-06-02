import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import "./LoginPage.css";
import AppleIcons from "../assets/icons/apple-fill.svg";
import GoogleIcon from "../assets/icons/google-fill.svg";
import { useAuth } from "../context/AuthContext";

const LoginImage = "/images/Login.png";

const LoginPage = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
   const { login } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!identifier || !password) {
      setError("Fyll i både användarnamn/e-post och lösenord.");
      return;
    }

    if (password.length < 6) {
      setError("Lösenordet måste vara minst 6 tecken.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/users");
      const users = await res.json();

      const matchedUser = users.find(
        (user) =>
          (user.email === identifier || user.username === identifier) &&
          user.password === password
      );

      
       if (matchedUser) {
      //  Logga in användaren t
      login(matchedUser);

      //  Rensa gamla favoriter för guest
      await fetch("http://localhost:3001/favorites")
        .then(res => res.json())
        .then(async favorites => {
          const guestFavorites = favorites.filter(fav => fav.userId === "guest");
          for (let fav of guestFavorites) {
            await fetch(`http://localhost:3001/favorites/${fav.id}`, {
              method: "DELETE"
            });
          }
        });

      // Rensa gamla cart-items för guest
      await fetch("http://localhost:3001/cart")
        .then(res => res.json())
        .then(async cartItems => {
          const guestItems = cartItems.filter(item => item.userId === "guest");
          for (let item of guestItems) {
            await fetch(`http://localhost:3001/cart/${item.id}`, {
              method: "DELETE"
            });
          }
        });

      
      navigate("/");
    } else {
      setError("Fel användarnamn/e-post eller lösenord.");
    }
  } catch (err) {
    console.error("Något gick fel:", err);
    setError("Tekniskt fel. Försök igen senare.");
  }
};

  return (
    <div className="login-page">
      <div className="login-left">
        <img src={LoginImage} alt="Pancakes with syrup" />
      </div>

      <div className="login-right">
        <div className="login-wrapper">
          <h2>Login to order food</h2>

          <div className="social-buttons">
            <button
              className="social-btn google"
              onClick={() => navigate("/error")}
            >
              <img src={GoogleIcon} alt="Google" className="social-icon" />
              <span>Google</span>
            </button>
            <button
              className="social-btn apple"
              onClick={() => navigate("/error")}
            >
              <img src={AppleIcons} alt="Apple" className="social-icon" />
              <span>Apple</span>
            </button>
          </div>

          <p className="signup-text">
            Haven’t signed-up yet? <Link to="/signup">Signup here</Link>
          </p>

          <hr className="divider" />
          <p className="or">or continue with</p>

          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Please enter your email or username"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Please enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
            {error && <p className="error-text">{error}</p>}

            <div className="forgot-password">
              <Link to="/error">Forgot password?</Link>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <Link to="/" className="go-back">
            ← Go Back To Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
