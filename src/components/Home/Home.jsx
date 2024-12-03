import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import Button from "../Buttons/BannerButton.jsx";
import "./Home.css";
import Logo from "../Imagenes/Logo.jsx";

const bannerImages = [
    "/banner1.jpg",
    "/banner2.png",
];

export default function HomePage() {
    const [currentBanner, setCurrentBanner] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div
                className="banner"
                style={{backgroundImage: `url(${bannerImages[currentBanner]})`}}
            >

                <div className="banner-content">
                    <h2 className="banner-title">
                        <Logo imgurl={"public/luna.png"}/>
                    </h2>
                    <h2 className="banner-title">
                        <Logo imgurl={"public/azul.png"}/>
                    </h2>
                    <Button to="/products">Comprar</Button>
                </div>
            </div>
            <div className="marquee-container">
                <div className="marquee-text">
                    Luna Azul, que tu viaje por la galaxia sea con elegancia.
                </div>
            </div>
            <marquee>
                <div>
                    <img
                        src="/public/giphy.gif"
                        alt="gif"
                        className="marquee-image"
                    />
                </div>
            </marquee>
            <div className="item-list-container">
                <ItemList/>
            </div>
        </div>
    );
}
