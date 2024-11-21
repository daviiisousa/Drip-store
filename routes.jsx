import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./src/Pages/Home/Home";
import { Product } from "./src/Pages/Products/Product";
import { ProductProvider } from "./src/context/ProductContext";
import { ProductDetails } from "./src/Pages/ProductDetails/ProductDetails";
import Login from "./src/Pages/Login/login";
import { CompraDetalhes } from "./src/Pages/CompraDetalhes/CompraDetalhes";
import { FinalizarCompra } from "./src/Pages/FinalizarCompra/FinalizarCompra";
import { MeusPedidos } from "./src/Pages/MeusPedidos/MeusPedidos";
import CartPage from "./src/Pages/CartPage/CartPage";
import Register from "./src/Pages/Register/Register";
import { ComprarFinalizada } from "./src/Pages/ComprarFinalizada/ComprarFinalizada";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Product />} />
            <Route path="/produtosDetalhes" element={<ProductDetails />} />
            <Route path="/compraDetalhes" element={<CompraDetalhes />} />
            <Route path="/finalizarCompra" element={<FinalizarCompra />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/compraFinalizada" element={<ComprarFinalizada />} />
            <Route path="/meusPedidos" element={<MeusPedidos />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
};
