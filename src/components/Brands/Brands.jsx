import React from 'react';
import styles from './Brands.module.scss';
import one_s from '../../img/1c.png'
import wordpress from '../../img/wordpress.png'
import joomla from '../../img/joomla.png'
import modx from '../../img/modx.png'
import opencart from '../../img/opencart.png'
import umi from '../../img/umi.png'
import drupal from '../../img/drupal.png'
import instant from '../../img/instant.png'
import netcat from '../../img/netcat.png'
import phpbb from '../../img/phpbb.png'
import shop from '../../img/shop.png'
import data from '../../img/data.png'
import host from '../../img/host.png'
import presta from '../../img/presta.png'


function Brands() {
  return (
    <div className={styles.brand}>
      <div className={styles.container}>
        <h2>Хостинг с поддержкой любой CMS</h2>
        <span>
          На нашем виртуальном хостинге вы сможете разместить сайт на <span className={styles.bold}>любой CMS</span>, <br />
          а также установить в два клика любую популярную систему управлению сайтом
        </span>
        <div className={styles['brand-container']}>
          <div className={`${styles.row1} ${styles.row}`}>
            <img src={one_s} alt="1s" />
            <img src={wordpress} alt="wordpress" />
            <img src={joomla} alt="joomla" />
            <img src={modx} alt="modx" />
            <img src={opencart} alt="opencart" />
          </div>
          <div className={`${styles.row2} ${styles.row}`}>
            <img src={umi} alt="umi" />
            <img src={drupal} alt="drupal" />
            <img src={instant} alt="instant" />
            <img src={netcat} alt="netcat" />
            <img src={phpbb} alt="phpbb" />
          </div>
          <div className={`${styles.row3} ${styles.row}`}>
            <img src={shop} alt="shop" />
            <img src={data} alt="data" />
            <img src={host} alt="host" />
            <img src={presta} alt="presta" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brands