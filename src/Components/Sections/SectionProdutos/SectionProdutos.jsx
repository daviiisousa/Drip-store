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
            <h1>Filtrar por</h1>
            <hr />
            <div className="Filtro">
              <h2>Marka</h2>
              <div>
                <input type="checkbox"  id="Adiddas" />
                <label htmlFor="Adiddas">Adiddas</label>
              </div>
              <div>
                <input type="checkbox"  id="Calenciaga" />
                <label htmlFor="Calenciaga">Calenciaga</label>
              </div>
              <div>
                <input type="checkbox"  id="K-Swiss" />
                <label htmlFor="K-Swiss">K-Swiss</label>
              </div>
              <div>
                <input type="checkbox"  id="Nike" />
                <label htmlFor="Nike">Nike</label>
              </div>
              <div>
                <input type="checkbox" id="Puma" />
                <label htmlFor="Puma">Puma</label>
              </div>
            </div>
            <div className="Filtro">
              <h2>Categoria</h2>
              <div>
                <input type="checkbox"  id="Esporte e lazer" />
                <label htmlFor="Esporte e lazer">Esporte e lazer</label>
              </div>
              <div>
                <input type="checkbox"  id="Casual" />
                <label htmlFor="Casual">Casual</label>
              </div>
              <div>
                <input type="checkbox"  id="Utilitário" />
                <label htmlFor="Utilitário">Utilitário</label>
              </div>
              <div>
                <input type="checkbox"  id="Corrida" />
                <label htmlFor="Corrida">Corrida</label>
              </div>
            </div>
            <div className="Filtro">
              <h2>Gênero</h2>
              <div>
                <input type="checkbox"  id="Masculino" />
                <label htmlFor="Masculino">Masculino</label>
              </div>
              <div>
                <input type="checkbox"  id="Feminino" />
                <label htmlFor="Feminino">Feminino</label>
              </div>
              <div>
                <input type="checkbox"  id="Unisex" />
                <label htmlFor="Unisex">Unisex</label>
              </div>
            </div>
            <div className="Filtro">
              <h2>Estado</h2>
              <div>
                <input type="radio" name="Estado" id="Novo" />
                <label htmlFor="Novo">Novo</label>
              </div>
              <div>
                <input type="radio" name="Estado" id="Usado" />
                <label htmlFor="Usado">Usado</label>
              </div>
            </div>
          </aside>
          <div
            className="produtos"
            style={{ gridTemplateColumns: "repeat(3, 1fr)", marginRight: "100px", marginBottom: "140px"}}
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
