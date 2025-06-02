import React from "react";
import ConfirmationComp from "../components/ConfirmationComp";
import "./ConfirmationPage.css";


const ConfirmationPage = () => {
  return (
    <div className="confirmation-page">
      <div className="confirmation-left">
        {/* <img src={EggImg} alt="Pancakes" className="confirmation-image" /> */}
      </div>
      <div className="confirmation-right">
        <ConfirmationComp />
        <div className="confirmation-actions">
          <button className="track-btn">Track Order</button>
          <button className="disabled-btn" disabled>Generate Receipt</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
