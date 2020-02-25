import React, { useState, useEffect } from 'react';
import * as urlConstants from '../../config/urlConstants';
import {fetchDataArray} from '../../services/fetchData';
import {sortArray} from '../../services/sorting';
import Header from '../header';
import Content from '../content';
import NoData from '../no_data';
import Footer from '../footer';
import './app.css';

function App() {

    const [loaded, setLoaded] = useState(false);
    const [exchangeRate, setExchangeRate] = useState([]);
    const [metals, setMetals] = useState([]);
    const [privat, setPrivat] = useState([]);
         
    useEffect(() => {
        async function fetchData () {
            try {
                let result = [];
                const countries = await fetchDataArray(urlConstants.REST_COUNTRIES);
                const exchangeNBU = await fetchDataArray(urlConstants.NBU_EXCHANGE);
                const exchangePrivat = await fetchDataArray(urlConstants.PRIVAT_EXCHANGE);
                exchangeNBU.forEach(curr => countries.forEach(country => (curr.cc === country.currencies[0].code) ? result.push(Object.assign(country, curr)) : null))
                setExchangeRate(result);
                setPrivat(exchangePrivat);
                setMetals(exchangeNBU.filter(el => el.cc[0] === 'X' && el.cc !== 'XDR'));
                setLoaded(true)
            } catch (err) {
                console.error(err);
            }
    }     
    fetchData();
    }, [])

    return (
        <div className="App" >
            <Header loaded = {loaded}/>
                <main>
                {loaded ? 
                    <Content exchangeRate = {exchangeRate} metals = {metals} privat = {privat} sortArray = {sortArray}/> 
                    : <NoData /> }
                </main>
            <Footer />
        </div> 
    );
}

export default App;