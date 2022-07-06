import React from 'react'
import Benefit from '../Benefit/Benefit'
import Brands from '../Brands/Brands'
import Domain from '../Domain/Domain'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import Pay from '../Pay/Pay'
import Prices from '../Prices/Prices'
import Reviews from '../Reviews/Reviews'
import Sales from '../Sales/Sales'
import Ssl from '../Ssl/Ssl'
import Vps from '../Vps/Vps'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <Header/>
      <Navigation/>
      <Sales/>
      <Prices/>
      <Brands/>
      <Ssl/>
      <Domain/>
      <Vps/>
      <Benefit/>
      <Reviews/>
      <Pay/>
      <Footer/>
    </div>
  )
}

export default App