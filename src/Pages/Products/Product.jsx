import { Footer } from "../../Components/FooterComponents/Footer/Footer";
import { Header } from "../../Components/HeaderComponets/Header/Header";
import { SectionProdutos } from "../../Components/Sections/SectionProdutos/SectionProdutos";
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
