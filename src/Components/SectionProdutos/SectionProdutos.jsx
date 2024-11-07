import { ProdutoCard } from "../ProdutoCard/ProdutoCard";
import './SectionProdutos.css'

export const SectionProdutos = () => {
    return ( 
        <>
            <section className="sectionProduto">
                <div className="divProduto">
                    <aside className="filtro">
                        <h1>filtro</h1>
                    </aside>
                    <div className="Produtos">
                        <ProdutoCard />
                    </div>
                </div>
            </section>
        </>
     );
}