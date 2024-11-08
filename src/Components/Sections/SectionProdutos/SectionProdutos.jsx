import { useContext } from "react";
import "./SectionProdutos.css";
import { ProductContext } from "../../../context/ProductContext";
import { ProdutoItem } from "../../ProdutoItem/ProdutoItem";

export const SectionProdutos = () => {
  const { produtos } = useContext(ProductContext);

  return (
    <>
      <section className="sectionProduto">
        <div className="divProdutoTextos">
          <h2>
            Resultados para “Tênis” -
            <span className="spanProdutos"> 389 produtos</span>
          </h2>
          <select>
            <option>Ordernar por: mais relevantes</option>
          </select>
        </div>
        <div className="divProduto">
          <aside className="filtro">
            <h1>filtro</h1>
          </aside>
          <div
            className="produtos"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {produtos.map((produto) => (
              <ProdutoItem
                key={produto.id}
                nome={produto.nome}
                categoria={produto.categoria}
                precoAntigo={produto.precoAntigo}
                precoNovo={produto.precoNovo}
                desconto={produto.desconto}
                imagem={produto.imagem}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
