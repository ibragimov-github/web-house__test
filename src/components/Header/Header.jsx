import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-wrapper']}>
        <a href="" className={styles.logo}></a>
        <div className={styles['contacts']}>
          <div className={`${styles['contact-number']} ${styles.contact}`}>
            <div className={styles.ico}></div>
            <a href='tel:+74951234556' className='mini-text'>+7 (495) 123-45-56</a>
          </div>
          <div className={`${styles['contact-email']} ${styles.contact}`}>
            <div className={styles.ico}></div>
            <a href='mailto:support@wshost.ru' className='mini-text'>support@wshost.ru</a>
          </div>
          <span className={styles['support-text']}>(поддержка <span>24/7</span>)</span>
        </div>
        <button className={`${styles['buy-button']} click-button`}>Купить хостинг</button>
        <div className={styles['user-avatar']}></div>
      </div>
    </header>
  )
}

export default Header