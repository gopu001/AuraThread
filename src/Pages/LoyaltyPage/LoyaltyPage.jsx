import React from 'react'
import './LoyaltyPage.scss'
import Scrolling from '../../Components/Scrolling/Scrolling'
import Menu from '../../Components/Menu/Menu'
import LoyaltyComp from '../../Components/LoyaltyComp/LoyaltyComp'
import Footer from '../../Components/Footer/Footer'

function LoyaltyPage() {
  return (
    <div className='loyaltyPage'>
      <Scrolling/>
      <Menu/>
      <LoyaltyComp/>
      <Footer/>
    </div>
  )
}

export default LoyaltyPage
