import React, { useState } from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom'
import Generator from './LSFR';
import StreamCipher from './StreamCipherImg';
import StreamCipherImg from './StreamCipherImg';



function Home() {

    const [output, setOutput] = useState();

    return (
        <div>
            <h1>Szyfr Strumieniowy</h1>
            <Navbar />
            <Routes>
                <Route path="/Generator" element={ <Generator /> }></Route>
                <Route path="/SzyfrStrumieniowy" element={<StreamCipherImg />} ></Route>
            </Routes>
        </div>
    )
}

export default Home