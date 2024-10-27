import CardColecaoDestaque from "../CardColecaoDestaque/CardColecaoDestaque";
import "./SectionColecaoDestaque.css";

export const SectionColecaoDestaque = () => {
  return (
    <div className="Colecao">
      <h2>Coleções em destaque</h2>

      {/* Cards de Coleção */}
      <div className="Col">
        <CardColecaoDestaque
          label="Novo drop Supreme"
          img="link-para-imagem-supreme"
          discount="30% OFF"
        />

        <CardColecaoDestaque
          label="Coleção Adidas"
          img="link-para-imagem-adidas"
          discount="30% OFF"
        />

        <CardColecaoDestaque
          label="Novo Beats Bass"
          img="link-para-imagem-beats"
          discount="30% OFF"
        />
      </div>

      {/* Ícones de Categoria */}
      <h2>Coleções em destaque</h2>
    </div>
  );
};
