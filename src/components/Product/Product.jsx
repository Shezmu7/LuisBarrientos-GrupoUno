import React, { useState, useEffect } from 'react';
import './Product.css';
import ItemList from "../Itemlist/ItemList.jsx";
import { getProducts } from "../Products/Products.jsx";
import Loading from "../Loading/Loading.jsx";

export default function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((productsData) => {
            setProducts(productsData);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className="product-list">
                    {products.map((product) => (
                        <ItemList key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
