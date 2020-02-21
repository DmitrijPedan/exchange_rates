import React from 'react';

import TableRow from './table_row';
import './table.css'

function Table (props) {
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
                {props.exchangeRate.map((el, i) => <TableRow key = {i} row = {el}/>)}
            </tbody>
        </table>
    )
}

export default Table;