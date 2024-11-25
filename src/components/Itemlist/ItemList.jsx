import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { getProducts } from "../../data/asyncMock";
import Loading from "../Loading/Loading";
import "./ItemList.css";
import Cards from "../Cards/Cards.jsx";

export default function ItemList({ products: initialProducts }) {
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if (!initialProducts) {
            getProducts().then((data) => {
                setProducts(data);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [initialProducts]);

    return (
        <>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="item-list">
                    {products.map((prod) => (
                        <Cards key={prod.id}>
                            <Item {...prod} /> {/* Item se renderiza como hijo */}
                        </Cards>
                    ))}
                </div>
            )}
        </>
    );
}

