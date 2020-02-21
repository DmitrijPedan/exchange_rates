import React from 'react';

import TableRow from './table_row';
import './table.css'

function Table (props) {
    return (
        <table>
            <thead>
                <tr>
                <th></th>
                <th><p className = "trans-min">Country</p></th>
                <th><p className = "trans-min">Currency</p></th>
                <th><p className = "trans-min">Rate to UAH</p></th>
                </tr>
            </thead>
            <tbody>
                {props.exchangeRate.map((el, i) => <TableRow key = {i} row = {el}/>)}
            </tbody>
        </table>
    )
}

export default Table;