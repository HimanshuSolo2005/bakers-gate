import React from 'react';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
    const products = [
        { id: 1, name: "Chocolate Cake", price: "$10", image: "images/cake1.jpg" },
        { id: 2, name: "Vanilla Cake", price: "$8", image: "images/cake2.jpg" },
        { id: 3, name: "Strawberry Cake", price: "$12", image: "images/cake3.jpg" }
    ];

    return (
        <div className="product-list">
            {products.map(product => (
                <div className="product-item" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
