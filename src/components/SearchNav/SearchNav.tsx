import React from 'react';
import SelectMenu from '../SelectMenu/SelectMenu';
import styles from './SearchNav.module.css';




export default function SearchNav({menuOptions}: any) {

    menuOptions = ['All', '0-15', '15-30', '30+'];
  
  return (
    <div className={styles.search_nav__container}>
      <div className={styles.search_input__container}>
        <div className={styles.search_input__box}>
          <span className={styles.search}>
            <i className={styles.search_icon}></i>
          </span>
          <input type="text" name="search" placeholder="Search by book name" className={styles.search_input}/>  
        </div>
        <div>
      </div>
      </div>
      <div className={styles.search_price__container}>
        <SelectMenu menuOptions={menuOptions} defaultOption={'Price'} />
      </div>

    </div>
    

   
  );
}

