import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ id, name, price, img }) {
    return (
        <div className="item-container">
            <Link to={`/products/${id}`}>
                <img src={img} alt="Imagen Productos" className="item-image" />
            </Link>

            <Link to={`/products/${id}`} className="item-name">
                {name}
            </Link>

            <h4 className="item-price">
                $ {price}
            </h4>
        </div>
    );
}
