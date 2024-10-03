import React, { useState, useEffect } from 'react';
import { FaCaretDown, FaCaretUp, FaHome, FaTags, FaShoppingCart, FaTicketAlt, FaUser, FaSearch } from 'react-icons/fa';
import './Navbar.css';
import Imagen from '../Imagenes/imagen.jsx';

const Navbar = () => {
    const [isPopularesOpen, setIsPopularesOpen] = useState(false);
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


    const togglePopulares = () => setIsPopularesOpen(!isPopularesOpen);
    const toggleCategorias = () => setIsCategoriasOpen(!isCategoriasOpen);

    return (
        <div>
            <header className="header">
                <Imagen imgurl={"public/Image/lunaazul.jpg"} />
                <nav className="navbar">

                    <a href="/">{isMobile ? <FaHome /> : "Inicio"}</a>

                    <div
                        className="dropdown"
                        onMouseEnter={!isMobile ? togglePopulares : null}
                        onMouseLeave={!isMobile ? () => setIsPopularesOpen(false) : null}
                    >
                        <a onClick={isMobile ? togglePopulares : null}>
                            {isMobile ? <FaTags /> : "Populares"}
                            {!isMobile && (isPopularesOpen ? <FaCaretUp /> : <FaCaretDown />)}
                        </a>
                        {isPopularesOpen && (
                            <div className="dropdown-menu">
                                <a href="/populares1">Hombres</a>
                                <a href="/populares2">Mujeres</a>
                                <a href="/populares3">Niños</a>
                            </div>
                        )}
                    </div>

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
                            </div>
                        )}
                    </div>

                    <a href="/ofertas">{isMobile ? <FaTicketAlt /> : "Ofertas"}</a>
                    <a href="/carro">{isMobile ? <FaShoppingCart /> : "Carro"}</a>
                    <a href="/cuenta">{isMobile ? <FaUser /> : "Cuenta"}</a>
                </nav>

                <div className="search-bar">
                    {isMobile ? <FaSearch /> : <input type="text" placeholder="Buscar productos" />}
                </div>
            </header>
        </div>
    );
}

export default Navbar;
