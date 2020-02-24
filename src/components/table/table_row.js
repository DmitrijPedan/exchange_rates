import React, { useState }  from 'react';
import Modale from '../modale'

function TableRow (props) {
    
    const [modalStatus, setModalStatus] = useState(false);

    const switchModale = () => setModalStatus(!modalStatus)

    return (
        <tr >
            <th>
                <div className ="flag-img trans-min" title = "See more ..." onClick = {switchModale}> 
                    <img src={props.row.flag} alt="flag"/>
                </div>
                {modalStatus ? <Modale switchModale = {switchModale} row = {props.row}/> : null}
            </th>
            <td className = "td-country"> {props.row.name} </td>
            <td className = "td-currency"> {props.row.cc} <br/> <span> {props.row.txt} </span></td>
            <td className = "td-rate"> {props.row.rate} </td>
        </tr>
    )
}

export default TableRow;