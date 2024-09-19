import React from 'react';
import './Cart.css';  

const Cart = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + price;
    }, 0);


    

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                <img src={item.image} alt={item.name} width="50" />
                                {item.name} - {item.price}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                </div>
            )}
           
        </div>
    );
};

export default Cart;
