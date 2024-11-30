import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';
import useCartStore from "../../store/CartStore.jsx";
import './ItemDetail.css';
import ShopButton from "../Buttons/Button.jsx";

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);
    const addToCart = useCartStore((state) => state.addToCart);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        if (product && selectedSize) {
            const stockAvailable = product.stock;
            if (quantity > stockAvailable) {
                alert(`Solo hay ${stockAvailable} unidades disponibles.`);
            } else {
                addToCart(product, quantity, selectedSize);
            }
        }
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    if (loading) {
        return (
            <div className="item-detail-container">
                <Loading />
            </div>
        );
    }

    if (!product) {
        return <div>No hay productos</div>;
    }

    return (
        <div className="item-detail-container">
            <div className="item-detail-grid">
                <div className="item-image">
                    <img src={product.img} alt="Imagen del producto" className="product-img" />
                </div>
                <div className="item-info">
                    <h1 className="product-name">{product.name}</h1>
                    <p className="product-description">{product.description}</p>
                    <div>
                        <h3>Tallas:</h3>
                        <ul className="size-list">
                            {product.sizes.map((size, index) => (
                                <li
                                    key={index}
                                    className={`size-item ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => handleSizeClick(size)}
                                >
                                    {size}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="product-stock">Stock por Talla: {product.stock}</p>

                    <div className="quantity-controls">
                        <button onClick={decrementQuantity} className="quantity-btn">
                            -
                        </button>
                        <p className="quantity">{quantity}</p>
                        <button onClick={incrementQuantity} className="quantity-btn">
                            +
                        </button>
                    </div>

                    <p className="product-price">Precio: ${product.price}</p>
                    <p className="total-price">Total: ${product.price * quantity}</p>

                    <ShopButton onClick={handleAddToCart} />
                </div>
            </div>
        </div>
    );
}
