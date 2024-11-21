import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  function handleColorNav(e) {
    e.target.style.borderBottom = "2px solid #c92071";
    e.target.style.color = "#c92071";
  }

  const caminhos = ['/', '/Produtos', '', '/meusPedidos' ]

  return (
    <div className={styles.container}>
      {["Home", "Produtos", 'Categorias', "Meus Pedidos" ].map((item, index) => (
        <Link
          key={item}
          onClick={(e) => handleColorNav(e)}
          className={styles.navLink}
          to={caminhos[index]}
        >
          {item}
        </Link>
      ))}
    </div>
  );
};
