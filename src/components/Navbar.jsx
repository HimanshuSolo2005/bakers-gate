import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ cartItems }) => {
    return (
        <nav className="navbar">
            <div className="logo">HIM Bakery</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>
                    <Link to="/cart">
                        Cart ({cartItems.length})
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
