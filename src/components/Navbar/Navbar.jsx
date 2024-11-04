import React, { useState, useEffect } from 'react';
import { FaCaretDown, FaCaretUp, FaHome, FaTags, FaShoppingCart, FaStore, FaUser} from 'react-icons/fa';
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
            <a href="/">{isMobile ? <FaHome /> : "Inicio"}</a>

            <div
                className="dropdown"
                onMouseEnter={!isMobile ? toggleCategorias : null}
                onMouseLeave={!isMobile ? () => setIsCategoriasOpen(false) : null}
            >
                <a onClick={isMobile ? toggleCategorias : null}>
                    {isMobile ? <FaTags /> : "Categorías"}
                    {!isMobile && (isCategoriasOpen ? <FaCaretUp /> : <FaCaretDown />)}
                </a>
                {isCategoriasOpen && (
                    <div className="dropdown-menu">
                        <a href="/categoria1">Poleras</a>
                        <a href="/categoria2">Polerones</a>
                        <a href="/categoria3">Gorros</a>
                        <a href="/categoria4">Suéter</a>
                        <a href="/categoria5">Pantalones</a>
                        <a href="/categoria6">Populares</a>
                    </div>
                )}
            </div>

            <a href="/product">{isMobile ? <FaStore /> : "Productos"}</a>
            <a href="/carro">{isMobile ? <FaShoppingCart /> : "Carro"}</a>
            <a href="/cuenta">{isMobile ? <FaUser /> : "Cuenta"}</a>
        </nav>
    );
}

export default Navbar;
