import React from 'react';
import styles from './SignIn.module.css';
import avatar from '../../assets/img/avatar.png'





export default function SignIn() {
  
  return (
    <div className={styles.content}>
        <img className={styles.avatar_new} src={avatar} alt='avatar' />
			  <p className={styles.bio_subtitle}>Username</p>
			  <input type='name' className={styles.username__input} placeholder='Type username' />
		    <button className={styles.button__sign_in}>Sign in</button>
    </div>
  );
}

