import React from 'react';
import styles from './Benefit.module.scss';

function Benefit() {
  return (
    <div className={styles.bkg}>
      <div className={styles.container}>
        <h2>Выгоды нашего хостинга для Вас</h2>
        <div className={styles['card-container']}>
          <div className={styles.card}>
            <div className={`${styles.ico} ${styles.ico1}`}></div>
            <span className='basic-text__bold'>Низкие цены</span>
            <span className={styles.text}>
              Доступные цены всегда были приоритетом нашей компании. Партнерская программа поможет сэкономить ещё больше.
            </span>
          </div>
          <div className={styles.card}>
            <div className={`${styles.ico} ${styles.ico2}`}></div>
            <span className='basic-text__bold'>Грамотная поддержка</span>
            <span className={styles.text}>
            Сотрудники с многолетним опытом в сфере хостинг услуг всегда оперативно помогут решить возникшие у клиентов трудности.
            </span>
          </div>
          <div className={styles.card}>
            <div className={`${styles.ico} ${styles.ico3}`}></div>
            <span className='basic-text__bold'>Безопасность</span>
            <span className={styles.text}>
            Фильтрация паразитического трафика, защита от брут-форс атак помогут обеспечить сохранность данных клиентов.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefit