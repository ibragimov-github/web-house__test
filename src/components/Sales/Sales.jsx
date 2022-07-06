import React from 'react';
import styles from './Sales.module.scss';

function Sales() {
  return (
    <div className={styles.sales}>
      <div className={styles.sale}>
        <div className={styles.value}>
          <span>
            Всего от <span className={styles.bold}>99 ₽ в месяц!</span>
          </span>
        </div>
        <div className={styles['value-shadow']}></div>
        <button className='click-button'>Заказать хостинг</button>
      </div>
      <div className={styles.wrapper}>
        <div className={styles['cloud-background']}></div>
        <div className={styles.info}>
          <span className={styles['big-text']}>Платный хостинг <br /> для сайта</span>
          <div className={`${styles.info1} ${styles['info-element']}`}>
            <span className='basiс-text'>
              Совместим с любыми CMS:                                                         
            </span>
            <span className='basic-text__bold'>
              1С-Битрикс, Wordpress, Opencart, DLE, Joomla и др.
            </span>
          </div>
          <div className={`${styles.info2} ${styles['info-element']}`}>
            <span className='basiс-text'>Всё включено</span>
            <span className='basic-text__bold'> 
              PHP 5.4 - 8.0,Perl,FTP, MySQL,ISPManager
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sales