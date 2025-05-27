import React from 'react';
import "./SignupPage.css";
import SignupImage  from '../assets/images/Signup.png';
import AppleIcons from "../assets/icons/apple-fill.svg";
import GoogleIcon from "../assets/icons/google-fill.svg";
import {Link} from 'react-router-dom';
const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-left">
        <img src={SignupImage} alt="Steaming noodles" />
      </div>

      <div className="signup-right">
        <div className='signup-wrapper'>
        <h2>Signup to get started</h2>

        <div className="social-buttons">
          <button className="social-btn google">
            <img src={GoogleIcon} alt="Google" className="social-icon" />
            <span>Google</span>
            </button>
          <button className="social-btn apple">
            <img src={AppleIcons} alt="Apple" className="social-icon" />
            <span>Apple</span></button>
        </div>

        <p className="login-text">
          Already have an account? <Link to="/login">Login here</Link>
        </p>

        <hr className="divider" />
        <p className="or">or continue with</p>

        <form className="signup-form">
          <input type="text" placeholder="Please enter your full name" />
          <input type="email" placeholder="Please enter your email" />
          <input type="password" placeholder="Please create your password" />
          <button type="submit" className="signup-btn">Signup</button>
        </form>

        <Link to="/" className="go-back">← Go Back To Homepage</Link>
      </div>
      </div>
    </div>
  );
};

export default SignupPage;