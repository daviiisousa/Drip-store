import { BtnPrimary } from "../Buotoes/BtnPrimary/BtnPrimary";
import "./TextosCarrosel.css";

export const TextosCarrosel = () => {
  return (
    <div className="divTextosCarrosel">
      <p className="carroselOferta">Melhores ofertas personalizadas</p>
      <h2 className="carroselTitulo">Queima de stoque Nike 🔥</h2>
      <p className="descricaoCarrosel">
        Consequat culpa exercitation mollit nisi excepteur do do tempor laboris
        eiusmod irure consectetur.
      </p>
      <div className="divBtnCarrosel">
        <BtnPrimary>
          <a className="linkVerOfertas" href="#ProdutosEmAlta">
            Ver Oferta
          </a>
        </BtnPrimary>
      </div>
    </div>
  );
};
