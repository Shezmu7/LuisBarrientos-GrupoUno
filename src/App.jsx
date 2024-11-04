import './App.css';
import Header from "./components/Header/Header.jsx";
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Product from "./components/Product/Product.jsx";
import TiendaCarrito from "./components/CartPage/TiendaCarrito.jsx";
import { CartProvider } from './contexts/CartContext';

function App() {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/Cart" element={<TiendaCarrito/>} />
                        <Route path="/Product" element={<Product/>} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </CartProvider>
        </>
    );
}

export default App;
