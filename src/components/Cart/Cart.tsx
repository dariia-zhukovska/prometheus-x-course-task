import React from 'react';
import styles from './Cart.module.css';
import emptyCart from '../../assets/img/empty_cart.svg'







export default function Cart() {
  
  return (
    <div className={styles.shop_cart}>
      <div className={styles.empty_cart}>
       <div  className={styles.empty_cart__img} > <img src={emptyCart} alt="empty_cart" /></div>
        <div className={styles.empty_cart__title}>Cart is empty</div>
     </div>
    </div>
  );
}

