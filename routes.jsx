import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./src/Pages/Home/Home";
import { Product } from "./src/Pages/Products/Product";
import { ProductProvider } from "./src/context/ProductContext";
import { ProductDetails } from "./src/Pages/ProductDetails/ProductDetails";
import Login from "./src/Pages/Login/login";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Product />} />
            <Route path="/produtosDetalhes" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
};
