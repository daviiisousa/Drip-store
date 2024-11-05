import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  // const [active, setActive] = useState("");

  // const handleNavClick = (item) => {
  //   setActive(item);
  // };

  return (
    <div className={styles.container}>
      {/* {["Home", "Produtos", "Categorias", "Meus Pedidos"].map((item) => (
        <Link
        to={'/produtos'}
          key={item}
          className={`${styles.navText} ${
            active === item ? styles.active : ""
          }`}
          onClick={() => handleNavClick(item)}
        >
          {item}
        </Link>
      ))} */}
      <Link className={styles.navLink} to={"/"}>Home</Link>
      <Link className={styles.navLink} to={"/produtos"}>Produtos</Link>
      <Link className={styles.navLink}>Categorias</Link>
      <Link className={styles.navLink}>Meus Pedidos</Link>
    </div>
  );
};
