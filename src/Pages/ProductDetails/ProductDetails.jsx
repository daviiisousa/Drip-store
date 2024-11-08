import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { SectionProdutosDetalhes } from "../../Components/Sections/SectionProdutosDetalhes/SectionProdutosDetalhes";

export const ProductDetails = () => {
    return ( 
        <div>
            <header>
                <Header />
            </header>
            <main>
                <SectionProdutosDetalhes />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
     );
}