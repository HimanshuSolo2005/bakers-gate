import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';  // Import the Cart component
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);  // Cart state

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);  // Add the product to the cart
    };

    return (
        <Router>
            <div className="App">
                <NavBar cartItems={cartItems} />
                <Routes>
                    <Route path="/" element={<ProductList addToCart={addToCart} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
