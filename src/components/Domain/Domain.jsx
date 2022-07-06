import React from 'react';
import styles from './Domain.module.scss';
import illustration from '../../img/illustration2.png';

function Domain() {
  return (
    <div className={styles.domain}>
      <div className={styles.setting}></div>
      <div className={styles.container}>
        <h2>Доменные имена</h2>
        <div className={styles.content}>
          <div className={styles['text-button']}>
            <div className={styles.text}>
              <span>
                Правильное название сайта — залог трафика и успешной рекламы.  Домен должен ассоциироваться у пользователя с конкретными услугами или отраслью.
              </span>
              <span>
                Часто говорят: «Посмотри на auto.ru» и становится понятно, что речь про ресурс, который связан с автомобилями. Точно так же и с другими сайтами, в имени которых заложен смысл их деятельности. 
              </span>
              <span>
                Помимо основных, выделяют специальные - тематические зоны: .travel, .site, .pro и т.д.
              </span>
            </div>
            <button className={`${styles.orange} click-button`}>
            Подобрать и зарегистрировать домен
            </button>
          </div>
          <div className={styles.prices}>
            <div className={styles['price-container']}>
              <div className={styles.price}>
                <div className={styles.ico}></div>
                <span className={styles['domain-value']}>.ru</span>
                <span>
                  600 ₽ <br />
                  в год
                </span>
              </div>
              <div className={styles.price}>
                <div className={styles.ico}></div>
                <span className={styles['domain-value']}>.su</span>
                <span>
                  900 ₽ <br />
                  в год
                </span>
              </div>
              <div className={styles.price}>
                <div className={styles.ico}></div>
                <span className={styles['domain-value']}>.net</span>
                <span>
                  1200 ₽ <br />
                  в год
                </span>
              </div>
              <div className={styles.price}>
                <div className={styles.ico}></div>
                <span className={styles['domain-value']}>.bix</span>
                <span>
                  1200 ₽ <br />
                  в год
                </span>
              </div>
              <div className={styles.price}>
                <div className={styles.ico}></div>
                <span className={styles['domain-value']}>.moscow</span>
                <span>
                  500 ₽ <br />
                  в год
                </span>
              </div>
            </div>
            <div className={styles['price-container']}>
              <div className={styles.price}>
                <div className={styles.ico}></div>
                <span className={styles['domain-value']}>.рф</span>
                <span>
                  600 ₽ <br />
                  в год
                </span>
              </div>
              <div className={styles.price}>
                <div className={styles.ico}></div>
                <span className={styles['domain-value']}>.com</span>
                <span>
                  1200 ₽ <br />
                  в год
                </span>
              </div>
              <div className={styles.price}>
                <div className={styles.ico}></div>
                <span className={styles['domain-value']}>.org</span>
                <span>
                  1200 ₽ <br />
                  в год
                </span>
              </div>
              <div className={styles.price}>
                <div className={styles.ico}></div>
                <span className={styles['domain-value']}>.info</span>
                <span>
                  1200 ₽ <br />
                  в год
                </span>
              </div>
              <div className={styles.price}>
                <div className={styles.ico}></div>
                <span className={styles['domain-value']}>.msc.ru</span>
                <span>
                  500 ₽ <br />
                  в год
                </span>
              </div>
            </div>
          </div>
        </div>
        <h2 className={styles.info}>Хостинг VPS/VDS серверов</h2>
        <div className={styles['image-text']}>
          <img src={illustration} alt="illustration" />
          <div className={styles.text}>
            <span>Готовые тарифы VPS сбалансированы по производительности. Индивидуальная конфигурация позволит получить оптимальное количество ресурсов с оплатой за час. 
            </span>
            <span>
              Все тарифы VPS хостинга построены на оборудовании Xeon Scalable Silver/Gold. 
            </span>
            <span>
            Серверы размещены в DDoS-защищенном кластере ЦОД Tier lll и подключены к точке обмена трафиком Cloud-IX.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Domain