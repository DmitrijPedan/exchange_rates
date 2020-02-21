import React from 'react';

import './card.css'

function Card (props) {

    return (
        <div className = "currency-card trans-min">          
            <div className = "top">
                 <div className = "currency-code">
                    <p>{props.metalItem.cc}</p>
                </div>
            </div>
            <div className = "bottom">
                <h4>{props.metalItem.txt}</h4>
                <p>{props.metalItem.rate}  UAH</p>
            </div>
      </div>
    )
}

export default Card;