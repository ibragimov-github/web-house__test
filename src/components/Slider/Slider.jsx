import React from 'react';
import styles from './Slider.module.scss';
import {useState} from 'react';

function Slider() {
  const [move, setMove] = useState(0)
  const moveSlider = (value) => {
    setMove(value);
  } 
  return (
    <div className={styles.container}>
      <div className={styles['quotes']}></div>
      <div style={{
        right: `${move}%`
      }} className={styles['card-container']}>
        <div className={styles.card}>
          <span className={styles['card-text']}>
          «Пользуюсь хостингом уже около 8 лет. Хорошая цена и удобно что CPanel для управления. Поддержка помогает хорошо.»
          </span>
          <span className={styles['initials']}>Петровна Мария Ивановна</span>
          <div className={styles['photo']}></div>
        </div>
        <div className={styles.card}>
          <span className={styles['card-text']}>
          «Пользуюсь хостингом уже около 8 лет. Хорошая цена и удобно что CPanel для управления. Поддержка помогает хорошо.»
          </span>
          <span className={styles['initials']}>Петровна Мария Ивановна</span>
          <div className={styles['photo']}></div>
        </div>
        <div className={styles.card}>
          <span className={styles['card-text']}>
          «Пользуюсь хостингом уже около 8 лет. Хорошая цена и удобно что CPanel для управления. Поддержка помогает хорошо.»
          </span>
          <span className={styles['initials']}>Петровна Мария Ивановна</span>
          <div className={styles['photo']}></div>
        </div>
      </div>
      <div className={styles['dots']}>
        <div onClick={() => setMove(0)} className={styles.dot}></div>
        <div onClick={() => setMove(100)} className={styles.dot}></div>
        <div onClick={() => setMove(200)} className={styles.dot}></div>
      </div>
    </div>
  )
}

export default Slider