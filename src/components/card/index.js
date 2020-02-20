import React from 'react';

import './card.css'

function Card () {

    return (
        <div className = "currency-card">          
            <div className = "top">
                <div className = "flag">
                    <img src="https://restcountries.eu/data/ata.svg" alt="flag"/>
                </div>
                <div className = "currency-code">
                    <p>USD</p>
                </div>
            </div>
            <div className = "bottom">
                <h2>Canada</h2>
                <p>16.2055</p>
            </div>
      </div>
    )
}

export default Card;