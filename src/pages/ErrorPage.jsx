import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="error-wrapper"
    style={{ backgroundImage: 'url("/images/ErrorImg.png")' }}>
      <div className="error-bg">
        <div className="error-texts">
          <h1>Oops!</h1>
          <p>
            Looks like this page is taking a 🍔 lunch break. Our chefs are cooking up something tasty 🍕
            elsewhere, head back to the homepage.
          </p>
          {/* hej */}
          <p className="italic">We’ll be back with a full plate soon!🍽️</p>
          <Link to="/" className="error-button">← Go Back To Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
