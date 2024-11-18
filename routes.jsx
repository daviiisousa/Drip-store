import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./src/Pages/Home/Home";
import { Product } from "./src/Pages/Products/Product";
import { ProductProvider } from "./src/context/ProductContext";
import { ProductDetails } from "./src/Pages/ProductDetails/ProductDetails";
import Login from "./src/Pages/Login/login";
import { CompraDetalhes } from "./src/Pages/CompraDetalhes/CompraDetalhes";
import { FinalizarCompra } from "./src/Pages/FinalizarCompra/FinalizarCompra";
import { CriarConta } from "./src/Pages/CriarConta/CriarConta";
import { MeusPedidos } from "./src/Pages/MeusPedidos/MeusPedidos";
import Register from "./src/Pages/Register/Register";



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
            <Route path="/compraDetalhes" element={<CompraDetalhes />}/>
            <Route path="/finalizarCompra" element={<FinalizarCompra />}/>
            <Route path="/criarConta" element={<CriarConta />} />
            <Route path="/meusPedidos" element={<MeusPedidos />}/>
            <Route path="/Register" element={<Register />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
};
