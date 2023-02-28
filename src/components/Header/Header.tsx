import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import icon_cart from '../../assets/svg/icon_cart.svg'
import userLogo from '../../assets/svg/icon_account.svg'






export default function Header() {
  
  return (
    <header className={styles.header__container}>
      <div className={styles.header__name}>
        <a href='/'>JS BAND STORE</a>
        <span>   |  </span>
        <div>Dariia Zhukovska</div>
      </div>
      <div className={styles.header__user_navigation}>
        <div  className={styles.header__cart}><Link to='/cart'>
          <img className={styles.header__cart_icon} src={icon_cart} alt='spopping_cart' />
          <span className={styles.header__cart_bage}>0</span>
        </Link></div>
       
       
        <button className={styles.button__sign_out}>Sign out</button>
        <div className={styles.header__username}><img src={userLogo} alt="user_icon" /></div>
      </div>
      
    </header>
  );
}

// 'uil_times close_icon header__closed_search'