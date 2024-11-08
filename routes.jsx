import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./src/Pages/Home/Home";
import { Product } from "./src/Pages/Products/Product";
import { ProductProvider } from "./src/context/ProductContext";
import { SectionProdutosDetalhes } from "./src/Components/Sections/SectionProdutosDetalhes/SectionProdutosDetalhes";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Product />} />
            <Route path="/produtosDetalhes" element={<SectionProdutosDetalhes />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
};
