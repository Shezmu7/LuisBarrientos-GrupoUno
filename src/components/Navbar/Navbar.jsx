import React from "react";
import './Navbar.css';
import Imagen from '../Imagenes/imagen.jsx';

const Navbar = () => {
    return (
        <div>
            <header className="header">
                <Imagen imgurl={"public/Image/lunaazul.jpg"} />
                <nav className="navbar">
                    <a href="/">Inicio</a>
                    <a href="/">Populares</a>
                    <a href="/">Ofertas</a>
                    <a href="/">Carro</a>
                    <a href="/">Cuenta</a>
                </nav>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar productos"/>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
