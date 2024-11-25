import React from 'react';
import { Link } from 'react-router-dom';
import './BannerButton.css';

const Button = ({ to, children }) => {
    return (
        <Link to={to} className="btn">
            {children}
        </Link>
    );
};

export default Button;

//Usado en el banner