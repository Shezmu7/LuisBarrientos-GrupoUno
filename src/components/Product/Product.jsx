import './Product.css'
import React, { useState } from 'react';

const Product = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 1 && value <= product.stock) {
            setQuantity(value);
        }
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <div className="quantity-selector">
                <label htmlFor={`quantity-${product.id}`}>Cantidad: </label>
                <input
                    type="number"
                    id={`quantity-${product.id}`}
                    value={quantity}
                    min="1"
                    max={product.stock}
                    onChange={handleQuantityChange}
                />
                <p>Stock: {product.stock}</p>
            </div>
            <button onClick={handleAddToCart}>Agregar al carro</button>
        </div>
    );
};

export default Product;
