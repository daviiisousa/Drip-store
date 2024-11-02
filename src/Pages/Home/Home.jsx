import { Footer } from "../../Components/Footer/Footer";
import { Nav } from "../../Components/Nav/Nav";
import { SectionCarrosel } from "../../Components/SectionCarrosel/SectionCarrosel";
import { SectionColecaoDestaque } from "../../Components/SectionColecaoDestaque/SectionColecaoDestaque";
import { SectionOfertaEspecial } from "../../Components/SectionOfertaEspecial/SectionOfertaEspecial";
import { SectionProdutosAlta } from "../../Components/SectionProdutosAlta/SectionProdutosAlta";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <body>
        <header>
            <Nav />
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
