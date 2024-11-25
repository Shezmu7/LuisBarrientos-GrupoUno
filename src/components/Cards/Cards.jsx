import React from 'react';
import './Cards.css';

const Cards = ({ children }) => {
    return (
        <div className="card">
            <div className="card2">
                {children}
            </div>
        </div>
    );
};

export default Cards;
