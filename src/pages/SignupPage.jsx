import React, { useState } from "react";
import "./SignupPage.css";
import AppleIcons from "../assets/icons/apple-fill.svg";
import GoogleIcon from "../assets/icons/google-fill.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
const SignupImage = "/images/Signup.png";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { login } = useAuth();

  // Function to handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validering

    if (!name.trim()) {
    newErrors.name = "Namn krävs.";
  }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Ogiltig e-postadress.";
    }

    const passwordRegex = /^(?=.*[0-9]).{6,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password = "Minst 6 tecken och minst en siffra.";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Lösenorden matchar inte.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const newUser = {
      username: name,
      email,
      password,
    };

    try {
      // Kolla om användare redan finns
      const res = await fetch(`http://localhost:3001/users?email=${email}`);
      const existing = await res.json();

      if (existing.length > 0) {
        alert("E-postadressen används redan.");
        return;
      }

      // Lägg till användaren
      const postRes = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const savedUser = await postRes.json();

      login(savedUser);
      navigate("/"); // Navigera till startsidan
    } catch (error) {
      console.error("Registreringsfel:", error);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-left">
        <img src={SignupImage} alt="Steaming noodles" />
      </div>

      <div className="signup-right">
        <div className="signup-wrapper">
          <h2>Signup to get started</h2>

          <div className="social-buttons">
            <button className="social-btn google">
              <img src={GoogleIcon} alt="Google" className="social-icon" />
              <span>Google</span>
            </button>
            <button className="social-btn apple">
              <img src={AppleIcons} alt="Apple" className="social-icon" />
              <span>Apple</span>
            </button>
          </div>

          <p className="login-text">
            Already have an account? <Link to="/login">Login here</Link>
          </p>

          <hr className="divider" />
          <p className="or">or continue with</p>

          <form onSubmit={handleSignup} className="signup-form">
            <input
              type="text"
              placeholder="Please enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <p className="error-texts">{errors.name}</p>}
            <input
              type="email"
              placeholder="Please enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error-texts">{errors.email}</p>}
            <input
              type="password"
              placeholder="Please create your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
             {errors.password && <p className="error-texts">{errors.password}</p>}
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && (
              <p className="error-texts">{errors.confirmPassword}</p>
            )}

            <button type="submit" className="signup-btn">
              Signup
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

export default SignupPage;
