import CardColecaoDestaque from "../CardColecaoDestaque/CardColecaoDestaque";
import IconsColecao from "../IconsColeção/IconsColecao";

import "./SectionColecaoDestaque.css";
import CamisaDestaque from "../../assets/HomeFotos/CamisaDestaque.png";
import SapatoDestaque from "../../assets/HomeFotos/SapatoDestaque.png";
import FoneDestaque from "../../assets/HomeFotos/FoneDestaque.png";
import Camisa from "../../assets/IconsColecao/camisa.jsx";
import Calça from "../../assets/IconsColecao/calça.jsx";
import Tenis from "../../assets/IconsColecao/tenis.jsx";

export const SectionColecaoDestaque = () => {
  return (
    <div className="Colecao">
      {/* Cards de Coleção */}
      <div className="colunasDestaque">
        <h2>Coleções em destaque</h2>
        <div className="Col">
          <CardColecaoDestaque
            label="Novo drop Supreme"
            img={CamisaDestaque}
            discount="30% OFF"
          />

          <CardColecaoDestaque
            label="Coleção Adidas"
            img={SapatoDestaque}
            discount="30% OFF"
          />

          <CardColecaoDestaque
            label="Novo Beats Bass"
            img={FoneDestaque}
            discount="30% OFF"
          />
        </div>
      </div>

      {/* Ícones de Categoria */}

      <div className="colecaoIcons">
        <h2>Coleções em destaque</h2>

        <div className="Col-icon">
          <IconsColecao label="Camisa">
            <Camisa />
          </IconsColecao>

          <IconsColecao label="Camisa">
            <Calça />
          </IconsColecao>

          <IconsColecao label="Camisa">
            <Camisa />
          </IconsColecao>

          <IconsColecao label="Camisa">
            <Camisa />
          </IconsColecao>

          <IconsColecao label="Camisa">
            <Tenis />
          </IconsColecao>
        </div>
      </div>
    </div>
  );
};
