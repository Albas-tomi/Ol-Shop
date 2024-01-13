import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ShopPage from "./components/pages/ShopPage";
import ShopCategory from "./components/pages/ShopCategory";
import Product from "./components/pages/Product";
import CartPage from "./components/pages/CartPage";
import LoginPage from "./components/pages/LoginPage";
import Footer from "./components/Footer/Footer";
import BannerMen from "./assets/image/banner_mens.png";
import BannerKids from "./assets/image/banner_kids.png";
import BannerWomen from "./assets/image/banner_women.png";
import RegisterPage from "./components/pages/RegisterPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={BannerMen} category="men" />}
        />
        <Route
          path="/womens"
          element={<ShopCategory banner={BannerWomen} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={BannerKids} category="kid" />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
