import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/Home';
import AboutPage from './components/About/About';
import ContactPage from './components/Contact/Contact';
import ProductsPage from './components/Products/Products';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ProductsCategory from './components/Category/Category';
import ServicePage from "./components/Service/Service.jsx";
import InformationPage from "./components/Information/Information.jsx";
import CartPage from "./components/Cart/Cart.jsx";


function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/category/:categoryId' element={<ProductsCategory />} />
                    <Route path='/products/:productId' element={<ItemDetail />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/information' element={<InformationPage/>} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/service' element={<ServicePage/>} />
                    <Route path='/carro' element={<CartPage/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

//ProductsPageButton
//
// HelpButton

export default App;