import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/CartStore.jsx";
import Loading from "../Loading/Loading.jsx";
import Checkbox from "../Buttons/SelectButton.jsx";
import "./Cart.css";

export default function CartPage() {
    const { cart, removeFromCart, clearCart } = useCartStore();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState({});
    const [quantities, setQuantities] = useState({});
    const generateKey = (id, size) => `${id}-${size}`;

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);

        const initialSelections = {};
        const initialQuantities = {};
        cart.forEach((item) => {
            const key = generateKey(item.id, item.size);
            initialSelections[key] = true;
            initialQuantities[key] = item.quantity;
        });
        setSelectedItems(initialSelections);
        setQuantities(initialQuantities);
    }, [cart]);

    const handleSelectionChange = (key) => {
        setSelectedItems((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleQuantityChange = (key, newQuantity) => {
        setQuantities((prev) => ({
            ...prev,
            [key]: newQuantity,
        }));
    };

    const calculateSelectedTotal = () => {
        return cart.reduce((total, item) => {
            const key = generateKey(item.id, item.size);
            if (selectedItems[key]) {
                return total + item.price * quantities[key];
            }
            return total;
        }, 0);
    };

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <img src="/carritovacio.png" alt="Carrito vacío" className="empty-cart-image" />
                <h2>No hay productos en el carrito</h2>
                <p>¡Parece que tu carrito está vacío! No te preocupes, tenemos muchas cosas interesantes para ti.</p>
                <div className="cta">
                    <button className="shop-now-btn" onClick={() => navigate('/products')}>
                        Ver productos
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1>Carrito</h1>
            <ul>
                {cart.map((item) => {
                    const key = generateKey(item.id, item.size);
                    return (
                        <li key={key} className="cart-item">
                            <img src={item.img} alt={item.name} className="cart-item-img" />
                            <div className="cart-item-details">
                                <Checkbox
                                    isChecked={selectedItems[key]}
                                    onChange={() => handleSelectionChange(key)}
                                />
                                <h3>{item.name}</h3>
                                <p>Talla: {item.size}</p>
                                <div className="quantity-control">
                                    <button
                                        className="quantity-btn"
                                        onClick={() => handleQuantityChange(key, Math.max(1, quantities[key] - 1))}
                                    >
                                        -
                                    </button>
                                    <span>{quantities[key]}</span>
                                    <button
                                        className="quantity-btn"
                                        onClick={() =>
                                            handleQuantityChange(key, Math.min(item.stock, quantities[key] + 1))
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                                <p>Precio: ${item.price * quantities[key]}</p>
                                <button
                                    className="delete-button"
                                    onClick={() => removeFromCart(item.id, item.size)}
                                >
                                    <svg className="delete-icon" viewBox="0 0 448 512">
                                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className="cart-actions">
                <div className="total-box">
                    <p>Total: ${calculateSelectedTotal()}</p>
                </div>
                <button className="clear-btn" onClick={clearCart}>
                    Vaciar carrito
                </button>
            </div>
        </div>
    );
}
