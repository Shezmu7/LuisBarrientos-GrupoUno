import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from "../Imagenes/Logo.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);

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

    return (
        <header className="header">
            <Logo imgurl={"public/Image/Lunaazulletra.png"} />
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
        </header>
    );
}

export default Header;
