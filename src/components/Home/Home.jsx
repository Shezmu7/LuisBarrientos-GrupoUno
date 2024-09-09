import './Home.css'
import React, { useState } from 'react';
import Product from "../Product/Product.jsx";
import Cart from "../Cart/Cart.jsx";

const Store = () => {
    const [cartItems, setCartItems] = useState([]);

    const products = [
        { id: 1, name: 'Producto 1', price: 10000, stock: 6, image: '/Image/Poleron.jpg' },
        { id: 2, name: 'Producto 2', price: 15000, stock: 5, image: '/Image/Poleron2.jpg' },
        { id: 3, name: 'Producto 3', price: 30000, stock: 5, image: '/Image/Poleronmujer4.jpg' },
        { id: 4, name: 'producto 4', price: 25000, stock: 5, image: '/Image/Poleronhombre1.jpeg' },
        { id: 5, name: 'producto 5', price: 10000, stock: 5, image: '/Image/Poleronhombre2.jpeg' },
        { id: 6, name: 'producto 6', price: 15000, stock: 5, image: '/Image/Poleronhombre3.jpeg' },
        { id: 7, name: 'producto 7', price: 20000, stock: 5, image: '/Image/Poleronmujer1.jpeg' },
        { id: 8, name: 'producto 8', price: 10000, stock: 5, image: '/Image/gorranewera1.jpg' },
        { id: 9, name: 'producto 9', price: 15000, stock: 5, image: '/Image/gorronewera2.jpeg' },
    ];

    const addToCart = (product, quantity) => {
        setCartItems([...cartItems, { product, quantity }]);
    };

    return (
        <div className="store-container">
            <div className="product-list">
                {products.map((product) => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <Cart cartItems={cartItems} />
        </div>
    );
};

export default Store;
