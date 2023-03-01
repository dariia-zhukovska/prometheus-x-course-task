import React from 'react';
import styles from './Footer.module.css';






export default function Footer() {
  
  return (
    <footer data-testid="footer-component" className={styles.footerComponent}>
      <div data-testid="footer-container" className={styles.footerContainer}>
        <p data-testid="footer-name" className={styles.footerName}>
          Made in{' '}
          <a
            data-testid="prometheus-link"
            target="_blank"
            rel="noreferrer"
            href="https://prometheus.org.ua/"
          >
            Prometheus
          </a>{' '}
          © 2022
        </p>
      </div>
    </footer>
  );
}

