import React from 'react';
import {Link} from 'react-router-dom';
//import {Link} from './pages/About';

const Header = () => {
    return (
        <div>
            <h1> My Bookcase </h1>
            <Link to="/home"> Home </Link>
            <Link to="/bookcase" className="bookLink"> Bookcase</Link>
            <Link to="/about" className="bookDescription"> About</Link>
        </div>
    );
}

export default Header 