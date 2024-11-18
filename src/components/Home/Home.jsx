import React from "react";
import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./Home.css";

export default function HomePage() {
    const imgBanner = '/Image/lunaazullogo.png';
    return (
        <div>
            <div
                className="banner"
                style={{ backgroundImage: `url(${imgBanner})` }}
            >
                <div className="banner-content">
                    <h2 className="banner-title">Viaje</h2>
                    <h2 className="banner-title">Lunar</h2>
                    <Link to="/products" className="shop-button">Comprar</Link>
                </div>
            </div>
            <div className="item-list-container">
                <ItemList />
            </div>
        </div>
    );
}
