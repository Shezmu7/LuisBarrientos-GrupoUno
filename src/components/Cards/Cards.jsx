import React from 'react';
import './Cards.css';

const Cards = ({ children }) => {
    return (
        <div className="card">
            <div className="card2">
                {children} {/* Renderiza el contenido dentro de la tarjeta */}
            </div>
        </div>
    );
};

export default Cards;
