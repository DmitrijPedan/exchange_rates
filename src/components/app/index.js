import React, { useState, useEffect } from 'react';
import Header from '../header';
import Content from '../content';
import NoData from '../no_data';
import Footer from '../footer';
import './app.css'

function App() {

    const [exchangeRate, setExchangeRate] = useState([]);
    const [metals, setMetals] = useState([]);
    const [refresh, setRefresh] = useState(true);
         
    useEffect(() => {
        async function fetchData () {
        try {
            const respCountries = await fetch ('http://restcountries.eu/rest/v2/all');
            const dataCountries = await respCountries.json();
            const respExchange = await fetch ('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
            const dataExchange = await respExchange.json();
            let result = [];
            dataExchange.map(curr => dataCountries.map(country => (curr.cc === country.currencies[0].code) ? result.push(Object.assign(country, curr)) : null))
            setExchangeRate(result);
            setMetals(dataExchange.filter(el => el.cc[0] === 'X' && el.cc !== 'XDR'));
        } catch (err) {
            console.error(err);
        } 
    } 
    fetchData();
    }, [])
    
    const sortHandler = (arr, key) => {
        arr.sort((a,b) => {
            if (arr[0][key] > arr[arr.length - 1][key]) {
                return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;  
            }
            else {
                return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
            }
        });
        refresh ? setRefresh(false) : setRefresh(true);
    }
    
    return (
        <div className="App" >
            <Header exchangeRate = {exchangeRate}/>
                <main>
                { exchangeRate.length > 0 ? <Content exchangeRate = {exchangeRate} metals = {metals} sortHandler = {sortHandler}/> : <NoData /> }
                </main>
            <Footer />
        </div> 
    );
}

export default App;