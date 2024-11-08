import { ProdutoCard } from "../ProdutoCard/ProdutoCard";
import './SectionProdutos.css'

export const SectionProdutos = () => {
    return ( 
        <>
            <section className="sectionProduto">
                <div className="divProdutoTextos">
                    <h2>Resultados para “Tênis” -<span className="spanProdutos"> 389 produtos</span></h2>
                    <select>
                        <option>Ordernar por: mais relevantes</option>
                    </select>
                </div>
                <div className="divProduto">
                    <aside className="filtro">
                        <h1>filtro</h1>
                    </aside>
                    <div className="Produtos" >
                        <ProdutoCard style={{gridTemplateColumns: "repeat(3, 1fr)"}}/>
                        {/* <ProdutoCard style={{gridTemplateColumns: "repeat(3, 1fr)"}}/> */}
                    </div>
                </div>
            </section>
        </>
     );
}