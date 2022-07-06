import React from 'react';
import styles from './Pay.module.scss';
import webmoney from '../../img/web.png'
import money from '../../img/money.png'
import visa from '../../img/visa.png'
import mc from '../../img/mc.png'
import mir from '../../img/mir.png'
import qiwi from '../../img/qiwi.png'
import pp from '../../img/pp.png'
import sber from '../../img/sber.png'


function Pay() {
  return (
    <div className={styles.bkg}>
      <div className={styles.container}>
        <h2>Способы оплаты</h2>
        <span>Оплачивайте услуги виртуального хостинга WSHOST любым, удобным для вас<br/> методом. Наш хостинг также могут заказать и оплатить юридические лица<br/> безналичным переводом</span>
        <div className={styles['pay-variant']}>
          <img src={webmoney} alt="" />
          <img src={money} alt="" />
          <img src={visa} alt="" />
          <img src={mc} alt="" />
          <img src={mir} alt="" />
          <img src={qiwi} alt="" />
          <img src={pp} alt="" />
          <img src={sber} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Pay