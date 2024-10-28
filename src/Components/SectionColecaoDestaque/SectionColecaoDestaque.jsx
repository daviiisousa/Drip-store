import CardColecaoDestaque from "../CardColecaoDestaque/CardColecaoDestaque";
import "./SectionColecaoDestaque.css";
import CamisaDestaque from "../../assets/HomeFotos/CamisaDestaque.png";
import SapatoDestaque from "../../assets/HomeFotos/SapatoDestaque.png";
import FoneDestaque from "../../assets/HomeFotos/FoneDestaque.png";

export const SectionColecaoDestaque = () => {
  return (
    <div className="Colecao">
      {/* Cards de Coleção */}
      <div className="Col">
        <h2>Coleções em destaque</h2>
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

      {/* Ícones de Categoria */}
      <h2 className="destaqueIcons">Coleções em destaque</h2>
    </div>
  );
};
