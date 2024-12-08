import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    const handleMarqueeClick = () => {
        navigate("/service");
    };

    return (
        <div>
            <div
                className="banner"
                style={{ backgroundImage: `url(${bannerImages[currentBanner]})` }}
            >
                <div className="banner-content">
                    <h2 className="banner-title">
                        <Logo imgurl={"public/luna.png"} />
                    </h2>
                    <h2 className="banner-title">
                        <Logo imgurl={"public/azul.png"} />
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
                <div
                    className="marquee-hover-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleMarqueeClick}
                >
                    <img
                        src="/public/giphy.gif"
                        alt="gif"
                        className="marquee-image"
                    />
                    {isHovered && (
                        <div className="tooltip">
                            ¿Necesitas ayuda?
                            <li>Presioname...</li>
                        </div>
                    )}
                </div>
            </marquee>
            <div className="item-list-container">
                <ItemList />
            </div>
        </div>
    );
}
