import "./NavBar.css";
import Logo from "../assets/logo/Drone-delights-logo 1.svg";
import SearchIcon from "../assets/icons/search-line.svg";
import CartIcon from "../assets/icons/shopping-cart-line.svg";
import AccountIcon from "../assets/icons/account-circle-line.svg";
import HeartIcon from "../assets/icons/li_heart.svg";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

export default function NavBar() {
  const { favorites } = useFavorites();
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();


  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src={Logo} alt="Drone Delights Logo" className="logo" />
      </div>

      <div className="navbar-right">
        <Link to="/menu" className="nav-link">
          <img src={SearchIcon} alt="Search" className="navbar-icon" />
          View Menu
        </Link>
        {user ? (
          <button onClick={logout} className="nav-link logout-btn">
            <img src={AccountIcon} alt="Logout" className="navbar-icon" />
            Logga ut
          </button>
        ) : (
          <Link to="/login" className="nav-link">
            <img src={AccountIcon} alt="Account" className="navbar-icon" />
            Login
          </Link>
        )}

        <div className="nav-icon-group">
          <div className="nav-icon fav-icon">
            <img src={HeartIcon} alt="Favorites" className="navbar-icon" />
            {favorites.length > 0 && (
              <span className="nav-badge">{favorites.length}</span>
            )}
          </div>
          <Link to="/cart" className="nav-link cart-link">
            <img src={CartIcon} alt="Cart" className="navbar-icon" />
            Cart
            {cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
