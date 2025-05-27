import React from "react";
import "./Footer.css";
import faceBookIcon from "../assets/icons/facebook.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import instagramIcon from "../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>Drone Delights</h3>
        <div className="footer-social">
          <span> Follow us:</span>
          <img src={faceBookIcon} alt="Facebook" />
          <img src={twitterIcon} alt="Twitter" />
          <img src={instagramIcon} alt="Instagram" />
        </div>
      </div>

      <hr />
      <div className="footer-columns">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Links</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact us</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>See all cities</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>Accessibility</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="footer-col newsletter">
            <h4>Recieve exclusive offers in your mailbox.</h4>
           <div className="newsletter-form">
            <input type="email" placeholder="Enter your email"></input>
            <button>Submit</button>
            </div> 
        </div>
      </div>

      <hr />
      <p className="copyright">
        All rights Reserved, Drone Delights 2025
      </p>
    </footer>
  );
};
export default Footer;
