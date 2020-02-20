import React, { useState, useEffect } from 'react';

import Header from '../header';
import Footer from '../footer';
import Card from '../card';
import Table from '../table';

import './app.css'

const urlCountries = 'http://restcountries.eu/rest/v2/all';
const urlExchange = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

function App() {

    const [exchangeRate, setExchangeRate] = useState([]);
     
    useEffect(() => {
        async function fetchData () {
        try {
            const resCountries = await fetch (urlCountries);
            const dataCountries = await resCountries.json();
            const resExchange = await fetch (urlExchange);
            const dataExchange = await resExchange.json();
            let result = [];
            for (let i = 0; i < dataExchange.length; i++) {
              for (let j = 0; j < dataCountries.length; j++) {
                if (dataExchange[i].cc === dataCountries[j].currencies[0].code) 
                  result.push(Object.assign(dataCountries[j], dataExchange[i]))
              } 
            }
            setExchangeRate(result)
        } catch (err) {
            console.error(err);
        } 
    } 
    fetchData();
    }, [])

    return (
    <div className="App">
        <Header exchangeRate = {exchangeRate}/>
            <main>
                <div className = "container cards-container">
                    {/* <Card /> */}
                    <Table exchangeRate = {exchangeRate} /> 
                </div> 
            </main>
        <Footer />
    </div> 
  );
}

export default App;