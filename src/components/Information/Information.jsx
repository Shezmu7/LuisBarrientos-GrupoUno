import React, { useState, useEffect } from "react";
import "./Information.css";
import { Link } from 'react-router-dom';
import Loading from "../Loading/Loading";

const InformationPage = () => {
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
        <div className="informacion-container">
            <h1 className="informacion-title">Información</h1>
            <div className="informacion-section">
                <h2>¿Quiénes somos?</h2>
                <p>
                    Somos una empresa dedicada a ofrecer soluciones de calidad en diversos
                    sectores, siempre con el compromiso de brindar un servicio eficiente y
                    profesional. Nos caracterizamos por nuestra atención al detalle y
                    compromiso con la satisfacción de nuestros clientes.
                </p>
                <p>
                    Contamos con una tienda en Quellon y Castro. ¡Vengan a visitarnos!
                </p>
            </div>

            <div className="informacion-section">
                <h2>Horario de Atención</h2>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 10:00 - 14:00</p>
                <p>Domingos y Festivos: Cerrado</p>
            </div>

            <div className="contact-link">
                <p>¿Tienes preguntas o necesitas asistencia?</p>
                <Link to="/contact" className="contact-button">
                    Contacta con nosotros
                </Link>
            </div>

            <div className="informacion-section">
                <h2>Política de Privacidad</h2>
                <p>
                    Nos tomamos muy en serio la privacidad de nuestros usuarios. Tu
                    información personal es protegida y no será compartida con terceros
                    sin tu consentimiento.
                </p>
            </div>
        </div>
    );
};

export default InformationPage;
