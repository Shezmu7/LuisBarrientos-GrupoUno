import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from "../../store/CartStore.jsx";
import './Cart.css';

export default function CartPage() {
    const { cart, removeFromCart, clearCart } = useCartStore();
    const navigate = useNavigate();

    console.log(cart);

    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <img
                    src="/Image/carro-vacio.png"
                    alt="Carrito vacío"
                    className="empty-cart-image"
                />
                <h2>No hay productos en el carrito</h2>
                <p>¡Parece que tu carrito está vacío! No te preocupes, tenemos muchas cosas
                    interesantes para ti.</p>

                <div className="cta">
                    <p></p>
                    <button
                        className="shop-now-btn"
                        onClick={() => navigate('/products')}
                    >
                        Ver productos
                    </button>
                </div>

                <div className="motivational-message">
                    <p>¡Explora nuestros productos y encuentra lo que te gusta!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1>Carrito</h1>
            <ul className="cart-list">
                {cart.map((item) => (
                    <li key={item.id} className="cart-item">
                        <img src={item.img} alt={item.name} className="cart-item-img" />
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p>Talla: {item.size}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio: ${item.price * item.quantity}</p>
                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id, item.size)}
                            >
                                Eliminar producto
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-actions">
                <button className="clear-btn" onClick={clearCart}>
                    Vaciar carrito
                </button>
            </div>
        </div>
    );
}
