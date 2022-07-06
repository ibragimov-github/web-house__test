import React from 'react';
import styles from './Vps.module.scss';
function Vps() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.price}>
          <span>Цены на VPS KVM</span>
          <span>На каждом VPS сервере для вас уже включено:</span>
          <div className={styles.checked}>
            <div className={styles.check}>
              <div className={styles.ico}></div>
              <span>Root-доступ</span>
            </div>
            <div className={styles.check}>
              <div className={styles.ico}></div>
              <span>Защиты от DDoS</span>
            </div>
            <div className={styles.check}>
              <div className={styles.ico}></div>
              <span>Домен в подарок при оплате за 1 год</span>
            </div>
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.row}>
            <div><span>Start VPS</span></div>
            <div><span>Optima VPS</span></div>
            <div><span>Drive VPS</span></div>
          </div>
          <div className={styles.content}>
            <div className={`${styles.column} ${styles['basic-block']}`}>
              <div className={styles.darkblue}><span>CPU</span></div>
              <div className={styles.blue}><span>RAM</span></div>
              <div className={styles.darkblue}><span>HDD</span></div>
              <div className={styles.blue}><span>₽ в месяц</span></div>
            </div>
            <div className={styles.column}>
              <div className={styles.lightblue}><span>1</span></div>
              <div><span>1</span></div>
              <div className={styles.lightblue}><span>20 GB</span></div>
              <div><span>350</span></div>
              <button className='click-button'>Заказать VPS</button>
            </div>
            <div className={styles.column}>
              <div className={styles.lightblue}><span>2</span></div>
              <div><span>2</span></div>
              <div className={styles.lightblue}><span>40 GB</span></div>
              <div><span>450</span></div>
              <button className='click-button'>Заказать VPS</button>
            </div>
            <div className={styles.column}>
              <div className={styles.lightblue}><span>3</span></div>
              <div><span>4</span></div>
              <div className={styles.lightblue}><span>60 GB</span></div>
              <div><span>950</span></div>
              <button className='click-button'>Заказать VPS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vps