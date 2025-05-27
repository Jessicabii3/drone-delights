import React from "react";
import "./NavBar.css";
import Logo from "../assets/logo/Drone-delights-logo 1.svg";
import SearchIcon from "../assets/icons/search-line.svg";
import CartIcon from "../assets/icons/shopping-cart-line.svg";
import AccountIcon from "../assets/icons/account-circle-line.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Drone Delights Logo" className="logo" />
      </div>

      <div className="navbar-right">
        <Link to="/menu" className="nav-link">
          <img src={SearchIcon} alt="Search" className="navbar-icon" />
          View Menu
        </Link>
        <Link to="/login" className="nav-link">
          <img src={AccountIcon} alt="Account" className="navbar-icon" />
          Account
        </Link>
        <Link to="/cart" className="nav-link">
          <img src={CartIcon} alt="Cart" className="navbar-icon" />
          Cart
        </Link>
      </div>
    </nav>
  );
}
