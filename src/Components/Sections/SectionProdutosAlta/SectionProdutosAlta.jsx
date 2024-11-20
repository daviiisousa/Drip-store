import "./SectionProdutosAlta.css";
import { Link } from "react-router-dom";
import { ProdutoItem } from "../../ProdutoItem/ProdutoItem";
import { useContext } from "react";

export const SectionProdutosAlta = () => {
  const { produtos } = useContext(ProductContext);

  const produtosLimitados = produtos.slice(0, 8);

  return (
    <section className="produtos-em-alta" id="ProdutosEmAlta">
      <div className="produtos-em-alta-header">
        <h2>Produtos em alta</h2>
        <Link to={"/produtos"} className="ver-todos">
          Ver todos →
        </Link>
      </div>
      <div className="produtos">
        {produtosLimitados.map((produto) => (
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
    </section>
  );
};
