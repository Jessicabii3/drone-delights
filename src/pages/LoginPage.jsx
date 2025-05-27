import { Link } from "react-router-dom";
import React from "react";
import "./LoginPage.css";
import LoginImage from "../assets/images/Login.png";
import AppleIcons from "../assets/icons/apple-fill.svg";
import GoogleIcon from "../assets/icons/google-fill.svg";
const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-left">
        <img src={LoginImage} alt="Pancakes with syrup" />
      </div>

      <div className="login-right">
        <div className="login-wrapper">
          <h2>Login to order food</h2>

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

          <p className="signup-text">
            Haven’t signed-up yet? <Link to="/signup">Signup here</Link>
          </p>

          <hr className="divider" />
          <p className="or">or continue with</p>

          <form className="login-form">
            <input type="email" placeholder="Please enter your email" />
            <input type="password" placeholder="Please enter your password" />

            <div className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
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
