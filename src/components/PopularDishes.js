import React from 'react';
import "./PopularDishes.css";

import VeganImg from '../assets/images/Vegan.jpg';
import VegetarianImg from '../assets/images/Vegetarian.jpg';
import NonVegImg from '../assets/images/NonVeg.jpg';

export default function PopularDishes(){
    return(
        <section className='popular-section'>
            <div className='dish-wrapper'>
            <h2>Popular categories</h2>
            <div className='card-container'>
                <div className='dish-card' style={{backgroundImage: `url(${VeganImg})`}}>
                    <div className='card-overlay'>
                        <h3>Vegan</h3>
                        <p>Plant-based delights for ethical and compassionate dining.</p>
                    </div>
                </div>
                <div className='dish-card' style={{backgroundImage: `url(${VegetarianImg})`}}>
                    <div className='card-overlay'>
                        <h3>Vegetarian</h3>
                        <p>Wholesome and flavorful vegetarian options for all.</p>
                    </div>
                </div>
                <div className='dish-card' style={{backgroundImage: `url(${NonVegImg})`}}>
                    <div className='card-overlay'>
                        <h3>Non- Vegetarian</h3>
                        <p>Savor the finest non-vegetarian selections, crafted to perfection.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}