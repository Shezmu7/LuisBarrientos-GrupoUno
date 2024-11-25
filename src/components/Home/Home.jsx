import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Button from "../Buttons/BannerButton.jsx";
import "./Home.css";
import Logo from "../Imagenes/Logo.jsx";

const bannerImages = [
    "/Image/banner1.jpg",
    "/Image/banner2.png", // Segunda imagen del banner
];

export default function HomePage() {
    const [currentBanner, setCurrentBanner] = useState(0);

    // Cambiar la imagen del banner cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
        }, 3000);

        return () => clearInterval(interval); // Limpiar intervalo al desmontar
    }, []);

    return (
        <div>
            <div
                className="banner"
                style={{ backgroundImage: `url(${bannerImages[currentBanner]})` }}
            >
                <marquee></marquee>
                <div className="banner-content">
                    <h2 className="banner-title">
                        <Logo imgurl={"public/Image/luna.png"} />
                    </h2>
                    <h2 className="banner-title">
                        <Logo imgurl={"public/Image/azul.png"} />
                    </h2>
                    <Button to="/products">Comprar</Button>
                </div>
            </div>
            <div className="item-list-container">
                <ItemList />
            </div>
        </div>
    );
}
