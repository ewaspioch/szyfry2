import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <Link to="/GeneratorLiczbPseudolosowych">Generator Liczb Pseudolosowych</Link>
            <Link to="/SzyfrStrumieniowy">Szyfr Strumieniowy</Link>
        </div>
    );
}

export default Navbar