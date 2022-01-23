import { Link } from 'react-router-dom'
import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='yellow darken-4'>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">React Food</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;