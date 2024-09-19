import React from 'react';

const Checkout = ({ cart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <section className="checkout">
            <h2>Checkout</h2>
            <p>Total: ${total.toFixed(2)}</p>
            <button>Proceed to Payment</button>
        </section>
    );
};

export default Checkout;
