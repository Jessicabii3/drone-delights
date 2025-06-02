import React from 'react';
import './LoyaltyProgram.css';
import { useNavigate } from 'react-router-dom';


const LoyaltyProgram = () => {
  const navigate = useNavigate();

  return (
    <section className="loyalty-section">
      <div className="loyalty-card">
        <div className="loyalty-image">
          <img src="/images/Loyalty.png" alt="Gift" />
        </div>
        <div className="loyalty-text">
          <h3>Rewarding <span>Loyalty</span><br />Program</h3>
          <p>
            Join our loyalty program and unlock exclusive rewards and discounts
            as a token of our appreciation for your continued support. Create an account.
          </p>
          <button className="loyalty-btn" onClick={() => navigate('/signup')}>Register now</button>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;