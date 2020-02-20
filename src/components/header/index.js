import React from 'react';
import './header.css'

function Header (props) {
    return (
        <header>
            <div className = "container">
                <div className = "header-menu">
                    <div>
                        <p className = "header-logo">Exchange<span>rates</span></p>
                    </div>

                  
                        <div className = "header-data">
                        <p>data uploaded: {props.exchangeRate.length > 0 ? <span className = "data-ok">ok</span> 
                                            : <span className = "data-false">server is not available</span> }</p>
                        {props.exchangeRate.length > 0 ? <p>rate for: <span className = "data-ok">{props.exchangeRate[0].exchangedate}</span> </p> : null}
                        
                        </div>
                </div> 
            </div> 
        </header>
    )
}

export default Header;
