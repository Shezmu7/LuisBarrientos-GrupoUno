import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTags, FaStore, FaShoppingCart, FaUser, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ isMobile = false }) => {
    const [isCategoriasOpen, setIsCategoriasOpen] = useState(false);

    const toggleCategorias = () => setIsCategoriasOpen(!isCategoriasOpen);

    return (
        <nav className={`navbar ${isMobile ? 'mobile-navbar' : ''}`}>
            <Link to="/" className="navbar-link">
                {isMobile ? <FaHome /> : 'Inicio'}
            </Link>
            <div
                className="dropdown"
                onClick={isMobile ? toggleCategorias : null}
                onMouseEnter={!isMobile ? toggleCategorias : null}
                onMouseLeave={!isMobile ? () => setIsCategoriasOpen(false) : null}
            >
                <span className="navbar-link">
                    {isMobile ? <FaTags /> : 'Categorías'}
                    {!isMobile && (isCategoriasOpen ? <FaCaretUp /> : <FaCaretDown />)}
                </span>
                {isCategoriasOpen && (
                    <div className="dropdown-menu">
                        <Link to="/category/Pantalones">Pantalones</Link>
                        <Link to="/category/Ternos">Ternos</Link>
                        <Link to="/category/Blazer">Blazer</Link>
                        <Link to="/category/Camisas">Camisas</Link>
                        <Link to="/category/Vestidos">Vestidos</Link>
                    </div>
                )}
            </div>
            <Link to="/products" className="navbar-link">
                {isMobile ? <FaStore /> : 'Productos'}
            </Link>
            <Link to="/carro" className="navbar-link">
                {isMobile ? <FaShoppingCart /> : 'Carro'}
            </Link>
            <Link to="/cuenta" className="navbar-link">
                {isMobile ? <FaUser /> : 'Cuenta'}
            </Link>
        </nav>
    );
};

export default Navbar;
