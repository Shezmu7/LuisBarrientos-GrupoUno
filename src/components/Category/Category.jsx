import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Category.css";
import { getProductByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

export default function ProductsCategory() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProductByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <div className="products-category-container">
            {loading ? (
                <div className="loading-container">
                    <Loading />
                </div>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};
