import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown, FaCaretUp, FaHome, FaTags, FaShoppingCart, FaStore, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isCategoriasOpen, setIsCategoriasOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleCategorias = () => setIsCategoriasOpen(!isCategoriasOpen);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-link">
                {isMobile ? <FaHome /> : 'Inicio'}
            </Link>
            <div
                className="dropdown"
                onMouseEnter={!isMobile ? toggleCategorias : null}
                onMouseLeave={!isMobile ? () => setIsCategoriasOpen(false) : null}
            >
                <span onClick={isMobile ? toggleCategorias : null} className="navbar-link">
                    {isMobile ? <FaTags /> : 'Categorías'}
                    {!isMobile && (isCategoriasOpen ? <FaCaretUp /> : <FaCaretDown />)}
                </span>
                {isCategoriasOpen && (
                    <div className="dropdown-menu">
                        <Link to="/category/Pantalones">Pantalones</Link>
                        <Link to="/category/Ternos">Ternos</Link>
                        <Link to="/category/Blazer">Blazer</Link>
                        <Link to="/category/Camisas">Camisas</Link>
                        <Link to="/category/Favoritos">Favoritos</Link>
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
