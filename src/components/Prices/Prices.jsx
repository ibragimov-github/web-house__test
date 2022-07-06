import React from 'react';
import styles from './Prices.module.scss';
import illustration from '../../img/illustration.png';

function Prices() {
  return (
    <div className={styles.container}>
      <h2>Тарифы на хостинг</h2>
      <span className={styles.description}>
        У нас оптимальные тарифы на классический виртуальный хостинг с <br />
        безлимитными ресурсами на количество сайтов, баз данных и FTP. <br /> <br />
        Выбирайте наш лучший <span className={styles.bold}>безлимитный</span> хостинг в России!
      </span>
      <div className={styles['card-container']}>
        <div className={`${styles['price-card']} ${styles.balloon}`}>
          <div></div>
          <h3>МИНИ</h3>
        </div>
        <div className={`${styles['price-card']} ${styles.telegram}`}>
          <div></div>
          <h3>МИНИ</h3>
        </div>
        <div className={`${styles['price-card']} ${styles.helicopter}`}>
          <div></div>
          <h3>МИНИ</h3>
        </div>
        <div className={`${styles['price-card']} ${styles.rocket}`}>
          <div></div>
          <h3>МИНИ</h3>
        </div>
      </div>
      <span className={`${styles.information} basic-text`}>
        Неограниченно сайтов, баз данных MySQL, FTP аккаунтов и почтовых ящиков
      </span>
      <div className={styles['big-card__container']}>
        <div className={styles['price-card']}>
          <div className={styles['text-card']}>
            <span className='basic-text__bold'>2Gb места SSD </span>
            <span className={`${styles['light-text']} mini-text`}>PHP - 5.6, 7.0, 7.1, 7.2, 7.3, 7.4</span>
            <span className={`${styles['light-text']} mini-text`}>Поддержка любой CMS</span>
            <span className={`${styles['light-text']} mini-text`}>
              Бесплатные SSL сертификаты <br /> Let's Encrypt
            </span>
            <span className={`${styles['light-text']} mini-text`}>Защита от DDoS</span>
          </div>
          <div className={styles.price}>
            <div className={styles.sale}>
              <h3>99 ₽</h3>
              <span>в месяц</span>
            </div>
            <div className={styles['old-price']}>
              <span>117 ₽</span>
              <span>в месяц</span>
            </div>
          </div>
          <button className='click-button'>Купить Хостинг</button>
        </div>
        <div className={styles['price-card']}>
          <div className={styles['text-card']}>
            <span className='basic-text__bold'>7Gb места SSD</span>
            <span className={`${styles['light-text']} mini-text`}>PHP - 5.6, 7.0, 7.1, 7.2, 7.3, 7.4</span>
            <span className={`${styles['light-text']} mini-text`}>Поддержка любой CMS</span>
            <span className={`${styles['light-text']} mini-text`}>
              Бесплатные SSL сертификаты <br /> Let's Encrypt
            </span>
            <span className={`${styles['light-text']} mini-text`}>Защита от DDoS</span>
            <span className={`${styles['light-text']} mini-text`}>
              Повышенная производительность
            </span>
            <span className={`${styles['light-text']} mini-text`}>Домен в подарок</span>
          </div>
          <div className={styles.price}>
            <div className={styles.sale}>
              <h3>147 ₽</h3>
              <span>в месяц</span>
            </div>
            <div className={styles['old-price']}>
              <span>117 ₽</span>
              <span>в месяц</span>
            </div>
          </div>
          <button className='click-button'>Купить Хостинг</button>
        </div>
        <div className={styles['price-card']}>
          <div className={styles['text-card']}>
            <span className='basic-text__bold'>30Gb места SSD</span>
            <span className={`${styles['light-text']} mini-text`}>PHP - 5.6, 7.0, 7.1, 7.2, 7.3, 7.4</span>
            <span className={`${styles['light-text']} mini-text`}>Поддержка любой CMS</span>
            <span className={`${styles['light-text']} mini-text`}>
              Бесплатные SSL сертификаты <br /> Let's Encrypt
            </span>
            <span className={`${styles['light-text']} mini-text`}>Защита от DDoS</span>
            <span className={`${styles['light-text']} mini-text`}>
              Повышенная производительность
            </span>
            <span className={`${styles['light-text']} mini-text`}>Домен в подарок</span>
          </div>
          <div className={styles.price}>
            <div className={styles.sale}>
              <h3>290 ₽</h3>
              <span>в месяц</span>
            </div>
            <div className={styles['old-price']}>
              <span>117 ₽</span>
              <span>в месяц</span>
            </div>
          </div>
          <button className='click-button'>Купить Хостинг</button>
        </div>
        <div className={styles['price-card']}>
          <div className={styles['text-card']}>
            <span className='basic-text__bold'>50Gb места SSD </span>
            <span className={`${styles['light-text']} mini-text`}>PHP - 5.6, 7.0, 7.1, 7.2, 7.3, 7.4</span>
            <span className={`${styles['light-text']} mini-text`}>Поддержка любой CMS</span>
            <span className={`${styles['light-text']} mini-text`}>
              Бесплатные SSL сертификаты <br /> Let's Encrypt
            </span>
            <span className={`${styles['light-text']} mini-text`}>Защита от DDoS</span>
            <span className={`${styles['light-text']} mini-text`}>
              Повышенная производительность
            </span>
            <span className={`${styles['light-text']} mini-text`}>Домен в подарок</span>
          </div>
          <div className={styles.price}>
            <div className={styles.sale}>
              <h3>470 ₽</h3>
              <span>в месяц</span>
            </div>
            <div className={styles['old-price']}>
              <span>117 ₽</span>
              <span>в месяц</span>
            </div>
          </div>
          <button className='click-button'>Купить Хостинг</button>
        </div>
      </div>
      <a className={styles['red-link']} href="/">Посмотреть все характеристики нашего хостинга</a>
      <div className={styles['illustration-text']}>
        <img src={illustration} alt='illustration'  className={styles.illustration}></img>
        <div className={styles.text}>
          <h4>Вместе с хостингом Вы получите</h4>
          <div className={styles['checked-text']}>
            <div className={styles.text}>
              <div className={styles.ico}></div>
              <span>
                30 дней на тестовый период + 100% возврат денег, если хостинг не подойдёт
              </span>
            </div>
            <div className={styles.text}>
              <div className={styles.ico}></div>
              <span>
                Хостинг в подарок при оплате тарифа на 1 год
              </span>
            </div>
            <div className={styles.text}>
              <div className={styles.ico}></div>
              <span>
                Бесплатный перенос сайта от другого хостинг-провайдера
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prices