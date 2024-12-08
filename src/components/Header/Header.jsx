import { useState, useEffect } from 'react';
import './Header.css';
import Logo from "../Imagenes/Logo.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import {FaShoppingCart, FaBars } from 'react-icons/fa';
import useCartStore from "../../store/CartStore.jsx";
import CartPageButton from "../Buttons/CartPageButton.jsx";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart } = useCartStore();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            {isMobile && (
                <FaBars className="menu-icon" onClick={toggleMenu} />
            )}
            <Logo imgurl={"public/lunaazulnavbar.png"} />
            {!isMobile && <Navbar />}
            {isMobile && isMenuOpen && (
                <div className="mobile-menu">
                    <Navbar isMobile={true} />
                </div>
            )}
            <div
                className="cart-section"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
            >
                <FaShoppingCart className="cart-icon" />
                {cart.length > 0 && (
                    <span className="cart-count">{cart.length}</span>
                )}
                {isMenuOpen && (
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
