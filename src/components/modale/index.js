import React, { useContext } from 'react';
import Context from '../app/context'
import './modale.css';


function Modale (props) {

    const { closeModale } = useContext(Context);

    return (
            <div className = "modal-container">
                <div className = "modal-overlay">
                    <div className = "modal-window">
                        <div className = "modal-header">
                            <p>{props.item.name}</p>
                        </div>
                        <div className = "modal-body">
                            <p>Modal window</p>
                        </div>
                        <div className = "modal-footer">
                            <button onClick = {closeModale}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Modale;