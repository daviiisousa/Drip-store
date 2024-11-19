/* eslint-disable react/prop-types */
import styles from './HeaderShoppingCart.module.css';

import img from "../../assets/HomeFotos/mini-cart.svg"

import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

export const HeaderShoppingCart = ({ notificationCount =  5}) => {
  const [isActive, setIsActive] = useState(false)

  return (
  <div className={styles.container}>
    <div className={styles.iconSearch}>
      <CiSearch color={"var(--dark-gray-3)"} fontSize={23}/>
    </div>
    <div 
    onClick={() => setIsActive(!isActive)}
     className={styles.iconWrapper}>
      <img
        src={img}
        alt="Shopping Cart"
      />
      {notificationCount > 0 && (
        <div className={styles.notification}>
          {notificationCount}
        </div>
      )}
    </div>
    <div className={`${styles.teste} ${isActive? styles.ativo : null}`}> 
      <h2>eae</h2>
    </div>
  </div>
)};
