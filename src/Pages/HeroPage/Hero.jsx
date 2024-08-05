import React from 'react'
import './Hero.scss'
import Scrolling from '../../Components/Scrolling/Scrolling'
import Menu from '../../Components/Menu/Menu'
import Footer from '../../Components/Footer/Footer'
import Home from '../../Components/HomePage/Home'
import bgImg from '../../assets/Home/background2.jpg'

function Hero() {
  return (
    <div className='hero'>
      <Scrolling/>
      <Menu/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default Hero
