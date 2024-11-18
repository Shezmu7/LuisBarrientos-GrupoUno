import React, { useState, useEffect } from "react";
import "./About.css";
import Loading from "../Loading/Loading";

const AboutPage = () => {
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
        <div className="sobre-nosotros-container">
            <h1 className="sobre-nosotros-title">Sobre Nosotros</h1>
            <p className="sobre-nosotros-description">
                Somos un equipo comprometido en ofrecer los mejores productos
                servicios para satisfacer las necesidades de nuestros clientes. Nuestra empresa,
                Luna Azul, se dedica a ofrecer ropa formal de alta calidad para hombres
                y mujeres que buscan elegancia y confort en sus atuendos para eventos especiales y el
                día a día profesional. Nos enfocamos en ofrecer una amplia gama de ternos, camisas,
                pantalones, blazers y vestidos de diseño sofisticado, adaptados a las tendencias y a
                las necesidades de nuestros clientes.
            </p>
            <br />
            <li>Historia de la Empresa</li>
            <p className="sobre-nosotros-description">
                Recien fundada en 2024, Luna Azul comenzó con el sueño de ofrecer ropa formal
                accesible y de calidad para todos aquellos que buscan destacarse en su vida profesional
                o en eventos especiales. Desde nuestros primeros diseños, nos hemos enfocado en brindar
                productos con un corte impecable y una atención al detalle que distingue a nuestros clientes.
            </p>
            <br />
            <li>Cliente Objetivo</li>
            <p className="sobre-nosotros-description">
                Nuestros productos están diseñados para hombres y mujeres profesionales, empresarios,
                ejecutivos, y para cualquier persona que desee proyectar elegancia y confianza en su
                vestimenta para reuniones de trabajo, bodas, cenas formales o cualquier evento especial.
            </p>

            <div className="sobre-nosotros-team">
                <h2>Conoce al Equipo</h2>
                <div className="team-member">
                    <img src="/Image/luis.jpg" alt="Miembro 1" className="team-image" />
                    <p className="team-name">Luis Barrientos</p>
                    <p className="team-role">Presidente</p>
                </div>
            </div>

            <div className="sobre-nosotros-values">
                <h2>Nuestros Valores</h2>
                <ul>
                    <li>Compromiso</li>
                    <li>Innovación</li>
                    <li>Calidad</li>
                    <li>Responsabilidad Social</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;
