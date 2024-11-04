import React from 'react';
import Cart from '../Cart/Cart.jsx';
import { useCart } from '../../contexts/CartContext.jsx';
import {RingLoader} from "react-spinners";

const TiendaCarrito = () => {
    const { cartItems, loading } = useCart();

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <RingLoader color="#36d7b7" loading={loading} size={50} />
                </div>
            ) : (
                <Cart cartItems={cartItems} />
            )}
        </div>
    );
};

export default TiendaCarrito;
