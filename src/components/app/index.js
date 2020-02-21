import React, { useState, useEffect } from 'react';
import Context from '../app/context'

import Header from '../header';
import Footer from '../footer';
import Card from '../card';
import Table from '../table';
import Modale from '../modale';

import './app.css'

const urlCountries = 'http://restcountries.eu/rest/v2/all';
const urlExchange = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

function App() {

    const [exchangeRate, setExchangeRate] = useState([]);
    const [metals, setMetals] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
     
    useEffect(() => {
        async function fetchData () {
        try {
            const resCountries = await fetch (urlCountries);
            const dataCountries = await resCountries.json();
            const resExchange = await fetch (urlExchange);
            const dataExchange = await resExchange.json();
            setMetals(dataExchange.filter(el => el.cc[0] === 'X' && el.cc !== 'XDR'));
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
    
    const showModale = (row) => setModalStatus(row)
    const closeModale = () => setModalStatus(false)

    if (exchangeRate.length > 0) {
        return (
            <Context.Provider value = { {showModale: showModale, closeModale: closeModale} }>
                <div className="App">
                    <Header exchangeRate = {exchangeRate}/>
                        <main>
                            { modalStatus ? <Modale item = {modalStatus} /> : null}
                            <div className = "container ">
                                <div className = "cards-container">
                                    {metals.map((el, i) => <Card key = {i} metalItem = {el}/>)}
                                </div>
                                <div className ="table-container">
                                    <Table exchangeRate = {exchangeRate} /> 
                                </div>
                            </div> 
                        </main>
                    <Footer />
                </div> 
             </Context.Provider>
          );
    }
    return (
        <div className="App">
            <Header exchangeRate = {exchangeRate}/>
                <main>
                    <div className = "container ">
                        <p className = "no-data">data is not available</p>
                        <button className = "try-again trans-max" onClick = {() => window.location.reload()}>Try again</button>
                    </div> 
                </main>
            <Footer />
        </div> 
    );
}

export default App;
