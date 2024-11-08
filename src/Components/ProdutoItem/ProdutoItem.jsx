import { Link } from 'react-router-dom';
import './ProdutoItem.css'

export const ProdutoItem = ({nome,
    categoria,
    precoAntigo,
    precoNovo,
    desconto,
    imagem,
    ...props
}) => {
  return (
    <>
      <Link className='LinkProdutos' to={'/produtosDetalhes'}>
      <div className="Produto" {...props}>
        {desconto && <div className="desconto">{desconto}% OFF</div>}
        <div className="divImagen">
          <img src={imagem} alt={nome} className="produto-imagem" />
        </div>
        <p className="categoria">{categoria}</p>
        <p className="nome">{nome}</p>
        <p className="preco-antigo">${precoAntigo}</p>
        <p className="preco-novo">${precoNovo}</p>
      </div>
      </Link>
    </>
  );
};
