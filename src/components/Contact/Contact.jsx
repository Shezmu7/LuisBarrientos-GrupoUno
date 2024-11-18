import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import './Contact.css';
import Loading from "../Loading/Loading";

export default function ContactPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <Loading />
            </div>
        );
    }

    return (
        <div className="contact-container">
            <h1 className="contact-title">Información de Contacto</h1>
            <p className="contact-description">
                Estamos aquí para ayudarte. Si tienes alguna pregunta, no dudes en ponerte en
                contacto con nosotros a través de los siguientes canales.
            </p>

            <div className="contact-info">
                <div className="contact-item">
                    <h2 className="contact-subtitle">Teléfonos</h2>
                    <p className="contact-detail">+56 9 3103 8084</p>
                    <p className="contact-detail">+56 9 3103 8084</p>
                    <p className="contact-detail">+56 9 3103 8084</p>
                </div>

                <div className="contact-item">
                    <h2 className="contact-subtitle">Correos Electrónicos</h2>
                    <p className="contact-detail">xinlu.luis.barrientos.2003@gmail.com</p>
                    <p className="contact-detail">luchin.luisbarrientos2003@gmail.com</p>
                    <p className="contact-detail">luisorlando.barrientos1@alumnos.ulagos.cl</p>
                </div>

                <div className="contact-item">
                    <h2 className="contact-subtitle">Redes Sociales</h2>
                    <p className="contact-detail">
                        <FaFacebook className="contact-icon" />
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                    </p>
                    <p className="contact-detail">
                        <FaTwitter className="contact-icon" />
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </p>
                    <p className="contact-detail">
                        <FaInstagram className="contact-icon" />
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </p>
                    <p className="contact-detail">
                        <FaDiscord className="contact-icon" />
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                            Discord
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
