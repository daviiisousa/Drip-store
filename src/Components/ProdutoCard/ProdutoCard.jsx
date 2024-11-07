import "./ProdutoCard.css";
import { useEffect, useState } from "react";

export const ProdutoCard = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch("http://localhost:3000/users/");
        const data = await response.json();
        console.log(data);
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  const ProdutoItem = ({
    nome,
    categoria,
    precoAntigo,
    precoNovo,
    desconto,
    imagem,
  }) => (
    <div className="produto">
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
  );
};
