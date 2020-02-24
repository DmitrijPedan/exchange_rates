import React from 'react';
import Card from '../card';
import PrivatCard from '../privat';
import Table from '../table';
import './content.css'

function Content (props) {

    return (
        <div className = "container ">
            <h5>PrivatBank:</h5>
            <div className = "cards-container">
                <div>
                {props.privat.map((el, i) => <PrivatCard key = {i} priv = {el}/>)}
                </div>
            </div>
            <h5>Precious metals (NBU):</h5>
            <div className = "cards-container">
                <div>
                {props.metals.map((el, i) => <Card key = {i} metal = {el}/>)}
                </div> 
            </div>
            <div className ="table-container">
                <Table exchangeRate = {props.exchangeRate} sortHandler = {props.sortHandler}/> 
        </div>
    </div> 
    )
}

export default Content;