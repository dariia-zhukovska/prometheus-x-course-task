import React from 'react';
import styles from './PageNotFound.module.css';
import pageNotFound from '../../assets/img/404.svg'







export default function Page404() {
  
  return (
    <div className={styles.pageNotFound}>
      <div className={styles.pageNotFoundImg}>
        <img src={pageNotFound} alt="pagen_ot_foud" />
      </div>
    </div>
  );
}

