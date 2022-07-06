import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.bkg}>
      <div className={styles.container}>
        <div className={styles['basic-info']}>
          <div className={styles['left-block']}>
            <div className={styles.logo}></div>
            <span className={styles['left-text']}>
              WSHOST даёт возможность купить хостинг сайтов дешево с SSL и полноценным пакетом услуг. Дешевая регистрация доменов и недорогой хостинг позволяют создать сайт любой тематики. Мы занимаем лидирующие позиции в даной сфере. Нашими клиентами являются жители городов Москва, Санкт-Петербург и т.д. Выбирая наш php хостинг вы получаете премиум услуги по низкой цене.
            </span>
            <div className={styles['two-blocks']}>
              <div className={styles['our-links']}>
                <span>
                  О компании
                </span>
                <span>
                  О хостинг-провайдере <br />
                  Партнёрская программа <br />
                  Дата-центр <br />
                  Документы для клиентов<br />
                  Договор на услуги хостинга<br />
                  Способы оплаты<br />
                  Цены<br />
                  Акции <br/>
                  Новости <br/>
                  Вакансии <br/>
                  Контакты <br/>
                </span>
              </div>
              <div className={styles['our-service']}>
                <span>Наши услуги</span>
                <span>
                  Виртуальный хостинг <br />
                  Хостинг для 1С-Битрикс<br />
                  Хостинг для Wordpress<br />
                  Аренда VPS <br />
                  Регистрация доменов <br />
                  SSL сертификаты <br />
                  Конструктор сайтов <br />
                </span>
              </div>
            </div>
          </div>
          <div className={styles['right-block']}>
            <div className={styles.media}>
              <div className={styles.contacts}>
                <div className={styles.contact}>
                  <div className={`${styles.logo} ${styles['phone-logo']}`}></div>
                  <span>
                  Телефон в Москве: <br />
                  <span className={styles['white-text']}>+7 (495) 123-45-56</span>
                  </span>
                </div>
                <div className={styles.contact}>
                  <div className={`${styles.logo} ${styles['mail-logo']}`}></div>
                  <span>
                  Электронная почта <br />
                  <span className={styles['white-text']}>support@wshost.ru</span>
                  </span>
                </div>
                <div className={styles.contact}>
                  <div className={`${styles.logo} ${styles['geo-logo']}`}></div>
                  <span>
                  Адрес дата-ценра и офиса продаж<br />
                  <span className={styles['white-text']}>
                    г. Москва,  Варшавское шоссе, д. 125 <br /> <br />
                    Tехническая поддержка работает 24/7
                  </span>
                  </span>
                </div>
              </div>
              <div className={styles.media}>
                <div className={styles['socialmedia-wrap']}>
                  <div className={styles.twi}></div>
                  <div className={styles.inst}></div>
                  <div className={styles.vk}></div>
                  <div className={styles.fb}></div>
                </div>
                <button className='click-button'>Report Spam</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['privacy']}>
          <span>
            © 2007-2021 ООО "Вебсайт хостинг". Все права защищены.
          </span>
          <span>
            Политика конфиденциальности
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer