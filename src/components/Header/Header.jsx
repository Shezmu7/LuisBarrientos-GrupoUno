import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from "../Imagenes/Logo.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import useCartStore from '../../store/cartStore';
import CartPageButton from "../Buttons/CartPageButton.jsx";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart } = useCartStore();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
    };

    const toggleCartDropdown = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <header className="header">
            <Logo imgurl={"public/Image/lunaazulnavbar.png"} />
            <Navbar />
            <div className="search-bar">
                {isMobile ? (
                    isSearchActive ? (
                        <input
                            type="text"
                            placeholder="Buscar productos"
                            onBlur={() => setIsSearchActive(false)}
                            autoFocus
                        />
                    ) : (
                        <FaSearch onClick={toggleSearch} style={{ cursor: 'pointer' }} />
                    )
                ) : (
                    <input type="text" placeholder="Buscar productos" />
                )}
            </div>
            <div className="cart-section">
                <FaShoppingCart
                    onClick={toggleCartDropdown}
                    className="cart-icon"
                />
                {cart.length > 0 && (
                    <span className="cart-count">{cart.length}</span>
                )}
                {isCartOpen && (
                    <div className="cart-dropdown">
                        {cart.length === 0 ? (
                            <p>El carrito está vacío</p>
                        ) : (
                            <ul className="cart-dropdown-list">
                                {cart.map((item) => (
                                    <li key={`${item.id}-${item.size}`} className="cart-dropdown-item">
                                        <img src={item.img} alt={item.name} className="cart-item-img" />
                                        <div className="cart-item-details">
                                            <p>{item.name}</p>
                                            <p>Talla: {item.size}</p>
                                            <p>Cantidad: {item.quantity}</p>
                                            <p>${item.price * item.quantity}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <CartPageButton />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
