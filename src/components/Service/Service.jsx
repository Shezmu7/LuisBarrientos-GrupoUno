import { useState, useEffect } from 'react';
import './Service.css';
import Loading from '../Loading/Loading.jsx';

const ServicePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            console.log('Solicitud enviada:', formData);
            setSubmitted(true);
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <Loading />
            </div>
        );
    }

    return (
        <div className="service-container">
            <h1 className="service-title">Atención al Cliente</h1>
            <p className="service-description">Déjanos saber cuál es el motivo de tu consulta.
                Estamos aquí para ayudarte.</p>
            {submitted ? (
                <div className="thank-you-message">
                    <img src="/graciasporcontactarnos.png" alt="Gracias" className="thanks-image"/>
                    <h2>¡Gracias por contactarnos!</h2>
                    <p>Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="service-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            placeholder="Tu correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-textarea"
                            placeholder="Escribe tu mensaje aquí..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="form-button">Enviar</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ServicePage;
