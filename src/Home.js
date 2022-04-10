import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom'
import Generator from './LSFR';

function Home() {
    return (
        <div>
            <h1>Szyfr Strumieniowy</h1>
            <Navbar />
            <Routes>
                <Route path="/Generator" element={ <Generator /> }></Route>
                <Route path="/SzyfrStrumieniowy" ></Route>
            </Routes>
        </div>
    )
}

export default Home