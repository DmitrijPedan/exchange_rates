import React from 'react';

function TableRow (props) {
    return (
        <tr >
            <th>
                <div className ="flag-img"> 
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