import React  from 'react';
import Button from '../buttons/confirm'
import CloseButton from '../buttons/close'

import './modale.css';

function Modale (props) {

    const flagBackground = { 
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url(${props.row.flag})`,
        backgroundPosition: "center center",
        backgroundSize: "cover", 
    };

    return (
        <div className = "modal-overlay" onClick = {props.closeModale}>
            <div style = {flagBackground} className = "modal-window">
                <div className = "modal-header">
                        <p>{props.row.name}</p>
                        <div className = "close-btn">
                            <CloseButton  action = {props.closeModale} />
                        </div>
                </div>
                <div className = "modal-body">
                    <p>Region: <span>{props.row.region}</span></p>
                    <p>Subregion: <span>{props.row.subregion}</span></p>
                    <p>Capital: <span>{props.row.capital}</span></p>
                    <p>Population: <span>{props.row.population} peoples</span></p>
                    <p>Area: <span>{props.row.area} sq kilometers</span></p>
                    <p>Languages: <span>{props.row.languages[0].name}</span></p>
                    <p>Currensy: <span>{props.row.currencies[0].name}</span></p>
                </div>
                <div className = "modal-footer">
                    <Button action = {props.closeModale} inside = {"Ok"}/>
                </div>
            </div>
        </div>
    )
}

export default Modale;