import React from "react";
import "./SatisfySection.css";
import {useNavigate} from "react-router-dom";


const SatisfySection = () =>{
    const navigate = useNavigate();

    return(
        <section className="satisfy-section" style={{ backgroundImage: `url("/images/SatisfyImg.png")` }}>
            <div className="satisfy-overlay">
                <h2>Ready to Satisfy Your Cravings?</h2>
                <button onClick={() => navigate("/menu")}>Order Now</button>
            </div>
        </section>
    );
};
export default SatisfySection;