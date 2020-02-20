import React from 'react';
import './table.css'

function Table (props) {
if (props.exchangeRate.length > 0) {
    return (
        <table>
            <thead>
                <tr>
                <th></th>
                <th className = "th-country">Country</th>
                <th>Currency</th>
                <th>Rate to UAH</th>
                </tr>
            </thead>
            <tbody>
                {props.exchangeRate.map((el, i) => <tr key = {i}>
                    <th>
                        <div className ="flag-img"> 
                            <img  src={el.flag} alt="flag"/>
                        </div>
                    </th>
                    <td className = "td-country">{el.name}</td>
                    <td className = "td-currency">{el.cc} <br/> <span>{el.txt}</span></td>
                    <td className = "td-rate">{el.rate}</td>
                </tr>)}
            </tbody>
        </table>
    )
} else {
    return (
        <p className = "no-data">data is not available</p>
    )
}

}

export default Table;