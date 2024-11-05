import "./SectionProdutosAlta.css";
import { ProdutoCard } from "../ProdutoCard/ProdutoCard";
import { Link } from "react-router-dom";

export const SectionProdutosAlta = () => {
  return (
    <section className="produtos-em-alta" id="ProdutosEmAlta">
      <div className="produtos-em-alta-header">
        <h2>Produtos em alta</h2>
        <Link to={"/produtos"} className="ver-todos">
          Ver todos →
        </Link>
      </div>
      <ProdutoCard />
    </section>
  );
};
