import React from 'react';
import './LoyaltyProgram.css';
import Loyalty from '../assets/images/Loyalty.png';

const LoyaltyProgram = () => {
  return (
    <section className="loyalty-section">
      <div className="loyalty-card">
        <div className="loyalty-image">
          <img src={Loyalty} alt="Gift" />
        </div>
        <div className="loyalty-text">
          <h3>Rewarding <span>Loyalty</span><br />Program</h3>
          <p>
            Join our loyalty program and unlock exclusive rewards and discounts
            as a token of our appreciation for your continued support. Create an account.
          </p>
          <button className="loyalty-btn">Register now</button>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;