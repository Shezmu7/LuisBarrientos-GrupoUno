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

                    <div className="dropdown">
                        <a href="#">Populares</a>
                        <div className="dropdown-menu">
                            <a href="/populares1">Hombres</a>
                            <a href="/populares2">Mujeres</a>
                            <a href="/populares3">Niños</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <a href="#">Categorías</a>
                        <div className="dropdown-menu">
                            <a href="/categoria1">Poleras</a>
                            <a href="/categoria2">Polerones</a>
                            <a href="/categoria3">Gorros</a>
                            <a href="/categoria4">Sueter</a>
                            <a href="/categoria5">Pantalones</a>
                        </div>
                    </div>

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
