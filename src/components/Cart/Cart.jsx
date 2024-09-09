import './Cart.css';
import React from 'react';

const Cart = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.product.name} - {item.quantity} x ${item.product.price} = ${item.quantity * item.product.price}
                        </li>
                    ))}
                </ul>
            )}
            <div className="cart-total">
                <h3>Total: ${(totalPrice)}</h3>
            </div>
        </div>
    );
};

export default Cart;
