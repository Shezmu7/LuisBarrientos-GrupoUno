import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../data/asyncMock.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import Loading from "../Loading/Loading.jsx";
import Spinner from "./Spinner.jsx";
import './SearchResults.css'

export default function SearchResults() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("q") || "";

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then((data) => {
                if (searchTerm) {
                    const filteredProducts = data.filter((product) => {
                        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
                    });
                    setProducts(filteredProducts);
                } else {
                    setProducts(data);
                }
            })
            .catch(() => {})
            .finally(() => setLoading(false));
    }, [searchTerm]);

    return (
        <div className="search-page">
            {loading ? (
                <Loading />
            ) : products.length === 0 ? (
                <div>
                    <p>No se encontraron productos.</p>
                    <Spinner />
                </div>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
}
