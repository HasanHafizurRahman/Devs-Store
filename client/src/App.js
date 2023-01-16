import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./pages/checkout/Checkout";
import Confirmation from "./pages/checkout/Confirmation";
import Home from "./pages/home/Home";
import ItemDetails from "./pages/itemDetails/ItemDetails";
import CartMenu from "./pages/shared/CartMenu";
import Footer from "./pages/shared/Footer";
import Navbar from "./pages/shared/Navbar";

const ScrollToTop = () => {
  const { pathName } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
