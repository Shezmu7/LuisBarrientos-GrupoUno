import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Imagen from "../Imagenes/Imagen.jsx";
import { FaInfoCircle, FaPhone, FaRegQuestionCircle, FaUserFriends } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <Imagen imgurl={"public/lunaazullogo.png"} />
                <div className="company-info">
                    <h3>Luna Azul</h3>
                    <p>Un viaje lunar</p>
                    <p>Que tu próximo viaje sea con estilo</p>
                    <p>(LA)</p>
                </div>
                <div className="footer-links">
                    <Link to="/about">
                        <FaUserFriends /> Sobre nosotros
                    </Link>
                    <Link to="/contact">
                        <FaPhone /> Contactos
                    </Link>
                    <Link to="/information">
                        <FaInfoCircle /> Información
                    </Link>
                    <Link to="/service">
                        <FaRegQuestionCircle /> Atención al cliente
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
