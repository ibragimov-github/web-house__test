import React from 'react';
import styles from './Accordion.module.scss';
import { useState, useEffect } from 'react';

function Accordion({description}) {
  const [plus, setPlus] = useState('+');
  const [classStyle, SetClassStyle] = useState('');
  useEffect(() => {
    if (plus === '+') SetClassStyle('');
    else SetClassStyle('active')
  }, [plus])
  return (
    <div onClick={(e) => {
      if (plus === '+') setPlus('-');
      else if (plus === '-') setPlus('+')
    }} className={`${styles.container} ${classStyle}`}>
      <div className={styles.info}>
        <span>{plus}</span>
        <span>{description}</span>
      </div>
      <span style={{display: 'none'}} className='disable'>
      Это криптографический протокол для организации защищенного соединения с вашим сайтом. Такие протоколы необходимы всем сайтам, на которых происходит сбор любых данных и сведений, есть формы обратной связи или другие формы для заполнения, сайтам с высоким уровнем доверия (банки, новостные ресурсы, интернет-магазины, форумы и т.д.). При отсутствии HTTPS-соединения, любой браузер перед переадресацией на сайт известит пользователя, о том, что соединение не безопасно. Это значительно снижает конверсию сайта и приводит к потере посетителей
      </span>
    </div>
  )
}

export default Accordion