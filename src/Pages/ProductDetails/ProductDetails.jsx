import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { SectionProdutosDetalhes } from "../../Components/Sections/SectionProdutosDetalhes/SectionProdutosDetalhes";
import './ProductDetails.css'

export const ProductDetails = () => {
    return ( 
        <div>
            <header>
                <Header />
            </header>
            <main className="mainProductDetails">
                <SectionProdutosDetalhes />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
     );
}