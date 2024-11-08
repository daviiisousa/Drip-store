import { ProductContext } from "../../context/ProductContext";
import "./ProdutoCard.css";
import { useContext } from "react";

export const ProdutoCard = () => {

  const {produtos} = useContext(ProductContext)

  const produtosLimitados = produtos.slice(0, 8)

  const ProdutoItem = ({
    nome,
    categoria,
    precoAntigo,
    precoNovo,
    desconto,
    imagem,
  }) => (
    <div className="Produto">
      {desconto && <div className="desconto">{desconto}% OFF</div>}
      <img src={imagem} alt={nome} className="produto-imagem" />
      <p className="categoria">{categoria}</p>
      <p className="nome">{nome}</p>
      <p className="preco-antigo">${precoAntigo}</p>
      <p className="preco-novo">${precoNovo}</p>
    </div>
  );

  return (
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
  );
};
