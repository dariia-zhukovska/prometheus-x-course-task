import React from 'react';
import styles from './Footer.module.css';






export default function Footer() {
  
  return (
     <footer className={styles.footer__container}>
      <div className={styles.footer__name}>
        Mede in <a href='https://prometheus.org.ua/' target="_blank" rel="noopener noreferrer" >Prometheus</a> © 2022
      </div>
    
    </footer>
  );
}

