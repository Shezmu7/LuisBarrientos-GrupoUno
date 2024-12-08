import { useEffect, useState } from "react";
import Item from "../Item/Item.jsx";
import { getProducts } from "../../data/asyncMock.jsx";
import Loading from "../Loading/Loading.jsx";
import "./ItemList.css";
import Cards from "../Cards/Cards.jsx";
import BackToTopButton from "../Buttons/BackToTopButton.jsx";

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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <>
                    <div className="item-list">
                        {products.map((prod) => (
                            <Cards key={prod.id}>
                                <Item {...prod} />
                            </Cards>
                        ))}
                    </div>
                    <div className="back-to-top-container">
                        <BackToTopButton onClick={scrollToTop} />
                    </div>
                </>
            )}
        </>
    );
}

