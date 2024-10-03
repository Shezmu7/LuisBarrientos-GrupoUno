import './Home.css'
import React, { useState } from 'react';
import Product from "../Product/Product.jsx";
import Cart from "../Cart/Cart.jsx";

const Store = () => {
    const [cartItems, setCartItems] = useState([]);

    const products = [
        { id: 1, name: 'Producto 1', price: 10000, stock: 5, image: '/Image/Poleron.jpg' },
        { id: 2, name: 'Producto 2', price: 15000, stock: 5, image: '/Image/Poleron2.jpg' },
        { id: 3, name: 'Producto 3', price: 30000, stock: 5, image: '/Image/poleron3.jpg' },
        { id: 4, name: 'producto 4', price: 25000, stock: 5, image: '/Image/poleron4.jpg' },
        { id: 5, name: 'producto 5', price: 10000, stock: 5, image: '/Image/poleron5.jpg' },
        { id: 6, name: 'producto 6', price: 15000, stock: 5, image: '/Image/poleron6.avif' },
        { id: 7, name: 'producto 7', price: 20000, stock: 5, image: '/Image/poleron7.avif' },
        { id: 8, name: 'producto 8', price: 10000, stock: 5, image: '/Image/poleron8.avif' },
        { id: 9, name: 'producto 9', price: 15000, stock: 5, image: '/Image/gorranewera1.jpg' },
        { id: 10, name: 'producto 10', price: 15000, stock: 5, image: '/Image/gorronewera2.jpeg' },
        { id: 11, name: 'producto 11', price: 15000, stock: 5, image: '/Image/conjunto.jpg' },
        { id: 12, name: 'producto 12', price: 15000, stock: 5, image: '/Image/conjunto2.jpg' },
        { id: 13, name: 'producto 13', price: 15000, stock: 5, image: '/Image/conjuntomujer.jpg' },
        { id: 14, name: 'producto 14', price: 15000, stock: 5, image: '/Image/Poleronhombre1.jpeg' },
        { id: 15, name: 'producto 15', price: 15000, stock: 5, image: '/Image/Poleronhombre2.jpeg' },
        { id: 16, name: 'producto 16', price: 15000, stock: 5, image: '/Image/Poleronhombre3.jpeg' },
        { id: 17, name: 'producto 17', price: 15000, stock: 5, image: '/Image/Poleronmujer1.jpeg' },
        { id: 18, name: 'producto 18', price: 15000, stock: 5, image: '/Image/Poleronmujer4.jpg' },
        { id: 19, name: 'producto 9', price: 15000, stock: 5, image: '/Image/capagalactica.jpg' },
        { id: 20, name: 'producto 9', price: 15000, stock: 5, image: '/Image/ternocompletoniño.jpg' },
        { id: 21, name: 'producto 9', price: 15000, stock: 5, image: '/Image/vestidoazul1.jpg' },
        { id: 22, name: 'producto 9', price: 15000, stock: 5, image: '/Image/vestidoelegante.jpeg' },
        { id: 23, name: 'producto 9', price: 15000, stock: 5, image: '/Image/vestidogalaazul.jpg' },
        { id: 24, name: 'producto 9', price: 15000, stock: 5, image: '/Image/X_topazulrey0406.jpeg' },

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
