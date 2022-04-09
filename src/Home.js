import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom'
//import LSFR from './LSFR';

function Home() {
    return (
        <div>
            <h1>Szyfr Strumieniowy</h1>
            <Navbar />
            <Routes>
                <Route path="/GeneratorLiczbPseudolosowych" ></Route>
                <Route path="/SzyfrStrumieniowy" ></Route>
            </Routes>
        </div>
    )
}

export default Home