/* eslint-disable react/prop-types */
import styles from "./HeaderShoppingCart.module.css";

import img from "../../assets/HomeFotos/mini-cart.svg";
import sapato from "../../assets/HomeFotos/Sapatocarrosel.png";

import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export const HeaderShoppingCart = ({ notificationCount = 5 }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.iconSearch}>
        <CiSearch color={"var(--dark-gray-3)"} fontSize={23} />
      </div>
      <div
        onClick={() => setIsActive(!isActive)}
        className={styles.iconWrapper}
      >
        <img src={img} alt="Shopping Cart" />
        {notificationCount > 0 && (
          <div className={styles.notification}>{notificationCount}</div>
        )}
      </div>
      <div className={`${styles.teste} ${isActive ? styles.ativo : null}`}>
        <h2>Meu Carrinho</h2>
        <hr></hr>
        <div>
          <img src={sapato} alt="sapato" />
          <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
          <h2>R$ 219,00</h2>
        </div>
        <div>
          <img src={sapato} alt="sapato" />
          <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
          <h2>R$ 219,00</h2>
        </div>
        <hr />
        <div>
          <p>Valor Total</p>
          <h2>R$ 438,00</h2>
        </div>
        <div>
          <a href="">Esvaziar</a>
          <button>Ver Carrinho</button>
        </div>
      </div>
    </div>
  );
};
