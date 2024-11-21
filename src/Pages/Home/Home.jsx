import { Footer } from "../../Components/FooterComponents/Footer/Footer";
import { SectionCarrosel } from "../../Components/Sections/SectionCarrosel/SectionCarrosel";
import { SectionColecaoDestaque } from "../../Components/Sections/SectionColecaoDestaque/SectionColecaoDestaque";
import { SectionOfertaEspecial } from "../../Components/Sections/SectionOfertaEspecial/SectionOfertaEspecial";
import { SectionProdutosAlta } from "../../Components/Sections/SectionProdutosAlta/SectionProdutosAlta";
import { Header } from "../../Components/HeaderComponets/Header/Header";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <body>
        <header>
            <Header />
        </header>
        <main className="mainHome">
            <SectionCarrosel />
            <SectionColecaoDestaque />
            <SectionProdutosAlta />
            <SectionOfertaEspecial />
        </main>
        <footer>
            <Footer />
        </footer>
      </body>
    </>
  );
};
