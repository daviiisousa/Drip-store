import "./CardColecaoDestaque.css";

function CardColecaoDestaque({ label, img, discount }) {
  return (
    <div className="collection-card">
      <span className="discount">{discount}</span>
      <img
        src={img}
        alt={label}
        className="collection-image"
        onError={(e) => {
          e.target.src = "";
        }} // Imagem padrão
      />
      <p className="collection-label">{label}</p>
      <button className="collection-button">Comprar</button>
    </div>
  );
}

export default CardColecaoDestaque;
