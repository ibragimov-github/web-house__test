import React from 'react';
import styles from './Navigation.module.scss';
import Select from 'react-select';

function Navigation() {
  const options = [
    { value: 'VALUE1', label: 'ХОСТИНГ-ПРОВАЙДЕР' },
    { value: 'VALUE2', label: 'Заглушка 1' },
    { value: 'VALUE3', label: 'Заглушка 2' },
    { value: 'VALUE4', label: 'Заглушка 3' }
  ]
  const style = {
    control: base => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: 'none'
    })
  };
  return (
    <div className={styles.nav}>
      <span href="" className="text">ХОСТИНГ</span>
      <div className={styles.separation}></div>
      <span href="" className="text">VPS</span>
      <div className={styles.separation}></div>
      <span href="" className="text">РЕГИСТРАЦИЯ ДОМЕНОВ</span>
      <div className={styles.separation}></div>
      <span href="" className="text">SSL</span>
      <div className={styles.separation}></div>
      <Select styles={style} value={options[0]} className={styles.select} options={options}/>
    </div>
  )
}

export default Navigation