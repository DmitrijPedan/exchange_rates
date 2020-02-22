import React from 'react';
import Card from '../card';
import Table from '../table';
import './content.css'

function Content (props) {

    return (
        <div className = "container ">
            <div className = "cards-container">
                { props.metals.map((el, i) => <Card key = {i} metal = {el}/>)}
            </div>
            <div className ="table-container">
                <Table exchangeRate = {props.exchangeRate} sortHandler = {props.sortHandler}/> 
        </div>
    </div> 
    )
}

export default Content;