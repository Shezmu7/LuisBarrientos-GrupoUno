import React from 'react';
import './Footer.css';
import Imagen from "../Imagenes/imagen.jsx";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <Imagen imgurl={"public/Image/lunaazul.jpg"} />
                <div className="company-info">
                    <h3>Luna Azul</h3>
                    <p>De aqui a la Luna vistiendo azul (LA)</p>
                </div>
                <div className="footer-links">
                    <a href="/about">Sobre nosotros</a>
                    <a href="/contact">Acerca de</a>
                    <a href="/privacy">Informacion</a>
                    <a href="/terms">Atencion al cliente</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
