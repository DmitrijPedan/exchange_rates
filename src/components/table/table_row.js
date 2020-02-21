import React, { useContext }  from 'react';

import Context from '../app/context'

function TableRow (props) {

    const { showModale } = useContext(Context);
    
    return (
        <tr >
            <th>
                <div className ="flag-img trans-min" title = "See more ..." onClick = {() => showModale(props.row)}> 
                    <img  src={props.row.flag} alt="flag"/>
                </div>
            </th>
            <td className = "td-country">{props.row.name}</td>
            <td className = "td-currency">{props.row.cc} <br/> <span>{props.row.txt}</span></td>
            <td className = "td-rate">{props.row.rate}</td>
        </tr>
    )
}

export default TableRow;