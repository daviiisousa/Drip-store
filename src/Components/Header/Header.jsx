import { HeaderShoppingCart } from "../HeaderShoppingCart/HeaderShoppingCart"
import { HeaderSearchInput } from "../HeaderSearchInput/HeaderSearchInput"

import styles from "./Header.module.css"

import iconmenu from "../../assets/Icons/Menu.svg"

import { Nav } from "../Nav/Nav"
import { Link } from "react-router-dom"
import { Logo } from "../Logo/Logo"

export const Header = () => {
  return (
    <div className={styles.container} >
      <div className={styles.topSection}>
        <div className={styles.menu}>
          <img src={iconmenu} alt="Menu"/>
        </div>
        <div style={{ cursor: "pointer" }}>
         <Logo />
        </div>
        <div className={styles.containerSearchAndRegister}>
          <HeaderSearchInput />
          <Link to={'/criarConta'} className={styles.linkRegister}>Cadastre-se</Link>
          <Link className={styles.buttonLogin} to={'/login'}>
          Entrar
          </Link>
        </div>
        <HeaderShoppingCart notificationCount={Math.floor(Math.random() * 4)} />
      </div>
      <Nav />
    </div>
  );
};
