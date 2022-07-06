import React from 'react';
import styles from './Ssl.module.scss';

function Ssl() {
  return (
    <div className={styles.container}>
      <h2>SSL-сертификаты</h2>
      <span className={styles['info-text']}>
      Купить SSL и попасть в TOP Google. WSHOST предлагает низкие цены и быстрый <br />
      выпуск за счет уникальных партнерских условий с удостоверяющими центрами. <br />
      <br />
      Подберите сертификат исходя из задач и предпочтений, удобные фильтры и <br />
      описание помогут определиться
      </span>
      <div className={styles['card-container']}>
        <div className={styles.card}>
          <span className={styles['bkg-number']}>1</span>
          <span className={`${styles.blue} basic-text`}>
            SSL для сайта<br />Comodo PositiveSSL
          </span>
          <div className={styles.separate}></div>
          <div className={styles['info-text']}>
            <span>Доступен физическим лицам</span> 
            <span>Защита 1го домена</span>
            <span>Поддержка IDN доменов</span>
            <span>Низкая степень доверия</span>
            <span>Совместимость с браузерами: 96%</span>
            <span>Автоустановка на наш хостинг </span>
          </div>
          <span className={styles.price}>
          900 ₽ / год
          </span>
        </div>
        <div className={styles.card}>
          <span className={styles['bkg-number']}>2</span>
          <span className={`${styles.blue} basic-text`}>
          SSL для магазина<br />Positive SSL MDC<br />(3 domains)
          </span>
          <div className={styles.separate}></div>
          <div className={styles['info-text']}>
            <span>Доступен физическим лицам</span> 
            <span>Защита 3х доменов</span>
            <span>Опция добавления доменов</span>
            <span>Поддержка IDN доменов</span>
            <span>Достаточная степень доверия</span>
            <span>Совместимость с браузерами: 99.8%</span>
            <span>Автоустановка на наш хостинг </span>
          </div>
          <span className={styles.price}>
          3800 ₽ / год
          </span>
        </div>
        <div className={styles.card}>
          <span className={styles['bkg-number']}>3</span>
          <span className={`${styles.blue} basic-text`}>
          С защитой поддоменов<br />Essential SSL Wildcard
          </span>
          <div className={styles.separate}></div>
          <div className={styles['info-text']}>
            <span>Доступен физическим лицам</span> 
            <span>Защита всех поддоменов</span>
            <span>Поддержка IDN доменов</span>
            <span>Достаточная степень доверия</span>
            <span>Совместимость с браузерами: 96%</span>
            <span>Автоустановка на наш хостинг </span>
          </div>
          <span className={styles.price}>
          6700 ₽ / год
          </span>
        </div>
        <div className={styles.card}>
          <span className={styles['bkg-number']}>4</span>
          <span className={`${styles.blue} basic-text`}>
            С зеленой строкой<br />True BusinessID with EV          
          </span>
          <div className={styles.separate}></div>
          <div className={styles['info-text']}>
            <span>Только для юридических лиц</span> 
            <span>Защита одного домена</span>
            <span>Зеленая адресная строка</span>
            <span>Наивысшая степень доверия</span>
            <span>Без поддержки IDN</span>
            <span>Совместимость с браузерами: 96%</span>
            <span>Автоустановка на наш хостинг </span>
          </div>
          <span className={styles.price}>
          12600 ₽ / год
          </span>
        </div>
      </div>
      <button className={`${styles.orange} click-button`}>Заказать SSL сертификат</button>
    </div>
  )
}

export default Ssl