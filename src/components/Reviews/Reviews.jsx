import React from 'react';
import Accordion from '../Accordion/Accordion';
import Slider from '../Slider/Slider';
import styles from './Reviews.module.scss';

function Reviews() {
  return (
    <div className={styles.bkg}>
      <div className={styles['border-setting']}></div>
      <div className={styles['bkg-setting']}></div>
      <div className={styles.container}>
        <div className={styles['reviews-block']}>
          <div className={styles.text}>
            <span>ОТЗЫВЫ О НАШЕМ ХОСТИНГЕ</span>
            <span>Хостинг – наша работа! Более 10 лет мы размещаем сайты своих клиентов на надёжном и современном оборудовании. </span>
            <span>Почитайте, что говорят наши клиенты</span>
          </div>
          <Slider/>
        </div>
        <h2>Вопросы и ответы</h2>
        <span>
        Здесь представлены самые популярные вопросы, которые задают нам клиенты<br />
        перед оформлением заказа на виртуальный хостинг. Если вы не нашли ответ на <br /> имеющиеся у вас вопрос, задайте его нашим специалистам.
        </span>
        <div className={styles['accordion-container']}>
          <Accordion description={'Что такое SSL-сертификат?'}/>
          <Accordion description={'Немного о нас и наших услугах'}/>
          <Accordion description={'Как выбрать SSL-сертификат?'}/>
          <Accordion description={'Есть ли бесплатные SSL-сертификаты?'}/>
  
        </div>
      </div>
    </div>
  )
}

export default Reviews