import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { ProdutoCard } from "../../Components/ProdutoCard/ProdutoCard";
import { SectionProdutos } from "../../Components/SectionProdutos/SectionProdutos";
import './Product.css'

export const Product = () => {
  return (
    <>
      <body>
        <header>
          <Header />
        </header>
        <main className="mainProduct">
          <SectionProdutos />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
};
