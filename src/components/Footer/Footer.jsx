import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Imagen from "../Imagenes/Imagen.jsx";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <Imagen imgurl={"public/Image/lunaazullogo.png"} />
                <div className="company-info">
                    <h3>Luna Azul</h3>
                    <p>Un viaje lunar</p>
                    <p>Que tu próximo viaje sea con estilo</p>
                    <p>(LA)</p>
                </div>
                <div className="footer-links">
                    <Link to="/about">Sobre nosotros</Link>
                    <Link to="/contact">Acerca de</Link>
                    <Link to="/information">Información</Link>
                    <Link to="/service">Atención al cliente</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
